<template>
  <div class="projetos">
    <!-- Hero Section -->
    <section class="hero-section projects-hero" :style="{ backgroundImage: `url(${backgroundProjetos})` }">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Bem-vindo à</h1>
          <h2 class="hero-brand">Arte Construir</h2>
          <p class="hero-subtitle">Não fazemos obras, realizamos sonhos</p>
        </div>
        <div class="hero-scroll-indicator">
          <a href="#" @click="scrollToSection">
            <img :src="getImageUrl('/src/assets/images/seta-direita 1.png')" alt="Seta para baixo" class="arrow-image">
          </a>
        </div>
      </div>
    </section>

    <!-- Chalés Section -->
    <section class="projetos-section section" id="chales">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gold-text">Nossos Chalés de Madeira</h2>
        </div>
        
        <div class="chales-grid">
          <!-- Chalé Aimee -->
          <div class="simple-card" @click="openProjectModal('aimee')">
            <div class="simple-card-image">
              <img :src="getImageUrl('/src/assets/images/chale-aimee.avif')" alt="Chalé Aimee" loading="lazy">
            </div>
            <div class="simple-card-title">Chalé Aimee</div>
          </div>

          <!-- Chalé Suíço -->
          <div class="simple-card" @click="openProjectModal('suico')">
            <div class="simple-card-image">
              <img :src="getImageUrl('/src/assets/images/chale-suico.avif')" alt="Chalé Suíço" loading="lazy">
            </div>
            <div class="simple-card-title">Chalé Suíço</div>
          </div>

          <!-- Chalé da Montanha -->
          <div class="simple-card" @click="openProjectModal('montanha')">
            <div class="simple-card-image">
              <img :src="getImageUrl('/src/assets/images/chale-da-montanha.avif')" alt="Chalé da Montanha" loading="lazy">
            </div>
            <div class="simple-card-title">Chalé da Montanha</div>
          </div>

          <!-- Chalé Aurora -->
          <div class="simple-card" @click="openProjectModal('aurora')">
            <div class="simple-card-image">
              <img :src="getImageUrl('/src/assets/images/chale-aurora.avif')" alt="Chalé Aurora" loading="lazy">
            </div>
            <div class="simple-card-title">Chalé Aurora</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços Section -->
    <section class="servicos-section section" id="servicos">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gold-text servicos-title">SERVIÇOS</h2>
        </div>

        <div class="servicos-grid">
          <!-- Serviço 1 -->
          <div class="servico-card" @click="openServiceModal('mentoria')">
            <div class="servico-card-image">
              <img :src="getImageUrl('/src/assets/images/planejamento-e-mentoria.jpg')" alt="Planejamento e Mentoria" loading="lazy">
            </div>
            <div class="servico-card-content">
              <h3>Planejamento e Mentoria</h3>
            </div>
          </div>

          <!-- Serviço 2 -->
          <div class="servico-card" @click="openServiceModal('execucao')">
            <div class="servico-card-image">
              <img :src="getImageUrl('/src/assets/images/execucao-de-obra-completa-projetos.jpg')" alt="Execução de obra completa" loading="lazy">
            </div>
            <div class="servico-card-content">
              <h3>Execução de obra completa</h3>
            </div>
          </div>

          <!-- Serviço 3 -->
          <div class="servico-card" @click="openServiceModal('reuniao')">
            <div class="servico-card-image">
              <img :src="getImageUrl('/src/assets/images/reuniao-de-trabalho-projetos.jpg')" alt="Reunião de trabalho" loading="lazy">
            </div>
            <div class="servico-card-content">
              <h3>Reunião de trabalho</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais Section -->
    <section class="diferenciais-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">NOSSOS DIFERENCIAIS</h2>
          <p class="section-subtitle">Por que escolher a Arte Construir para seu projeto</p>
        </div>
        
        <div class="grid grid-3">
          <div class="card">
            <div class="card-image">
              <img :src="getImageUrl('/src/assets/images/madeira-ecologica.avif')" alt="Madeira Ecológica" loading="lazy">
            </div>
            <div class="card-header">
              <h3 class="card-title">GARANTIA DE 50 ANOS</h3>
            </div>
            <div class="card-body">
              <p>Todo nosso madeiramento passa por tratamento em alto clave, garantindo sua excelência de 50 anos contra cupins e fungos decompositores.</p>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image">
              <img :src="getImageUrl('/src/assets/images/selo-verde.avif')" alt="Selo Verde" loading="lazy">
            </div>
            <div class="card-header">
              <h3 class="card-title">REFERÊNCIA EM MATERIAIS SUSTENTÁVEIS</h3>
            </div>
            <div class="card-body">
              <p>Nos orgulhamos de poder fazer parte do movimento em pról do nosso planeta que vem sofrendo cada vez mais com o desgaste dos recursos naturais. Nossa madeira plástica é feita sem madeira nativa ou PVC!</p>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image">
              <img :src="getImageUrl('/src/assets/images/projetos-personalizados.png')" alt="Equipe Especializada" loading="lazy">
            </div>
            <div class="card-header">
              <h3 class="card-title">EQUIPE ESPECIALIZADA</h3>
            </div>
            <div class="card-body">
              <p>Todos os nossos projetos tem aprovação junto a prefeitura. Projetos de esgoto, água, luz, hidráulico, 3D, arquitetônico e planta baixa. Garantindo toda excelência na obra que você precisa!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div v-if="showProjectModal" class="project-modal" @click="closeProjectModal">
      <div class="project-modal-content" @click.stop>
        <button class="project-modal-close" @click="closeProjectModal">&times;</button>
        <div class="project-modal-image">
          <img :src="currentProject.image" :alt="currentProject.title">
        </div>
        <div class="project-modal-info">
          <h3>{{ currentProject.title }}</h3>
          <p>{{ currentProject.description }}</p>
          <ul class="modal-features">
            <li v-for="(feature, index) in currentProject.features" :key="index">{{ feature }}</li>
          </ul>
          <div class="modal-actions">
            <a href="#contato" class="btn btn-primary" @click="closeProjectModal">Solicitar Orçamento</a>
          <a v-if="currentProject.pdfUrl" :href="currentProject.pdfUrl" class="btn btn-secondary" target="_blank">Download</a>
          </div>
        </div>
      </div>
    </div>

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

    <!-- Service Modal -->
    <div v-if="showServiceModal" class="service-modal" @click="closeServiceModal">
      <div class="service-modal-content" @click.stop>
        <button class="service-modal-close" @click="closeServiceModal">&times;</button>
        <div class="service-modal-grid">
          <div class="service-modal-image">
            <img :src="currentService.image" :alt="currentService.title">
          </div>
          <div class="service-modal-info">
            <h3 class="service-modal-title">{{ currentService.title }}</h3>
            <div class="service-modal-body">
              <p v-for="(p, i) in currentService.paragraphs" :key="i">{{ p }}</p>
            </div>
            <div class="service-modal-actions">
              <a href="https://wa.me/5521960171061?text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es." class="btn btn-secondary" target="_blank" rel="noopener">Saiba Mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { getImageUrl } from '@/utils/images'

