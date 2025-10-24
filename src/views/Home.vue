<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
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

    <!-- Quem Somos Section -->
    <section class="quem-somos-section section">
      <div class="container">
        <div class="grid grid-2">
          <div class="section-content">
            <h2>Quem Somos</h2>
            <p>A Arte Construir é especialista em <strong class="highlight">construção de chalés de madeira e decks sustentáveis</strong> no <strong class="highlight">Rio de Janeiro</strong>. Localizada em <strong class="highlight">Teresópolis</strong>, atendemos todo o RJ com <strong class="highlight">mais de 500 projetos entregues</strong>, priorizando <strong class="highlight">madeira ecológica e sustentabilidade</strong>.</p>
            <p>Criamos espaços únicos que harmonizam com a natureza, utilizando madeira de qualidade e parcerias com as melhores madeireiras do país.</p>
          </div>
            <div class="video-container">
              <div class="forest-background">
                <video 
                  src="/src/assets/videos/quem-somos-video.mp4" 
                  autoplay 
                  muted 
                  loop 
                  playsinline
                  class="forest-video">
                </video>
              </div>
              <div class="video-overlay"></div>
              <div class="logo-sobre-video">
                <img src="/src/assets/images/logo-arte-construir-02.png" alt="Arte Construir" class="logo-large">
              </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Parceiros Preview Section -->
    <section class="parceiros-preview-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Parceiros</h2>
          <p class="section-subtitle">Trabalhamos com os melhores fornecedores e temos uma equipe especializada</p>
        </div>
        
        <div class="cards-pai">
          <!-- Leticia Card -->
          <div class="flip-card margin-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="background-image: url('/src/assets/images/leticia-arquiteta.png');">
                <h3><b>Leticia</b> Arquiteta</h3>
              </div>
              <div class="flip-card-back">
                A Arte Construir conta com a expertise da Leticia Arquiteta para projetos de arquitetura sustentável.<br>
                Especialista em design com madeira ecológica e consultoria especializada em chalés.<br>
                Acompanhamento completo de obra para garantir a qualidade e sustentabilidade do seu projeto.<br>
                <br>
                <router-link to="/parceiros#leticia-ia" class="partner-cta">Saiba mais ></router-link>
              </div>
            </div>
          </div>
          
          <!-- Tiago Card -->
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="background-image: url('/src/assets/images/tiago-corretor.jpeg');">
                <h3><b>Tiago</b> Corretor</h3>
              </div>
              <div class="flip-card-back">
                Tiago Corretor é especialista em vendas de imóveis de alto padrão na região serrana.<br>
                Especialista em chalés e casas de madeira, oferecendo atendimento personalizado.<br>
                Conecta clientes aos melhores projetos da Arte Construir com excelência e dedicação.<br>
                <br>
                <router-link to="/parceiros#tiago-ia" class="partner-cta">Saiba mais ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Contato Section -->
    <section class="modern-contact-section section">
      <div class="container">
        <!-- Cabeçalho da Seção -->
        <div class="contact-section-header">
          <h2 class="contact-title">
            <span class="text-gradient-gold">Contato</span> <span style="color: #fff;">e</span> <span style="color: #fff;">Localização</span>
          </h2>
          <p class="contact-subtitle">
            Venha conhecer nosso escritório e vamos realizar seu sonho juntos
          </p>
        </div>
        
        <!-- Grid de Conteúdo -->
        <div class="contact-grid">
          <!-- Card de Informações -->
          <div class="contact-info-card">
            <div class="info-card-header">
              <h3 class="info-card-title">Arte Construir</h3>
              <p class="info-card-subtitle">Teresópolis, RJ - Várzea</p>
            </div>
            
            <div class="contact-details-list">
              <div class="detail-box">
                <div class="detail-icon">📍</div>
                <div class="detail-text">
                  <h4>Endereço</h4>
                  <p>Av. Feliciano Sodré, 300</p>
                  <p>Várzea, Teresópolis - RJ</p>
                  <p>CEP: 25963-081</p>
                </div>
              </div>
              
              <div class="detail-box">
                <div class="detail-icon">✉️</div>
                <div class="detail-text">
                  <h4>E-mail</h4>
                  <p>artechales@gmail.com</p>
                </div>
              </div>
            </div>
            
            <!-- Horários de Atendimento -->
            <div class="opening-hours-box">
              <h4>Horários de Atendimento</h4>
              <div class="hours-list">
                <div class="hour-item">
                  <span class="day-label">Segunda - Sexta</span>
                  <span class="time-label">9:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Card do Mapa -->
          <div class="map-card">
            <div class="map-card-header">
              <h3>Nossa Localização</h3>
              <p>Arte Construir no coração de Teresópolis</p>
            </div>
            
            <div class="map-iframe-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.123456789!2d-42.987654!3d-22.412345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzQ0LjQiUyA0MsKwNTknMTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%" 
                height="400" 
                style="border:0; border-radius: 15px;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização da Arte Construir - Av. Feliciano Sodré, 300, Teresópolis, RJ">
              </iframe>
              
              <!-- Botão para abrir no Google Maps -->
              <div class="map-action-button">
                <a href="https://www.google.com/maps/search/?api=1&query=Av.+Feliciano+Sodré,+300+-+Várzea,+Teresópolis+-+RJ,+25963-081" 
                   target="_blank" 
                   class="btn-open-maps">
                  <span>📍</span>
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    scrollToSection(event) {
      event.preventDefault()
      const element = document.querySelector('.quem-somos-section')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>

<style scoped>
/* Hero Section Styles */
.hero-section {
  position: relative;
  height: 633px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/src/assets/images/backgroand-banner-home.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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

/* Quem Somos Section */
.quem-somos-section {
  background: var(--black);
  color: var(--white);
  padding: var(--spacing-3xl) 0;
}

.section-content h2 {
  color: var(--accent-color);
  margin-bottom: var(--spacing-lg);
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
}

.section-content p {
  color: var(--white);
  font-size: clamp(1.2rem, 2.4vw, 1.5rem);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.section-content .highlight {
  color: var(--white);
  font-weight: 600;
  font-size: clamp(1.2rem, 2.4vw, 1.5rem);
}

.forest-background {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
}

.forest-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.video-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(184, 134, 11, 0.6), 0 0 60px rgba(184, 134, 11, 0.3);
  height: 500px;
}


.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4));
  z-index: 1;
}

