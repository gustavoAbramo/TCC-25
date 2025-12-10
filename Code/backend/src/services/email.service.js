import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

const oauth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (options) => {
  try {
    // 1. Obter novo access token automaticamente
    const accessTokenResponse = await oauth2Client.getAccessToken();
    const accessToken = accessTokenResponse?.token;

    // 2. Criar transporter com OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
      tls: {
        rejectUnauthorized: false, //  aceita certificado autoassinado
      },
    });


    // 3. Enviar o email
    const result = await transporter.sendMail({
      from: `"SmartStorage" <${process.env.EMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });

    console.log("✅ Email enviado:", result.messageId);
    return result;
  } catch (error) {
    console.error("❌ Erro ao enviar email com OAuth2:", error);
    throw error;
  }
};

export default {
  sendEmail,
};
