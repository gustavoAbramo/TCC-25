import prisma from "../../prisma/client.js";

export async function createStorageService(name, id_user, location) {
  // 1. Verifica se o usuário já é dono de um storage com esse nome
  const existingStorage = await prisma.storage_Permission.findFirst({
    where: {
      id_user,
      Access_Level: "Owner",
      Storage: {
        name,location
      },
    },
    include: {
      Storage: true,
    },
  });

  if (existingStorage) {
    throw new Error("Você já possui um estoque com esse nome");
  }

  // 2. Cria o storage e já conecta o usuário como dono (Owner)
  const storage = await prisma.storage.create({
    data: {
      name,location,
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
      id_user_id_Storage: { id_user, id_Storage }
    }
  });

  if (!isOwner || isOwner.Access_Level !== 'Owner') {
    throw new Error("Apenas o dono do estoque pode renomeá-lo");
  }

  const updated = await prisma.storage.update({
    where: { id_Storage },
    data: { name: newName }
  });

  return updated;
}
