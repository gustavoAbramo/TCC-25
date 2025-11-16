import { getUserHistoryService } from "../services/history.service.js";

export async function getUserHistory(req, res) {
  if (!req.user || !req.user.id_user) {
    return res.status(401).json({ error: "Usuário não autenticado" });
  }

  const id_user = Number(req.user.id_user); // garante que seja número

  try {
    const history = await getUserHistoryService(id_user);

    // sempre retorna array, mesmo vazio
    return res.status(200).json(history || []);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