export default {
  name: 'Projetos',
  setup() {
    const showGallery = ref(false)
    const showLightbox = ref(false)
    const showProjectModal = ref(false)
    const currentGallery = ref({})
    const currentProject = ref({})
    const currentLightboxIndex = ref(0)
    const lightboxImages = ref([])
    const showServiceModal = ref(false)
    const currentService = ref({ title: '', paragraphs: [], image: '' })
    const isSubmitting = ref(false)

    const form = reactive({
      name: '',
      phone: '',
      email: '',
      message: ''
    })

    const projectData = {
      aimee: {
        title: 'Chalé Aimee',
        image: getImageUrl('/src/assets/images/chale-aimee.avif'),
        description: 'Chalé moderno com design contemporâneo, perfeito para famílias que buscam conforto e sofisticação.',
        features: [
          '90m² de área construída',
          '2 quartos espaçosos',
          '2 banheiros completos',
          'Até 8 pessoas',
          'Madeira ecológica'
        ],
        pdfUrl: 'https://drive.google.com/file/d/14VnQ4uDXF1EJM_pjK2o5t_ss7Qv5-eEl/view'
      },
      suico: {
        title: 'Chalé Suíço',
        image: getImageUrl('/src/assets/images/chale-suico.avif'),
        description: 'Inspirado na arquitetura alpina, oferece aconchego e charme rústico em meio à natureza.',
        features: [
          '90m² de área construída',
          '2 quartos espaçosos',
          '2 banheiros completos',
          'Até 8 pessoas',
          'Design alpino'
        ],
        pdfUrl: ''
      },
      montanha: {
        title: 'Chalé da Montanha',
        image: getImageUrl('/src/assets/images/chale-da-montanha.avif'),
        description: 'Ideal para regiões serranas, combina robustez e elegância com acabamentos de alta qualidade.',
        features: [
          '90m² de área construída',
          '2 quartos espaçosos',
          '2 banheiros completos',
          'Até 8 pessoas',
          'Resistente ao clima'
        ],
        pdfUrl: 'https://drive.google.com/file/d/1-nGeXTGorijjRp6OCsSbd19Nmcq-acSj/view'
      },
      aurora: {
        title: 'Chalé Aurora',
        image: getImageUrl('/src/assets/images/chale-aurora.avif'),
        description: 'Design único com grandes janelas, aproveitando a luz natural e proporcionando vista panorâmica.',
        features: [
          '90m² de área construída',
          '2 quartos espaçosos',
          '2 banheiros completos',
          'Até 8 pessoas',
          'Vista panorâmica'
        ],
        pdfUrl: 'https://drive.google.com/file/d/13Uf4XLEMn7_3rWzMEnaTgAFwZ6UE2lp-/view'
      },
      loft30: {
        title: 'Loft Compacto',
        image: getImageUrl('/src/assets/images/loft-30m.jpg'),
        description: 'Ideal para casais ou uso como escritório, com design inteligente que maximiza o espaço.',
        features: [
          '30m² de área construída',
          'Ambiente integrado',
          'Banheiro completo',
          'Até 2 pessoas',
          'Design moderno'
        ],
        pdfUrl: '#'
      },
      loft40: {
        title: 'Loft Conforto',
        image: getImageUrl('/src/assets/images/loft-40m.jpg'),
        description: 'Perfeito equilíbrio entre espaço e praticidade, com quarto separado e área social ampla.',
        features: [
          '40m² de área construída',
          '1 quarto separado',
          'Banheiro completo',
          'Até 3 pessoas',
          'Área social ampla'
        ],
        pdfUrl: '#'
      },
      loft60: {
        title: 'Loft Premium',
        image: getImageUrl('/src/assets/images/loft-60m.jpg'),
        description: 'Espaçoso e elegante, ideal para pequenas famílias que buscam conforto e modernidade.',
        features: [
          '60m² de área construída',
          '2 quartos',
          'Banheiro completo',
          'Até 4 pessoas',
          'Acabamento premium'
        ],
        pdfUrl: '#'
      }
    }

    const galleryData = {
      aimee: {
        title: 'Chalé Aimee',
        images: [
          getImageUrl('/src/assets/images/chale-aimee.jpg'),
          getImageUrl('/src/assets/images/chale-aimee-2.jpg'),
          getImageUrl('/src/assets/images/chale-aimee-3.jpg')
        ]
      },
      suico: {
        title: 'Chalé Suíço',
        images: [
          getImageUrl('/src/assets/images/chale-suico.jpg'),
          getImageUrl('/src/assets/images/chale-suico-2.jpg'),
          getImageUrl('/src/assets/images/chale-suico-3.jpg')
        ]
      },
      montanha: {
        title: 'Chalé da Montanha',
        images: [
          getImageUrl('/src/assets/images/chale-montanha.jpg'),
          getImageUrl('/src/assets/images/chale-montanha-2.jpg'),
          getImageUrl('/src/assets/images/chale-montanha-3.jpg')
        ]
      },
      aurora: {
        title: 'Chalé Aurora',
        images: [
          getImageUrl('/src/assets/images/chale-aurora.jpg'),
          getImageUrl('/src/assets/images/chale-aurora-2.jpg'),
          getImageUrl('/src/assets/images/chale-aurora-3.jpg')
        ]
      },
      loft30: {
        title: 'Loft 30m²',
        images: [
          getImageUrl('/src/assets/images/loft-30m.jpg'),
          getImageUrl('/src/assets/images/loft-30m-2.jpg'),
          getImageUrl('/src/assets/images/loft-30m-3.jpg')
        ]
      },
      loft40: {
        title: 'Loft 40m²',
        images: [
          getImageUrl('/src/assets/images/loft-40m.jpg'),
          getImageUrl('/src/assets/images/loft-40m-2.jpg'),
          getImageUrl('/src/assets/images/loft-40m-3.jpg')
        ]
      },
      loft60: {
        title: 'Loft 60m²',
        images: [
          getImageUrl('/src/assets/images/loft-60m.jpg'),
          getImageUrl('/src/assets/images/loft-60m-2.jpg'),
          getImageUrl('/src/assets/images/loft-60m-3.jpg')
        ]
      }
    }

    const openProjectModal = (projectKey) => {
      currentProject.value = projectData[projectKey]
      showProjectModal.value = true
    }

    const closeProjectModal = () => {
      showProjectModal.value = false
      currentProject.value = {}
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

    const submitForm = async () => {
      if (isSubmitting.value) return
      
      // Validação básica
      if (!form.name || !form.phone || !form.email || !form.message) {
        alert('Por favor, preencha todos os campos.')
        return
      }
      
      isSubmitting.value = true
      
      // Solução que funciona imediatamente: usando mailto
      // Abre o cliente de e-mail do usuário com tudo preenchido
      const subject = encodeURIComponent('Solicitação de Orçamento - Arte Construir')
      const emailBody = `Nome: ${form.name}\n` +
        `Telefone: ${form.phone}\n` +
        `E-mail: ${form.email}\n\n` +
        `Mensagem:\n${form.message}`
      const body = encodeURIComponent(emailBody)
      
      // Criando link mailto
      const mailtoLink = `mailto:danilofariaspereira90@gmail.com?subject=${subject}&body=${body}`
      
      // Abrindo cliente de e-mail
      window.location.href = mailtoLink
      
      // Aguardando um pouco e então mostrando mensagem e resetando formulário
      setTimeout(() => {
        alert('O formulário foi preenchido! Verifique seu cliente de e-mail e clique em "Enviar" para finalizar.')
        // Reset form
        Object.keys(form).forEach(key => {
          form[key] = ''
        })
        isSubmitting.value = false
      }, 500)
    }
    const serviceData = {
      mentoria: {
        title: 'Planejamento e Mentoria de montagem do seu chalé',
        paragraphs: [
          'Caso já possua empreiteiro de confiança, temos planos para venda do madeiramento (Kit) e projetos.',
          'E além disso, podemos fazer uma mentoria durante toda sua obra para que siga todos os passos corretamente.'
        ],
        image: getImageUrl('/src/assets/images/planejamento-e-mentoria.jpg')
      },
      execucao: {
        title: 'Execução de obra completa',
        paragraphs: [
          'Fazemos toda sua obra desde a fundação até a chave na mão!',
          'Modalidade exclusiva para cidades da Região serrana, Angra dos Reis e Região dos lagos do RJ.',
          'Opção para quem deseja uma obra completa sem dor de cabeça.'
        ],
        image: getImageUrl('/src/assets/images/execucao-de-obra-completa-projetos.jpg')
      },
      reuniao: {
        title: 'Reunião de trabalho',
        paragraphs: [
          'Gestão de plano de negócios para empresários.',
          'Você é empresário? Não sabe como aumentar o faturamento da empresa atualmente?',
          'Temos planos de negócios que podem aumentar seu faturamento em até 600%! Agende sua reunião com nossos especialistas.'
        ],
        image: getImageUrl('/src/assets/images/reuniao-de-trabalho-projetos.jpg')
      }
    }

    const openServiceModal = (key) => {
      currentService.value = serviceData[key]
      showServiceModal.value = true
    }

    const closeServiceModal = () => {
      showServiceModal.value = false
      currentService.value = { title: '', paragraphs: [], image: '' }
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

    const backgroundProjetos = computed(() => getImageUrl('/src/assets/images/background-projetos.png'))

    return {
      showGallery,
      showLightbox,
      showProjectModal,
      currentGallery,
      currentProject,
      currentLightboxIndex,
      lightboxImages,
      form,
      openProjectModal,
      closeProjectModal,
      openGallery,
      closeGallery,
      openLightbox,
      closeLightbox,
      prevImage,
      nextImage,
      submitForm,
      scrollToSection,
      // Serviços
      showServiceModal,
      currentService,
      openServiceModal,
      closeServiceModal,
      // Form
      isSubmitting,
      getImageUrl,
      backgroundProjetos
    }
  }
}
</script>

<style scoped>
/* Page-specific styles */
.projects-hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 633px;
}

.gold-text {
  background: linear-gradient(135deg, var(--accent-color), var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

/* Serviços */
.servicos-section {
  background: var(--black);
}

.servicos-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
}

.servicos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.servico-card {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  background: #00b377; /* fundo padrão verde para eliminar qualquer faixa preta */
  box-shadow: 0 10px 25px rgba(0,0,0,0.45);
  border: 1px solid var(--accent-color);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.servico-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.6);
}

.servico-card-image {
  height: 220px;
  overflow: hidden;
}

.servico-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.servico-card-content {
  padding: var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent; /* usa o verde do container */
  border-top: 2px solid #008f63; /* linha de separação mais escura */
}

.servico-card-content h3 {
  color: var(--white); /* texto branco */
  margin: 0;
}

.service-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.9);
  z-index: 4000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  overflow-y: auto;
}

