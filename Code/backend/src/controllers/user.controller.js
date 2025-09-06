import { changeUserNameService } from "../services/user.service.js";

export async function changeUserName(req, res) {
  try {
    const { newName } = req.body;
    const id_user = req.user?.id_user;

    const updatedUser = await changeUserNameService(id_user, newName);
    res.json({ message: "Nome atualizado com sucesso!", user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getCurrentUser(req, res) {
  try {
    // Se passou pelo middleware, req.user existe
    return res.status(200).json({ user: req.user });
  } catch (error) {
    return res.status(401).json({ error: "Não autorizado" });
  }
}
