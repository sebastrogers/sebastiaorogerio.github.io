import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Olá! Sou <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Sebastião Rogério</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Desenvolvedor, criador de conteúdo e entusiasta de tecnologia compartilhando experiências, artigos e projetos.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <a href="/contato" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition">
              Entre em Contato
            </a>
            <a href="/projetos" className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-900 rounded-lg font-semibold transition">
              Ver Projetos
            </a>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
        <a href="/experiencia" className="group">
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Experiência</h3>
            <p className="text-slate-600 dark:text-slate-400">Minha trajetória profissional e conquistas.</p>
          </div>
        </a>

        <a href="/artigos" className="group">
          <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Artigos</h3>
            <p className="text-slate-600 dark:text-slate-400">Artigos publicados em várias plataformas.</p>
          </div>
        </a>

        <a href="/projetos" className="group">
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Projetos</h3>
            <p className="text-slate-600 dark:text-slate-400">Projetos em que estou envolvido.</p>
          </div>
        </a>

        <a href="/blog" className="group">
          <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition">
            <div className="text-3xl mb-4">✍️</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Blog</h3>
            <p className="text-slate-600 dark:text-slate-400">Dicas, posts e pensamentos pessoais.</p>
          </div>
        </a>

        <a href="/contato" className="group">
          <div className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Redes Sociais</h3>
            <p className="text-slate-600 dark:text-slate-400">Conecte-se comigo nas minhas redes.</p>
          </div>
        </a>

        <a href="/blog" className="group">
          <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Dicas</h3>
            <p className="text-slate-600 dark:text-slate-400">Dicas úteis e insights compartilhados.</p>
          </div>
        </a>
      </section>
    </div>
  );
}
