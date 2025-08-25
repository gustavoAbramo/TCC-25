import prisma from '../../prisma/client.js'; // Ajuste o caminho conforme necessário
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function createUserService({ name, email, password }) {
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

export async function loginUserService({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('E-mail ou senha inválidos');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('E-mail ou senha inválidos');
  }

  const token = jwt.sign(
    { id_user: user.id_user, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  return { token, user: { id: user.id_user, name: user.name, email: user.email } };
}
