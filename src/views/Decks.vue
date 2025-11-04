<template>
  <div class="decks">
    <!-- Hero Section -->
    <section class="hero-section decks-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Bem-vindo à</h1>
          <h2 class="hero-brand">Arte Construir</h2>
          <p class="hero-subtitle">Não fazemos obras, realizamos sonhos</p>
        </div>
        <div class="hero-scroll-indicator">
          <a href="#" @click="scrollToSection">
            <img src="/src/assets/images/seta-direita 1.png" alt="Seta para baixo" class="arrow-image">
          </a>
        </div>
      </div>
    </section>

    <!-- Galeria de Serviços Section -->
    <section class="servicos-galeria-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Alguns dos Nossos Serviços</h2>
          <p class="section-subtitle">Aqui está um pouco dos decks que fizemos</p>
        </div>
        
        <!-- Grid Desktop -->
        <div class="servicos-grid-imagens desktop-only">
          <div class="servico-imagem-item" v-for="img in servicosImagens" :key="img.id">
            <img 
              :src="img.src" 
              :alt="img.alt"
              loading="lazy"
            >
          </div>
        </div>
        
        <!-- Carrossel Mobile -->
        <div class="servicos-carousel mobile-only">
          <div class="carousel-container">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div class="carousel-slide" v-for="img in servicosImagens" :key="img.id">
                <img :src="img.src" :alt="img.alt" loading="lazy">
              </div>
            </div>
            <button class="carousel-btn carousel-prev" @click="prevSlide" v-if="servicosImagens.length > 1">
              ‹
            </button>
            <button class="carousel-btn carousel-next" @click="nextSlide" v-if="servicosImagens.length > 1">
              ›
            </button>
            <div class="carousel-dots" v-if="servicosImagens.length > 1">
              <span 
                v-for="(img, index) in servicosImagens" 
                :key="index"
                class="dot"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo Section -->
    <section class="processo-section section" id="processo">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nosso Processo de Construção</h2>
          <p class="section-subtitle">Da consulta inicial até a entrega do seu deck</p>
        </div>
        
        <div class="processo-steps">
          <div 
            v-for="(step, index) in processoSteps" 
            :key="index"
            class="step-item">
            <div class="step-card-inner">
              <div class="step-card-front">
                <div class="step-number">{{ step.number }}</div>
                <div class="step-content">
                  <h3>{{ step.title }}</h3>
                  <p class="step-description">{{ step.description }}</p>
                </div>
              </div>
              <div class="step-card-back">
                <div class="step-content">
                  <h3>{{ step.title }}</h3>
                  <p class="step-details">{{ step.details }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contato Section -->
    <section class="contato-section section" id="contato">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Peça Seu Orçamento de Deck</h2>
        </div>
        <div class="grid grid-2">
          <div>
            <div class="contact-info">
              <div class="contact-item">
                <strong>Telefones:</strong>
                <p>(21) 96017-1061</p>
              </div>
              <div class="contact-item">
                <strong>E-mail:</strong>
                <p>artechales@gmail.com</p>
              </div>
              <div class="contact-item">
                <strong>Endereço:</strong>
                <p>Av. Feliciano Sodré, 300 - Várzea, Teresópolis - RJ, 25963-081</p>
              </div>
            </div>
          </div>
          <div>
            <div class="stats-container">
              <div class="stat-item">
                <h3><span class="counter" data-target="500">0</span>+</h3>
                <p>Decks Entregues</p>
              </div>
              <div class="stat-item">
                <h3><span class="counter" data-target="5">0</span>+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div class="stat-item">
                <h3><span class="counter" data-target="100">0</span>%</h3>
                <p>Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Modal -->
    <div v-if="showGalleryModal" class="gallery-modal" @click="closeGalleryModal">
      <div class="gallery-content" @click.stop>
        <button class="gallery-close" @click="closeGalleryModal">&times;</button>
        <h3>{{ currentGalleryItem.title }}</h3>
        <div class="gallery-images">
          <img v-for="(image, index) in currentGalleryItem.images" 
               :key="index" 
               :src="image" 
               :alt="`${currentGalleryItem.title} - Imagem ${index + 1}`"
               @click="openLightbox(index)">
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="showLightbox" class="lightbox-modal" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <button class="lightbox-prev" @click="prevImage" v-if="lightboxImages.length > 1">‹</button>
        <img :src="lightboxImages[currentLightboxIndex]" :alt="`${currentGalleryItem.title} - Imagem ${currentLightboxIndex + 1}`">
        <button class="lightbox-next" @click="nextImage" v-if="lightboxImages.length > 1">›</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'

export default {
  name: 'Decks',
  setup() {
    const activeFilter = ref('all')
    const showGalleryModal = ref(false)
    const showLightbox = ref(false)
    const currentGalleryItem = ref({})
    const currentLightboxIndex = ref(0)
    const lightboxImages = ref([])
    const currentSlide = ref(0)

    // Lista de imagens dos serviços
    const servicosImagens = ref([
      { id: 1, src: '/src/assets/images/01.png', alt: 'Deck 1' },
      { id: 2, src: '/src/assets/images/02.png', alt: 'Deck 2' },
      { id: 3, src: '/src/assets/images/03.png', alt: 'Deck 3' },
      { id: 4, src: '/src/assets/images/04.png', alt: 'Deck 4' },
      { id: 5, src: '/src/assets/images/05.png', alt: 'Deck 5' },
      { id: 6, src: '/src/assets/images/06.png', alt: 'Deck 6' },
      { id: 7, src: '/src/assets/images/07.png', alt: 'Deck 7' },
      { id: 8, src: '/src/assets/images/08.png', alt: 'Deck 8' },
      { id: 9, src: '/src/assets/images/09.png', alt: 'Deck 9' },
      { id: 10, src: '/src/assets/images/10.png', alt: 'Deck 10' },
      { id: 11, src: '/src/assets/images/image 11.png', alt: 'Deck 11' },
      { id: 13, src: '/src/assets/images/image 13.png', alt: 'Deck 13' }
    ])

    const filters = [
      { key: 'all', label: 'Todos' },
      { key: 'natural', label: 'Madeira Natural' },
      { key: 'plastic', label: 'Madeira Plástica' },
      { key: 'before-after', label: 'Antes/Depois' }
    ]

    const galleryItems = [
      {
        category: 'natural',
        title: 'Deck Natural Premium',
        location: 'Residencial em Teresópolis',
        image: '/src/assets/images/deck-natural-1.jpg',
        images: [
          '/src/assets/images/deck-natural-1.jpg',
          '/src/assets/images/deck-natural-2.jpg',
          '/src/assets/images/deck-natural-3.jpg'
        ]
      },
      {
        category: 'plastic',
        title: 'Deck Plástico Sustentável',
        location: 'Residencial em Petrópolis',
        image: '/src/assets/images/deck-plastica-1.jpg',
        images: [
          '/src/assets/images/deck-plastica-1.jpg',
          '/src/assets/images/deck-plastica-2.jpg',
          '/src/assets/images/deck-plastica-3.jpg'
        ]
      },
      {
        category: 'before-after',
        title: 'Transformação Completa',
        location: 'Antes e Depois',
        image: '/src/assets/images/deck-before-after-1.jpg',
        images: [
          '/src/assets/images/deck-before-after-1.jpg',
          '/src/assets/images/deck-before-after-2.jpg',
          '/src/assets/images/deck-before-after-3.jpg'
        ]
      },
      {
        category: 'natural',
        title: 'Deck Natural Moderno',
        location: 'Residencial em Nova Friburgo',
        image: '/src/assets/images/deck-natural-2.jpg',
        images: [
          '/src/assets/images/deck-natural-2.jpg',
          '/src/assets/images/deck-natural-1.jpg',
          '/src/assets/images/deck-natural-3.jpg'
        ]
      },
      {
        category: 'plastic',
        title: 'Deck Plástico Econômico',
        location: 'Residencial em Teresópolis',
        image: '/src/assets/images/deck-plastica-2.jpg',
        images: [
          '/src/assets/images/deck-plastica-2.jpg',
          '/src/assets/images/deck-plastica-1.jpg',
          '/src/assets/images/deck-plastica-3.jpg'
        ]
      },
      {
        category: 'before-after',
        title: 'Reforma Completa',
        location: 'Antes e Depois',
        image: '/src/assets/images/deck-before-after-2.jpg',
        images: [
          '/src/assets/images/deck-before-after-2.jpg',
          '/src/assets/images/deck-before-after-1.jpg',
          '/src/assets/images/deck-before-after-3.jpg'
        ]
      }
    ]

    const processoSteps = [
      {
        number: 1,
        title: 'Consulta Inicial',
        description: 'Entendemos suas necessidades e ideias para o projeto.',
        details: 'Visita técnica para avaliar o local, medir espaços, analisar condições estruturais e discutir todas as suas expectativas e preferências.'
      },
      {
        number: 2,
        title: 'Design e Planejamento',
        description: 'Criamos um projeto personalizado e detalhado em 3D.',
        details: 'Desenvolvimento do projeto personalizado com renderização 3D, seleção de materiais, apresentação do orçamento detalhado e cronograma de execução.'
      },
      {
        number: 3,
        title: 'Seleção de Materiais',
        description: 'Escolha entre madeira natural premium ou plástica sustentável.',
        details: 'Análise detalhada das opções disponíveis, apresentação de amostras, orientação sobre durabilidade e manutenção de cada material.'
      },
      {
        number: 4,
        title: 'Construção e Instalação',
        description: 'Nossa equipe executa a obra com precisão e qualidade.',
        details: 'Execução do projeto com acompanhamento constante, comunicação regular sobre o progresso, supervisão técnica e garantia de qualidade em cada etapa.'
      },
      {
        number: 5,
        title: 'Entrega e Pós-Venda',
        description: 'Garantimos sua satisfação e oferecemos suporte contínuo.',
        details: 'Entrega final com vistoria completa, orientações detalhadas de manutenção, garantia do trabalho executado e suporte contínuo para dúvidas.'
      }
    ]

    const filteredGallery = computed(() => {
      if (activeFilter.value === 'all') {
        return galleryItems
      }
      return galleryItems.filter(item => item.category === activeFilter.value)
    })

    const setActiveFilter = (filter) => {
      activeFilter.value = filter
    }

    const openGallery = (type) => {
      const galleryData = {
        natural: {
          title: 'Madeira Natural',
          images: [
            '/src/assets/images/madeira-natural.jpg',
            '/src/assets/images/deck-natural-1.jpg',
            '/src/assets/images/deck-natural-2.jpg',
            '/src/assets/images/deck-natural-3.jpg'
          ]
        },
        plastic: {
          title: 'Madeira Plástica',
          images: [
            '/src/assets/images/madeira-plastica.jpg',
            '/src/assets/images/deck-plastica-1.jpg',
            '/src/assets/images/deck-plastica-2.jpg',
            '/src/assets/images/deck-plastica-3.jpg'
          ]
        }
      }
      
      currentGalleryItem.value = galleryData[type]
      showGalleryModal.value = true
    }

    const openGalleryModal = (item) => {
      currentGalleryItem.value = item
      showGalleryModal.value = true
    }

    const closeGalleryModal = () => {
      showGalleryModal.value = false
      currentGalleryItem.value = {}
    }

    const openLightbox = (index) => {
      currentLightboxIndex.value = index
      lightboxImages.value = currentGalleryItem.value.images
      showLightbox.value = true
    }

    const closeLightbox = () => {
      showLightbox.value = false
      lightboxImages.value = []
    }

    const prevImage = () => {
      if (currentLightboxIndex.value > 0) {
        currentLightboxIndex.value--
      } else {
        currentLightboxIndex.value = lightboxImages.value.length - 1
      }
    }

    const nextImage = () => {
      if (currentLightboxIndex.value < lightboxImages.value.length - 1) {
        currentLightboxIndex.value++
      } else {
        currentLightboxIndex.value = 0
      }
    }

    const nextSlide = () => {
      if (currentSlide.value < servicosImagens.value.length - 1) {
        currentSlide.value++
      } else {
        currentSlide.value = 0
      }
    }

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--
      } else {
        currentSlide.value = servicosImagens.value.length - 1
      }
    }

    const goToSlide = (index) => {
      currentSlide.value = index
    }

    const scrollToSection = (event) => {
      event.preventDefault()
      const element = document.getElementById('processo')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    // Animação de contador crescente
    const animateCounter = () => {
      const counters = document.querySelectorAll('.counter')
      const speed = 50

      counters.forEach(counter => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute('data-target'))
          const count = parseInt(counter.innerText)
          const increment = target / speed

          if (count < target) {
            counter.innerText = Math.ceil(count + increment)
            setTimeout(updateCount, 20)
          } else {
            counter.innerText = target
          }
        }

        // Usar Intersection Observer para iniciar animação quando entrar na viewport
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && parseInt(counter.innerText) === 0) {
              updateCount()
              observer.unobserve(counter)
            }
          })
        }, { threshold: 0.5 })

        observer.observe(counter)
      })
    }

    onMounted(() => {
      animateCounter()
    })

    return {
      activeFilter,
      filters,
      filteredGallery,
      processoSteps,
      showGalleryModal,
      showLightbox,
      currentGalleryItem,
      currentLightboxIndex,
      lightboxImages,
      setActiveFilter,
      openGallery,
      openGalleryModal,
      closeGalleryModal,
      openLightbox,
      closeLightbox,
      prevImage,
      nextImage,
      scrollToSection,
      servicosImagens,
      currentSlide,
      nextSlide,
      prevSlide,
      goToSlide
    }
  }
}
</script>

