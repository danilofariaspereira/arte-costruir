<template>
  <div class="decks">
    <!-- Hero Section -->
    <section class="hero-section decks-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Decks de Madeira no Rio de Janeiro</h1>
          <p class="hero-subtitle">Mais de 500 decks entregues no RJ. Especialistas em madeira natural e plástica sustentável.</p>
          <div class="hero-buttons">
            <a href="#tipos-madeira" class="btn btn-primary btn-large">
              Conheça Nossos Tipos
            </a>
            <a href="#contato" class="btn btn-secondary btn-large">
              Peça Seu Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tipos de Madeira Section -->
    <section class="tipos-madeira-section section" id="tipos-madeira">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Tipos de Madeira para Decks</h2>
          <p class="section-subtitle">Escolha entre madeira natural premium ou madeira plástica sustentável</p>
        </div>
        
        <div class="grid grid-2 utils-grid">
          <!-- Madeira Natural -->
          <div class="material-card natural">
            <div class="material-image">
              <img src="/src/assets/images/madeira-natural.jpg" alt="Deck de Madeira Natural" loading="lazy">
              <div class="material-badge">
                <span>Premium</span>
              </div>
            </div>
            <div class="material-content">
              <h3>Madeira Natural</h3>
              <p class="material-description">
                Madeira de primeira qualidade com acabamento natural único. 
                Cada peça possui características próprias, criando decks únicos e elegantes.
              </p>
              
              <div class="material-features">
                <h4>Características:</h4>
                <ul>
                  <li>Acabamento natural e elegante</li>
                  <li>Durabilidade excepcional</li>
                  <li>Textura única em cada peça</li>
                  <li>Resistente a intempéries</li>
                  <li>Fácil manutenção</li>
                </ul>
              </div>
              
              <div class="material-specs">
                <div class="spec-item">
                  <strong>Durabilidade:</strong>
                  <span>20+ anos</span>
                </div>
                <div class="spec-item">
                  <strong>Manutenção:</strong>
                  <span>Anual</span>
                </div>
                <div class="spec-item">
                  <strong>Ecologicamente:</strong>
                  <span>Sustentável</span>
                </div>
              </div>
              
              <div class="material-cta">
                <button class="btn btn-primary" @click="openGallery('natural')">
                  Ver Galeria
                </button>
                <a href="#contato" class="btn btn-secondary">
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>

          <!-- Madeira Plástica -->
          <div class="material-card plastic">
            <div class="material-image">
              <img src="/src/assets/images/madeira-plastica.jpg" alt="Deck de Madeira Plástica" loading="lazy">
              <div class="material-badge">
                <span>Sustentável</span>
              </div>
            </div>
            <div class="material-content">
              <h3>Madeira Plástica</h3>
              <p class="material-description">
                Excelente custo-benefício com sustentabilidade garantida. 
                Feita com materiais reciclados, oferece praticidade e baixa manutenção.
              </p>
              
              <div class="material-features">
                <h4>Características:</h4>
                <ul>
                  <li>Excelente custo-benefício</li>
                  <li>Baixa manutenção</li>
                  <li>Resistente à umidade</li>
                  <li>Não apodrece</li>
                  <li>Material reciclado</li>
                </ul>
              </div>
              
              <div class="material-specs">
                <div class="spec-item">
                  <strong>Durabilidade:</strong>
                  <span>15+ anos</span>
                </div>
                <div class="spec-item">
                  <strong>Manutenção:</strong>
                  <span>Mínima</span>
                </div>
                <div class="spec-item">
                  <strong>Ecologicamente:</strong>
                  <span>100% Reciclável</span>
                </div>
              </div>
              
              <div class="material-cta">
                <button class="btn btn-primary" @click="openGallery('plastic')">
                  Ver Galeria
                </button>
                <a href="#contato" class="btn btn-secondary">
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparação Section -->
    <section class="comparacao-section section" id="comparacao">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Comparação: Natural vs Plástica</h2>
          <p class="section-subtitle">Veja as principais diferenças entre os tipos de madeira para decks</p>
        </div>
        
        <div class="comparison-table">
          <div class="table-header">
            <div class="table-cell">Características</div>
            <div class="table-cell">Madeira Natural</div>
            <div class="table-cell">Madeira Plástica</div>
          </div>
          
          <div class="table-row">
            <div class="table-cell"><strong>Durabilidade</strong></div>
            <div class="table-cell">20+ anos</div>
            <div class="table-cell">15+ anos</div>
          </div>
          
          <div class="table-row">
            <div class="table-cell"><strong>Manutenção</strong></div>
            <div class="table-cell">Anual (verniz)</div>
            <div class="table-cell">Mínima</div>
          </div>
          
          <div class="table-row">
            <div class="table-cell"><strong>Resistência à Umidade</strong></div>
            <div class="table-cell">Alta</div>
            <div class="table-cell">Muito Alta</div>
          </div>
          
          <div class="table-row">
            <div class="table-cell"><strong>Custo Inicial</strong></div>
            <div class="table-cell">Alto</div>
            <div class="table-cell">Médio</div>
          </div>
          
          <div class="table-row">
            <div class="table-cell"><strong>Custo Total</strong></div>
            <div class="table-cell">Alto (com manutenção)</div>
            <div class="table-cell">Baixo</div>
          </div>
          
          <div class="table-row">
            <div class="table-cell"><strong>Sustentabilidade</strong></div>
            <div class="table-cell">Alta</div>
            <div class="table-cell">Muito Alta</div>
          </div>
          
          <div class="table-row">
            <div class="table-cell"><strong>Aparência</strong></div>
            <div class="table-cell">Natural única</div>
            <div class="table-cell">Uniforme</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeria de Projetos Section -->
    <section class="galeria-section section" id="galeria">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Projetos de Decks</h2>
          <p class="section-subtitle">Mais de 500 decks entregues no Rio de Janeiro</p>
        </div>
        
        <div class="gallery-filters">
          <button 
            v-for="filter in filters" 
            :key="filter.key"
            class="filter-btn" 
            :class="{ active: activeFilter === filter.key }"
            @click="setActiveFilter(filter.key)">
            {{ filter.label }}
          </button>
        </div>
        
        <div class="gallery-grid">
          <div 
            v-for="(item, index) in filteredGallery" 
            :key="index"
            class="gallery-item" 
            :data-category="item.category"
            @click="openGalleryModal(item)">
            <img :src="item.image" :alt="item.title" loading="lazy">
            <div class="gallery-overlay">
              <h4>{{ item.title }}</h4>
              <p>{{ item.location }}</p>
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
            <div class="step-number">{{ step.number }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contato Section -->
    <section class="contato-section section" id="contato">
      <div class="container">
        <div class="grid grid-2">
          <div>
            <h2>Peça Seu Orçamento de Deck</h2>
            <div class="contact-info">
              <div class="contact-item">
                <strong>Telefones:</strong>
                <p>(11) 94311-2721 / (21) 96017-1061</p>
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
            
            <div class="stats-container">
              <div class="stat-item">
                <h3>500+</h3>
                <p>Decks Entregues</p>
              </div>
              <div class="stat-item">
                <h3>5+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div class="stat-item">
                <h3>100%</h3>
                <p>Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
          <div>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" v-model="form.name" placeholder="Seu nome" required>
              </div>
              <div class="form-group">
                <input type="tel" v-model="form.phone" placeholder="Seu telefone" required>
              </div>
              <div class="form-group">
                <select v-model="form.deckType" required>
                  <option value="">Tipo de deck desejado</option>
                  <option value="natural">Madeira Natural</option>
                  <option value="plastic">Madeira Plástica</option>
                  <option value="consulta">Consulta para decidir</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" v-model="form.area" placeholder="Área aproximada (m²)">
              </div>
              <div class="form-group">
                <textarea v-model="form.message" rows="5" placeholder="Conte-nos sobre seu projeto de deck..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">
                Solicitar Orçamento
              </button>
            </form>
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
import { ref, reactive, computed } from 'vue'

export default {
  name: 'Decks',
  setup() {
    const activeFilter = ref('all')
    const showGalleryModal = ref(false)
    const showLightbox = ref(false)
    const currentGalleryItem = ref({})
    const currentLightboxIndex = ref(0)
    const lightboxImages = ref([])

    const form = reactive({
      name: '',
      phone: '',
      deckType: '',
      area: '',
      message: ''
    })

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
        description: 'Visita técnica para avaliar o local e entender suas necessidades.'
      },
      {
        number: 2,
        title: 'Projeto e Orçamento',
        description: 'Desenvolvimento do projeto personalizado e apresentação do orçamento.'
      },
      {
        number: 3,
        title: 'Aprovação',
        description: 'Revisão do projeto, ajustes finais e aprovação do cliente.'
      },
      {
        number: 4,
        title: 'Construção',
        description: 'Execução do projeto com acompanhamento e comunicação constante.'
      },
      {
        number: 5,
        title: 'Entrega',
        description: 'Entrega final com vistoria e orientações de manutenção.'
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

    const submitForm = () => {
      console.log('Formulário enviado:', form)
      alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.')
      
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    }

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
      form,
      setActiveFilter,
      openGallery,
      openGalleryModal,
      closeGalleryModal,
      openLightbox,
      closeLightbox,
      prevImage,
      nextImage,
      submitForm
    }
  }
}
</script>

