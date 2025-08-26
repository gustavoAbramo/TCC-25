import { z } from "zod"

export const permissionUserSchema = z.object({
  email: z.string().email("Nome muito curto"),
  id_Storage: z.number().int().positive()
});
