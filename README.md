# Portfolio Pessoal - Ruben Fontes

Portfolio pessoal desenvolvido com React e React Router para navegação dinâmica sem reload.

## 🚀 Funcionalidades

- **Roteamento Dinâmico**: Navegação entre páginas sem reload usando React Router
- **Página Inicial**: Apresentação pessoal com links importantes
- **Portfolio**: Galeria de projetos com animações e interações
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela
- **Chatbot Integrado**: Integração com Dialogflow para suporte

## 🛠️ Tecnologias Utilizadas

- React 18
- React Router DOM 6
- Vite (Build Tool)
- CSS3 com variáveis CSS
- JavaScript ES6+

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/RubenFontes/personal-portfolio.git
cd personal-portfolio
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
```

4. **Abra no navegador:**
```
http://localhost:3000
```

## 🏗️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   └── Portfolio.jsx   # Página do portfolio
├── styles/             # Arquivos CSS
│   ├── Home.css        # Estilos da página inicial
│   └── Portfolio.css   # Estilos do portfolio
├── assets/             # Recursos estáticos (imagens, fontes)
├── App.jsx             # Componente principal com rotas
└── main.jsx            # Ponto de entrada da aplicação
```

## 🔄 Roteamento

O projeto utiliza React Router para navegação:

- `/` - Página inicial
- `/portfolio` - Galeria de projetos

## 🎨 Personalização

### Cores
As cores principais estão definidas em variáveis CSS no arquivo `src/index.css`:

```css
:root {
  --light-color: #F8FAFC;
  --seccundary-color: #cfd6e4;
  --main-color: #0560ff;
}
```

### Projetos
Para adicionar ou modificar projetos, edite o array `projects` no arquivo `src/pages/Portfolio.jsx`.

## 📱 Responsividade

O design é responsivo e se adapta a diferentes tamanhos de tela:
- Desktop: Layout completo com grid de projetos
- Tablet: Ajustes de espaçamento e tamanhos
- Mobile: Layout otimizado para telas pequenas

## 🚀 Deploy

Para fazer deploy em produção:

1. **Build do projeto:**
```bash
npm run build
```

2. **Os arquivos de produção estarão na pasta `dist/`**

3. **Faça upload da pasta `dist/` para seu servidor web**

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do chatbot integrado na página ou abra uma issue no repositório.

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.
