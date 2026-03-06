export default function Experiencia() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Minha Experiência</h1>
      <p className="mb-4">Aqui você encontrará minha trajetória profissional.</p>
      {/* Adicione seu conteúdo aqui */}
      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Cargo 1</h2>
          <p>Empresa - Período</p>
          <p>Descrição das responsabilidades e conquistas.</p>
        </div>
        {/* Adicione mais experiências */}
      </div>
    </div>
  );
}