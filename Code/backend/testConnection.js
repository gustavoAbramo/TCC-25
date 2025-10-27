import { prisma } from "./prisma/client.js";
async function main() {
  try {
    await prisma.$connect();
    console.log("Conectado com sucesso ao banco!");
  } catch (error) {
    console.error("Erro ao conectar:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