.service-modal-content {
  background: var(--white);
  color: var(--text-dark);
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  padding: var(--spacing-2xl);
  position: relative;
  margin: var(--spacing-lg);
  max-height: 95vh;
  overflow-y: auto;
  box-sizing: border-box;
}

.service-modal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.service-modal-image {
  min-height: 320px;
  overflow: hidden;
}

.service-modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-modal-info {
  padding-left: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.service-modal-title {
  margin-top: 0;
  margin-bottom: var(--spacing-lg);
}

.service-modal-close {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--white);
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background var(--transition-fast);
  line-height: 1;
  font-weight: bold;
}

.service-modal-close:hover {
  background: rgba(0, 0, 0, 0.9);
}

.service-modal-actions {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .service-modal {
    padding: var(--spacing-md);
    align-items: flex-start;
    padding-top: var(--spacing-xl);
  }
  
  .service-modal-content {
    max-width: 100%;
    width: calc(100% - 20px);
    margin: 0 auto;
    padding: var(--spacing-xl);
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .service-modal-grid {
    grid-template-columns: 1fr;
  }
  
  .service-modal-image {
    min-height: 250px;
  }
  
  .service-modal-info {
    padding: var(--spacing-lg) 0;
  }
  
  .service-modal-close {
    top: var(--spacing-sm);
    right: var(--spacing-sm);
    width: 36px;
    height: 36px;
    font-size: 1.5rem;
    background: rgba(0, 0, 0, 0.8);
    color: var(--white);
    z-index: 15;
  }
  
  .service-modal-actions {
    justify-content: center;
  }
}

@media (max-width: 900px) {
  .servicos-grid { grid-template-columns: 1fr; }
}

.diferenciais-section {
  background: var(--primary-color);
  color: var(--white);
}

.diferenciais-section .section-title {
  color: var(--accent-color);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
}

.diferenciais-section .section-subtitle {
  color: var(--white);
  font-size: var(--font-size-lg);
}

.diferenciais-section .card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
}

