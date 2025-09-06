import prisma from "../../prisma/client.js";

export async function createDishService(userId, data) {
  const { name, description, ingredients } = data;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    throw new Error("Lista de ingredientes é obrigatória.");
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
      throw new Error(
        `Ingrediente com id ${ing.itemId} não está em um estoque acessível com permissão suficiente.`
      );
    }
  }

  // Cria o prato com os ingredientes (mas não desconta do estoque ainda)
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

  if (!dish) throw new Error("Prato não encontrado.");
  if (dish.id_user !== userId)
    throw new Error("Você não tem permissão para este prato.");

  const errors = [];

  for (const ingredient of dish.ingredients) {
    const item = ingredient.Item;

    // Busca o estoque onde o usuário tem acesso e o item existe
    for (const ingredient of dish.ingredients) {
      const item = ingredient.Item;

      // Aqui busca o storageItem e verifica se o usuário tem permissão Owner ou CoOwner no estoque
      const storageItem = await prisma.storage_Item.findFirst({
        where: {
          id_Item: item.id_Item,
          Storage: {
            permissions: {
              some: {
                id_user: userId,
                Access_Level: { in: ["Owner", "CoOwner"] }, // <<< valida aqui a permissão
              },
            },
          },
        },
      });

      if (!storageItem) {
        errors.push(
          `Item '${item.name}' não está em um estoque acessível com permissão suficiente.`
        );
        continue;
      }

      if ((item.quantity ?? 0) < ingredient.quantity) {
        errors.push(`Quantidade insuficiente de '${item.name}'.`);
      }
    }

    if (errors.length > 0) {
      throw new Error(errors.join(" | "));
    }
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
