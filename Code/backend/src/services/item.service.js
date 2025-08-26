import prisma from '../../prisma/client.js';

// Verifica se o usuário tem permissão para acessar o estoque
async function checkUserPermission(storageIds, id_user) {
  const authorizedStorages = await prisma.storage_Permission.findMany({
    where: {
      id_Storage: { in: storageIds },
      id_user: id_user,
      Access_Level: { in: ['Owner', 'CoOwner'] }, // Apenas donos ou co-proprietários têm permissão
    },
  });

  // Verifica se o usuário tem permissão para todos os estoques fornecidos
  if (authorizedStorages.length !== storageIds.length) {
    throw new Error('Usuário não tem permissão para adicionar itens a um ou mais estoques.');
  }
}

export async function createItemService(item) {
  const { storageIds, id_user, ...itemData } = item;

  // Verifica se o usuário tem permissão para os estoques fornecidos
  await checkUserPermission(storageIds, id_user);

  // Verifica se o item já existe no mesmo estoque
  const existingItem = await prisma.item.findFirst({
    where: {
      name: itemData.name,
      category: itemData.category,
      Storage_belongs: {
        some: {
          id_Storage: {
            in: storageIds,
          },
        },
      },
    },
  });

  if (existingItem) {
    throw new Error(`O item com o nome "${itemData.name}" e categoria "${itemData.category}" já existe em um dos estoques fornecidos.`);
  }

  // Cria o novo item se não houver duplicatas no mesmo estoque
  const newItem = await prisma.item.create({
    data: {
      ...itemData,
      id_user, // Inclui o id_user no objeto data
      expiration: new Date(itemData.expiration),
      Storage_belongs: {
        create: storageIds.map(id_Storage => ({
          id_Storage,
        })),
      },
    },
    include: {
      Storage_belongs: true,
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
