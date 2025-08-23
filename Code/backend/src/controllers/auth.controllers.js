// src/controllers/user.controller.js
import { registerUserSchema, loginUserSchema } from "../utils/user.util.js";
import { createUserService, loginUserService } from "../services/auth.service.js";



export async function registerUser(req, res) {
  try {
    // Valida os dados recebidos
    const data = registerUserSchema.parse(req.body);

    // Cria o usuário chamando o service
    const user = await createUserService(data);

    // Responde com sucesso, omitindo senha
    res.status(201).json({
      message: "Usuário cadastrado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    // Validação falhou (Zod)
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }

    // Outros erros (ex: e-mail duplicado)
    return res.status(400).json({ error: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    // valida os dados recebidos
    const { email, password } = loginUserSchema.parse(req.body);

    // tenta logar o usuário
    const { user, token } = await loginUserService({ email, password });

    // envia o token como cookie seguro
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hora
    });

    // retorna os dados do usuário
    res.status(200).json({ message: "Login realizado com sucesso", user });
  } catch (error) {

    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(400).json({ error: error.message });
  }
}
