export default function About() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-gray-800/40 to-gray-900/60">
          <div className="absolute top-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-8 text-center">
            Smart Storage
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 leading-relaxed">
            Revolucionando a gestão de estoque alimentício com tecnologia inteligente e soluções personalizadas.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-10 max-w-5xl mx-auto text-center">
        <div className="md:grid-cols-2 text-5xl md:text-6xl font-light mb-8 text-center">
          <div>
            <h2 className="text-4xl font-light mb-6">Nossa Missão</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Transformar a forma como empresas alimentícias gerenciam seus estoques, proporcionando eficiência, redução
              de desperdícios e otimização de recursos através de tecnologia avançada.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Acreditamos que cada empresa merece ter controle total sobre seu inventário, com desing precisos e
              de facil gestão.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-16 text-center">Nossos Valores</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Inovação</h3>
            <p className="text-gray-300 leading-relaxed">
              Constantemente desenvolvemos novas tecnologias para manter nossos clientes à frente da concorrência.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Compromisso</h3>
            <p className="text-gray-300 leading-relaxed">
              Dedicamos nosso máximo esforço para garantir o sucesso e crescimento de cada cliente parceiro.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Confiabilidade</h3>
            <p className="text-gray-300 leading-relaxed">
              Oferecemos sistemas robustos e seguros que você pode confiar para gerenciar seu negócio.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-16 text-center">Nossa Equipe</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Gu</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Gustavo</h3>
            <p className="text-blue-400 mb-4">Desenvolvedor</p>
            <p className="text-gray-300 text-sm">
              texto descrevendo aqui
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">BR</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Bruno</h3>
            <p className="text-blue-400 mb-4">Desenvolvedor</p>
            <p className="text-gray-300 text-sm">
              texto descrevendo aqui
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">GL</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Guilherme</h3>
            <p className="text-blue-400 mb-4">Desenvolvedor</p>
            <p className="text-gray-300 text-sm">
              texto descrevendo aqui
            </p>
          </div>
        </div>
      </div>

      </div>
  )
}
