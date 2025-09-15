import prisma from '../../prisma/client.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function createUserService({ name, email, password }) {
  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    const error = new Error("E-mail já cadastrado");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return user;
}

export async function loginUserService({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const error = new Error("E-mail não cadastrado");
    error.statusCode = 401; // Unauthorized
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    const error = new Error("Senha inválida");
    error.statusCode = 401; // Unauthorized
    throw error;
  }

  const token = jwt.sign(
    { id_user: user.id_user, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return {
    token,
    user: { id: user.id_user, name: user.name, email: user.email }
  };
}