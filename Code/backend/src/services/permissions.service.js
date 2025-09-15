import prisma from '../../prisma/client.js'; 

export async function toCoOwnerService({ email, id_Storage }) {
    return updatePermission({ email, id_Storage, accessLevel: "CoOwner" });
  }
  
  export async function toGuestService({ email, id_Storage }) {
    return updatePermission({ email, id_Storage, accessLevel: "Guest" });
  }
  
  async function updatePermission({ email, id_Storage, accessLevel }) {
    // Verifica se o usuário existe
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      const error = new Error("Usuário não encontrado");
      error.status = 404;
      throw error;
    }
  
    // Verifica se o Storage existe
    const storage = await prisma.storage.findUnique({
      where: { id_Storage },
    });
  
    if (!storage) {
      const error = new Error("Estoque não encontrado");
      error.status = 404;
      throw error;
    }
  
    // Cria ou atualiza a permissão
    await prisma.storage_Permission.upsert({
      where: {
        id_user_id_Storage: {
          id_user: user.id_user,
          id_Storage: storage.id_Storage,
        },
      },
      update: {
        Access_Level: accessLevel,
      },
      create: {
        id_user: user.id_user,
        id_Storage: storage.id_Storage,
        Access_Level: accessLevel,
      },
    });
  
    // Retorna dados do usuário (omitindo a senha)
    return {
      id: user.id_user,
      name: user.name,
      email: user.email,
    };
  }