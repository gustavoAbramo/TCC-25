import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),  // valida formato de email
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export const loginUserSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});