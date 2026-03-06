export default function Projetos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projetos</h1>
      <p className="mb-4">Projetos em que estou envolvido.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Projeto 1</h2>
          <p>Descrição breve do projeto.</p>
          <a href="#" className="text-blue-600 hover:underline">Ver mais</a>
        </div>
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Projeto 2</h2>
          <p>Descrição breve do projeto.</p>
          <a href="#" className="text-blue-600 hover:underline">Ver mais</a>
        </div>
        {/* Adicione mais projetos */}
      </div>
    </div>
  );
}