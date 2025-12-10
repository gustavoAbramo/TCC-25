import { useState } from "react";
import api from "../services/api.service.js";

export default function Alexa() {
    const [linkCode, setLinkCode] = useState(null);
    const [loadingCode, setLoadingCode] = useState(false);
    const [syncStatus, setSyncStatus] = useState("nunca");

    async function handleGenerateCode() {
        try {
            setLoadingCode(true);

            const res = await api.post("/alexa/link-code");

            setLinkCode(res.data.code);
            setSyncStatus("aguardando vinculação");
        } catch (e) {
            alert("Erro ao gerar código da Alexa");
            console.error(e);
        } finally {
            setLoadingCode(false);
        }
    }

    async function handleCheckProfile() {
        try {
            const res = await api.get("/alexa/profile");

            alert("Aguardando vinculação");
            setSyncStatus("vinculado");

        } catch (e) {
            alert("Usuário ainda não vinculado à Alexa.");
            setSyncStatus("não vinculado");
        }
    }

    return (
        <div className="w-full bg-background p-4 sm:p-6 lg:p-8 flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-white text-center">

                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                        ⚙️ Gerenciar Alexa
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Configure e conecte a Alexa ao seu sistema de gerenciamento.
                    </p>
                </div>

                <div className="space-y-5">

                    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-400 text-xl">🎙️</span>
                            <span>Gerar código de vinculação</span>
                        </div>
                        <button
                            onClick={handleGenerateCode}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            {loadingCode ? "Gerando..." : "Gerar"}
                        </button>
                    </div>

                    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-400 text-xl">📡</span>
                            <span>Verificar vínculo com a Alexa</span>
                        </div>
                        <button
                            onClick={handleCheckProfile}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            Verificar
                        </button>
                    </div>
                </div>

                {linkCode && (
                    <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-blue-600">
                        <h2 className="text-xl font-bold mb-2">🔑 Código da Alexa</h2>
                        <p className="text-4xl font-mono tracking-widest text-blue-400">
                            {linkCode}
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Diga à Alexa: <span className="text-white">"Alexa, vincular minha conta"</span>
                        </p>
                    </div>
                )}

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Última sincronização: <span className="text-gray-300">{syncStatus}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
