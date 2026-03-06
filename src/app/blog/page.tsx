export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Dicas, posts e pensamentos compartilhados regularmente.</p>
      
      <div className="space-y-6">
        <article className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Título do Post 1</h2>
          <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">15 de Março de 2026</p>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Resumo do post com alguns insights e dicas úteis sobre o tema abordado...</p>
          <a href="#" className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300">Ler artigo completo →</a>
        </article>

        <article className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Título do Post 2</h2>
          <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">10 de Março de 2026</p>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Resumo do post com alguns insights e dicas úteis sobre o tema abordado...</p>
          <a href="#" className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300">Ler artigo completo →</a>
        </article>

        <article className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Título do Post 3</h2>
          <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">5 de Março de 2026</p>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Resumo do post com alguns insights e dicas úteis sobre o tema abordado...</p>
          <a href="#" className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300">Ler artigo completo →</a>
        </article>
      </div>
    </div>
  );
}