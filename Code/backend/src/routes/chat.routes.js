import express from 'express';
import OpenAI from 'openai';
import { createItemService } from "../services/item.service.js";
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Inicializa o cliente OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rota para chat com IA
router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("Mensagem recebida:", message); // Para debug

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Erro no chat:", error);
    res.status(500).json({ error: "Erro ao chamar OpenAI" });
  }
});

router.get("/me", authMiddleware, (req, res) => {
  const { id_user, email, name } = req.user;
  res.json({ id_user, email, name });
});

export default router;