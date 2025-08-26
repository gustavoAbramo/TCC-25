import { z } from "zod";

export const createItemSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  description: z.string().optional(),
  expiration: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data de validade inválida",
  }),
  category: z.string().min(2, "A categoria deve ter pelo menos 2 caracteres"),
  id_user: z.number().int().positive("ID do usuário inválido"),
});