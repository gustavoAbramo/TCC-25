import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { PaperAirplaneIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Chat() {

  <div className="text-xs text-white mb-2">
  {localStorage.getItem("token")
    ? `🔐 Logado como usuário #${localStorage.getItem("userId")}`
    : "🚫 Não logado"}
</div>

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFuncoes, setShowFuncoes] = useState(false);

  // controle do formulario lateral "Adicionar item"
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [formItemName, setFormItemName] = useState("");
  const [formItemQuantity, setFormItemQuantity] = useState(1);
  const [selectedStorageId, setSelectedStorageId] = useState(null);
  const [lastStorageId, setLastStorageId] = useState(
    () => localStorage.getItem("lastStorageId") || null
  );
  const [storages, setStorages] = useState([]);

  const messagesEndRef = useRef(null);

  const quickQuestions = [
    { label: "Alimentos ricos em proteínas", icon: "💪" },
    { label: "Alimentação balanceada", icon: "⚖️" },
    { label: "Vitaminas essenciais", icon: "💊" },
    { label: "Dicas para o dia a dia", icon: "🍽️" },
  ];



  // scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // carregar estoques quando o componente monta
  function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

useEffect(() => {
  const loadStorages = async () => {
    const token = localStorage.getItem("token") || getCookie("token");
    if (!token) {
      console.debug("Chat.jsx: nenhum token encontrado.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/storages/seeStorage", {
        method: "GET",
        credentials: "include",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error(`Erro ao carregar estoques: ${res.status}`);
      const data = await res.json();

      const parsed = Array.isArray(data)
        ? data.map((s) => ({
            id: s.id,
            name: s.name,
          }))
        : Array.isArray(data.storages)
        ? data.storages.map((s) => ({
            id: s.id,
            name: s.name,
          }))
        : [];

      setStorages(parsed);
    } catch (err) {
      console.error("Erro ao buscar estoques:", err);
    }
  };

  loadStorages();
}, []);


  const sendMessage = async (msg) => {
    const finalMessage = msg ?? inputMessage;
    if (!finalMessage || !finalMessage.trim() || isLoading) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Você precisa estar logado!" },
      ]);
      return;
    }

    const userMessage = { role: "user", content: finalMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const lowerMessage = finalMessage.toLowerCase();

      // LISTAR FUNÇÕES
      if (lowerMessage === "funcoes" || lowerMessage === "funções") {
        const funcoesDisponiveis = [
          '📦 Criar estoque → escreva: criar estoque chamado <nome>',
          '🧾 Adicionar item → escreva: adicionar item ao estoque "<nome>" quantidade <número>',
          "🤖 Conversar com IA → basta digitar sua pergunta normalmente",
          "🧹 Limpar o chat → botão 'Limpar'",
        ];
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Aqui estão as funções que eu consigo fazer:\n\n" +
              funcoesDisponiveis.map((f) => `- ${f}`).join("\n"),
          },
        ]);
      }

      // CRIAR ESTOQUE
      else if (lowerMessage.startsWith("criar estoque")) {
        const partes = finalMessage.split("chamado");
        const estoqueNome = partes[1]?.trim().replace(/"/g, "") || "Novo Estoque";

        const response = await fetch("http://localhost:3000/storages/createStorage", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: estoqueNome, location: "araras" }),
        });

        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        const data = await response.json();

        // tenta pegar ID retornado pelo backend e salvar
        const newId = data?.id || data?.storageId || data?.id_Storage || null;
        if (newId) {
          setLastStorageId(String(newId));
          localStorage.setItem("lastStorageId", String(newId));
          // atualiza lista de storages localmente (se possível)
          setStorages((prev) => {
            // evita duplicar se já existir
            if (prev.some((p) => p.id === Number(newId))) return prev;
            return [...prev, { id: Number(newId), name: estoqueNome }];
          });
          setSelectedStorageId(Number(newId));
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `✅ Estoque "${estoqueNome}" criado com sucesso!${newId ? ` (id: ${newId})` : ""}`,
          },
        ]);
      }

      // ADICIONAR ITEM (quando digitado manualmente)
      else if (lowerMessage.startsWith("adicionar item ao estoque")) {
        const partes = finalMessage.split("ao estoque");
        const itemDetails = partes[1]?.trim() || "";
        const itemMatch = itemDetails.match(/"([^"]+)"\s+quantidade\s+(\d+)/i);

        if (!itemMatch) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                '⚠️ Formato inválido. Use: adicionar item ao estoque "<nome do item>" quantidade <número>',
            },
          ]);
          setIsLoading(false);
          return;
        }

        const nomeItem = itemMatch[1];
        const quantidade = parseInt(itemMatch[2], 10);

        // decide qual storageId usar: opção selecionada, último criado, ou null
        const storageIdToUse =
          selectedStorageId ?? (lastStorageId ? Number(lastStorageId) : null);

        if (!storageIdToUse) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "⚠️ Nenhum estoque selecionado. Selecione um estoque antes de adicionar.",
            },
          ]);
          setIsLoading(false);
          return;
        }

        try {
          const response = await fetch("http://localhost:3000/storages/Items", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: nomeItem,
              description: descricaoItem,
              quantity: Number(quantidade),
              category: "Frutas",
              expiration: "2025-12-31",
              storageId: Number(storageIdToUse),
            }),
          });

          if (!response.ok) {
            // tenta ler mensagem de erro do backend
            const text = await response.text().catch(() => null);
            throw new Error(`Erro ao adicionar item: ${response.status} ${text ?? ""}`);
          }
          const data = await response.json();

          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: `✅ Item "${nomeItem}" (x${quantidade}) adicionado com sucesso ao estoque (id: ${storageIdToUse})!`,
            },
          ]);
        } catch (error) {
          console.error("Erro ao adicionar item:", error);
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "⚠️ Erro ao adicionar item ao estoque.",
            },
          ]);
        } finally {
          setIsLoading(false);
        }
      }

      // MENSAGEM NORMAL PARA IA
      else {
        const response = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message: finalMessage }),
        });

        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        const data = await response.json();

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply || "Sem resposta" },
        ]);
      }
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

  // função que é chamada ao submeter o formulário lateral "Adicionar item"
  const handleAddItemSubmit = async () => {
    if (!formItemName.trim() || !formItemQuantity) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Preencha nome e quantidade do item." },
      ]);
      return;
    }

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const storageIdToUse = selectedStorageId ?? (lastStorageId ? Number(lastStorageId) : null);

    if (!token || !userId) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Você precisa estar logado!" },
      ]);
      return;
    }

    if (!storageIdToUse) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Nenhum estoque selecionado. Selecione um estoque antes de adicionar.",
        },
      ]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/storages/Items", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          storageId: Number(storageIdToUse),
          name: formItemName.trim(),
          quantity: Number(formItemQuantity),
          category: "Frutas",
          expiration: "2025-12-31",
        }),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => null);
        throw new Error(`Erro: ${response.status} ${text ?? ""}`);
      }
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `✅ Item "${data.name ?? formItemName}" (x${data.quantity ?? formItemQuantity}) adicionado com sucesso ao estoque (id: ${storageIdToUse})!`,
        },
      ]);

      // salvar último estoque usado
      localStorage.setItem("lastStorageId", String(storageIdToUse));
      setLastStorageId(String(storageIdToUse));
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Erro ao adicionar item ao estoque." },
      ]);
    } finally {
      setIsLoading(false);
      // limpa o formulário
      setFormItemName("");
      setFormItemQuantity(1);
      setShowAddItemForm(false);
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
      {/* Sidebar */}
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

          {/* Botão Funções */}
          <button
            onClick={() => setShowFuncoes(!showFuncoes)}
            className="flex items-center justify-between gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-full text-sm transition shadow text-white"
          >
            ⚙️ Funções <span>{showFuncoes ? "▲" : "▼"}</span>
          </button>

          {showFuncoes && (
            <div className="ml-4 mt-2 flex flex-col gap-2">
              <button
                onClick={() => sendMessage("funcoes")}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-left text-sm text-white"
              >
                📜 Mostrar funções
              </button>

              <button
                onClick={() => setInputMessage('criar estoque chamado "MeuEstoque"')}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-left text-sm text-white"
              >
                📦 Criar estoque (preencher input)
              </button>

              {/* Novo: botão para abrir formulário de adicionar item */}
              <button
                onClick={() => setShowAddItemForm((s) => !s)}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-left text-sm text-white"
              >
                ➕ Adicionar item ao estoque
              </button>

              {showAddItemForm && (
                <div className="mt-2 p-3 bg-gray-700 rounded-lg flex flex-col gap-2">
                  <input
                    value={formItemName}
                    onChange={(e) => setFormItemName(e.target.value)}
                    placeholder='Nome do item (ex: "Maçã")'
                    className="p-2 rounded bg-gray-800 text-white text-sm"
                  />
                  <input
                    value={formItemQuantity}
                    onChange={(e) => setFormItemQuantity(Number(e.target.value))}
                    type="number"
                    min={1}
                    placeholder="Quantidade"
                    className="p-2 rounded bg-gray-800 text-white text-sm"
                  />

                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-gray-300">Estoque:</label>
                    <select
                    value={selectedStorageId || ""}
                    onChange={(e) => setSelectedStorageId(Number(e.target.value))}
                    className="p-2 rounded bg-gray-800 text-white mb-2"
                  >
                    {storages.length === 0 ? (
                      <option value="">(nenhum estoque)</option>
                    ) : (
                      storages.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))
                    )}
                  </select>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleAddItemSubmit}
                      className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm text-white"
                    >
                      Adicionar
                    </button>
                    <button
                      onClick={() => setShowAddItemForm(false)}
                      className="px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm text-white"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={clearChat}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-left text-sm text-white"
              >
                🧹 Limpar chat
              </button>
            </div>
          )}

          {/* Botão limpar global */}
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
              className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`p-4 rounded-2xl max-w-[80%] shadow ${
                  msg.role === "assistant" ? "bg-blue-700 text-white" : "bg-gray-700 text-white"
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
            onClick={() => sendMessage()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white transition flex items-center gap-1"
          >
            <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
          </button>
        </div>
      </main>
    </div>
  );
}
