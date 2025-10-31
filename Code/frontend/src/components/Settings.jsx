"use client"

import { useState, useEffect } from "react"
import QRCode from "react-qr-code"
import api from "../services/api.service"

export default function Settings() {
  const [otpauthUrl, setOtpauthUrl] = useState("")
  const [token2FA, setToken2FA] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [nameChangeform, setNameChangeForm] = useState(false)
  const [Newname, setNameNew] = useState("")
  const [userName, setUserName] = useState("")


  async function handleGenerate2FA() {
    setLoading(true)
    setError("")
    try {
      const response = await api.get("/auth/2fa/generate")

      if (response.data.data?.otpauth_url) {
        setOtpauthUrl(response.data.data.otpauth_url)
      } else if (response.data.message) {
        setSuccessMsg(response.data.message)
      }
    } catch (err) {
      setError("Erro ao gerar QR code 2FA")
    }
    setLoading(false)
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/user/me", { withCredentials: true })
        setUserName(res.data.user.name)

      } catch (err) {
        // trate o erro se quiser
      }
    }
    fetchUser()
  }, [setUserName])

  async function handleVerify2FA(e) {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccessMsg("")
    try {
      const response = await api.post("/auth/2fa/verify", { token: token2FA })
      if (response.data.success) {
        setSuccessMsg("2FA ativado com sucesso!")
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao ativar 2FA")
    }
    setLoading(false)
  }

  const handleChangeName = async (e) => {
    e.preventDefault()

    try {
      const res = await api.post("/user/changeName", { newName: Newname }, { withCredentials: true })
      setNameNew("")
      setSuccessMsg("Nome atualizado com sucesso! Faça login novamente para ver a alteração.")
      setNameChangeForm(false)
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.message || "Erro ao atualizar nome")
      }
    }
  }

  return (
    <div className="bg-background w-full">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Configurações</h1>
          <p className="text-slate-400 text-lg">Gerencie sua conta e preferências de segurança</p>
        </div>

        {/* Alert Messages */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-red-200 text-sm font-medium">{error}</p>
            </div>
          </div>
        )}

        {successMsg && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-emerald-200 text-sm font-medium">{successMsg}</p>
            </div>
          </div>
        )}

        {/* Settings Cards Container */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">Perfil</h2>
                <p className="text-slate-400 text-sm">Atualize suas informações pessoais</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                {userName ? userName.charAt(0).toUpperCase() : "U"}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Nome atual</p>
                  <p className="text-white font-medium">{userName || "Carregando..."}</p>
                </div>
                <button
                  onClick={() => setNameChangeForm(true)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Alterar nome
                </button>
              </div>
            </div>
          </div>

          {/* 2FA Security Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Autenticação de Dois Fatores</h2>
                <p className="text-slate-400 text-sm">Adicione uma camada extra de segurança à sua conta</p>
              </div>
            </div>

            {!otpauthUrl && (
              <div className="mt-6">
                <button
                  onClick={handleGenerate2FA}
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Gerando...
                    </span>
                  ) : (
                    "Ativar 2FA"
                  )}
                </button>
              </div>
            )}

            {otpauthUrl && (
              <div className="mt-6 space-y-6">
                <div className="bg-white p-6 rounded-xl inline-block">
                  <QRCode value={otpauthUrl} size={200} />
                </div>

                <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                  <p className="text-slate-300 text-sm mb-2">
                    <span className="font-semibold text-white">Passo 1:</span> Escaneie o QR code acima com seu
                    aplicativo autenticador (Google Authenticator, Authy, etc.)
                  </p>
                  <p className="text-slate-300 text-sm">
                    <span className="font-semibold text-white">Passo 2:</span> Digite o código de 6 dígitos gerado pelo
                    app abaixo
                  </p>
                </div>

                <form onSubmit={handleVerify2FA} className="space-y-4">
                  <div>
                    <label htmlFor="token2fa" className="block text-sm font-medium text-slate-300 mb-2">
                      Código de verificação
                    </label>
                    <input
                      id="token2fa"
                      type="text"
                      value={token2FA}
                      onChange={(e) => setToken2FA(e.target.value)}
                      maxLength={6}
                      required
                      placeholder="000000"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
                  >
                    {loading ? "Verificando..." : "Confirmar 2FA"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Name Change Modal */}
      {nameChangeform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h3 className="text-xl font-semibold text-white">Alterar nome</h3>
              <button
                type="button"
                onClick={() => setNameChangeForm(false)}
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleChangeName} className="p-6 space-y-4">
              <div>
                <label htmlFor="newname" className="block text-sm font-medium text-slate-300 mb-2">
                  Novo nome
                </label>
                <input
                  id="newname"
                  type="text"
                  required
                  value={Newname}
                  onChange={(e) => setNameNew(e.target.value)}
                  placeholder="Digite seu novo nome"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setNameChangeForm(false)}
                  className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 shadow-lg shadow-blue-500/20"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
