import prisma from '../../prisma/client.js';

// Cria um único item com associações aos estoques
export async function createItemService(item) {
  const { storageIds, ...itemData } = item;

  // Verifica se já existe um item com o mesmo nome e categoria
  const existingItem = await prisma.item.findFirst({
    where: {
      name: itemData.name,
      category: itemData.category,
    },
  });

  if (existingItem) {
    throw new Error(`O item com o nome "${itemData.name}" e categoria "${itemData.category}" já existe.`);
  }

  // Cria o novo item se não houver duplicatas
  const newItem = await prisma.item.create({
    data: {
      ...itemData,
      expiration: new Date(itemData.expiration),
      Storage_belongs: {
        create: storageIds.map(id_Storage => ({
          id_Storage,
        })),
      },
    },
    include: {
      Storage_belongs: true, // opcional: inclui as associações criadas
    },
  });

  return newItem;
}

// Cria múltiplos itens com associações aos estoques
export async function createItemsService(items) {
  const createdItems = [];

  for (const item of items) {
    // Verifica duplicatas para cada item
    const existingItem = await prisma.item.findFirst({
      where: {
        name: item.name,
        category: item.category,
      },
    });

    if (existingItem) {
      throw new Error(`O item com o nome "${item.name}" e categoria "${item.category}" já existe.`);
    }

    const newItem = await createItemService(item);
    createdItems.push(newItem);
  }

  return createdItems;
}
