import validator from "validator";

export function validateRegisterUser(data) {
  const errors = [];
  const { name, email, password } = data;

  // Nome
  if (!name || name.trim() === "") {
    errors.push({ field: "name", message: "Nome é obrigatório" });
  } else if (name.length > 50) {
    errors.push({ field: "name", message: "Nome muito longo" });
  }

  // E-mail
  if (!email || email.trim() === "") {
    errors.push({ field: "email", message: "E-mail é obrigatório" });
  } else if (!validator.isEmail(email)) {
    errors.push({ field: "email", message: "E-mail inválido" });
  }

  // Senha
  if (!password || password.length < 6) {
    errors.push({
      field: "password",
      message: "Senha deve ter pelo menos 6 caracteres",
    });
  } else {
    if (!/[A-Z]/.test(password)) {
      errors.push({
        field: "password",
        message: "Senha deve conter pelo menos uma letra maiúscula",
      });
    }
    if (!/[a-z]/.test(password)) {
      errors.push({
        field: "password",
        message: "Senha deve conter pelo menos uma letra minúscula",
      });
    }
    if (!/[0-9]/.test(password)) {
      errors.push({
        field: "password",
        message: "Senha deve conter pelo menos um número",
      });
    }
    if (!/[@$!%*?&]/.test(password)) {
      errors.push({
        field: "password",
        message: "Senha deve conter pelo menos um caractere especial",
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    data: { name, email: email?.toLowerCase(), password },
  };
}

export function validateLoginUser(data) {
  const errors = [];
  const { email, password, token } = data;

  // E-mail
  if (!email || email.trim() === "") {
    errors.push({ field: "email", message: "E-mail é obrigatório" });
  } else if (!validator.isEmail(email)) {
    errors.push({ field: "email", message: "E-mail inválido" });
  }

  // Senha
  if (!password || password.length < 6) {
    errors.push({
      field: "password",
      message: "Senha deve ter pelo menos 6 caracteres",
    });
  }

  if (token !== undefined) {
    if (typeof token !== "string" || token.length !== 6) {
      errors.push({ field: "token", message: "Código 2FA inválido" });
    }
  }
  return {
    valid: errors.length === 0,
    errors,
    data: {
      email: email?.toLowerCase(),
      password,
      ...(token !== undefined && { token }), // inclui token somente se existir
    },
  };
}

export function validateEmailUser(data) {
  const errors = [];
  const { email } = data;

  // E-mail
  if (!email || email.trim() === "") {
    errors.push({ field: "email", message: "E-mail é obrigatório" });
  } else if (!validator.isEmail(email)) {
    errors.push({ field: "email", message: "E-mail inválido" });
  }

  return {
    valid: errors.length === 0,
    errors,
    data: { email: email?.toLowerCase() },
  };
}
