# Arte Construir - Site Institucional

Site institucional moderno e responsivo para a empresa Arte Construir, especializada em construção de chalés de madeira e decks sustentáveis no Rio de Janeiro.

## 🏗️ Estrutura do Projeto

```
arte-contruir/
├── index.html              # Página inicial
├── projetos.html           # Página de projetos (chalés e lofts)
├── decks.html             # Página de decks
├── parceiros.html         # Página de parceiros e equipe
├── assets/                # Recursos do site
│   ├── css/              # Estilos CSS
│   │   ├── main.css      # Estilos principais
│   │   ├── components.css # Componentes reutilizáveis
│   │   └── responsive.css # Estilos responsivos
│   ├── js/               # Scripts JavaScript
│   │   ├── main.js       # Funcionalidades principais
│   │   ├── components.js # Componentes modulares
│   │   └── chatbot.js    # Chatbot interativo
│   └── images/           # Imagens do site
└── README.md             # Este arquivo
```

## 🎯 Funcionalidades

### Páginas Principais
- **Home**: Banner principal, quem somos, prévia dos projetos e contato
- **Projetos**: Chalés (Aimee, Suíço, da Montanha, Aurora) e Lofts (30m², 40m², 60m²)
- **Decks**: Madeira natural vs plástica, galeria de projetos e processo
- **Parceiros**: TW Brazil, Inbrasil e equipe (Letícia e Tiago)

### Componentes
- **Header**: Menu flutuante com glassmorphism
- **Footer**: Informações de contato e links rápidos
- **Chatbot**: Interativo com Letícia (arquiteta) e Tiago (corretor)
- **Formulários**: Validação e envio com feedback
- **Modais**: Para galerias e informações adicionais

### Recursos Estratégicos
- **SEO Otimizado**: Meta tags, estrutura semântica, palavras-chave
- **Analytics**: Rastreamento de CTAs e eventos
- **Responsivo**: Mobile-first design
- **Acessibilidade**: Navegação por teclado e screen readers
- **Performance**: Lazy loading e otimizações

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript ES6+**: Funcionalidades interativas
- **UIKit**: Framework CSS para componentes
- **Google Fonts**: Tipografia (Inter)
- **Google Maps**: Integração de mapa
- **WhatsApp API**: Integração de contato

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: 1200px+

## 🎨 Design System

### Cores
- **Primary**: #000000 (Preto)
- **Secondary**: #ffffff (Branco)
- **Accent**: #B8860B (Dourado correto)
- **Gold Light**: #DAA520 (Dourado claro)
- **Gold Dark**: #8B6914 (Dourado escuro)
- **Text Dark**: #000000
- **Text Light**: #666666
- **White**: #ffffff
- **Light Gray**: #f8f9fa

### Tipografia
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: xs (0.75rem) até 4xl (2.25rem)

### Espaçamentos
- **XS**: 0.25rem
- **SM**: 0.5rem
- **MD**: 1rem
- **LG**: 1.5rem
- **XL**: 2rem
- **2XL**: 3rem
- **3XL**: 4rem

## 🚀 Como Usar

1. **Clone ou baixe** os arquivos do projeto
2. **Adicione as imagens** na pasta `assets/images/`
3. **Configure o Google Analytics** (opcional)
4. **Personalize** os conteúdos conforme necessário
5. **Faça deploy** em seu servidor web

## 📸 Imagens Necessárias

### Favicon e Logo
- `icone-arte-costruir.png` - Favicon (ícone específico) ✅ **CORRIGIDO**
- `logo-arte-costruir.png` - Logo principal da empresa ✅ **CORRIGIDO**

### Hero Sections
- `hero-bg.jpg` - Background da home
- `projects-hero-bg.jpg` - Background da página projetos
- `decks-hero-bg.jpg` - Background da página decks
- `parceiros-hero-bg.jpg` - Background da página parceiros

### Projetos - Chalés (90m² cada)
- `chale-aimee.jpg`, `chale-suico.jpg`, `chale-montanha.jpg`, `chale-aurora.jpg`
- Fotos adicionais: `chale-*-2.jpg`, `chale-*-3.jpg`

### Projetos - Lofts
- `loft-30m.jpg`, `loft-40m.jpg`, `loft-60m.jpg`
- Fotos adicionais: `loft-*-2.jpg`, `loft-*-3.jpg`

### Decks
- `madeira-natural.jpg`, `madeira-plastica.jpg` (Tipos de madeira)
- `deck-natural-1.jpg`, `deck-natural-2.jpg`, `deck-natural-3.jpg`
- `deck-plastica-1.jpg`, `deck-plastica-2.jpg`, `deck-plastica-3.jpg`
- `deck-before-after-1.jpg`, `deck-before-after-2.jpg`, `deck-before-after-3.jpg`

### Parceiros
- `logo-tw-brazil.jpg`, `logo-inbrasil.jpg`

### Equipe
- `leticia-arquiteta.png` ✅ **JÁ ADICIONADO** (apenas foto, sem botões)
- `tiago-corretor.jpeg` ✅ **JÁ ADICIONADO** (apenas foto, sem botões)

### Vídeos
- Vídeo externo - Container da direita na seção "Quem Somos" (URL: https://video.wixstatic.com/video/11062b_d578b9d4ffba48c68d086ec29fe9e6f0/720p/mp4/file.mp4)

**📋 Lista completa**: Ver arquivo `IMAGENS-NECESSARIAS.md`

## 🔧 Configurações

### Google Analytics
Para ativar o Google Analytics, substitua `GA_MEASUREMENT_ID` no arquivo `main.js` pelo seu ID real.

### WhatsApp
Os números de WhatsApp já estão configurados:
- Letícia: (11) 94311-2721
- Tiago: (21) 96017-1061

### Google Maps
O mapa está configurado para o endereço da matriz. Para personalizar, edite o iframe na seção de contato.

## 📊 SEO e Analytics

### Palavras-chave Principais
- "chalés de madeira"
- "construção de chalés no Rio de Janeiro"
- "decks de madeira"
- "casas ecológicas"
- "obras sustentáveis"
- "madeira plástica"

### Eventos Rastreados
- Cliques em CTAs
- Envio de formulários
- Interações com chatbot
- Cliques em links sociais
- Visualizações de páginas

## 🎯 Objetivos de Negócio

1. **Captação de Leads**: Formulários de contato e chatbot
2. **Demonstração de Expertise**: Portfólio de projetos
3. **Credibilidade**: Parceiros e equipe especializada
4. **Conversão**: CTAs estratégicos em todas as páginas
5. **SEO**: Visibilidade orgânica no Google

## 📞 Contato

Para dúvidas sobre o projeto ou personalizações:
- **E-mail**: artechales@gmail.com
- **Telefone**: (11) 94311-2721 / (21) 96017-1061

---

**Desenvolvido com ❤️ para Arte Construir**
