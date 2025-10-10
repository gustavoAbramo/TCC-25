import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { PaperAirplaneIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFuncoes, setShowFuncoes] = useState(false);
  const [user, setUser] = useState(null);

  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [formItemName, setFormItemName] = useState("");
  const [formItemQuantity, setFormItemQuantity] = useState(1);
  const [formItemCategory, setFormItemCategory] = useState("comida");
  const [formItemUnit, setFormItemUnit] = useState("unidades");
  const [selectedStorageId, setSelectedStorageId] = useState(null);
  const [lastStorageId, setLastStorageId] = useState(null);
  const [storages, setStorages] = useState([]);

  const [toast, setToast] = useState(null); // <-- estado para toast

  const messagesEndRef = useRef(null);

  const quickQuestions = [
    { label: "Alimentos ricos em proteínas", icon: "💪" },
    { label: "Alimentação balanceada", icon: "⚖️" },
    { label: "Vitaminas essenciais", icon: "💊" },
    { label: "Dicas para o dia a dia", icon: "🍽️" },
  ];

  // Função para exibir toast (simples)
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  // Função que tenta extrair uma mensagem amigável de um erro (remove JSON técnico)
  const parseServerError = (error) => {
    try {
      const raw = typeof error === "string" ? error : error?.message ?? String(error);
      // tenta achar JSON dentro da string e parsear
      const idx = raw.indexOf("{");
      if (idx !== -1) {
        const jsonPart = raw.substring(idx);
        const parsed = JSON.parse(jsonPart);
        let msg = parsed.message || parsed.error || "Erro inesperado";
        if (Array.isArray(parsed.errors) && parsed.errors.length) {
          msg += ` — ${parsed.errors.join("; ")}`;
        }
        return msg;
      }
      // se não for JSON, tenta remover prefixos técnicos (ex: "Erro ao adicionar item (400): ...")
      const colon = raw.indexOf(":");
      if (colon !== -1 && raw.slice(colon + 1).trim()) {
        return raw.slice(colon + 1).trim();
      }
      return raw;
    } catch (e) {
      // fallback: retorna mensagem simples
      return error?.message ?? String(error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Recupera o último estoque salvo
  useEffect(() => {
    const storedId = localStorage.getItem("lastStorageId");
    if (storedId) setLastStorageId(storedId);
  }, []);

  // Buscar usuário logado (via cookie)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/chat/me", {
          credentials: "include",
        });
        if (!res.ok) throw new Error(`Não autenticado (${res.status})`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setUser(null);
        console.error("Erro ao buscar usuário:", err);
      }
    };
    fetchUser();
  }, []);

  // Carrega estoques do usuário
  useEffect(() => {
    const loadStorages = async () => {
      try {
        const res = await fetch("http://localhost:3000/storages/seeStorage", {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) throw new Error(`Erro ao carregar estoques (${res.status})`);
        const data = await res.json();

        const parsed = Array.isArray(data)
          ? data.map((s) => ({ id: s.id, name: s.name }))
          : Array.isArray(data.storages)
          ? data.storages.map((s) => ({ id: s.id, name: s.name }))
          : [];

        setStorages(parsed);
      } catch (err) {
        console.error("Erro ao buscar estoques:", err);
        const userMsg = parseServerError(err);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `⚠️ ${userMsg}` },
        ]);
        showToast("error", userMsg);
      }
    };
    loadStorages();
  }, []);

  const sendMessage = async (msg) => {
    const finalMessage = msg ?? inputMessage;
    if (!finalMessage || !finalMessage.trim() || isLoading) return;

    if (!user) {
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

      // Mostrar funções
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

      // Criar estoque
      else if (lowerMessage.startsWith("criar estoque")) {
        const partes = finalMessage.split("chamado");
        const estoqueNome = partes[1]?.trim().replace(/"/g, "") || "Novo Estoque";

        const response = await fetch("http://localhost:3000/storages/createStorage", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: estoqueNome, location: "araras" }),
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Erro ao criar estoque (${response.status}): ${text}`);
        }

        const data = await response.json();
        const newId = data?.id || data?.storageId || data?.id_Storage || null;

        if (newId) {
          setLastStorageId(String(newId));
          localStorage.setItem("lastStorageId", String(newId));
          setStorages((prev) =>
            prev.some((p) => p.id === Number(newId))
              ? prev
              : [...prev, { id: Number(newId), name: estoqueNome }]
          );
          setSelectedStorageId(Number(newId));
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `✅ Estoque "${estoqueNome}" criado com sucesso!${newId ? ` (id: ${newId})` : ""}`,
          },
        ]);
        showToast("success", `Estoque "${estoqueNome}" criado com sucesso!`);
      }

      // Adicionar item via texto
      else if (lowerMessage.startsWith("adicionar item ao estoque")) {
        const partes = finalMessage.split("ao estoque");
        const itemDetails = partes[1]?.trim() || "";
        const itemMatch = itemDetails.match(/"([^"]+)"\s+quantidade\s+(\d+)/i);

        if (!itemMatch) {
          const userMsg = 'Formato inválido. Use: adicionar item ao estoque "<nome>" quantidade <número>';
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: `⚠️ ${userMsg}`,
            },
          ]);
          showToast("warning", userMsg);
          setIsLoading(false);
          return;
        }

        const nomeItem = itemMatch[1];
        const quantidade = parseInt(itemMatch[2], 10);
        const storageIdToUse =
          selectedStorageId ?? (lastStorageId ? Number(lastStorageId) : null);

        if (!storageIdToUse) {
          const userMsg = "Nenhum estoque selecionado. Selecione um estoque antes de adicionar.";
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: `⚠️ ${userMsg}`,
            },
          ]);
          showToast("warning", userMsg);
          setIsLoading(false);
          return;
        }

        const response = await fetch("http://localhost:3000/storages/Items", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
          storageId: Number(storageIdToUse),
          name: formItemName.trim(),
          quantity: Number(formItemQuantity),
          category: formItemCategory,
          unit: formItemUnit,
          expiration: "2025-12-31",
        }),
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Erro ao adicionar item (${response.status}): ${text}`);
        }

        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `✅ Item "${nomeItem}" (x${quantidade}) adicionado com sucesso!`,
          },
        ]);
        showToast("success", `Item "${nomeItem}" adicionado com sucesso!`);
      }

      // Conversa normal com IA
      else {
        const response = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: finalMessage }),
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Erro na IA (${response.status}): ${text}`);
        }

        const data = await response.json();

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply || "Sem resposta" },
        ]);
      }
    } catch (error) {
      console.error("Erro no chat:", error);
      const userMsg = parseServerError(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ ${userMsg}`,
        },
      ]);
      showToast("error", userMsg);
    } finally {
      setIsLoading(false);
    }
  };

  // Submissão do formulário de adicionar item
  const handleAddItemSubmit = async () => {
    if (!formItemName.trim() || !formItemQuantity) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Preencha nome e quantidade do item." },
      ]);
      return;
    }

    if (!user) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Você precisa estar logado!" },
      ]);
      return;
    }

    const storageIdToUse = selectedStorageId ?? (lastStorageId ? Number(lastStorageId) : null);
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storageId: Number(storageIdToUse),
          name: formItemName.trim(),
          quantity: Number(formItemQuantity),
          category: "comida",
          unit: "unidades",
          expiration: "2025-12-31",
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Erro ao adicionar item (${response.status}): ${text}`);
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `✅ Item "${data.name ?? formItemName}" (x${data.quantity ?? formItemQuantity}) adicionado com sucesso!`,
        },
      ]);
      showToast("success", `Item "${data.name ?? formItemName}" adicionado com sucesso!`);
      localStorage.setItem("lastStorageId", String(storageIdToUse));
      setLastStorageId(String(storageIdToUse));
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
      const userMsg = parseServerError(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ ${userMsg}` },
      ]);
      showToast("error", userMsg);
    } finally {
      setIsLoading(false);
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
  <div className="flex flex-col md:flex-row gap-6 bg-gray-900 min-h-screen w-full overflow-hidden text-white relative">
    {/* Toast (aparece no topo e some automaticamente) */}
    {toast && (
      <div
        className={`absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl text-sm text-center shadow-lg transition-all duration-300
          ${
            toast.type === "success"
              ? "bg-green-600 text-white border border-green-700 shadow-green-800/30 animate-slideDownFade"
              : toast.type === "warning"
              ? "bg-yellow-500 text-gray-900 border border-yellow-600 shadow-yellow-800/30 animate-slideDownFade"
              : "bg-red-600 text-white border border-red-700 shadow-red-900/30 animate-slideDownFade"
          }`}
      >
        {toast.type === "success" ? (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : toast.type === "warning" ? (
          <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.29 3.86l-7.5 13A1 1 0 003.75 18h16.5a1 1 0 00.86-1.5l-7.5-13a1 1 0 00-1.72 0z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <div className="text-sm font-medium">{toast.message}</div>
        <button
          onClick={() => setToast(null)}
          className="ml-3 text-white/70 hover:text-white transition"
        >
          ✕
        </button>
      </div>
    )}

    {/* Sidebar */}
    <aside className="md:w-1/3 bg-gray-800 rounded-none md:rounded-r-2xl p-4 flex flex-col justify-between md:min-h-screen shadow-lg">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">Dicas Rápidas</h2>
        <div className="text-xs text-white mb-2">
          {user ? `🔐 Logado como ${user.name}` : "🚫 Não logado"}
        </div>

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

              <button
                onClick={() => setShowAddItemForm((s) => !s)}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-left text-sm text-white"
              >
                ➕ Adicionar item ao estoque
              </button>

              {showAddItemForm && (
                <div className="mt-2 p-3 bg-gray-700 rounded-lg flex flex-col gap-3">
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

                  {/* Categoria */}
                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-gray-300 w-20">Categoria:</label>
                    <select
                      value={formItemCategory}
                      onChange={(e) => setFormItemCategory(e.target.value)}
                      className="flex-1 p-2 rounded bg-gray-800 text-white text-sm"
                    >
                      <option value="comida">🍽️ Comida</option>
                      <option value="bebida">🥤 Bebida</option>
                    </select>
                  </div>

                  {/* Unidade */}
                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-gray-300 w-20">Unidade:</label>
                    <select
                      value={formItemUnit}
                      onChange={(e) => setFormItemUnit(e.target.value)}
                      className="flex-1 p-2 rounded bg-gray-800 text-white text-sm"
                    >
                      <option value="unidades">Unidades</option>
                      <option value="gramas">Gramas</option>
                      <option value="quilogramas">Quilogramas</option>
                      <option value="mililitros">Mililitros</option>
                      <option value="litros">Litros</option>
                    </select>
                  </div>

                  {/* Estoque */}
                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-gray-300 w-20">Estoque:</label>
                    <select
                      value={selectedStorageId || ""}
                      onChange={(e) => setSelectedStorageId(Number(e.target.value))}
                      className="flex-1 p-2 rounded bg-gray-800 text-white text-sm"
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
                      className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm text-white transition"
                    >
                      Adicionar
                    </button>
                    <button
                      onClick={() => setShowAddItemForm(false)}
                      className="px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded text-sm text-white transition"
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

          <button
            onClick={clearChat}
            className="flex items-center gap-2 mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-full text-sm transition shadow text-white"
          >
            <TrashIcon className="w-4 h-4" />
            Limpar
          </button>
        </div>
      </div>
    </aside>

    {/* Chat */}
    <main className="md:w-2/3 flex flex-col bg-gray-800 rounded-none md:rounded-l-2xl p-4 shadow-lg">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pr-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
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