import { chatWithAI } from "../services/chat.service.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem não fornecida" });
  }

  try {
    const reply = await chatWithAI(message);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
