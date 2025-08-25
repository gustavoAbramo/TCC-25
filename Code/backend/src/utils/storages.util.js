import { z } from "zod"

export const createStorageSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
});
