// src/controllers/user.controller.js
import { registerUserSchema } from "../utils/user.util.js";
import { createUser } from "../services/auth.service.js";

export async function registerUser(req, res) {
  try {
    // Valida os dados recebidos
    const data = registerUserSchema.parse(req.body);

    // Cria o usuário chamando o service
    const user = await createUser(data);

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
