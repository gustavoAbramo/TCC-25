import prisma from '../../prisma/client.js'; // Ajuste o caminho conforme necessário
import bcrypt from 'bcrypt';

export async function createUser({ name, email, password }) {
  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    throw new Error('E-mail já cadastrado');
  }

  // Hashear a senha antes de salvar
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return user;
}
