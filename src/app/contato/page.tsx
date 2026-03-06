export default function Contato() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Contato</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Conecte-se comigo através das minhas redes sociais e plataformas.</p>
      
      <div className="space-y-4">
        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">✉️</div>
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <a href="mailto:seu.email@example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">seu.email@example.com</a>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💼</div>
            <div>
              <h3 className="text-lg font-bold">LinkedIn</h3>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">linkedin.com/in/seuusuario</a>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🐙</div>
            <div>
              <h3 className="text-lg font-bold">GitHub</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/seuusuario</a>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">𝕏</div>
            <div>
              <h3 className="text-lg font-bold">Twitter / X</h3>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">@seuusuario</a>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📺</div>
            <div>
              <h3 className="text-lg font-bold">YouTube</h3>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">youtube.com/@seucanal</a>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💻</div>
            <div>
              <h3 className="text-lg font-bold">Portfolio Pessoal</h3>
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">seudominio.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}