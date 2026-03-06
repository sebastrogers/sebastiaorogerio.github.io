export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="mb-4">Dicas, posts e pensamentos.</p>
      <div className="space-y-4">
        <article className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Título do Post 1</h2>
          <p className="text-sm text-gray-600">Data</p>
          <p>Resumo do post...</p>
          <a href="#" className="text-blue-600 hover:underline">Ler mais</a>
        </article>
        <article className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Título do Post 2</h2>
          <p className="text-sm text-gray-600">Data</p>
          <p>Resumo do post...</p>
          <a href="#" className="text-blue-600 hover:underline">Ler mais</a>
        </article>
        {/* Adicione mais posts */}
      </div>
    </div>
  );
}