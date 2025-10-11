import React, { useState, useEffect } from "react";
import api from "../../services/api.service";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();



    try {
      await api.post('/auth/register', { name, email, password });

      setName('');
      setEmail('');
      setPassword('');

      setAlertMessage({ type: 'success', text: 'Usuário cadastrado com sucesso!' });
      setShowAlert(true);
    }  catch (error) {
      const errors = error.response?.data?.errors;
      const message = error.response?.data?.message;
    
      if (errors && errors.length > 0) {
        // Se vier como array de erros
        setAlertMessage({ type: 'error', text: errors[0].message });
      } else if (message) {
        // Se vier como string
        setAlertMessage({ type: 'error', text: message });
      } else {
        // Fallback genérico
        setAlertMessage({ type: 'error', text: 'Erro ao cadastrar usuário.' });
      }
    
      setShowAlert(true);
    }
    
  };

  // Faz o alerta sumir depois de 4 segundos
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="relative z-10 w-full max-w-md">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

        {/* Register Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light mb-2">Criar conta</h1>
            <p className="text-gray-400">Comece a gerenciar seu estoque hoje</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Crie uma senha segura"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-lg font-medium transition-colors"
            >
              Criar conta
            </button>

            {/* Novo Alert embaixo do botão */}
            {alertMessage && (
              <div
                className={`mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-center transition-all duration-500 ${
                  showAlert ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                } ${
                  alertMessage.type === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {alertMessage.type === 'success' ? (
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {alertMessage.text}
              </div>
            )}

            {/* Divider */}
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Já tem uma conta?{" "}
              <a href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                Fazer login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
