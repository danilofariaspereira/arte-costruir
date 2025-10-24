<template>
  <div class="projetos">
    <!-- Hero Section -->
    <section class="hero-section projects-hero">
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

    <!-- Chalés Section -->
    <section class="projetos-section section" id="chales">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Chalés de Madeira</h2>
          <p class="section-subtitle">Chalés de 90m² com 2 quartos e 2 banheiros, perfeitos para até 8 pessoas</p>
        </div>
        
        <div class="grid grid-2 grid-4">
          <!-- Chalé Aimee -->
          <div class="project-card" id="chale-aimee">
            <div class="card-image">
              <img src="/src/assets/images/chale-aimee.jpg" alt="Chalé Aimee - 90m²" loading="lazy">
              <div class="card-overlay">
                <div class="card-info">
                  <span class="card-size">90m²</span>
                  <span class="card-rooms">2 quartos, 2 banheiros</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <h3>Chalé Aimee</h3>
              <p>Chalé moderno com design contemporâneo, perfeito para famílias que buscam conforto e sofisticação.</p>
              <ul class="card-features">
                <li>90m² de área construída</li>
                <li>2 quartos espaçosos</li>
                <li>2 banheiros completos</li>
                <li>Até 8 pessoas</li>
                <li>Madeira ecológica</li>
              </ul>
              <div class="card-actions">
                <a href="#contato" class="btn btn-primary">
                  Solicitar Orçamento
                </a>
                <button class="btn btn-secondary" @click="openGallery('aimee')">
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>

          <!-- Chalé Suíço -->
          <div class="project-card" id="chale-suico">
            <div class="card-image">
              <img src="/src/assets/images/chale-suico.jpg" alt="Chalé Suíço - 90m²" loading="lazy">
              <div class="card-overlay">
                <div class="card-info">
                  <span class="card-size">90m²</span>
                  <span class="card-rooms">2 quartos, 2 banheiros</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <h3>Chalé Suíço</h3>
              <p>Inspirado na arquitetura alpina, oferece aconchego e charme rústico em meio à natureza.</p>
              <ul class="card-features">
                <li>90m² de área construída</li>
                <li>2 quartos espaçosos</li>
                <li>2 banheiros completos</li>
                <li>Até 8 pessoas</li>
                <li>Design alpino</li>
              </ul>
              <div class="card-actions">
                <a href="#contato" class="btn btn-primary">
                  Solicitar Orçamento
                </a>
                <button class="btn btn-secondary" @click="openGallery('suico')">
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>

          <!-- Chalé da Montanha -->
          <div class="project-card" id="chale-montanha">
            <div class="card-image">
              <img src="/src/assets/images/chale-montanha.jpg" alt="Chalé da Montanha - 90m²" loading="lazy">
              <div class="card-overlay">
                <div class="card-info">
                  <span class="card-size">90m²</span>
                  <span class="card-rooms">2 quartos, 2 banheiros</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <h3>Chalé da Montanha</h3>
              <p>Ideal para regiões serranas, combina robustez e elegância com acabamentos de alta qualidade.</p>
              <ul class="card-features">
                <li>90m² de área construída</li>
                <li>2 quartos espaçosos</li>
                <li>2 banheiros completos</li>
                <li>Até 8 pessoas</li>
                <li>Resistente ao clima</li>
              </ul>
              <div class="card-actions">
                <a href="#contato" class="btn btn-primary">
                  Solicitar Orçamento
                </a>
                <button class="btn btn-secondary" @click="openGallery('montanha')">
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>

          <!-- Chalé Aurora -->
          <div class="project-card" id="chale-aurora">
            <div class="card-image">
              <img src="/src/assets/images/chale-aurora.jpg" alt="Chalé Aurora - 90m²" loading="lazy">
              <div class="card-overlay">
                <div class="card-info">
                  <span class="card-size">90m²</span>
                  <span class="card-rooms">2 quartos, 2 banheiros</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <h3>Chalé Aurora</h3>
              <p>Design único com grandes janelas, aproveitando a luz natural e proporcionando vista panorâmica.</p>
              <ul class="card-features">
                <li>90m² de área construída</li>
                <li>2 quartos espaçosos</li>
                <li>2 banheiros completos</li>
                <li>Até 8 pessoas</li>
                <li>Vista panorâmica</li>
              </ul>
              <div class="card-actions">
                <a href="#contato" class="btn btn-primary">
                  Solicitar Orçamento
                </a>
                <button class="btn btn-secondary" @click="openGallery('aurora')">
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lofts Section -->
    <section class="lofts-section section" id="lofts">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Lofts de Madeira</h2>
          <p class="section-subtitle">Lofts modernos e funcionais, perfeitos para casais e pequenas famílias</p>
        </div>
        
        <div class="grid grid-3">
          <!-- Loft 30m² -->
          <div class="project-card" id="loft-30m">
            <div class="card-image">
              <img src="/src/assets/images/loft-30m.jpg" alt="Loft 30m²" loading="lazy">
              <div class="card-overlay">
                <div class="card-info">
                  <span class="card-size">30m²</span>
                  <span class="card-rooms">1 ambiente</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <h3>Loft Compacto</h3>
              <p>Ideal para casais ou uso como escritório, com design inteligente que maximiza o espaço.</p>
              <ul class="card-features">
                <li>30m² de área construída</li>
                <li>Ambiente integrado</li>
                <li>Banheiro completo</li>
                <li>Até 2 pessoas</li>
                <li>Design moderno</li>
              </ul>
              <div class="card-actions">
                <a href="#contato" class="btn btn-primary">
                  Solicitar Orçamento
                </a>
                <button class="btn btn-secondary" @click="openGallery('loft30')">
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>

          <!-- Loft 40m² -->
          <div class="project-card" id="loft-40m">
            <div class="card-image">
              <img src="/src/assets/images/loft-40m.jpg" alt="Loft 40m²" loading="lazy">
              <div class="card-overlay">
                <div class="card-info">
                  <span class="card-size">40m²</span>
                  <span class="card-rooms">1 quarto</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <h3>Loft Conforto</h3>
              <p>Perfeito equilíbrio entre espaço e praticidade, com quarto separado e área social ampla.</p>
              <ul class="card-features">
                <li>40m² de área construída</li>
                <li>1 quarto separado</li>
                <li>Banheiro completo</li>
                <li>Até 3 pessoas</li>
                <li>Área social ampla</li>
              </ul>
              <div class="card-actions">
                <a href="#contato" class="btn btn-primary">
                  Solicitar Orçamento
                </a>
                <button class="btn btn-secondary" @click="openGallery('loft40')">
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>

          <!-- Loft 60m² -->
          <div class="project-card" id="loft-60m">
            <div class="card-image">
              <img src="/src/assets/images/loft-60m.jpg" alt="Loft 60m²" loading="lazy">
              <div class="card-overlay">
                <div class="card-info">
                  <span class="card-size">60m²</span>
                  <span class="card-rooms">2 quartos</span>
                </div>
              </div>
            </div>
            <div class="card-content">
              <h3>Loft Premium</h3>
              <p>Espaçoso e elegante, ideal para pequenas famílias que buscam conforto e modernidade.</p>
              <ul class="card-features">
                <li>60m² de área construída</li>
                <li>2 quartos</li>
                <li>Banheiro completo</li>
                <li>Até 4 pessoas</li>
                <li>Acabamento premium</li>
              </ul>
              <div class="card-actions">
                <a href="#contato" class="btn btn-primary">
                  Solicitar Orçamento
                </a>
                <button class="btn btn-secondary" @click="openGallery('loft60')">
                  Ver Galeria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais Section -->
    <section class="diferenciais-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Diferenciais</h2>
          <p class="section-subtitle">Por que escolher a Arte Construir para seu projeto</p>
        </div>
        
        <div class="grid grid-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Madeira Ecológica</h3>
            </div>
            <div class="card-body">
              <p>Trabalhamos exclusivamente com madeira de reflorestamento e fornecedores certificados, garantindo sustentabilidade e qualidade.</p>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Parcerias Estratégicas</h3>
            </div>
            <div class="card-body">
              <p>Parceria com TW Brazil e Inbrasil, as melhores madeireiras do país, garantindo materiais de primeira qualidade.</p>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Projetos Personalizados</h3>
            </div>
            <div class="card-body">
              <p>Cada projeto é único e desenvolvido especialmente para atender suas necessidades e preferências pessoais.</p>
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
            <h2>Solicite Seu Orçamento</h2>
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
                <select v-model="form.projectType" required>
                  <option value="">Selecione o tipo de projeto</option>
                  <option value="chale-aimee">Chalé Aimee</option>
                  <option value="chale-suico">Chalé Suíço</option>
                  <option value="chale-montanha">Chalé da Montanha</option>
                  <option value="chale-aurora">Chalé Aurora</option>
                  <option value="loft-30m">Loft 30m²</option>
                  <option value="loft-40m">Loft 40m²</option>
                  <option value="loft-60m">Loft 60m²</option>
                  <option value="personalizado">Projeto Personalizado</option>
                </select>
              </div>
              <div class="form-group">
                <textarea v-model="form.message" rows="5" placeholder="Conte-nos sobre seu projeto..." required></textarea>
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
    <div v-if="showGallery" class="gallery-modal" @click="closeGallery">
      <div class="gallery-content" @click.stop>
        <button class="gallery-close" @click="closeGallery">&times;</button>
        <h3>{{ currentGallery.title }}</h3>
        <div class="gallery-images">
          <img v-for="(image, index) in currentGallery.images" 
               :key="index" 
               :src="image" 
               :alt="`${currentGallery.title} - Imagem ${index + 1}`"
               @click="openLightbox(index)">
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="showLightbox" class="lightbox-modal" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <button class="lightbox-prev" @click="prevImage" v-if="lightboxImages.length > 1">‹</button>
        <img :src="lightboxImages[currentLightboxIndex]" :alt="`${currentGallery.title} - Imagem ${currentLightboxIndex + 1}`">
        <button class="lightbox-next" @click="nextImage" v-if="lightboxImages.length > 1">›</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Projetos',
  setup() {
    const showGallery = ref(false)
    const showLightbox = ref(false)
    const currentGallery = ref({})
    const currentLightboxIndex = ref(0)
    const lightboxImages = ref([])

    const form = reactive({
      name: '',
      phone: '',
      projectType: '',
      message: ''
    })

    const galleryData = {
      aimee: {
        title: 'Chalé Aimee',
        images: [
          '/src/assets/images/chale-aimee.jpg',
          '/src/assets/images/chale-aimee-2.jpg',
          '/src/assets/images/chale-aimee-3.jpg'
        ]
      },
      suico: {
        title: 'Chalé Suíço',
        images: [
          '/src/assets/images/chale-suico.jpg',
          '/src/assets/images/chale-suico-2.jpg',
          '/src/assets/images/chale-suico-3.jpg'
        ]
      },
      montanha: {
        title: 'Chalé da Montanha',
        images: [
          '/src/assets/images/chale-montanha.jpg',
          '/src/assets/images/chale-montanha-2.jpg',
          '/src/assets/images/chale-montanha-3.jpg'
        ]
      },
      aurora: {
        title: 'Chalé Aurora',
        images: [
          '/src/assets/images/chale-aurora.jpg',
          '/src/assets/images/chale-aurora-2.jpg',
          '/src/assets/images/chale-aurora-3.jpg'
        ]
      },
      loft30: {
        title: 'Loft 30m²',
        images: [
          '/src/assets/images/loft-30m.jpg',
          '/src/assets/images/loft-30m-2.jpg',
          '/src/assets/images/loft-30m-3.jpg'
        ]
      },
      loft40: {
        title: 'Loft 40m²',
        images: [
          '/src/assets/images/loft-40m.jpg',
          '/src/assets/images/loft-40m-2.jpg',
          '/src/assets/images/loft-40m-3.jpg'
        ]
      },
      loft60: {
        title: 'Loft 60m²',
        images: [
          '/src/assets/images/loft-60m.jpg',
          '/src/assets/images/loft-60m-2.jpg',
          '/src/assets/images/loft-60m-3.jpg'
        ]
      }
    }

    const openGallery = (galleryKey) => {
      currentGallery.value = galleryData[galleryKey]
      showGallery.value = true
    }

    const closeGallery = () => {
      showGallery.value = false
      currentGallery.value = {}
    }

    const openLightbox = (index) => {
      currentLightboxIndex.value = index
      lightboxImages.value = currentGallery.value.images
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
      // Aqui você pode implementar o envio do formulário
      console.log('Formulário enviado:', form)
      alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.')
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    }

    const scrollToSection = (event) => {
      event.preventDefault()
      const element = document.getElementById('chales')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    return {
      showGallery,
      showLightbox,
      currentGallery,
      currentLightboxIndex,
      lightboxImages,
      form,
      openGallery,
      closeGallery,
      openLightbox,
      closeLightbox,
      prevImage,
      nextImage,
      submitForm,
      scrollToSection
    }
  }
}
</script>

