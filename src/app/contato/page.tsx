export default function Contato() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p className="mb-4">Minhas redes sociais e formas de contato.</p>
      <div className="space-y-2">
        <p><strong>Email:</strong> seuemail@example.com</p>
        <p><strong>LinkedIn:</strong> <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/seuusuario</a></p>
        <p><strong>GitHub:</strong> <a href="#" className="text-blue-600 hover:underline">github.com/seuusuario</a></p>
        <p><strong>Twitter:</strong> <a href="#" className="text-blue-600 hover:underline">@seuusuario</a></p>
        {/* Adicione mais redes */}
      </div>
    </div>
  );
}