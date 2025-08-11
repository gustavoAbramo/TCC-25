//const notificationService = require("../services/notification.service.js");

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

//module.exports = sendEmail;