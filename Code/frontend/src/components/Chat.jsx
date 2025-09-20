import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Perguntas rápidas
  const quickQuestions = [
    "Quais são os alimentos ricos em proteínas?",
    "Como ter uma alimentação balanceada?",
    "Quais vitaminas são essenciais para o sistema imunológico?",
    "Dicas para uma dieta saudável no dia a dia",
  ];

  // Scroll automático para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Enviar mensagem para API
  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: "user", content: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Erro no chat:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Desculpe, ocorreu um erro. Tente novamente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Enviar com Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Limpar chat
  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-background-secondary rounded-lg p-4">
      {/* Perguntas rápidas */}
      <div className="flex flex-wrap gap-2 mb-4">
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => setInputMessage(q)}
            className="px-3 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg text-sm transition"
          >
            {q}
          </button>
        ))}
        <button
          onClick={clearChat}
          className="ml-auto px-3 py-2 bg-red-700 hover:bg-red-600 rounded-lg text-sm transition"
        >
          Limpar
        </button>
      </div>

      {/* Área de mensagens */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.role === "assistant"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg bg-blue-700 text-white animate-pulse">
              Digitando...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex">
        <input
          id="chat-input"
          type="text"
          placeholder="Digite sua pergunta..."
          className="flex-1 p-3 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-r-lg transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
