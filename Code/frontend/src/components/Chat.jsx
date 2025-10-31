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
    <div className="w-full bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Toast (aparece no topo e some automaticamente) */}
        {toast && (
          <div
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl text-sm text-center shadow-lg transition-all duration-300
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

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Chat de Nutrição
            </h1>
            <p className="text-slate-400 mt-1">
              Converse com seu assistente de nutrição
            </p>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <span className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Logado como {user.name}
              </span>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Não logado
              </span>
            )}
            <button
              onClick={clearChat}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl text-sm transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/30 text-white font-medium"
            >
              <TrashIcon className="w-4 h-4" />
              Limpar
            </button>
          </div>
        </div>

        {/* Área de Dicas Rápidas e Funções */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => setInputMessage(q.label)}
              className="flex items-center gap-2 px-4 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl text-white font-medium hover:scale-[1.02] active:scale-95"
            >
              <span className="text-lg">{q.icon}</span> {q.label}
            </button>
          ))}
        </div>

        {/* Botão de Funções */}
        <div className="mb-6">
          <button
            onClick={() => setShowFuncoes(!showFuncoes)}
            className="flex items-center justify-between gap-2 px-4 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl text-white font-medium w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Funções
            </span>
            <span className="transition-transform duration-200">{showFuncoes ? "▲" : "▼"}</span>
          </button>

          {showFuncoes && (
            <div className="mt-3 p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col gap-2">
              <button
                onClick={() => sendMessage("funcoes")}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-left text-sm text-white transition-all border border-slate-700"
              >
                📜 Mostrar funções
              </button>

              <button
                onClick={() => setInputMessage('criar estoque chamado "MeuEstoque"')}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-left text-sm text-white transition-all border border-slate-700"
              >
                📦 Criar estoque (preencher input)
              </button>

              <button
                onClick={() => setShowAddItemForm((s) => !s)}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-left text-sm text-white transition-all border border-slate-700"
              >
                ➕ Adicionar item ao estoque
              </button>

              {showAddItemForm && (
                <div className="mt-3 p-4 bg-slate-800/70 border border-slate-700 rounded-xl flex flex-col gap-3">
                  <input
                    value={formItemName}
                    onChange={(e) => setFormItemName(e.target.value)}
                    placeholder='Nome do item (ex: "Maçã")'
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />

                  <input
                    value={formItemQuantity}
                    onChange={(e) => setFormItemQuantity(Number(e.target.value))}
                    type="number"
                    min={1}
                    placeholder="Quantidade"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />

                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-slate-300 w-20">Categoria:</label>
                    <select
                      value={formItemCategory}
                      onChange={(e) => setFormItemCategory(e.target.value)}
                      className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="comida">🍽️ Comida</option>
                      <option value="bebida">🥤 Bebida</option>
                    </select>
                  </div>

                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-slate-300 w-20">Unidade:</label>
                    <select
                      value={formItemUnit}
                      onChange={(e) => setFormItemUnit(e.target.value)}
                      className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="unidades">Unidades</option>
                      <option value="gramas">Gramas</option>
                      <option value="quilogramas">Quilogramas</option>
                      <option value="mililitros">Mililitros</option>
                      <option value="litros">Litros</option>
                    </select>
                  </div>

                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-slate-300 w-20">Estoque:</label>
                    <select
                      value={selectedStorageId || ""}
                      onChange={(e) => setSelectedStorageId(Number(e.target.value))}
                      className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleAddItemSubmit}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl text-sm text-white transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 font-medium"
                    >
                      Adicionar
                    </button>
                    <button
                      onClick={() => setShowAddItemForm(false)}
                      className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm text-white transition-all border border-slate-600"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Chat Area */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex-1 overflow-y-auto space-y-4 mb-6 max-h-[600px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800 pr-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`p-4 rounded-2xl max-w-[80%] shadow-lg ${
                    msg.role === "assistant"
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border border-blue-500/20"
                      : "bg-slate-800 text-white border border-slate-700/50"
                  }`}
                >
                  <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white prose-strong:text-white prose-ul:text-white prose-ol:text-white prose-li:text-white prose-code:text-white">
                    <ReactMarkdown>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white animate-pulse shadow-lg border border-blue-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    <span className="ml-2">Digitando...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 border border-slate-700 rounded-xl overflow-hidden bg-slate-800/50 shadow-lg">
            <input
              type="text"
              placeholder="Digite sua pergunta..."
              className="flex-1 p-4 bg-transparent text-white placeholder-slate-400 focus:outline-none"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={() => sendMessage()}
              disabled={isLoading}
              className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-blue-600/50 disabled:to-blue-700/50 disabled:cursor-not-allowed text-white transition-all flex items-center gap-1 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}