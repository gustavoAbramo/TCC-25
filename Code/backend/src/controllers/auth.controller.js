// src/controllers/user.controller.js
// import { registerUserSchema, loginUserSchema } from "../utils/user.util.js";
import { validateLoginUser, validateRegisterUser } from "../utils/user.util.js";
import {
  createUserService,
  loginUserService,
} from "../services/auth.service.js";

export async function registerUser(req, res) {
  const { valid, errors, data } = validateRegisterUser(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }
  try {
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
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function loginUser(req, res) {
  const { valid, errors, data } = validateLoginUser(req.body);

  if (!valid) {
    return res.status(400).json({ errors });
  }
  try {
    const { user, token } = await loginUserService(data);

    // envia o token como cookie seguro
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000, // 1 hora
    });

    // retorna os dados do usuário
    res
      .status(200)
      .json({ message: "Login realizado com sucesso", user, token });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function logoutUser(req, res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // true em produção
      sameSite: "lax",
    });
    return res.status(200).json({ message: "Logout realizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer logout" });
  }
}

export async function getCurrentUser(req, res) {
  try {
    // Se passou pelo middleware, req.user existe
    return res.status(200).json({ user: req.user });
  } catch (error) {
    return res.status(401).json({ error: "Não autorizado" });
  }
}
