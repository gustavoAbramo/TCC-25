import prisma from '../../prisma/client.js'; // Conexão com o Prisma

export async function createItemService({ name, description, expiration, category, id_user }) {
  // Cria um novo item no banco de dados
  const newItem = await prisma.item.create({
    data: {
      name,
      description,
      expiration: new Date(expiration),
      category,
      id_user,
    },
  });

  return newItem;
}