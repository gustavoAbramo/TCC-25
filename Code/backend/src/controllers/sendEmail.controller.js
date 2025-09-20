import notificationService from '../services/email.service.js';
import { getItemsCloseToExpiration } from '../services/item.service.js';

console.log("DEBUG EMAIL:", {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD
});
function sendEmail() {
  return async function(req, res) {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send({ message: "Name and email are required." });
    }

    try {
      console.log("ENV:", {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD ? "definida" : "NÃO DEFINIDA",
      });

      await notificationService.sendEmail({
        to: email,
        subject: "Bem-vindo ao Smart Storage!",
        html: `<b>Olá ${name}, Seja bem-vindo ao Smart Storage!</b>`,
      });
      res.status(200).send("Email sent successfully to " + email);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      res.status(500).send({ message: "Failed to send email.", error: error.message });
    }
  };
}


export async function notifyExpiringItems(req, res) {
  try {
    const items = await getItemsCloseToExpiration(7); // Itens que vencem nos próximos 7 dias

    if (!items.length) {
      return res.status(200).json({ message: "Nenhum item próximo da expiração." });
    }

    for (const item of items) {
      await notificationService.sendEmail({
        to: item.ownerEmail,
        subject: `⚠️ Item "${item.name}" está perto da expiração`,
        html: `
          <p>Olá,</p>
          <p>O item <strong>${item.name}</strong> está com a data de expiração próxima: <strong>${item.expiration.toISOString().split('T')[0]}</strong>.</p>
          <p>Verifique seu estoque e tome as medidas necessárias.</p>
        `,
      });
    }

    res.status(200).json({
      message: `E-mails enviados para ${items.length} usuários.`,
    });

  } catch (error) {
    console.error("Erro ao notificar usuários:", error);
    res.status(500).json({
      message: "Erro ao enviar e-mails.",
      error: error.message
    });
  }
}



export function sendContactEmail() {
  return async function (req, res) {
    const { nome, email, empresa, assunto, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
      return res.status(400).send({ message: "Nome, email e mensagem são obrigatórios." });
    }

    try {
      await notificationService.sendEmail({
        to: process.env.EMAIL_USER, // você recebe no seu email principal
        subject: `📩 Novo contato: ${assunto || "Sem assunto"}`,
        html: `
          <h2>Nova mensagem de contato</h2>
          <p><b>Nome:</b> ${nome}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Empresa:</b> ${empresa || "Não informado"}</p>
          <p><b>Assunto:</b> ${assunto || "Não informado"}</p>
          <p><b>Mensagem:</b></p>
          <p>${mensagem}</p>
        `,
      });

      res.status(200).send({ message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      res.status(500).send({ message: "Falha ao enviar email.", error: error.message });
    }
  };
}


export default sendEmail();