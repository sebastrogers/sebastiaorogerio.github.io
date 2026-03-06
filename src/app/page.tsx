export default function Home() {
  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="container-custom text-center relative z-10">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm font-medium text-cyan-400">🚀 Desenvolvedor Full Stack</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Sebastião<br />
              <span className="glow-text">Rogério</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transformando ideias em código. Especialista em desenvolvimento web,
              apaixonado por tecnologia e sempre aprendendo algo novo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projetos" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg glow-card animate-pulse-glow transition-all duration-300">
                Ver Meus Projetos
              </a>
              <a href="/contato" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300">
                Entre em Contato
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <p className="text-gray-400 mb-6">Tecnologias que domino:</p>
            <div className="flex flex-wrap justify-center gap-6 text-2xl">
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400 transition">
                <span className="text-cyan-400">React</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400 transition">
                <span className="text-cyan-400">Next.js</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400 transition">
                <span className="text-cyan-400">TypeScript</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400 transition">
                <span className="text-cyan-400">Node.js</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400 transition">
                <span className="text-cyan-400">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-gray-300 text-lg mb-6">
                Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras.
                Com experiência em desenvolvimento web full-stack, sempre busco as melhores
                tecnologias e práticas para entregar produtos de alta qualidade.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Além do código, gosto de compartilhar conhecimento através de artigos,
                tutoriais e projetos open source. Acredito que a tecnologia deve ser
                acessível e que todos podem aprender a programar.
              </p>
              <div className="flex gap-4">
                <a href="/experiencia" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition">
                  Minha Experiência
                </a>
                <a href="/artigos" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg transition">
                  Meus Artigos
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl glow-card flex items-center justify-center">
                <div className="text-6xl animate-float">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glow-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Projeto 1</h3>
              <p className="text-gray-300 mb-4">Descrição incrível do projeto com tecnologias modernas.</p>
              <a href="/projetos" className="text-cyan-400 hover:text-cyan-300 font-semibold">Ver detalhes →</a>
            </div>

            <div className="glow-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Projeto 2</h3>
              <p className="text-gray-300 mb-4">Outro projeto incrível com stack completa.</p>
              <a href="/projetos" className="text-cyan-400 hover:text-cyan-300 font-semibold">Ver detalhes →</a>
            </div>

            <div className="glow-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3">Projeto 3</h3>
              <p className="text-gray-300 mb-4">Projeto inovador com tecnologias emergentes.</p>
              <a href="/projetos" className="text-cyan-400 hover:text-cyan-300 font-semibold">Ver detalhes →</a>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/projetos" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg glow-card transition-all duration-300">
              Ver Todos os Projetos
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estou sempre interessado em novos projetos e oportunidades.
            Vamos discutir como posso ajudar a transformar suas ideias em realidade.
          </p>
          <a href="/contato" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg glow-card animate-pulse-glow transition-all duration-300">
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  );
}
