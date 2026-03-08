import {prisma} from "../../prisma/client.js";

export async function createRecipeService(userId, data) {
  const { name, description, ingredients } = data;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    const error = new Error("lista de ingredientes é obrigatória");
    error.statusCode = 400; // falta de dados
    throw error;  }

    if (!name || typeof name !== 'string' || name.trim() === '') {
      const error = new Error("Nome da receita é obrigatório.");
      error.statusCode = 400;
      throw error;
    }
  for (const ing of ingredients) {
    const storageItem = await prisma.storage_Item.findFirst({
      where: {
        id_Item: ing.itemId,
        Storage: {
          permissions: {
            some: {
              id_user: userId,
              Access_Level: { in: ["Owner", "CoOwner"] },
            },
          },
        },
      },
    });

    if (!storageItem) {
      const error = new Error("você não tem permissão para usar o item " + ing.itemId);
      error.statusCode = 422; // falta de dados
      throw error;  
    }
  }

  const existingRecipe = await prisma.recipe.findFirst({
    where: { name, id_user: userId },
  });
  if (existingRecipe) {
    const error = new Error("Você já tem uma receita com este nome.");
    error.statusCode = 400;
    throw error;  
  }

  const recipe = await prisma.recipe.create({
    data: {
      name,
      description,
      id_user: userId,
      ingredients: {
        create: ingredients.map((ing) => ({
          id_Item: ing.itemId,
          quantity: ing.quantity,
        })),
      },
    },
  });

  return recipe;
}
export async function prepareRecipeService(userId, recipeId) {
  const recipe = await prisma.recipe.findUnique({
    where: { id_Recipe: recipeId },
    include: { ingredients: { include: { Item: true } } },
  });

  if (!recipe) {
    const error = new Error("Receita não encontrada.");
    error.statusCode = 404;
    throw error;
  }

  if (recipe.id_user !== userId) {
    const error = new Error("Você não tem permissão para esta receita.");
    error.statusCode = 403;
    throw error;
  }

  const errors = [];

  for (const ingredient of recipe.ingredients) {
    const item = ingredient.Item;

    const storageItem = await prisma.storage_Item.findFirst({
      where: {
        id_Item: item.id_Item,
        Storage: {
          permissions: {
            some: {
              id_user: userId,
              Access_Level: { in: ["Owner", "CoOwner"] },
            },
          },
        },
      },
    });

    if (!storageItem) {
      errors.push({
        message: `Item '${item.name}' não está em um estoque acessível com permissão suficiente.`,
        statusCode: 422,
      });
      continue;
    }

    if ((item.quantity ?? 0) < ingredient.quantity) {
      errors.push({
        message: `Quantidade insuficiente de '${item.name}'.`,
        statusCode: 422,
      });
    }
  }

  if (errors.length > 0) {
    const combinedMessage = errors.map((e) => e.message).join(" | ");
    const error = new Error(combinedMessage);
    error.statusCode = 422;
    throw error;
  }

  for (const ingredient of recipe.ingredients) {
    await prisma.item.update({
      where: { id_Item: ingredient.id_Item },
      data: {
        quantity: {
          decrement: ingredient.quantity,
        },
      },
    });

    await prisma.history.create({
      data: {
        id_user: userId,
        id_item: ingredient.id_Item,
        action: "PREPARE_RECIPE",
        quantity: ingredient.quantity,
      },
    });
  }

  return {
    message: `Hoje você vai preparar a receita '${recipe.name}'. Ingredientes descontados do estoque.`,
  };
}

export async function getRecipesByUserService(userId) {
  const recipes = await prisma.recipe.findMany({
    where: { id_user: userId },
    include: { ingredients: { include: { Item: true } } },
  });
  return recipes;
}
export async function deleteRecipeService(userId, recipeId) {
  const recipe = await prisma.recipe.findUnique({
    where: { id_Recipe: recipeId },
  });

  if (!recipe) {
    const error = new Error("Receita não encontrada.");
    error.statusCode = 404;
    throw error;
  }

  if (recipe.id_user !== userId) {
    const error = new Error("Você não tem permissão para deletar esta receita.");
    error.statusCode = 403;
    throw error;
  }

  // Apaga os ingredientes vinculados
  await prisma.recipe_Item.deleteMany({
    where: { id_Recipe: recipeId },
  });

  // so depois apaga a receita
  await prisma.recipe.delete({
    where: { id_Recipe: recipeId },
  });

  return { success: true };
}