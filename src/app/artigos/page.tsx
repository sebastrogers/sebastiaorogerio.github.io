export default function Artigos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Artigos Publicados</h1>
      <p className="mb-4">Lista de artigos que publiquei.</p>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline">Título do Artigo 1</a> - Data
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">Título do Artigo 2</a> - Data
        </li>
        {/* Adicione mais artigos */}
      </ul>
    </div>
  );
}