.diferenciais-section .card-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xl);
  background: rgba(255, 255, 255, 0.1);
}

.diferenciais-section .card-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.diferenciais-section .card-header {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.diferenciais-section .card-title {
  color: var(--white);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0;
  width: 100%;
}

.diferenciais-section .card-body p {
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--font-size-base);
  line-height: 1.6;
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

/* Chalés Grid 2x2 */
.chales-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.lofts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.simple-card {
  cursor: pointer;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.simple-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.simple-card-image {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.simple-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.simple-card:hover .simple-card-image img {
  transform: scale(1.05);
}

.simple-card-title {
  padding: var(--spacing-lg);
  text-align: center;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-dark);
  background: var(--white);
}

/* Project Modal */
.project-modal {
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
  overflow-y: auto;
}

.project-modal-content {
  background: var(--white);
  border-radius: 16px;
  max-width: 800px;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin: var(--spacing-lg);
  box-sizing: border-box;
}

.project-modal-close {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--white);
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background var(--transition-fast);
  line-height: 1;
  font-weight: bold;
}

.project-modal-close:hover {
  background: rgba(0, 0, 0, 0.9);
}

.project-modal-image {
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.project-modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-modal-info {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.project-modal-info h3 {
  color: var(--text-dark);
  font-size: var(--font-size-2xl);
  margin: 0;
}

.project-modal-info p {
  color: var(--text-light);
  line-height: 1.6;
}

.modal-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.modal-features li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--text-light);
}

.modal-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.modal-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-top: auto;
}

.modal-actions .btn {
  flex: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-modal {
    padding: var(--spacing-md);
    align-items: flex-start;
    padding-top: var(--spacing-xl);
  }
  
  .project-modal-content {
    grid-template-columns: 1fr;
    max-height: 90vh;
    max-width: 100%;
    width: calc(100% - 20px);
    margin: 0 auto;
    padding: var(--spacing-lg);
    overflow-y: auto;
  }

  .project-modal-image {
    min-height: 250px;
  }
  
  .project-modal-info {
    padding: var(--spacing-lg);
  }
  
  .project-modal-close {
    top: var(--spacing-sm);
    right: var(--spacing-sm);
    width: 36px;
    height: 36px;
    font-size: 1.5rem;
    background: rgba(0, 0, 0, 0.8);
    color: var(--white);
    z-index: 15;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .modal-actions .btn {
    width: 100%;
  }

  .lofts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

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
  .chales-grid,
  .lofts-grid {
    grid-template-columns: 1fr;
  }

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
