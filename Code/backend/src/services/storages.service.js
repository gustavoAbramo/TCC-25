import prisma from "../../prisma/client.js";

export async function createStorageService(name, id_user, location) {
  // 1. Verifica se o usuário já é dono de um storage com esse nome
  const existingStorage = await prisma.storage_Permission.findFirst({
    where: {
      id_user,
      Access_Level: "Owner",
      Storage: {
        name,
        location,
      },
    },
    include: {
      Storage: true,
    },
  });

  if (existingStorage) {
    const error = new Error("Você já é dono de um estoque com esse nome e localização");
    error.statusCode = 400;
    throw error;
  }

  // 2. Cria o storage e já conecta o usuário como dono (Owner)
  const storage = await prisma.storage.create({
    data: {
      name,
      location,
      permissions: {
        create: {
          id_user,
          Access_Level: "Owner",
        },
      },
    },
    include: {
      permissions: {
        include: {
          user: {
            select: { id_user: true, name: true, email: true },
          },
        },
      },
    },
  });

  return storage;
}

export async function seeStoragesServices(id_user) {

  const storages = await prisma.storage_Permission.findMany({
    where: { id_user },
    include: {
      Storage: {
        include: {
          permissions: {
            select: {
              id_user: true,
              Access_Level: true,
            },
          },
          Storage_Item: true,
        },
      },
    },
  });

  if (!storages || storages.length === 0) {
    const error = new Error("Nenhum estoque encontrado");
    error.statusCode = 404;
    throw error;
  }

  // Retorna só os estoques com informações importantes
  return storages.map((sp) => ({
    id: sp.Storage.id_Storage,
    name: sp.Storage.name,
    location: sp.Storage.location,
    accessLevel: sp.Access_Level,
    items: (sp.Storage.Storage_Item || []).map((item) => ({
      id: item.id_Item,
      name: item.name,
    })),
  }));
}
export async function renameStorageService(id_user, id_Storage, newName) {
  const isOwner = await prisma.storage_Permission.findUnique({
    where: {
      id_user_id_Storage: { id_user, id_Storage },
    },
  });

  if (!isOwner || isOwner.Access_Level !== "Owner") {
    throw new Error("Apenas o dono do estoque pode renomeá-lo");
  }

  const updated = await prisma.storage.update({
    where: { id_Storage },
    data: { name: newName },
  });

  return updated;
}

export async function deleteStorageService(id_user, id_Storage) {
  const isOwner = await prisma.storage_Permission.findUnique({
    where: {
      id_user_id_Storage: { id_user, id_Storage },
    },
  });

  if (!isOwner || isOwner.Access_Level !== "Owner") {
    throw new Error("Apenas o dono do estoque pode deletá-lo");
  }

  await prisma.storage_Permission.deleteMany({
    where: {
      id_Storage: id_Storage,
    },
  });

  await prisma.storage_Item.deleteMany({
    where: {
      id_Storage: id_Storage,
    },
  });

  // Agora sim, deleta o storage
  await prisma.storage.delete({
    where: {
      id_Storage: id_Storage,
    },
  });

  return;
}

export async function searchStoragesAndItemsService(id_user, query) {
  // 🔍 Buscar estoques do usuário cujo nome começa com o termo
  const storages = await prisma.storage_Permission.findMany({
    where: {
      id_user,
      Storage: {
        name: {
          startsWith: query, // case insensitive
        },
      },
    },
    include: {
      Storage: true,
    },
    take: 15, // Limitar a 15 resultados
  });

  // 🔍 Buscar itens (Item, não Storage_Item!)
  const items = await prisma.item.findMany({
    where: {
      name: {
        startsWith: query,
      },
      Storage_belongs: {
        some: {
          Storage: {
            permissions: {
              some: { id_user },
            },
          },
        },
      },
    },
    include: {
      Storage_belongs: {
        include: {
          Storage: {
            select: {
              id_Storage: true,
              name: true,
            },
          },
        },
      },
    },
    take: 15,
  });

  // Retorno organizado
  return {
    storages: storages.map((sp) => ({
      id: sp.Storage.id_Storage,
      name: sp.Storage.name,
      location: sp.Storage.location,
    })),
    items: items.flatMap((item) =>
      item.Storage_belongs.map((sb) => ({
        id: item.id_Item,
        name: item.name,
        storage: {
          id: sb.Storage.id_Storage,
          name: sb.Storage.name,
        },
      }))
    ),
  };
  if (!storages && !items) {
    const error = new Error("Nenhum estoque ou item encontrado");
    error.statusCode = 404;
    throw error;
  }
}
