import { chatWithAI } from "../services/chat.service.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const userToken = req.headers.authorization?.split(" ")[1]; // pega o token do header

  if (!message) {
    return res.status(400).json({ error: "Mensagem não fornecida" });
  }

  try {
    const reply = await chatWithAI(message, userToken);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
