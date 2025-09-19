import { getUserHistoryService } from "../services/history.service.js";

export async function getUserHistory(req, res) {
  const id_user = req.user.id_user;

  try {
    const history = await getUserHistoryService(Number(id_user));

    if (!history) {
      return res.status(404).json({ error: "Histórico não encontrado" });
    }

    if (history.length === 0) {
      return res.status(200).json({ message: "Nenhum histórico disponível" });
    }
    
    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