.logo-sobre-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.logo-large {
  height: 120px;
  width: auto;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

/* Parceiros Preview Section */
.parceiros-preview-section {
  background: var(--black);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  color: var(--accent-color);
  font-size: clamp(3rem, 6vw, 5rem);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

.section-subtitle {
  color: var(--white);
  font-size: var(--font-size-lg);
}

.cards-pai {
  display: flex;
  gap: var(--spacing-3xl);
  justify-content: center;
  flex-wrap: wrap;
}

.flip-card {
  background-color: transparent;
  width: 500px;
  height: 500px;
  perspective: 1000px;
}

.margin-card {
  margin-right: var(--spacing-3xl);
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(184, 134, 11, 0.6), 0 0 60px rgba(184, 134, 11, 0.3);
}

.flip-card-front {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-lg);
  color: var(--white);
}

.flip-card-front h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  margin: 0;
}

.flip-card-back {
  background: var(--black);
  color: var(--white);
  transform: rotateY(180deg);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border: 1px solid var(--accent-color);
}

.flip-card-back p {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
}

.partner-cta {
  color: var(--accent-color);
  font-weight: 600;
  text-decoration: none;
  margin-top: auto;
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid var(--accent-color);
  border-radius: 6px;
  transition: all var(--transition-fast);
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
}

.partner-cta:hover {
  background: var(--accent-color);
  color: var(--white);
}


/* Contact Section Styles */
.modern-contact-section {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(184, 134, 11, 0.1) 100%);
}

.contact-section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.contact-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #B8860B, #DAA520, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle {
  font-size: var(--font-size-xl);
  color: #999;
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
}

.contact-info-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: var(--spacing-3xl);
  border: 1px solid rgba(184, 134, 11, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all var(--transition-normal);
}

.contact-info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(184, 134, 11, 0.3);
  border-color: rgba(184, 134, 11, 0.5);
}

.info-card-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid rgba(184, 134, 11, 0.2);
}

.info-card-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--spacing-sm);
}

.info-card-subtitle {
  color: #B8860B;
  font-size: var(--font-size-lg);
}

.contact-details-list {
  margin-bottom: var(--spacing-3xl);
}

