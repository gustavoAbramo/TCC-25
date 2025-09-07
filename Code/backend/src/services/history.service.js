import prisma from "../../prisma/client.js";

export async function getHistoryByUser(id_user) {
  return prisma.history.findMany({
    where: { id_user },
    include: { item: true },
    orderBy: { created_at: "desc" },
  });
}
