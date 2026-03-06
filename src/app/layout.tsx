import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Site Pessoal - Sebastião Rogério",
  description: "Experiência, artigos, projetos e dicas de Sebastião Rogério",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Sebastião Rogério</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/experiencia" className="hover:underline">Experiência</a></li>
              <li><a href="/artigos" className="hover:underline">Artigos</a></li>
              <li><a href="/projetos" className="hover:underline">Projetos</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/contato" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
