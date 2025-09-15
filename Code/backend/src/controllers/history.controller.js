import { getHistoryByUser } from "../services/history.service.js";

export async function getUserHistory(req, res) {
  try {
    const id_user = req.user?.id_user;
    
    if (!id_user) {
      return res.status(401).json({ message: "Usuário não autenticado." });
    }
    
    const history = await getHistoryByUser(id_user);

    if(history.length === 0) {
      return res.status(404).json({ message: "Nenhum histórico encontrado para este usuário." });
    }

    return res.status(200).json(history);

  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
}
