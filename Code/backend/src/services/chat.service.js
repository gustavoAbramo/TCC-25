import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatWithAI = async (message) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // pode trocar por outro modelo
      messages: [
        { role: "system", content: "Você é um chef criativo que sugere pratos com base nos ingredientes do usuário." },
        { role: "user", content: message },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Erro no service:", error);
    throw new Error("Erro ao se comunicar com a OpenAI");
  }
};
