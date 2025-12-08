export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-gray-800/50 to-gray-900/80">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 text-center py-32 px-6">
          <h1 className="text-6xl md:text-7xl mb-6 font-semibold">
            Smart Storage
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Organizar nunca foi tão fácil. Nem tão viciante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/sobre" className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg transition-colors">
              Ver recursos
            </a>
            <a href="/cadastro" className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-lg transition-colors">
              Começar agora →
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light mb-6">
          Somos Storage. Um site para você nunca mais ter dificuldades organizando sua cozinha.
        </h2>
        <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-light mb-16 text-center">
          O que nós <span className="text-blue-400">oferecemos</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Controle de Estoque</h3>
              <p className="text-gray-300 leading-relaxed">
                Mantenha seu estoque sempre atualizado com nossa plataforma intuitiva. Adicione, remova e categorize
                produtos facilmente, garantindo que você saiba exatamente o que tem em mãos a qualquer momento.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Histórico completo</h3>
              <p className="text-gray-300 leading-relaxed">
                Acesse o histórico completo das suas interações com o estoque. Veja quais itens foram adicionados, removidos ou modificados, ajudando você a tomar decisões informadas sobre suas compras e uso de produtos.
              </p>
            </div>

          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Gestão de Validade</h3>
              <p className="text-gray-300 leading-relaxed">
                Monitore automaticamente as datas de validade dos seus produtos alimentícios. Receba alertas antecipados
                e reduza o desperdício com nossa gestão inteligente de prazos.
              </p>
            </div>

          </div>

          {/* Feature 4 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Automação Inteligente</h3>
              <p className="text-gray-300 leading-relaxed">
                Integre nossa plataforma com assistentes virtuais como Alexa para facilitar o gerenciamento do seu
                estoque por comandos de voz. Adicione itens, verifique quantidades e muito mais, tudo sem tocar no
                dispositivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
