import prisma from "../../prisma/client.js";

export async function createDishService(userId, data) {
  const { name, description, ingredients } = data;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    const error = new Error("lista de ingredientes é obrigatória");
    error.statusCode = 400; // falta de dados
    throw error;  }

    if (!name || typeof name !== 'string' || name.trim() === '') {
      const error = new Error("Nome do prato é obrigatório.");
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

  const existingDish = await prisma.dish.findFirst({
    where: { name, id_user: userId },
  });
  if (existingDish) {
    const error = new Error("Você já tem um prato com este nome.");
    error.statusCode = 400; 
    throw error;  
  }

  const dish = await prisma.dish.create({
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

  return dish;
}

export async function prepareDishService(userId, dishId) {
  const dish = await prisma.dish.findUnique({
    where: { id_Dish: dishId },
    include: { ingredients: { include: { Item: true } } },
  });

  if (!dish) {
    const error = new Error("Prato não encontrado.");
    error.statusCode = 404; // não encontrado
    throw error;
  }

  if (dish.id_user !== userId) {
    const error = new Error("Você não tem permissão para este prato.");
    error.statusCode = 403; // proibido
    throw error;
  }

  const errors = [];

  for (const ingredient of dish.ingredients) {
    const item = ingredient.Item;

    // Busca o storageItem e verifica se o usuário tem permissão Owner ou CoOwner no estoque
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

  // Descontar os ingredientes
  for (const ingredient of dish.ingredients) {
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
        action: "PREPARE_DISH",
        quantity: ingredient.quantity,
      },
    });
  }

  return {
    message: `Hoje você vai preparar o prato '${dish.name}'. Ingredientes descontados do estoque.`,
  };
}

export async function getDishesByUserService(userId) {
  const dishes = await prisma.dish.findMany({
    where: { id_user: userId },
    include: { ingredients: { include: { Item: true } } },
  });
  return dishes;
}
