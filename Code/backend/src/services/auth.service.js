import {prisma} from '../../prisma/client.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import speakeasy from 'speakeasy';

export async function createUserService({ name, email, password }) {
  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    const error = new Error("E-mail já cadastrado");
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return user;
}

// Login de usuário com suporte a 2FA
export async function loginUserService({ email, password, twoFACode, rememberMe }) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const error = new Error("Usuário não encontrado.");
    error.statusCode = 404;
    throw error;
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    const error = new Error("Senha incorreta.");
    error.statusCode = 401;
    throw error;
  }

  // Verificação do 2FA (se estiver ativado)
  if (user.is2FAEnabled) {
    if (!twoFACode) {
      const error = new Error("Código 2FA necessário.");
      error.statusCode = 401;
      throw error;
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: twoFACode,
      window: 100,
    });

    if (!verified) {
      const error = new Error("Código 2FA inválido.");
      error.statusCode = 401;
      throw error;
    }
  }


  const expiresIn = rememberMe ? '7d' : '1h'; // Expires in 7 days if rememberMe is true, otherwise 1 hour
  console.log("rememberMe:", rememberMe, "→ JWT expires in:", expiresIn);
  // Geração do token JWT
  const token = jwt.sign(
    {
      id_user: user.id_user,
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET,
    { expiresIn}
  );

  return {
    token,
    user: {
      id_user: user.id_user,
      name: user.name,
      email: user.email,
      is2FAEnabled: user.is2FAEnabled,
    },
  };
}

export async function generate2FASecretService(id_user) {
  const user = await prisma.user.findUnique({
    where: { id_user: id_user },
  });

  // 🔒 Se já ativou o 2FA, não precisa gerar/mostrar secret de novo
  if (user.is2FAEnabled) {
    return {
      alreadyEnabled: true,
      message: "A verificação em duas etapas já está ativada para este usuário.",
    };
  }

  // Se o segredo já existe, apenas retorna o otpauth_url novamente
  if (user.twoFactorSecret) {
    return {
      base32: user.twoFactorSecret,
      otpauth_url: speakeasy.otpauthURL({
        secret: user.twoFactorSecret,
        label: `SeuApp (${user.email})`,
        encoding: 'base32',
      }),
    };
  }

  // Caso contrário, gera um novo segredo
  const secret = speakeasy.generateSecret({
    length: 20,
    name: `SeuApp (${user.email})`,
  });

  await prisma.user.update({
    where: { id_user: id_user },
    data: {
      twoFactorSecret: secret.base32,
      is2FAEnabled: false,
    },
  });

  return {
    base32: secret.base32,
    otpauth_url: secret.otpauth_url,
  };
}

// Validação do token enviado e ativação do 2FA
export async function verifyAndEnable2FAService(id_user, token) {
  const user = await prisma.user.findUnique({ where: { id_user: id_user } });

  if (!user || !user.twoFactorSecret) {
    throw new Error("Usuário ou segredo 2FA não encontrado.");
  }

  const verified = speakeasy.totp.verify({
    secret: user.twoFactorSecret,
    encoding: 'base32',
    token,
    window: 100,  
  });

  if (!verified) {
    throw new Error("Código 2FA inválido.");
  }

  await prisma.user.update({
    where: { id_user: id_user },
    data: { is2FAEnabled: true },
  });

  return { success: true };
}
