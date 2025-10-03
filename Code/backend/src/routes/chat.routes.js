import express from 'express';
import OpenAI from 'openai';
import { createItemService } from "../services/item.service.js";

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
/*
router.post("/storages/:id/items", async (req, res) => {
  try {
    const { id } = req.params;
    const id_user = req.user.id; // supondo que você pega do token
    const { name, category, quantity, expiration } = req.body;

    const newItem = await createItemService({
      id_user,
      storageId: Number(id),
      name,
      category,
      quantity,
      expiration,
    });

    res.status(201).json(newItem);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});
*/
export default router;