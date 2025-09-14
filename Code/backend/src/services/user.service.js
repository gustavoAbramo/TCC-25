import prisma from "../../prisma/client.js";
import crypto from 'crypto';
import bcrypt from "bcrypt";

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

export async function requestPasswordResetService(email) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 15); // 15 min

  await prisma.passwordReset.create({
    data: {
      userId: user.id_user,
      token: resetToken,
      expiresAt: expires,
    },
  });

  return { resetToken, user };
}

export async function resetPasswordService(token, newPassword) {
  // Buscar o token
  const record = await prisma.passwordReset.findUnique({ where: { token } });

  if (!record || record.expiresAt < new Date()) {
    throw new Error("Token inválido ou expirado.");
  }

  // Criptografar nova senha
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Atualizar senha do usuário
  await prisma.user.update({
    where: { id_user: record.userId },
    data: { password: hashedPassword },
  });

  // Deletar token depois do uso
  await prisma.passwordReset.delete({ where: { token } });

  return true;
}