export default function Alexa() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
            <div className="w-full max-w-lg bg-gray-900/70 border border-gray-700 rounded-2xl shadow-lg p-6 backdrop-blur-md">
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
                            <span>Ativar comandos de voz</span>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            Ativar
                        </button>
                    </div>

                    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-400 text-xl">📶</span>
                            <span>Conectar à rede</span>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            Conectar
                        </button>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Última sincronização: <span className="text-gray-300">nunca</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
