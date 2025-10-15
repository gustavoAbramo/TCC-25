import { prisma } from "../../prisma/client.js";
import { mongoClient } from "../../mongo/client.mongo.js";
import { category } from "../../prisma/client/index.js";

async function createHistory({ id_user, id_item, action, quantity, username, itemName }) {
  try {
    const db = await mongoClient(); // já retorna o DB
    const collection = db.collection("historico-estoque");

    await collection.createIndex(
      { createdAt: 1 },
      { expireAfterSeconds: 60 * 60 * 24 * 365 }
    );

    await collection.insertOne({
      id_user,
      id_item,
      username,
      itemName,
      quantity,
      action,
      createdAt: new Date(),
    });
  } catch (err) {
    console.error("Erro ao sincronizar:", err);
  }
}

async function checkUserPermission(storageId, id_user) {
  const authorizedStorage = await prisma.storage_Permission.findFirst({
    where: {
      id_Storage: storageId,
      id_user: id_user,
      Access_Level: { in: ["Owner", "CoOwner"] },
    },
  });

  if (!authorizedStorage) {
    const error = new Error(
      "Usuário não tem permissão para modificar este estoque."
    );
    error.statusCode = 403;
    throw error;
  }
}

export async function createItemService(item) {
  const { storageId, id_user, username, quantity, itemName, ...itemData } = item;

  await checkUserPermission(storageId, id_user);

  const existingItem = await prisma.item.findFirst({
    where: {
      name: itemData.name,
      category: itemData.category,
      Storage_belongs: {
        some: {
          id_Storage: storageId,
        },
      },
    },
  });

  if (existingItem) {
    const error = new Error(
      "Item com este nome e categoria já existe neste estoque."
    );
    error.statusCode = 400;
    throw error;
  }

  const validCategories = ["bebida", "comida"];
  const validUnits = [
    "unidades",
    "gramas",
    "quilogramas",
    "mililitros",
    "litros",
  ];

  const category = itemData.category.toLowerCase();
  if (!validCategories.includes(category)) {
    throw new Error("Categoria inválida");
  }

  const unit = (itemData.unit || "unidades").toLowerCase();
  if (!validUnits.includes(unit)) {
    throw new Error("Unidade de medida inválida");
  }

  const newItem = await prisma.item.create({
    data: {
      ...itemData,
      quantity,
      category,
      unit,
      expiration: new Date(itemData.expiration),
      Storage_belongs: { create: { id_Storage: storageId } },
    },
    include: { Storage_belongs: true },
  });

  await createHistory({
    id_user,
    id_item: newItem.id_Item,
    action: "ADD_ITEM",
    quantity: newItem.quantity,
    username,
    itemName: newItem.name,
  });

  return newItem;
}

export async function getItemsByStorageService(id_Storage) {
  const items = await prisma.item.findMany({
    where: {
      Storage_belongs: {
        some: { id_Storage: Number(id_Storage) },
      },
    },
  });

  if (items.length === 0) {
    const error = new Error("Nenhum item encontrado para este estoque.");
    error.statusCode = 404;
    throw error;
  }

  return items.map((item) => ({
    id: item.id_Item,
    name: item.name,
    description: item.description,
    category: item.category,
    quantity: item.quantity,
    expiration: item.expiration.toISOString().split("T")[0],
  }));
}
export async function deleteItemService(id_Item, id_user) {
  const item = await prisma.item.findUnique({
    where: { id_Item: Number(id_Item) },
    include: { Storage_belongs: true },
  });

  if (!item) {
    const error = new Error("Item não encontrado.");
    error.statusCode = 404;
    throw error;
  }

  const storageId = item.Storage_belongs[0]?.id_Storage;

  if (!storageId) {
    const error = new Error("Item não está associado a nenhum estoque.");
    error.statusCode = 400;
    throw error;
  }

  await checkUserPermission(storageId, id_user);

  await createHistory({
    id_user,
    id_item: item.id_Item,
    action: "DELETE_ITEM",
    quantity: item.quantity,
    username,
    itemName: newItem.name,
  });

  await prisma.storage_Item.deleteMany({
    where: { id_Item: Number(id_Item) },
  });

  await prisma.item.delete({
    where: { id_Item: Number(id_Item) },
  });

  return { message: "Item deletado com sucesso." };
}

export async function updateItemQuantityService(
  id_Item,
  id_user,
  quantityChange
) {
  // Verifica se o item pertence a um Storage em que o usuário tem permissão
  const storageItem = await prisma.storage_Item.findFirst({
    where: {
      id_Item,
      Storage: {
        permissions: {
          some: {
            id_user: id_user,
          },
        },
      },
    },
    include: {
      Item: true,
    },
  });

  if (!storageItem) {
    const error = new Error(
      "Item não encontrado ou usuário não tem permissão para modificar este item."
    );
    error.statusCode = 404;
    throw error;
  }

  const item = storageItem.Item;

  const newQuantity = (item.quantity ?? 0) + quantityChange;
  if (newQuantity < 0) {
    throw new Error("Quantidade não pode ser negativa");
  }

  const updated = await prisma.item.update({
    where: { id_Item },
    data: { quantity: newQuantity },
  });

  await createHistory({
    id_user,
    id_item: item.id_Item,
    action: "UPDATE_QUANTITY",
    quantity: quantityChange,
    username,
    itemName: newItem.name
  });

  return updated;
}

export async function getItemsCloseToExpiration(days = 7) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Zera a hora para comparar só a data

  const limitDate = new Date();
  limitDate.setDate(today.getDate() + days);
  limitDate.setHours(23, 59, 59, 999); // Final do dia

  const items = await prisma.item.findMany({
    where: {
      expiration: {
        gte: today,
        lte: limitDate,
      },
    },
    include: {
      Storage_belongs: {
        include: {
          Storage: {
            include: {
              permissions: {
                where: {
                  Access_Level: "Owner",
                },
                include: {
                  user: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return items
    .map((item) => {
      const owner = item.Storage_belongs[0]?.Storage?.permissions[0]?.user;
      return {
        name: item.name,
        expiration: item.expiration,
        ownerEmail: owner?.email || null,
      };
    })
    .filter((item) => item.ownerEmail); // Filtra apenas com e-mail válido
}
