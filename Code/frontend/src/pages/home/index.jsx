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
          <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
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
          Somos Storage. Desenvolvemos soluções personalizadas de gestão de estoque para empresas inovadoras.
        </h2>
        <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-light mb-16 text-center">
          O que nós <span className="text-blue-400">fazemos</span>
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
                Desenvolvemos sistemas inteligentes que monitoram automaticamente seus níveis de estoque. Receba alertas
                em tempo real sobre produtos em baixa quantidade e otimize suas compras.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Status do sistema</span>
                <span className="text-blue-400">● Online</span>
              </div>
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
              <h3 className="text-2xl font-semibold mb-3">Relatórios Inteligentes</h3>
              <p className="text-gray-300 leading-relaxed">
                Nossa solução gera relatórios detalhados e insights valiosos sobre seu estoque. Identifique tendências,
                produtos mais vendidos e otimize sua operação com dados precisos.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Relatórios gerados</span>
                <span className="text-blue-400">1.2k este mês</span>
              </div>
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
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Produtos monitorados</span>
                <span className="text-yellow-400">847 itens</span>
              </div>
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
                Automatize pedidos de reposição, categorização de produtos e atualizações de estoque. Nossa IA aprende
                com seus padrões e otimiza continuamente seus processos.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Automações ativas</span>
                <span className="text-blue-400">12 processos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
