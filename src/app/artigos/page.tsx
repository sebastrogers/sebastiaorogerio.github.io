export default function Artigos() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Artigos Publicados</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Lista de artigos que publiquei em diferentes plataformas.</p>
      
      <div className="space-y-4">
        <a href="#" className="block border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition">
          <h3 className="text-xl font-bold mb-2">Título do Artigo 1</h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">Data - Nome da Plataforma</p>
          <p className="text-slate-600 dark:text-slate-400">Resumo ou descrição breve do artigo...</p>
        </a>

        <a href="#" className="block border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition">
          <h3 className="text-xl font-bold mb-2">Título do Artigo 2</h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">Data - Nome da Plataforma</p>
          <p className="text-slate-600 dark:text-slate-400">Resumo ou descrição breve do artigo...</p>
        </a>

        <a href="#" className="block border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition">
          <h3 className="text-xl font-bold mb-2">Título do Artigo 3</h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">Data - Nome da Plataforma</p>
          <p className="text-slate-600 dark:text-slate-400">Resumo ou descrição breve do artigo...</p>
        </a>
      </div>
    </div>
  );
}