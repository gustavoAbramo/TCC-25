import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { PaperAirplaneIcon, TrashIcon } from "@heroicons/react/24/solid";
import api from "../services/api.service.js";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
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

  const [toast, setToast] = useState(null);

  const messagesEndRef = useRef(null);

  const quickQuestions = [
    { label: "Alimentos ricos em proteínas", icon: "💪" },
    { label: "Alimentação balanceada", icon: "⚖️" },
    { label: "Vitaminas essenciais", icon: "💊" },
    { label: "Dicas para o dia a dia", icon: "🍽️" },
  ];

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const parseServerError = (error) => {
    try {
      const raw =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        String(error);

      if (typeof raw === "object") return raw.message || "crie um estoque";

      const idx = raw.indexOf("{");
      if (idx !== -1) {
        try {
          const jsonPart = raw.substring(idx);
          const parsed = JSON.parse(jsonPart);
          return parsed.message || parsed.error || "Erro inesperado";
        } catch {}
      }

      const colon = raw.indexOf(":");
      if (colon !== -1) return raw.slice(colon + 1).trim();

      return raw;
    } catch {
      return "Erro inesperado";
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const storedId = localStorage.getItem("lastStorageId");
    if (storedId) setLastStorageId(storedId);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get("/api/chat/me");
        setUser(data);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const loadStorages = async () => {
      try {
        const { data } = await api.get("/storages/seeStorage");

        const parsed = Array.isArray(data)
          ? data.map((s) => ({ id: s.id, name: s.name }))
          : Array.isArray(data.storages)
          ? data.storages.map((s) => ({ id: s.id, name: s.name }))
          : [];

        setStorages(parsed);
      } catch (err) {
        const msg = parseServerError(err);
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
        { role: "assistant", content: "ALERTA: Você precisa estar logado!" },
      ]);
      return;
    }

    setMessages((prev) => [...prev, { role: "user", content: finalMessage }]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const lowerMessage = finalMessage.toLowerCase();

      if (lowerMessage === "funcoes" || lowerMessage === "funções") {
        const funcoesDisponiveis = [
          "📦 Criar estoque → escreva: criar estoque chamado <nome>",
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
      } else if (lowerMessage.startsWith("criar estoque")) {
        const partes = finalMessage.split("chamado");
        const estoqueNome =
          partes[1]?.trim().replace(/"/g, "") || "Novo Estoque";

        const { data } = await api.post("/storages/createStorage", {
          name: estoqueNome,
          location: "Sao Paulo",
        });

        const newId = data?.id || data?.storageId || null;

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
            content: `✅ Estoque "${estoqueNome}" criado com sucesso!${
              newId ? ` (id: ${newId})` : ""
            }`,
          },
        ]);
        showToast("success", `Estoque "${estoqueNome}" criado com sucesso!`);
      } else if (lowerMessage.startsWith("adicionar item ao estoque")) {
        const partes = finalMessage.split("ao estoque");
        const itemDetails = partes[1]?.trim() || "";
        const match = itemDetails.match(/"([^"]+)"\s+quantidade\s+(\d+)/i);

        if (!match) {
          const msg =
            'Formato inválido. Use: adicionar item ao estoque "<nome>" quantidade <número>';
          showToast("warning", msg);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: `⚠️ ${msg}` },
          ]);
          setIsLoading(false);
          return;
        }

        const nomeItem = match[1];
        const quantidade = parseInt(match[2], 10);

        const storageIdToUse =
          selectedStorageId ?? (lastStorageId ? Number(lastStorageId) : null);

        if (!storageIdToUse) {
          const msg = "Nenhum estoque selecionado.";
          showToast("warning", msg);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: `⚠️ ${msg}` },
          ]);
          setIsLoading(false);
          return;
        }

        await api.post("/storages/Items", {
          storageId: storageIdToUse,
          name: nomeItem,
          quantity: quantidade,
          category: formItemCategory,
          unit: formItemUnit,
          expiration: "2025-12-31",
        });

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `✅ Item "${nomeItem}" (x${quantidade}) adicionado com sucesso!`,
          },
        ]);
        showToast("success", `Item "${nomeItem}" adicionado!`);
      } else {
        const { data } = await api.post("/api/chat", { message: finalMessage });

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply || "Sem resposta" },
        ]);
      }
    } catch (error) {
      const msg = parseServerError(error);
      showToast("error", msg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ ${msg}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddItemSubmit = async () => {
    if (!formItemName.trim() || !formItemQuantity) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Preencha nome e quantidade do item.",
        },
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

    const storageIdToUse = selectedStorageId ?? Number(lastStorageId);
    if (!storageIdToUse) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Nenhum estoque selecionado.",
        },
      ]);
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await api.post("/storages/Items", {
        storageId: storageIdToUse,
        name: formItemName.trim(),
        quantity: Number(formItemQuantity),
        category: formItemCategory,
        unit: formItemUnit,
        expiration: "2025-12-31",
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `✅ Item "${data.name ?? formItemName}" adicionado!`,
        },
      ]);

      showToast("success", `Item "${data.name ?? formItemName}" adicionado!`);

      localStorage.setItem("lastStorageId", String(storageIdToUse));
      setLastStorageId(String(storageIdToUse));
    } catch (err) {
      const msg = parseServerError(err);
      showToast("error", msg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ ${msg}` },
      ]);
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
        content:
          "👋 Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?",
      },
    ]);
  };

  return (
    <div className="w-full bg-background p-3 sm:p-4 lg:p-6">
       <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-6">
        {/* TOAST */}
        {toast && (
            <div
              className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm shadow-lg transition-all duration-300 max-w-[90vw] ${
                toast.type === "success"
                  ? "bg-green-600 text-white"
                  : toast.type === "warning"
                  ? "bg-yellow-500 text-gray-900"
                  : "bg-red-600 text-white"
              }`}
            >
              <div className="truncate">{toast.message}</div>
              <button onClick={() => setToast(null)} className="flex-shrink-0">
                ✕
              </button>
            </div>
          )}

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Chat de Nutrição
              </h1>
            <p className="text-slate-400 mt-1 text-sm sm:text-base">
              Converse com seu assistente de nutrição
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 sm:mt-0">
            {user ? (
              <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs sm:text-sm">
                Logado como {user.name}
              </span>
            ) : (
              <span className="px-3 py-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg text-xs sm:text-sm">
                Não logado
              </span>
            )}

            <button
              onClick={clearChat}
              className="p-2 bg-red-600 rounded-lg text-white"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* QUICK QUESTIONS */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => setInputMessage(q.label)}
               className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs sm:text-sm flex items-center gap-1 justify-center"
            >
              <span className="text-xs">{q.icon}</span>
              <span className="truncate">{q.label}</span>
            </button>
          ))}
        </div>

        {/* FUNÇÕES */}
        <div className="mb-6">
          <button
            onClick={() => setShowFuncoes(!showFuncoes)}
            className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm"
          >
            Funções {showFuncoes ? "▲" : "▼"}
          </button>

          {showFuncoes && (
            <div className="mt-3 p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col gap-3">
              <button
                onClick={() => sendMessage("funcoes")}
                className="px-4 py-2.5 bg-slate-800 rounded-xl text-white text-sm"
              >
                📜 Mostrar funções
              </button>

              <button
                onClick={() =>
                  setInputMessage('criar estoque chamado "MeuEstoque"')
                }
                className="px-4 py-2.5 bg-slate-800 rounded-xl text-white text-sm"
              >
                📦 Criar estoque
              </button>

              <button
                onClick={() => setShowAddItemForm(!showAddItemForm)}
                className="px-4 py-2.5 bg-slate-800 rounded-xl text-white text-sm"
              >
                ➕ Adicionar item
              </button>

              {showAddItemForm && (
                <div className="p-4 bg-slate-800/70 border border-slate-700 rounded-xl flex flex-col gap-4">
                  <h3 className="text-white font-semibold text-lg">+ Adicionar Novo Item</h3>
                  
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Nome do Item</label>
                    <input
                      value={formItemName}
                      onChange={(e) => setFormItemName(e.target.value)}
                      placeholder="Ex: Arroz Integral"
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Descrição</label>
                    <input
                      placeholder="Ex: Pacote de 1kg"
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm mb-2">Data de Validade</label>
                      <input
                        type="date"
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm mb-2">Categoria</label>
                      <select
                        value={formItemCategory}
                        onChange={(e) => setFormItemCategory(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                      >
                        <option value="">Selecione...</option>
                        <option value="comida">Comida</option>
                        <option value="bebida">Bebida</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm mb-2">Quantidade</label>
                      <input
                        value={formItemQuantity}
                        onChange={(e) => setFormItemQuantity(Number(e.target.value))}
                        type="number"
                        min={1}
                        placeholder="1"
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm mb-2">Unidade de Medida</label>
                      <select
                        value={formItemUnit}
                        onChange={(e) => setFormItemUnit(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                      >
                        <option value="">Selecione a unidade...</option>
                          <option value="gramas">Gramas (g)</option>
                          <option value="quilogramas">Quilogramas (kg)</option>
                          <option value="mililitros">Mililitros (ml)</option>
                          <option value="litros">Litros (L)</option>
                          <option value="unidades">Unidade</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm mb-2">Estoque</label>
                      <select
                        value={selectedStorageId || ""}
                        onChange={(e) => setSelectedStorageId(Number(e.target.value))}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                      >
                        <option value="">Selecione um estoque...</option>
                        {storages.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={handleAddItemSubmit}
                      className="flex-1 px-4 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                      Adicionar Item
                    </button>
                    <button
                      onClick={() => setShowAddItemForm(false)}
                      className="px-6 py-3 bg-slate-700 rounded-xl text-white font-medium hover:bg-slate-600 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CHAT */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl"> 
           <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] pr-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[90%] sm:max-w-[80%] text-sm sm:text-base ${
                    msg.role === "assistant"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-white"
                  }`}
                >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="p-3 rounded-xl bg-blue-600 text-white animate-pulse w-fit text-sm">
                Digitando...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-stretch gap-1 border border-slate-700 rounded-xl overflow-hidden bg-slate-800/50">
            <input
              type="text"
              placeholder="Digite sua pergunta..."
              className="flex-1 p-3 bg-transparent text-white text-sm sm:text-base min-w-0"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={() => sendMessage()}
              className="px-4 sm:px-6 py-3 bg-blue-600 text-white flex items-center justify-center min-w-[50px]" 
            >
              <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5 rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
