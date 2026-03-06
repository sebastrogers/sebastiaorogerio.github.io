export default function Experiencia() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Minha Experiência</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Aqui você encontrará minha trajetória profissional.</p>
      
      <div className="space-y-6">
        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💼</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Seu Cargo</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Empresa - 2020 - Presente</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Descrição das responsabilidades e conquistas.</p>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💼</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Experiência Anterior</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Outra Empresa - 2018 - 2020</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Descrição das responsabilidades e conquistas.</p>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎓</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Educação</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Sua Formação - Universidade</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Descrição da sua formação acadêmica.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}