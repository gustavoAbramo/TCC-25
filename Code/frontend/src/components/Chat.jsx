import { useState, useRef, useEffect } from "react";

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
  const chatContainerRef = useRef(null);

  // Função para formatar o texto com quebras de linha
  const formatMessage = (text) => {
    if (!text) return "";
    
    // Substitui marcadores por quebras de linha e negrito
    return text
      .split(/\d+\.\s+/g) // Divide por números (1., 2., etc.)
      .filter(part => part.trim() !== '')
      .map(part => {
        // Adiciona negrito aos títulos
        if (part.includes("**")) {
          const parts = part.split("**");
          return parts.map((p, i) => 
            i % 2 === 1 ? `<strong>${p}</strong>` : p
          ).join('');
        }
        return part;
      })
      .join('<br /><br />'); // Adiciona quebras de linha entre os itens
  };

  // Função para rolar para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Função para enviar mensagem para a API
  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: "user", content: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error(`Erro na resposta da API: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Desculpe, ocorreu um erro. Tente novamente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Enviar mensagem com Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Limpar o chat
  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
      },
    ]);
  };

  // Exemplos de perguntas rápidas
  const quickQuestions = [
    "Quais são os alimentos ricos em proteínas?",
    "Como ter uma alimentação balanceada?",
    "Quais vitaminas são essenciais para o sistema imunológico?",
    "Dicas para uma dieta saudável no dia a dia"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    // Foca no input após selecionar uma pergunta rápida
    setTimeout(() => {
      document.getElementById("chat-input")?.focus();
    }, 100);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4 bg-gray-900 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-400">Assistente de Nutrição</h1>
        <button
          onClick={clearChat}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
        >
          Limpar Conversa
        </button>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-medium text-blue-300 mb-2">Perguntas rápidas:</h2>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-3 py-2 bg-blue-800 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors border border-blue-600"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto mb-4 p-4 bg-gray-800 rounded-lg shadow-inner border border-gray-700"
        style={{ minHeight: "400px", maxHeight: "60vh" }}
      >
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-4 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {message.role === "assistant" ? (
                  <div 
                    className="text-sm message-content"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                  />
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white p-4 rounded-lg">
                <div className="flex space-x-2 items-center">
                  <span className="text-sm mr-2">Digitando</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="flex items-center bg-gray-800 rounded-lg p-2 border border-gray-700">
        <input
          id="chat-input"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua pergunta sobre nutrição..."
          className="flex-1 py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !inputMessage.trim()}
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Enviar
        </button>
      </div>

      <style>{`
        .message-content {
          line-height: 1.6;
        }
        .message-content strong {
          font-weight: bold;
          color: #a7f3d0;
        }
      `}</style>
    </div>
  );
}