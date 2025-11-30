import React, { useState } from "react";
import api from "../../services/api.service";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    assunto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await api.post(
      "/notifications/email/contact",
      form,
      { withCredentials: true }
    );

    if (!response || response.status !== 200) {
      throw new Error("Erro ao enviar");
    }

    setShowModal(true);
    setForm({ nome: "", email: "", empresa: "", assunto: "", mensagem: "" });
  } catch (err) {
    alert("Erro ao enviar. Tente novamente.");
  }

  setLoading(false);
};
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-gray-800/40 to-gray-900/60">
          <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 py-20 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-8">
            Entre em <span className="text-blue-400">Contato</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Estamos aqui para ajudar você a revolucionar a gestão do seu estoque. Fale conosco!
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-light mb-8">Envie sua mensagem</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
                <select
                  name="assunto"
                  value={form.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="demo">Solicitar demonstração</option>
                  <option value="pricing">Informações sobre preços</option>
                  <option value="support">Suporte técnico</option>
                  <option value="partnership">Parcerias</option>
                  <option value="other">Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                <textarea
                  rows={6}
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-spin mr-2">⏳</span>
                ) : (
                  "Enviar mensagem"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-8">Outras formas de contato</h2>
            </div>
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* ...existing contact cards code... */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-300 mb-2">smartstorage21@gmail.com</p>
                    <p className="text-sm text-gray-400">Respondemos em até 24 horas</p>
                  </div>
                </div>
              </div>
              {/* ...other contact cards... */}
              {/* Telefone */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <p className="text-gray-300 mb-2">(11) 9999-8888</p>
                    <p className="text-sm text-gray-400">Segunda a sexta, 9h às 18h</p>
                  </div>
                </div>
              </div>
              {/* Endereço */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-300 mb-2">
                      Av. Paulista, 1000
                      <br />
                      São Paulo, SP - 01310-100
                    </p>
                    <p className="text-sm text-gray-400">Sede principal</p>
                  </div>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-300 mb-2">(11) 99999-8888</p>
                    <p className="text-sm text-gray-400">Atendimento rápido</p>
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">Dúvidas frequentes?</h3>
              <p className="text-gray-300 mb-4">Confira nossa seção de perguntas frequentes para respostas rápidas.</p>
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition-colors">Ver FAQ</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmação */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-8 animate-fade-in max-w-sm w-full text-center">
            <h2 className="text-2xl mb-4">Mensagem enviada!</h2>
            <p className="mb-6 text-gray-300">Obrigado pelo contato. Retornaremos em breve.</p>
            <button
              className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition-colors"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Fade-in animation style */}
      <style>
        {`
          @keyframes fade-in { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
          .animate-fade-in { animation: fade-in 0.3s cubic-bezier(.4,0,.2,1); }
        `}
      </style>
    </div>
  );
}
// To implement modal and form feedback, use React state and event handlers above in your component.
// Remove any <script> tags and direct DOM manipulation from JSX files.