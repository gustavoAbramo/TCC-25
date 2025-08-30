import prisma from '../../prisma/client.js';

async function checkUserPermission(storageId, id_user) {
  const authorizedStorage = await prisma.storage_Permission.findFirst({
    where: {
      id_Storage: storageId,
      id_user: id_user,
      Access_Level: { in: ['Owner', 'CoOwner'] },
    },
  });

  if (!authorizedStorage) {
    throw new Error('Usuário não tem permissão para adicionar itens a este estoque.');
  }
}

export async function createItemService(item) {
  const { storageId, id_user, quantity, ...itemData } = item;

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
    throw new Error(`O item com o nome "${itemData.name}" e categoria "${itemData.category}" já existe neste estoque.`);
  }

  const newItem = await prisma.item.create({
    data: {
      ...itemData,
      quantity,
      expiration: new Date(itemData.expiration),
      Storage_belongs: {
        create: { id_Storage: storageId },
      },
    },
    include: {
      Storage_belongs: true,
    },
  });

  return newItem;
}

export async function getItemsByStorageService(id_Storage) {
  const items = await prisma.item.findMany({
    where: {
      Storage_belongs: {
        some: { id_Storage: Number(id_Storage) }, // filtra pelos itens desse estoque
      },
    },
  });

  return items.map(item => ({
    id: item.id_Item,
    name: item.name,
    description: item.description,
    category: item.category,
    quantity: item.quantity,
    expiration: item.expiration.toISOString().split("T")[0], // YYYY-MM-DD
  }));
}
export async function deleteItemService(id_Item, id_user) {
  const item = await prisma.item.findUnique({
    where: { id_Item: Number(id_Item) },
    include: { Storage_belongs: true },
  });

  if (!item) throw new Error("Item não encontrado.");

  const storageId = item.Storage_belongs[0]?.id_Storage;
  if (!storageId) throw new Error("Item não está associado a nenhum estoque.");

  await checkUserPermission(storageId, id_user);

  await prisma.storage_Item.deleteMany({
    where: { id_Item: Number(id_Item) },
  });

  await prisma.item.delete({
    where: { id_Item: Number(id_Item) },
  });

  return { message: "Item deletado com sucesso." };
}
