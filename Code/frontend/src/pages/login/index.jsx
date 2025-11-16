import React, { useState } from "react";
import api from "../../services/api.service";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [twoFACode, setTwoFACode] = useState("");
  const [requires2FA, setRequires2FA] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = { email, password, rememberMe };
      if (requires2FA) {
        payload.token = twoFACode;
      }

      const response = await api.post("/auth/login", payload, {
        withCredentials: true,
      });

      if (response.data.success) {
      setAlertMessage({
        type: "success",
        text: "Login realizado com sucesso!",
      });
      setShowAlert(true);
      navigate("/telaInicial");
    }
    } catch (error) {
      setIsLoading(false);

      const data = error.response?.data;

      if (data?.requires2FA) {
        setRequires2FA(true);
        setAlertMessage({
          type: "info",
          text: "Digite o código 2FA do seu autenticador.",
        });
      } else if (data?.errors && data.errors.length > 0) {
        setAlertMessage({ type: "error", text: data.errors[0].message });
      } else if (data?.message) {
        setAlertMessage({ type: "error", text: data.message });
      } else {
        setAlertMessage({ type: "error", text: "Erro ao fazer login." });
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
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
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

                {alertMessage.type === "info" && (
                  <button
                    onClick={() => setShowAlert(false)}
                    className="ml-2 text-gray-400 hover:text-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
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
                  </button>
                )}
              </div>
            )}

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
            </div>

            {/* Social Login */}
            
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
