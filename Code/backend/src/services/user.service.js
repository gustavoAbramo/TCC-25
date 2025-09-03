import prisma from "../../prisma/client.js";

/**
 * Altera o nome de um usuário
 * @param {number} id_user - ID do usuário que deseja alterar o nome
 * @param {string} newName - Novo nome a ser definido
 */
export async function changeUserNameService(id_user, newName) {
  if (!newName || newName.trim() === "") {
    throw new Error("O novo nome não pode estar vazio.");
  }

  const updatedUser = await prisma.user.update({
    where: { id_user },
    data: { name: newName },
    select: {
      id_user: true,
      name: true,
      email: true,
      is_active: true,
      created_at: true,
    },
  });

  return updatedUser;
}

