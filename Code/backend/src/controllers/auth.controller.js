// src/controllers/user.controller.js
import { validateLoginUser, validateRegisterUser } from "../utils/user.util.js";
import {
  createUserService,
  loginUserService,
  generate2FASecretService,
  verifyAndEnable2FAService,
} from "../services/auth.service.js";

export async function registerUser(req, res) {
  const { valid, errors, data } = validateRegisterUser(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }

  try {
    const user = await createUserService(data);

    res.status(201).json({
      success: true,
      message: "Usuário cadastrado com sucesso",
      user: {
        id: user.id_user, // cuidado aqui: no model é id_user
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function loginUser(req, res) {
  const { valid, errors, data } = validateLoginUser(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }

  
  // Renomeia 'token' para 'twoFACode' antes de passar pro service
  const serviceData = {
    ...data,
    twoFACode: data.token, // repassa corretamente
  };

  try {
    const { token, user } = await loginUserService(serviceData);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true em produção
      sameSite: "lax",
      maxAge: 60 * 60 * 1000, // 1h
    });

    res.status(200).json({
      success: true,
      message: "Login realizado com sucesso",
      user,
      token,
    });
  } catch (error) {
    if (error.message === "Código 2FA necessário.") {
      return res.status(401).json({
        success: false,
        message: error.message,
        requires2FA: true, // flag para frontend mostrar input 2FA
      });
    }

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function logoutUser(req, res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // true em produção
      sameSite: "lax",
    });
    res
      .status(200)
      .json({ success: true, message: "Logout realizado com sucesso" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro ao fazer logout" });
  }
}

export async function getCurrentUser(req, res) {
  try {
    return res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    res.status(401).json({ success: false, message: "Não autorizado" });
  }
}

export async function generate2FASecretController(req, res) {
  try {
    const id_user = req.user?.id_user;

    const secret = await generate2FASecretService(id_user);

    res.status(200).json(secret); // { base32, otpauth_url }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function verify2FAController(req, res) {
  try {
    const id_user = req.user?.id_user;
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: "Token 2FA ausente." });
    }

    const result = await verifyAndEnable2FAService(id_user, token);

    res
      .status(200)
      .json({ success: true, message: "2FA ativado com sucesso." });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
      requires2FA: error.requires2FA || false,
    });
  }
}
