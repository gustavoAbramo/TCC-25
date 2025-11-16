import React, { useState, useEffect } from "react";
import api from "../services/api.service";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mapeia ações para textos legíveis e cores
  const actionLabels = {
    ADD_ITEM: { label: "adicionou", color: "text-green-600 bg-green-100" },
    REMOVE_ITEM: { label: "removeu", color: "text-red-600 bg-red-100" },
    UPDATE_ITEM: { label: "atualizou", color: "text-yellow-600 bg-yellow-100" },
  };

useEffect(() => {
  async function fetchHistory() {
    try {
      const res = await api.get("/history/myHistory",  { withCredentials: true });

      // Se res.data não for array, transforma em array vazio
      setHistory(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Erro ao buscar histórico:", err);
      setHistory([]); // fallback
    } finally {
      setLoading(false);
    }
  }
  fetchHistory();
}, []);


  return (
    <div className="w-full bg-background p-4 sm:p-6 lg:p-8">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Histórico de Atividades</h1>
        <p className="text-gray-400 mt-2">
          Veja todas as ações realizadas nos estoques e itens.
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></span>
          <span className="text-blue-700 font-medium">Carregando histórico...</span>
        </div>
      ) : history.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Nenhum histórico disponível no momento.
        </p>
      ) : (
        <ul className="space-y-4 max-w-3xl mx-auto">
          {history.map((item) => {
            const actionInfo = actionLabels[item.action] || {
              label: "realizou uma ação em",
              color: "text-gray-600 bg-gray-100",
            };

            return (
              <li
                key={item._id}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-blue-700">
                      {item.username}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${actionInfo.color}`}
                    >
                      {actionInfo.label}
                    </span>
                    <span className="font-medium text-gray-700">
                      {item.quantity} {item.unit}
                    </span>
                    <span className="text-gray-800 font-semibold">
                      de {item.itemName}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 italic">
                    {new Date(item.createdAt).toLocaleString("pt-BR")}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
