import prisma from '../../prisma/client.js';

export async function createStorageService(name,id_user) {
 const storage = await prisma.storage.create({
    data: {
      name,
      users: {
        connect: [{ id_user: id_user }] // ✅ usar array para many-to-many
      }
    },
    include: {
      users: {
        select: { id_user: true, name: true }
      }
    }
  });
  return storage;
}


export async function seeStoragesServices (name) {



}