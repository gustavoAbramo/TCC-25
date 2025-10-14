import { changeUserNameService, 
  requestPasswordResetService,
  resetPasswordService, } from "../services/user.service.js";
  import notificationService from "../services/email.service.js"

export async function changeUserName(req, res) {
  try {
    const { newName } = req.body;
    const id_user = req.user?.id_user;

    const updatedUser = await changeUserNameService(id_user, newName);
    res.status(200).json({ message: "Nome atualizado!, faca Login denovo para mostrar o seu novo nome", user: updatedUser });
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

    const resetLink = `http://localhost:5173/reset-password?token=${resetToken}`;

    res.cookie("resetToken", resetToken, {
      httpOnly: true,
      secure: false, // coloque true só em produção com HTTPS
      sameSite: "Strict",
      maxAge: 60 * 60 * 1000,
    });

    await notificationService.sendEmail({
      to: user.email,
      subject: "Redefinição de Senha - Storage",
      html: `
        <p>Olá ${user.name},</p>
        <p>Você solicitou a redefinição de senha.</p>
        <p>Clique no botão abaixo para redefinir sua senha:</p>
        <p><a href="${resetLink}" style="background-color:#2563EB;color:white;padding:10px 20px;border-radius:5px;text-decoration:none;">Redefinir Senha</a></p>
        <p>Este link expira em 15 minutos.</p>
        <p>Se você não solicitou isso, ignore este e-mail.</p>
      `,
    });

    res.json({ success: true, message: "E-mail de recuperação enviado." });
  } catch (error) {
    console.error("ERRO NO FORGOT PASSWORD:", error);
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