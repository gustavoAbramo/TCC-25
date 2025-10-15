import React, { useEffect, useState } from "react";
import api from "../services/api.service";


export default function History() {

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await api.get("/history/myHistory");
        console.log(res.data);
        setHistory(res.data);
      } catch (err) {
        return <p>nenhum historico disponível</p>;
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();
  }, []);

  if (loading) return <p>Carregando histórico...</p>;



    return (
        <>
        <div className="p-6 text-align-center">
            <h1 className="text-2xl font-semibold mb-4">Histórico de Atividades</h1>
            <p className="text-gray-400">Aqui você pode ver o histórico de atividades realizadas no sistema.</p>
        </div>
                <ul>
                    {history.map((item) => (
                        <li key={item._id}>
                            {item.username} adicionou {item.quantity} de {item.itemName} em {new Date(item.createdAt).toLocaleString()}
                        </li>
                    ))}
                </ul>
            </>
    );
}