import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao meu site pessoal</h1>
      <p className="text-lg mb-8">
        Aqui você encontra minha experiência profissional, artigos publicados, projetos em que estou envolvido, minhas redes sociais e dicas úteis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="/experiencia" className="block p-4 bg-blue-100 rounded hover:bg-blue-200">
          <h2 className="text-xl font-semibold">Experiência</h2>
          <p>Minha trajetória profissional.</p>
        </a>
        <a href="/artigos" className="block p-4 bg-green-100 rounded hover:bg-green-200">
          <h2 className="text-xl font-semibold">Artigos</h2>
          <p>Artigos que publiquei.</p>
        </a>
        <a href="/projetos" className="block p-4 bg-purple-100 rounded hover:bg-purple-200">
          <h2 className="text-xl font-semibold">Projetos</h2>
          <p>Projetos em que estou envolvido.</p>
        </a>
        <a href="/blog" className="block p-4 bg-yellow-100 rounded hover:bg-yellow-200">
          <h2 className="text-xl font-semibold">Blog</h2>
          <p>Dicas, posts e pensamentos.</p>
        </a>
        <a href="/contato" className="block p-4 bg-red-100 rounded hover:bg-red-200">
          <h2 className="text-xl font-semibold">Contato</h2>
          <p>Minhas redes sociais e formas de contato.</p>
        </a>
      </div>
    </div>
  );
}
