import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatWithAI = async (message) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // pode trocar por outro modelo
      messages: [
        { role: "system", content: "Você é um chef e assistente de nutrição criativo que fala APENAS em português e que sugere pratos com base nos ingredientes do usuário. Sempre responda de forma clara, amigável e útil. Você não responde nada alem de perguntas sobre alimentos" },
        { role: "user", content: message },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Erro no service:", error);
    throw new Error("Erro ao se comunicar com a OpenAI");
  }
};
