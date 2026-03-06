# Site Pessoal - Sebastião Rogério

Este é meu site pessoal construído com Next.js, onde compartilho minha experiência profissional, artigos publicados, projetos e dicas.

## Tecnologias Utilizadas

- **Next.js** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **GitHub Pages** - Hospedagem

## Estrutura do Projeto

- `/` - Página inicial
- `/experiencia` - Minha trajetória profissional
- `/artigos` - Artigos publicados
- `/projetos` - Projetos em que estou envolvido
- `/blog` - Dicas e posts
- `/contato` - Redes sociais e contato

## Como Rodar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Deploy no GitHub Pages

1. Faça commit e push do código para um repositório no GitHub.

2. Configure o repositório para GitHub Pages:
   - Vá para Settings > Pages
   - Selecione "GitHub Actions" como source

3. Para deploy manual:
   ```bash
   npm run export
   npm run deploy
   ```

O site será publicado em `https://seuusuario.github.io/nome-do-repo`.

## Personalização

Edite os arquivos em `src/app/` para adicionar seu conteúdo pessoal. Substitua os placeholders pelos seus dados reais.