.detail-box {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: rgba(184, 134, 11, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(184, 134, 11, 0.1);
  transition: all var(--transition-normal);
}

.detail-box:hover {
  background: rgba(184, 134, 11, 0.1);
  border-color: rgba(184, 134, 11, 0.3);
  transform: translateX(5px);
}

.detail-icon {
  font-size: var(--font-size-2xl);
  flex-shrink: 0;
  margin-top: 5px;
}

.detail-text h4 {
  font-size: var(--font-size-lg);
  color: #B8860B;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.detail-text p {
  color: #ccc;
  margin-bottom: 5px;
  line-height: 1.5;
}

.opening-hours-box {
  background: rgba(184, 134, 11, 0.08);
  border-radius: 15px;
  padding: var(--spacing-lg);
  border: 1px solid rgba(184, 134, 11, 0.3);
}

.opening-hours-box h4 {
  font-size: var(--font-size-lg);
  color: var(--white);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-weight: 600;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.hour-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(184, 134, 11, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(184, 134, 11, 0.2);
  transition: all var(--transition-normal);
}

.hour-item:hover {
  background: rgba(184, 134, 11, 0.15);
  border-color: rgba(184, 134, 11, 0.4);
}

.day-label {
  color: var(--white);
  font-weight: 500;
}

.time-label {
  color: #FFD700;
  font-weight: 600;
}

.map-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: var(--spacing-3xl);
  border: 1px solid rgba(184, 134, 11, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all var(--transition-normal);
}

.map-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(184, 134, 11, 0.3);
  border-color: rgba(184, 134, 11, 0.5);
}

.map-card-header {
  text-align: center;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid rgba(184, 134, 11, 0.2);
}

.map-card-header h3 {
  font-size: var(--font-size-2xl);
  color: var(--white);
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
}

.map-card-header p {
  color: #B8860B;
  font-size: var(--font-size-lg);
}

.map-iframe-wrapper {
  background: transparent;
  border-radius: 15px;
  border: none;
  backdrop-filter: none;
  padding: 0;
  overflow: hidden;
  box-shadow: none;
}

.map-iframe-wrapper iframe {
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.map-action-button {
  margin-top: var(--spacing-lg);
  text-align: center;
}

.btn-open-maps {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: linear-gradient(90deg, #B8860B, #DAA520);
  border: none;
  border-radius: 25px;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-normal);
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(184, 134, 11, 0.3);
}

.btn-open-maps:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(184, 134, 11, 0.5);
  background: linear-gradient(90deg, #DAA520, #FFD700);
}

.btn-open-maps span {
  font-size: var(--font-size-lg);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    gap: var(--spacing-3xl);
  }
  
  .contact-info-card {
    padding: var(--spacing-xl);
  }
  
  .map-card {
    padding: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .modern-contact-section {
    padding: var(--spacing-3xl) 0;
  }

  .contact-section-header {
    margin-bottom: var(--spacing-3xl);
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
  
  .contact-info-card {
    padding: var(--spacing-lg);
  }
  
  .map-card {
    padding: var(--spacing-lg);
  }

  .detail-box {
    padding: var(--spacing-md);
  }

  .opening-hours-box {
    padding: var(--spacing-lg);
  }

  .cards-pai {
    flex-direction: column;
    align-items: center;
  }

  .margin-card {
    margin-right: 0;
    margin-bottom: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .modern-contact-section {
    padding: var(--spacing-xl) 0;
  }

  .contact-title {
    font-size: var(--font-size-2xl);
  }

  .contact-subtitle {
    font-size: var(--font-size-base);
  }

  .contact-info-card {
    padding: var(--spacing-lg);
  }
  
  .map-card {
    padding: var(--spacing-lg);
  }

  .info-card-title {
    font-size: var(--font-size-xl);
  }

  .info-card-subtitle {
    font-size: var(--font-size-sm);
  }

  .detail-box {
    gap: var(--spacing-md);
    padding: var(--spacing-md);
  }

  .detail-icon {
    font-size: var(--font-size-xl);
  }

  .detail-text h4 {
    font-size: var(--font-size-base);
  }

  .detail-text p {
    font-size: var(--font-size-sm);
  }

  .btn-open-maps {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-sm);
  }

  .map-card-header h3 {
    font-size: var(--font-size-xl);
  }

  .hour-item {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .day-label,
  .time-label {
    font-size: var(--font-size-sm);
  }
}
</style>
