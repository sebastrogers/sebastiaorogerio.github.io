export default function Projetos() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Projetos</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Projetos em que estou envolvido.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="#" className="group border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Projeto 1</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Descrição breve do projeto e tecnologias utilizadas.</p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">Saiba mais →</p>
        </a>

        <a href="#" className="group border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition">
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Projeto 2</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Descrição breve do projeto e tecnologias utilizadas.</p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">Saiba mais →</p>
        </a>

        <a href="#" className="group border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Projeto 3</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Descrição breve do projeto e tecnologias utilizadas.</p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">Saiba mais →</p>
        </a>
      </div>
    </div>
  );
}