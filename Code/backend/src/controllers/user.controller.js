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
