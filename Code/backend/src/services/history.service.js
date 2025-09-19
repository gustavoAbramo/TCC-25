// src/services/item.service.js
import { mongoClient } from "../../mongo/client.mongo.js";

export async function getUserHistoryService(id_user) {
  try {
    const db = await mongoClient();
    const collection = db.collection("historico_estoque");

    // Busca todos os logs do usuário
    const logs = await collection
      .find({ id_user: id_user }) // filtra por usuário
      .sort({ createdAt: -1 }) // ordena do mais recente para o mais antigo
      .toArray();

    return logs;
  } catch (err) {
    console.error("Erro ao buscar histórico:", err);
    throw new Error("Não foi possível buscar o histórico");
  }
}
