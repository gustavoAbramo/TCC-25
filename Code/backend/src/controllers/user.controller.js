import { changeUserNameService, 
  requestPasswordResetService,
  resetPasswordService, } from "../services/user.service.js";


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


export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    const { resetToken, user } = await requestPasswordResetService(email);

    // Aqui você dispara o e-mail com o link(PAra quando for adicionar o email)
    // Ex: sendEmail({ to: user.email, subject: "Reset de senha", html: `<a href="http://localhost:3000/reset-password?token=${resetToken}">Resetar Senha</a>` })

    res.json({ success: true, message: "E-mail de recuperação enviado." });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function resetPassword(req, res) {
  try {
    const { token, newPassword } = req.body;
    await resetPasswordService(token, newPassword);
    res.json({ success: true, message: "Senha redefinida com sucesso." });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}