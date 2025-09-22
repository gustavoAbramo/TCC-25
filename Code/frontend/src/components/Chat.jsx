import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import {
  PaperAirplaneIcon,
  TrashIcon,
  SparklesIcon,
  LightBulbIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    { label: "Alimentos ricos em proteínas", icon: "💪" },
    { label: "Alimentação balanceada", icon: "⚖️" },
    { label: "Vitaminas essenciais", icon: "💊" },
    { label: "Dicas para o dia a dia", icon: "🍽️" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage(); 
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "👋 Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
      },
    ]);
  };

  return (
  <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 rounded-xl h-full max-w-6xl mx-auto">

    {/* Dicas rápidas */}
    <aside className="md:w-1/3 bg-gray-800 rounded-lg p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-white">Dicas Rápidas</h2>
      <div className="flex flex-col gap-3">
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => setInputMessage(q.label)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-sm transition shadow text-white"
          >
            {q.icon} {q.label}
          </button>
        ))}
        <button
          onClick={clearChat}
          className="flex items-center gap-2 mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-full text-sm transition shadow text-white"
        >
          <TrashIcon className="w-4 h-4" />
          Limpar
        </button>
      </div>
    </aside>

    {/* Chat */}
    <main className="md:w-2/3 flex flex-col bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pr-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`p-4 rounded-2xl max-w-[80%] shadow ${
                msg.role === "assistant"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="p-4 rounded-2xl bg-blue-700 text-white animate-pulse shadow">
              Digitando...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Digite sua pergunta..."
          className="flex-1 p-3 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white transition flex items-center gap-1"
        >
          <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
        </button>
      </div>
    </main>
  </div>
  );
}