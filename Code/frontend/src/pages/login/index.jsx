import React, { useState } from "react";
import api from "../../services/api.service";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [recoverEmail, setRecoverEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [twoFACode, setTwoFACode] = useState("");
  const [requires2FA, setRequires2FA] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const payload = { email, password };
  
      if (requires2FA) {
        payload.twoFACode = twoFACode;
      }
  
      const response = await api.post('/auth/login', payload, {
        withCredentials: true
      });
  
      if (response.data.token) {
        setAlertMessage({ type: 'success', text: 'Login realizado com sucesso!' });
        setShowAlert(true);
        localStorage.setItem('token', response.data.token);
        window.location.href = "/telaInicial";
      }
    } catch (error) {
      setIsLoading(false);
  
      const data = error.response?.data;
  
      if (data?.requires2FA) {
        setRequires2FA(true);
        setAlertMessage({
          type: 'info',
          text: 'Digite o código 2FA do seu autenticador.',
        });
      } else if (data?.errors && data.errors.length > 0) {
        setAlertMessage({ type: 'error', text: data.errors[0].message });
      } else if (data?.message) {
        setAlertMessage({ type: 'error', text: data.message });
      } else {
        setAlertMessage({ type: 'error', text: 'Erro ao fazer login.' });
      }
  
      setShowAlert(true);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar
        </button>

        {/* Login Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light mb-2">Entrar</h1>
            <p className="text-gray-400">Acesse sua conta STORAGE</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="••••••••"
                required
              />
            </div>
            {requires2FA && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Código 2FA
                </label>
                <input
                  type="text"
                  value={twoFACode}
                  onChange={(e) => setTwoFACode(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="123456"
                  required
                />
              </div>
            )}

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-300">Lembrar de mim</span>
              </label>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-blue-400 hover:text-blue-300"
              >
                Esqueceu a senha?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Entrando...</span>
                </div>
              ) : (
                "Entrar"
              )}
            </button>

            {alertMessage && (
              <div
                className={`mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-center transition-all duration-500 ${
                  showAlert
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                } ${
                  alertMessage.type === "success"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}
              >
                {alertMessage.type === "success" ? (
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                {alertMessage.text}
              </div>
            )}

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">
                  ou continue com
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-1 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
            </div>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Não tem uma conta?{" "}
              <a
                href="/cadastro"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Cadastre-se aqui
              </a>
            </p>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-2xl min-w-[400px] shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Recuperar senha
            </h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  await api.post("/user/forgot-password", {
                    email: recoverEmail,
                  });

                  setShowModal(false);
                  setAlertMessage({
                    type: "success",
                    text: "Se o email existir, enviaremos instruções para redefinir sua senha.",
                  });
                  setShowAlert(true);
                } catch (error) {
                  console.error("Erro ao enviar email:", error);
                  setAlertMessage({
                    type: "error",
                    text: "Erro ao tentar enviar o e-mail de recuperação.",
                  });
                  setShowAlert(true);
                }
              }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="recoverEmail"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email cadastrado:
                </label>
                <input
                  type="email"
                  id="recoverEmail"
                  value={recoverEmail}
                  onChange={(e) => setRecoverEmail(e.target.value)}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
