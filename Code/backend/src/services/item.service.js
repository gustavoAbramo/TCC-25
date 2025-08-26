import prisma from '../../prisma/client.js';

// Cria um único item
export async function createItemService(item) {
  const newItem = await prisma.item.create({
    data: {
      name: item.name,
      description: item.description,
      expiration: new Date(item.expiration),
      category: item.category,
      id_user: item.id_user,
    },
  });
  return newItem;
}

// Cria múltiplos itens
export async function createItemsService(items) {
  const result = await prisma.item.createMany({
    data: items.map(item => ({
      name: item.name,
      description: item.description,
      expiration: new Date(item.expiration),
      category: item.category,
      id_user: item.id_user,
    })),
    skipDuplicates: true,
  });
  return result;
}