<style scoped>
/* Page-specific styles */
.decks-hero {
  background: url('/src/assets/images/background-banner-dacks.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 633px;
}

/* Hero Section Styles */
.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--white);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 300;
  margin-bottom: var(--spacing-sm);
  color: var(--white);
}

.hero-brand {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--accent-color), var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  margin-bottom: var(--spacing-xl);
  color: var(--white);
  opacity: 0.9;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 1;
}

.hero-scroll-indicator a {
  display: block;
  cursor: pointer;
  transition: transform var(--transition-normal);
}

.hero-scroll-indicator a:hover {
  transform: scale(1.1);
}

.arrow-image {
  width: 30px;
  height: auto;
  filter: invert(1);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Galeria de Serviços */
.servicos-galeria-section {
  background: var(--white);
  color: var(--text-dark);
}

.servicos-galeria-section .section-title {
  color: var(--accent-color);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
}

.servicos-grid-imagens {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.desktop-only {
  display: grid;
}

.mobile-only {
  display: none;
}

/* Carrossel Mobile */
.servicos-carousel {
  margin-top: var(--spacing-2xl);
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
}

.carousel-slide {
  min-width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  color: var(--accent-color);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
}

.carousel-btn:hover {
  background: var(--white);
  transform: translateY(-50%) scale(1.1);
}

.carousel-prev {
  left: var(--spacing-md);
}

.carousel-next {
  right: var(--spacing-md);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dot.active {
  background: var(--accent-color);
  transform: scale(1.2);
}

.servico-imagem-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  aspect-ratio: 1;
  cursor: pointer;
}

.servico-imagem-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.servico-imagem-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.servico-imagem-item:hover img {
  transform: scale(1.05);
}

.material-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
}

.material-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.material-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.material-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.material-card:hover .material-image img {
  transform: scale(1.05);
}

.material-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: var(--accent-color);
  color: var(--white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.material-content {
  padding: var(--spacing-xl);
}

.material-features {
  margin: var(--spacing-lg) 0;
}

.material-features h4 {
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
}

.material-features ul {
  list-style: none;
  padding: 0;
}

.material-features li {
  padding: var(--spacing-xs) 0;
  position: relative;
  padding-left: var(--spacing-lg);
}

.material-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.material-specs {
  background: var(--light-gray);
  padding: var(--spacing-lg);
  border-radius: 8px;
  margin: var(--spacing-lg) 0;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
}

.spec-item:last-child {
  margin-bottom: 0;
}

.material-cta {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.material-cta .btn {
  flex: 1;
}

.gallery-filters {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 25px;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--accent-color);
  color: var(--white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: var(--white);
  padding: var(--spacing-lg);
  transform: translateY(100%);
  transition: transform var(--transition-normal);
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h4 {
  margin-bottom: var(--spacing-xs);
}

.gallery-overlay p {
  margin: 0;
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.processo-section {
  background-color: var(--white);
}

.processo-section .section-title {
  color: var(--text-dark);
}

.processo-steps {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Primeiros 3 cards ocupam 2 colunas cada (posições 1-2, 3-4, 5-6) */
.processo-steps .step-item:nth-child(1) {
  grid-column: 1 / 3;
}

.processo-steps .step-item:nth-child(2) {
  grid-column: 3 / 5;
}

.processo-steps .step-item:nth-child(3) {
  grid-column: 5 / 7;
}

/* Centralizar os dois últimos cards - ocupam colunas 2-3 e 4-5 */
.processo-steps .step-item:nth-child(4) {
  grid-column: 2 / 4;
}

.processo-steps .step-item:nth-child(5) {
  grid-column: 4 / 6;
}

/* Responsivo - em telas menores volta ao layout normal */
@media (max-width: 768px) {
  .processo-steps {
    grid-template-columns: 1fr;
  }
  
  .processo-steps .step-item:nth-child(1),
  .processo-steps .step-item:nth-child(2),
  .processo-steps .step-item:nth-child(3),
  .processo-steps .step-item:nth-child(4),
  .processo-steps .step-item:nth-child(5) {
    grid-column: 1;
  }
}

.step-item {
  perspective: 1000px;
  cursor: pointer;
  min-height: 300px;
  width: 100%;
}

.step-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.step-item:hover .step-card-inner {
  transform: rotateY(180deg);
}

.step-card-front,
.step-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 12px;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.step-card-front {
  background: linear-gradient(135deg, #DAA520, #B8860B);
}

.step-card-back {
  background: linear-gradient(135deg, #FFD700, #DAA520);
  transform: rotateY(180deg);
}

.step-number {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin: 0 auto var(--spacing-lg);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.step-content {
  width: 100%;
}

.step-content h3 {
  color: var(--white);
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: var(--font-size-lg);
}

.step-description {
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.step-card-back .step-content {
  padding: var(--spacing-md);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.step-card-back .step-content h3 {
  margin-bottom: var(--spacing-md);
}

.step-card-back .step-details {
  font-size: var(--font-size-base);
  line-height: 1.8;
}

.contato-section {
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  color: var(--white);
  position: relative;
}

.contato-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/src/assets/images/background-banner-dacks.png') center/cover;
  opacity: 0.1;
  z-index: 0;
}

.contato-section .container {
  position: relative;
  z-index: 1;
}

.contato-section .contact-info {
  color: var(--white);
}

.contato-section .contact-item strong {
  color: var(--gold-light);
}

.contato-section .contact-item p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.contato-section .section-title {
  color: var(--gold-light);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
}

.contact-info {
  margin-bottom: 0;
}

.contact-item {
  margin-bottom: var(--spacing-lg);
}

.contact-item strong {
  display: block;
  margin-bottom: var(--spacing-xs);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  height: 100%;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: var(--spacing-xl);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  z-index: 0;
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.15);
}

.stat-item h3 {
  color: var(--white);
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-xs);
  position: relative;
  z-index: 1;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-item h3 .counter {
  display: inline-block;
}

.stat-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  position: relative;
  z-index: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--spacing-md);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.w-full {
  width: 100%;
}

/* Gallery Modal */
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
}

.gallery-content {
  background: var(--white);
  border-radius: 12px;
  padding: var(--spacing-xl);
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.gallery-close {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  border: none;
  font-size: var(--font-size-2xl);
  cursor: pointer;
  color: var(--text-dark);
}

.gallery-content h3 {
  color: var(--text-dark);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.gallery-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.gallery-images img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform var(--transition-fast);
}

.gallery-images img:hover {
  transform: scale(1.05);
}

/* Lightbox Modal */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: var(--white);
  font-size: var(--font-size-2xl);
  cursor: pointer;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: var(--white);
  font-size: var(--font-size-3xl);
  padding: var(--spacing-md);
  cursor: pointer;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-prev {
  left: -80px;
}

.lightbox-next {
  right: -80px;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .desktop-only {
    display: none;
  }
  
  .mobile-only {
    display: block;
  }
  
  .servicos-grid-imagens {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .servicos-grid-imagens {
    grid-template-columns: 1fr;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .carousel-prev {
    left: var(--spacing-xs);
  }
  
  .carousel-next {
    right: var(--spacing-xs);
  }
  
  .grid.grid-2 {
    grid-template-columns: 1fr;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .table-header,
  .table-row {
    grid-template-columns: 1fr;
  }
  
  .table-cell {
    text-align: left;
  }
  
  .table-header .table-cell:not(:first-child) {
    display: none;
  }
  
  .table-row .table-cell:not(:first-child) {
    display: none;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .material-cta {
    flex-direction: column;
  }
  
  .gallery-images {
    grid-template-columns: 1fr;
  }
  
  .lightbox-prev,
  .lightbox-next {
    position: fixed;
    top: auto;
    bottom: 20px;
    transform: none;
  }
  
  .lightbox-prev {
    left: 20px;
  }
  
  .lightbox-next {
    right: 20px;
  }
}

@media (max-width: 480px) {
  .gallery-content {
    padding: var(--spacing-lg);
  }
  
  .gallery-images img {
    height: 150px;
  }
}
</style>