<style scoped>
/* Grid específico para utils */
.utils-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .utils-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
/* Page-specific styles */
.decks-hero {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(184, 134, 11, 0.3)), url('/src/assets/images/decks-hero-bg.jpg');
  background-size: cover;
  background-position: center;
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

.comparison-table {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-top: var(--spacing-xl);
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: var(--accent-color);
  color: var(--white);
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid var(--border-color);
}

.table-row:nth-child(even) {
  background: var(--light-gray);
}

.table-cell {
  padding: var(--spacing-lg);
  text-align: center;
}

.table-header .table-cell {
  font-weight: 600;
}

.table-row:last-child {
  border-bottom: none;
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
  background-color: var(--light-gray);
}

.processo-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.step-item {
  text-align: center;
  background: var(--white);
  padding: var(--spacing-xl);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.step-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--accent-color);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin: 0 auto var(--spacing-lg);
}

.step-content h3 {
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.stat-item {
  text-align: center;
  background: var(--white);
  padding: var(--spacing-lg);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
}

.stat-item h3 {
  color: var(--accent-color);
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-xs);
}

.stat-item p {
  margin: 0;
  color: var(--text-light);
  font-weight: 500;
}

.contato-section {
  background: var(--white);
  color: var(--text-dark);
}

.contato-section h2 {
  color: var(--text-dark);
}

.contact-info {
  margin-bottom: var(--spacing-xl);
}

.contact-item {
  margin-bottom: var(--spacing-lg);
}

.contact-item strong {
  color: var(--accent-color);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.contact-item p {
  color: var(--text-light);
  margin: 0;
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
  
  .stats-container {
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