<style scoped>
/* Page-specific styles */
.projects-hero {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('/src/assets/images/background-projetos.png');
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

.project-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-lg);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.card-info {
  color: var(--white);
}

.card-info .card-size {
  display: block;
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.card-info .card-rooms {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.card-content {
  padding: var(--spacing-xl);
}

.card-content h3 {
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
}

.card-content p {
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
}

.card-features {
  list-style: none;
  padding: 0;
  margin: var(--spacing-lg) 0;
}

.card-features li {
  padding: var(--spacing-xs) 0;
  position: relative;
  padding-left: var(--spacing-lg);
  color: var(--text-light);
}

.card-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.card-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.card-actions .btn {
  flex: 1;
}

.lofts-section {
  background-color: var(--light-gray);
}

.diferenciais-section {
  background: linear-gradient(135deg, var(--accent-color), var(--gold-light));
  color: var(--white);
}

.diferenciais-section .card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.diferenciais-section .card-title {
  color: var(--white);
}

.diferenciais-section .card-body p {
  color: rgba(255, 255, 255, 0.9);
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
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-3 {
    grid-template-columns: 1fr;
  }
  
  .card-actions {
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
  .grid-4,
  .grid-2 {
    grid-template-columns: 1fr;
  }
  
  .gallery-content {
    padding: var(--spacing-lg);
  }
  
  .gallery-images img {
    height: 150px;
  }
}
</style>
