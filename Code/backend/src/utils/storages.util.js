import { z } from "zod"

export const createStorageSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  location: z.string().min(4, "Nome muito curto")
});

export const renameStorageSchema = z.object({
  newName: z.string().min(2, "Nome muito curto"),
});