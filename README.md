# Arte Construir - Site Vue.js

Site institucional moderno e responsivo para a empresa Arte Construir, desenvolvido com Vue.js 3, Vite e tecnologias modernas.

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript reativo
- **Vite** - Build tool moderna e rápida
- **Vue Router 4** - Roteamento SPA
- **Pinia** - Gerenciamento de estado
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript ES6+** - Funcionalidades interativas

## 📁 Estrutura do Projeto

```
arte-contruir/
├── index.html              # Página principal
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
├── src/                    # Código fonte
│   ├── main.js             # Ponto de entrada
│   ├── App.vue             # Componente raiz
│   ├── router/             # Configuração de rotas
│   │   └── index.js
│   ├── components/         # Componentes reutilizáveis
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── views/              # Páginas/Views
│   │   ├── Home.vue
│   │   ├── Projetos.vue
│   │   ├── Decks.vue
│   │   └── Parceiros.vue
│   ├── assets/             # Recursos estáticos
│   │   ├── images/         # Imagens
│   │   └── styles/         # Estilos CSS
│   │       └── main.css
│   ├── composables/        # Composables Vue
│   └── stores/             # Stores Pinia
└── README.md              # Este arquivo
```

## 🎯 Funcionalidades

### Páginas Principais
- **Home**: Banner principal, quem somos, prévia dos projetos e contato
- **Projetos**: Chalés (Aimee, Suíço, da Montanha, Aurora) e Lofts (30m², 40m², 60m²)
- **Decks**: Madeira natural vs plástica, galeria de projetos e processo
- **Parceiros**: TW Brazil, Inbrasil e equipe (Letícia e Tiago)

### Componentes Vue
- **AppHeader**: Menu de navegação responsivo com glassmorphism
- **AppFooter**: Rodapé com informações de contato e links
- **Chatbots Interativos**: Letícia (arquiteta) e Tiago (corretor) com IA simulada
- **Modais**: Galerias de imagens e informações de parceiros
- **Formulários**: Validação e envio com feedback

### Funcionalidades Interativas
- **Navegação SPA**: Transições suaves entre páginas
- **Chatbots IA**: Conversas simuladas com respostas inteligentes
- **Galerias**: Lightbox para visualização de imagens
- **Filtros**: Sistema de filtros para galeria de projetos
- **Animações**: Números animados e efeitos de scroll
- **Formulários**: Validação em tempo real e feedback visual

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm run lint` - Linting do código

## 🎨 Design System

### Cores
- **Primary**: #000000 (Preto)
- **Secondary**: #ffffff (Branco)
- **Accent**: #B8860B (Dourado)
- **Gold Light**: #DAA520 (Dourado claro)
- **Gold Dark**: #8B6914 (Dourado escuro)

### Tipografia
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: xs (0.75rem) até 4xl (2.25rem)

### Componentes
- **Botões**: Primary, Secondary, Large
- **Cards**: Hover effects e sombras
- **Modais**: Backdrop blur e animações
- **Formulários**: Validação visual e feedback

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: 1200px+

### Breakpoints CSS
```css
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 480px) { /* Small Mobile */ }
```

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
VITE_APP_TITLE=Arte Construir
VITE_APP_DESCRIPTION=Chalés de Madeira e Decks no Rio de Janeiro
```

### Configuração do Vite
O arquivo `vite.config.js` está configurado com:
- Alias para imports (`@/`, `@components/`, etc.)
- Servidor de desenvolvimento na porta 3000
- Build otimizado com sourcemaps

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/` e podem ser servidos por qualquer servidor web estático.

### Deploy em Serviços
- **Netlify**: Arraste a pasta `dist/` ou conecte o repositório
- **Vercel**: Conecte o repositório e configure o build command
- **GitHub Pages**: Use GitHub Actions para deploy automático

## 📊 Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Componentes carregados quando necessário
- **Tree Shaking**: Código não utilizado removido
- **Minificação**: CSS e JS minificados
- **Compressão**: Assets comprimidos

### Métricas
- **Lighthouse Score**: 90+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔍 SEO

### Meta Tags
- Títulos únicos para cada página
- Meta descriptions otimizadas
- Open Graph tags para redes sociais
- Schema.org markup

### Estrutura Semântica
- HTML5 semântico
- Headings hierárquicos
- Alt texts em imagens
- ARIA labels para acessibilidade

## 🧪 Testes

### Testes Implementados
- **Responsividade**: Testado em múltiplos dispositivos
- **Navegação**: Links e rotas funcionando
- **Formulários**: Validação e envio
- **Chatbots**: Interações funcionais
- **Performance**: Core Web Vitals

## 📞 Suporte

Para dúvidas sobre o projeto:
- **E-mail**: artechales@gmail.com
- **Telefone**: (11) 94311-2721 / (21) 96017-1061

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para Arte Construir.

---

**Desenvolvido com ❤️ usando Vue.js 3**
