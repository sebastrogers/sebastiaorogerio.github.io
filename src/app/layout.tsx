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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50`}
      >
        <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SR
            </a>
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <li><a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a></li>
              <li><a href="/experiencia" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Experiência</a></li>
              <li><a href="/artigos" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Artigos</a></li>
              <li><a href="/projetos" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projetos</a></li>
              <li><a href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Blog</a></li>
              <li><a href="/contato" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contato</a></li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-600 dark:text-slate-400">
            <p>&copy; 2026 Sebastião Rogério. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
