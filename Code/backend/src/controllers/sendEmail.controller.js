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


export async function processExpirationNotifications() {
  try {
    const items = await getItemsCloseToExpiration(7);

    if (!items.length) {
      console.log("📭 Nenhum item próximo da validade.");
      return { message: "Nenhum item próximo da validade." };
    }

    for (const item of items) {
      await notificationService.sendEmail({
        from: `"SmartStorage" <smartstorage21@gmail.com>`,
        to: item.ownerEmail,
        subject: `⚠️ Item "${item.name}" próximo da expiração`,
        html: `
          <p>Olá,</p>
          <p>O item <strong>${item.name}</strong> expira em ${new Date(item.expiration).toLocaleDateString()}.</p>
        `,
      });
    }

    console.log(`✅ ${items.length} notificações enviadas.`);
    return { message: `${items.length} notificações enviadas.` };
  } catch (error) {
    console.error("❌ Erro ao enviar notificações:", error);
    throw error;
  }
}

export async function notifyExpiringItems(req, res) {
  try {
    const result = await processExpirationNotifications();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao notificar usuários" });
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