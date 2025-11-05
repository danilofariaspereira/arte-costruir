<template>
  <div class="parceiros">
    <!-- Hero Section -->
    <section class="hero-section parceiros-hero">
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

    <!-- Parceiros Section -->
    <section class="parceiros-section section" id="parceiros">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Parceiros Estratégicos</h2>
          <p class="section-subtitle">Parcerias com as melhores madeireiras e fornecedores do país</p>
        </div>
        
        <div class="parceiros-content">
          <div class="parceiros-intro">
            <p>
              A Arte Construir mantém parcerias estratégicas com as principais madeireiras e fornecedores do Brasil, 
              garantindo acesso a materiais de primeira qualidade e as mais recentes tecnologias em construção sustentável. 
              Essas parcerias nos permitem oferecer produtos exclusivos e inovadores aos nossos clientes.
            </p>
          </div>
          
          <div class="grid grid-2">
            <!-- TW Brazil -->
            <div class="parceiro-card">
              <div class="parceiro-logo">
                <img src="/src/assets/images/TWBrazil.png" alt="TW Brazil - Parceiro Estratégico" loading="lazy">
              </div>
              <div class="parceiro-content">
                <h3>TW Brazil</h3>
                <p class="parceiro-description">
                  Uma das principais madeireiras do país, especializada em madeira certificada e sustentável. 
                  A TW Brazil fornece matéria-prima de alta qualidade para nossos projetos de chalés e decks.
                </p>
                <div class="parceiro-benefits">
                  <h4>Benefícios da Parceria:</h4>
                  <ul>
                    <li>Madeira certificada FSC</li>
                    <li>Qualidade garantida</li>
                    <li>Preços competitivos</li>
                    <li>Suporte técnico especializado</li>
                    <li>Entrega rápida e confiável</li>
                  </ul>
                </div>
                <div class="parceiro-actions">
                  <a href="https://twbrazil.com.br" target="_blank" class="btn btn-primary">
                    Visitar Site
                  </a>
                </div>
              </div>
            </div>

            <!-- Inbrasil -->
            <div class="parceiro-card">
              <div class="parceiro-logo">
                <img src="/src/assets/images/logo-inbr.png" alt="Inbrasil - Parceiro Estratégico" loading="lazy">
              </div>
              <div class="parceiro-content">
                <h3>Inbrasil</h3>
                <p class="parceiro-description">
                  Referência em madeira plástica e materiais sustentáveis. A Inbrasil nos fornece produtos 
                  inovadores que combinam durabilidade, sustentabilidade e excelente custo-benefício.
                </p>
                <div class="parceiro-benefits">
                  <h4>Benefícios da Parceria:</h4>
                  <ul>
                    <li>Madeira plástica de alta qualidade</li>
                    <li>Materiais 100% recicláveis</li>
                    <li>Baixa manutenção</li>
                    <li>Resistência superior</li>
                    <li>Variedade de cores e texturas</li>
                  </ul>
                </div>
                <div class="parceiro-actions">
                  <a href="https://inbrasil.ind.br/" target="_blank" class="btn btn-primary">
                    Visitar Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipe Section -->
    <section class="equipe-section section" id="equipe">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossa Equipe Especializada</h2>
          <p class="section-subtitle">Profissionais qualificados para atender todas as suas necessidades</p>
        </div>
        
        <!-- Letícia - Arquiteta -->
        <a id="leticia-ia" style="display: block; position: relative; top: -80px; visibility: hidden;"></a>
        <div class="team-card">
          <div class="cintia-style-chatbot top" ref="leticiaChatbot">
            <!-- Left Panel - Profile Section -->
            <div class="chatbot-left-panel">
              <div class="chatbot-title-section">
                <h2 class="chatbot-main-title">
                  <span class="text-gradient">Letícia IA</span>
                </h2>
                <p class="chatbot-subtitle">A Arquiteta da Arte Construir</p>
              </div>
              
              <div class="chatbot-visual-elements">
                <div class="director-photo">
                  <img src="/src/assets/images/leticia-arquiteta.png" alt="Letícia - Arquiteta" class="photo-real">
                  <div class="photo-frame"></div>
                  <div class="ai-avatar">
                    <div class="avatar-face">
                      <div class="eye left-eye"></div>
                      <div class="eye right-eye"></div>
                      <div class="mouth"></div>
                    </div>
                  </div>
                </div>
                
                <div class="connection-lines">
                  <div class="line line-1"></div>
                  <div class="line line-2"></div>
                  <div class="line line-3"></div>
                </div>
                
                <div class="particles">
                  <div v-for="n in 20" :key="n" class="particle"></div>
                </div>
              </div>
            </div>

            <!-- Right Panel - Chat Interface -->
            <div class="chatbot-right-panel">
              <div class="chat-interface">
                <div class="chat-header">
                  <div class="chat-title">
                    <h3>Letícia IA</h3>
                    <span class="status-indicator">
                      <span class="status-dot"></span>
                      Online
                    </span>
                  </div>
                </div>
                
                <div class="chat-messages" ref="leticiaMessagesRef">
                  <div v-for="(message, index) in leticiaMessages" :key="index" class="message-bubble" :class="message.type">
                    <div class="message-content">
                      <p v-html="message.text"></p>
                      <span class="message-time">{{ message.time }}</span>
                      <button v-if="message.type === 'ai-message' && message.showWhatsApp" 
                              class="whatsapp-button" 
                              @click="openWhatsAppLeticia">
                        Entrar em contato pelo WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
                
                <div class="quick-questions">
                  <button 
                    v-for="question in leticiaQuickQuestions" 
                    :key="question"
                    class="quick-question-btn"
                    @click="sendQuickQuestion(question, 'leticia')">
                    {{ question }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tiago - Corretor -->
        <a id="tiago-ia" style="display: block; position: relative; top: -80px; visibility: hidden;"></a>
        <div class="team-card">
          <div class="cintia-style-chatbot bottom" ref="tiagoChatbot">
            <!-- Left Panel - Profile Section -->
            <div class="chatbot-left-panel">
              <div class="chatbot-title-section">
                <h2 class="chatbot-main-title">
                  <span class="text-gradient">Tiago IA</span>
                </h2>
                <p class="chatbot-subtitle">O Corretor da Arte Construir</p>
              </div>
              
              <div class="chatbot-visual-elements">
                <div class="director-photo">
                  <img src="/src/assets/images/tiago-corretor.jpeg" alt="Tiago - Corretor" class="photo-real">
                  <div class="photo-frame"></div>
                  <div class="ai-avatar">
                    <div class="avatar-face">
                      <div class="eye left-eye"></div>
                      <div class="eye right-eye"></div>
                      <div class="mouth"></div>
                    </div>
                  </div>
                </div>
                
                <div class="connection-lines">
                  <div class="line line-1"></div>
                  <div class="line line-2"></div>
                  <div class="line line-3"></div>
                </div>
                
                <div class="particles">
                  <div v-for="n in 20" :key="n" class="particle"></div>
                </div>
              </div>
            </div>

            <!-- Right Panel - Chat Interface -->
            <div class="chatbot-right-panel">
              <div class="chat-interface">
                <div class="chat-header">
                  <div class="chat-title">
                    <h3>Tiago IA</h3>
                    <span class="status-indicator">
                      <span class="status-dot"></span>
                      Online
                    </span>
                  </div>
                </div>
                
                <div class="chat-messages" ref="tiagoMessagesRef">
                  <div v-for="(message, index) in tiagoMessages" :key="index" class="message-bubble" :class="message.type">
                    <div class="message-content">
                      <p v-html="message.text"></p>
                      <span class="message-time">{{ message.time }}</span>
                      <button v-if="message.type === 'ai-message' && message.showWhatsApp" 
                              class="whatsapp-button" 
                              @click="openWhatsAppTiago">
                        Entrar em contato pelo WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
                
                <div class="quick-questions">
                  <button 
                    v-for="question in tiagoQuickQuestions" 
                    :key="question"
                    class="quick-question-btn"
                    @click="sendQuickQuestion(question, 'tiago')">
                    {{ question }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parceiro Modal -->
    <div v-if="showParceiroModal" class="parceiro-modal" @click="closeParceiroModal">
      <div class="parceiro-modal-content" @click.stop>
        <button class="modal-close" @click="closeParceiroModal">&times;</button>
        <h3>{{ currentParceiro.title }}</h3>
        <div class="modal-content">
          <img :src="currentParceiro.logo" :alt="currentParceiro.title" class="modal-logo">
          <p>{{ currentParceiro.description }}</p>
          <div class="modal-benefits">
            <h4>Benefícios da Parceria:</h4>
            <ul>
              <li v-for="benefit in currentParceiro.benefits" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
          <div class="modal-actions">
            <a :href="currentParceiro.website" target="_blank" class="btn btn-primary">
              Visitar Site Oficial
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'

export default {
  name: 'Parceiros',
  setup() {
    const showParceiroModal = ref(false)
    const isTyping = ref(false)
    
    const leticiaMessages = ref([])
    const tiagoMessages = ref([])
    const leticiaMessagesRef = ref(null)
    const tiagoMessagesRef = ref(null)

    const leticiaQuickQuestions = [
      'Quanto custa um projeto?',
      'Qual o prazo de entrega?',
      'Vocês fazem projetos personalizados?',
      'Qual tipo de madeira é melhor?',
      'Preciso de orçamento',
      'Como funciona o processo?'
    ]

    const tiagoQuickQuestions = [
      'Vocês vendem imóveis prontos?',
      'Qual a região de atuação?',
      'Como funciona o financiamento?',
      'Posso visitar os projetos?',
      'Preciso de mais informações',
      'Quero agendar uma visita'
    ]

    const leticiaResponses = {
      'Quanto custa um projeto?': 'O custo varia conforme o tamanho e complexidade do projeto. Para um orçamento personalizado, preciso conhecer melhor suas necessidades.',
      'Qual o prazo de entrega?': 'O prazo médio é de 60 a 90 dias, dependendo da complexidade do projeto e condições climáticas.',
      'Vocês fazem projetos personalizados?': 'Sim! Cada projeto é único e desenvolvido especialmente para atender suas necessidades. Trabalhamos com madeira ecológica e design sustentável.',
      'Qual tipo de madeira é melhor?': 'Depende do seu projeto! Madeira natural oferece beleza única, enquanto madeira plástica tem baixa manutenção.',
      'Preciso de orçamento': 'Fico feliz em ajudar! Vamos conversar sobre seu projeto para preparar um orçamento personalizado.',
      'Como funciona o processo?': 'Nosso processo é simples: consulta inicial, projeto, aprovação, construção e entrega.'
    }

    const tiagoResponses = {
      'Vocês vendem imóveis prontos?': 'Sim! Temos chalés e lofts prontos para entrega imediata, além de projetos personalizados.',
      'Qual a região de atuação?': 'Atendemos todo o Rio de Janeiro, com foco na região serrana.',
      'Como funciona o financiamento?': 'Trabalhamos com várias opções de financiamento e parcelamento.',
      'Posso visitar os projetos?': 'Claro! Temos projetos modelo que você pode visitar.',
      'Preciso de mais informações': 'Fico feliz em ajudar! Vou te passar todas as informações necessárias.',
      'Quero agendar uma visita': 'Perfeito! Vamos agendar uma visita para você conhecer nossos projetos.'
    }

    const openWhatsAppLeticia = () => {
      const message = encodeURIComponent('Olá Letícia, tudo bem? Vim através do site Arte Construir e gostaria de saber mais sobre o seu trabalho.')
      // Número da Letícia - substitua pelo número correto se necessário
      const whatsappUrl = `https://wa.me/5521960171061?text=${message}`
      window.open(whatsappUrl, '_blank')
    }

    const openWhatsAppTiago = () => {
      const message = encodeURIComponent('Olá Tiago, tudo bem? Vim através do site Arte Construir e gostaria de saber mais sobre o seu trabalho.')
      // Número do Tiago
      const whatsappUrl = `https://wa.me/5521991880697?text=${message}`
      window.open(whatsappUrl, '_blank')
    }

    const sendQuickQuestion = async (question, chatbot) => {
      if (chatbot === 'leticia') {
        // Adiciona mensagem do usuário
        leticiaMessages.value.push({
          type: 'user-message',
          text: question,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        })
        
        isTyping.value = true
        await nextTick()
        scrollToBottom(leticiaMessagesRef.value)
        
        setTimeout(() => {
          const response = leticiaResponses[question] || 'Obrigada pela sua pergunta! Para informações mais específicas, entre em contato conosco.'
          
          leticiaMessages.value.push({
            type: 'ai-message',
            text: response,
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            showWhatsApp: true
          })
          
          isTyping.value = false
          
          nextTick(() => {
            scrollToBottom(leticiaMessagesRef.value)
          })
        }, 1000)
      } else {
        // Adiciona mensagem do usuário
        tiagoMessages.value.push({
          type: 'user-message',
          text: question,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        })
        
        isTyping.value = true
        await nextTick()
        scrollToBottom(tiagoMessagesRef.value)
        
        setTimeout(() => {
          const response = tiagoResponses[question] || 'Obrigado pela sua pergunta! Para informações mais específicas, entre em contato conosco.'
          
          tiagoMessages.value.push({
            type: 'ai-message',
            text: response,
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            showWhatsApp: true
          })
          
          isTyping.value = false
          
          nextTick(() => {
            scrollToBottom(tiagoMessagesRef.value)
          })
        }, 1000)
      }
    }

    const scrollToBottom = (ref) => {
      if (ref) {
        ref.scrollTop = ref.scrollHeight
      }
    }

    const currentParceiro = ref({})

    const parceirosData = {
      tw: {
        title: 'TW Brazil',
        logo: '/src/assets/images/TWBrazil.png',
        description: 'Uma das principais madeireiras do país, especializada em madeira certificada e sustentável. A TW Brazil fornece matéria-prima de alta qualidade para nossos projetos de chalés e decks.',
        benefits: [
          'Madeira certificada FSC',
          'Qualidade garantida',
          'Preços competitivos',
          'Suporte técnico especializado',
          'Entrega rápida e confiável'
        ],
        website: 'https://twbrazil.com.br'
      },
      inbrasil: {
        title: 'Inbrasil',
        logo: '/src/assets/images/logo-inbr.png',
        description: 'Referência em madeira plástica e materiais sustentáveis. A Inbrasil nos fornece produtos inovadores que combinam durabilidade, sustentabilidade e excelente custo-benefício.',
        benefits: [
          'Madeira plástica de alta qualidade',
          'Materiais 100% recicláveis',
          'Baixa manutenção',
          'Resistência superior',
          'Variedade de cores e texturas'
        ],
        website: 'https://inbrasil.ind.br/'
      }
    }


    const openParceiroModal = (parceiroKey) => {
      currentParceiro.value = parceirosData[parceiroKey]
      showParceiroModal.value = true
    }

    const closeParceiroModal = () => {
      showParceiroModal.value = false
      currentParceiro.value = {}
    }

    const scrollToSection = (event) => {
      event.preventDefault()
      const element = document.querySelector('.parceiros-section')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    onMounted(() => {
      // Chatbots já estão visíveis imediatamente
    })

    return {
      showParceiroModal,
      isTyping,
      leticiaMessages,
      tiagoMessages,
      leticiaMessagesRef,
      tiagoMessagesRef,
      leticiaQuickQuestions,
      tiagoQuickQuestions,
      currentParceiro,
      openParceiroModal,
      closeParceiroModal,
      sendQuickQuestion,
      openWhatsAppLeticia,
      openWhatsAppTiago,
      scrollToSection
    }
  }
}
</script>

<style scoped>
/* Page-specific styles */
.parceiros-hero {
  background: url('/src/assets/images/bakgroud-parceiros.png');
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

.hero-scroll-indicator:hover a {
  transform: translateY(5px);
}

.arrow-image {
  width: 40px;
  height: auto;
  filter: brightness(0) invert(1);
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

.parceiros-section {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.parceiros-section .section-title {
  color: var(--white);
}

.parceiros-section .section-subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.parceiros-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
}

.parceiro-card {
  background: rgba(20, 20, 20, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-normal);
  height: 100%;
}

.parceiro-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  border-color: rgba(184, 134, 11, 0.3);
}

.parceiro-logo {
  padding: var(--spacing-xl);
  text-align: center;
  background: rgba(40, 40, 40, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parceiro-logo img {
  max-height: 100px;
  max-width: 220px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: brightness(1.3) contrast(1.1);
}

.parceiro-content {
  padding: var(--spacing-xl);
}

.parceiro-content h3 {
  color: var(--white);
  margin-bottom: var(--spacing-md);
}

.parceiro-description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.parceiro-benefits {
  margin: var(--spacing-lg) 0;
}

.parceiro-benefits h4 {
  color: var(--gold-light);
  margin-bottom: var(--spacing-sm);
}

.parceiro-benefits ul {
  list-style: none;
  padding: 0;
}

.parceiro-benefits li {
  padding: var(--spacing-xs) 0;
  position: relative;
  padding-left: var(--spacing-lg);
  color: rgba(255, 255, 255, 0.9);
}

.parceiro-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--gold-light);
  font-weight: 600;
}

.parceiro-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.parceiro-actions .btn {
  flex: 1;
}

.equipe-section {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.equipe-section .section-title {
  color: var(--white);
}

.equipe-section .section-subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.team-card {
  position: relative;
  padding: var(--spacing-3xl) 0;
}

/* Cíntia IA Style Chatbots */
.cintia-style-chatbot {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
  background: rgba(20, 20, 20, 0.95);
  border-radius: 20px;
  padding: var(--spacing-3xl);
  margin: 0 auto;
  max-width: 1200px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cintia-style-chatbot.top {
  margin-bottom: var(--spacing-lg);
}

.cintia-style-chatbot.bottom {
  margin-top: var(--spacing-lg);
}

/* Left Panel - Profile Section */
.chatbot-left-panel {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chatbot-title-section {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.chatbot-main-title {
  font-size: var(--font-size-3xl);
  font-weight: bold;
  margin: 0;
  margin-bottom: var(--spacing-sm);
}

.text-gradient {
  background: linear-gradient(135deg, #B8860B, #DAA520, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chatbot-subtitle {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
}

.director-photo {
  position: relative;
  z-index: 2;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-real {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #B8860B;
  box-shadow: 0 0 30px rgba(184, 134, 11, 0.5);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.chatbot-visual-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.photo-frame {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #B8860B;
  border-radius: 50%;
  animation: pulse 3s infinite;
}

.ai-avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(184, 134, 11, 0.5);
}

.avatar-face {
  position: relative;
  width: 80px;
  height: 80px;
}

.eye {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #B8860B;
  border-radius: 50%;
  top: 25px;
  animation: blink 3s infinite;
}

.left-eye {
  left: 20px;
}

.right-eye {
  right: 20px;
}

.mouth {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 10px;
  border: 2px solid #B8860B;
  border-top: none;
  border-radius: 0 0 20px 20px;
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #B8860B, transparent);
  animation: lineFlow 3s linear infinite;
}

.line-1 {
  top: 30%;
  left: 0;
  width: 100%;
  animation-delay: 0s;
}

.line-2 {
  top: 50%;
  left: 0;
  width: 100%;
  animation-delay: 1s;
}

.line-3 {
  top: 70%;
  left: 0;
  width: 100%;
  animation-delay: 2s;
}

@keyframes lineFlow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #B8860B;
  border-radius: 50%;
  animation: particleFloat 6s linear infinite;
}

.particle:nth-child(odd) {
  background: #DAA520;
  animation-duration: 8s;
}

.particle:nth-child(3n) {
  background: #FFD700;
  animation-duration: 10s;
}

.particle:nth-child(1) { top: 10%; left: 20%; animation-delay: 0s; }
.particle:nth-child(2) { top: 20%; left: 80%; animation-delay: 0.5s; }
.particle:nth-child(3) { top: 30%; left: 40%; animation-delay: 1s; }
.particle:nth-child(4) { top: 40%; left: 70%; animation-delay: 1.5s; }
.particle:nth-child(5) { top: 50%; left: 10%; animation-delay: 2s; }
.particle:nth-child(6) { top: 60%; left: 90%; animation-delay: 2.5s; }
.particle:nth-child(7) { top: 70%; left: 30%; animation-delay: 3s; }
.particle:nth-child(8) { top: 80%; left: 60%; animation-delay: 3.5s; }
.particle:nth-child(9) { top: 15%; left: 50%; animation-delay: 4s; }
.particle:nth-child(10) { top: 25%; left: 15%; animation-delay: 4.5s; }
.particle:nth-child(11) { top: 35%; left: 85%; animation-delay: 5s; }
.particle:nth-child(12) { top: 45%; left: 25%; animation-delay: 5.5s; }
.particle:nth-child(13) { top: 55%; left: 75%; animation-delay: 6s; }
.particle:nth-child(14) { top: 65%; left: 5%; animation-delay: 6.5s; }
.particle:nth-child(15) { top: 75%; left: 95%; animation-delay: 7s; }
.particle:nth-child(16) { top: 85%; left: 35%; animation-delay: 7.5s; }
.particle:nth-child(17) { top: 12%; left: 65%; animation-delay: 8s; }
.particle:nth-child(18) { top: 22%; left: 45%; animation-delay: 8.5s; }
.particle:nth-child(19) { top: 32%; left: 55%; animation-delay: 9s; }
.particle:nth-child(20) { top: 42%; left: 5%; animation-delay: 9.5s; }

@keyframes particleFloat {
  0% {
    transform: translateY(100px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes blink {
  0%, 90%, 100% {
    transform: scaleY(1);
  }
  95% {
    transform: scaleY(0.1);
  }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* Right Panel - Chat Interface */
.chatbot-right-panel {
  background: rgba(30, 30, 30, 0.95);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.chat-interface {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-header {
  background: linear-gradient(135deg, #B8860B, #DAA520);
  padding: var(--spacing-lg);
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  color: white;
}

.chat-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-title h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.chat-messages {
  height: 300px;
  overflow-y: auto;
  padding: var(--spacing-lg);
  background: rgba(20, 20, 20, 0.95);
}

.message-bubble {
  display: flex;
  margin-bottom: var(--spacing-md);
  align-items: flex-start;
  gap: var(--spacing-sm);
}

.message-bubble.ai-message {
  flex-direction: row;
}

.message-bubble.user-message {
  flex-direction: row-reverse;
}

.message-content {
  background: rgba(40, 40, 40, 0.8);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 15px;
  max-width: 80%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.message-content p {
  margin: 0 0 var(--spacing-xs) 0;
  line-height: 1.4;
  color: var(--white);
}

.message-bubble.user-message .message-content {
  background: linear-gradient(135deg, #B8860B, #DAA520);
  color: white;
  border: none;
}

.message-bubble.user-message .message-content p {
  color: white;
}

.message-time {
  font-size: var(--font-size-xs);
  opacity: 0.7;
  color: rgba(255, 255, 255, 0.6);
}

.whatsapp-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: linear-gradient(135deg, #B8860B, #DAA520);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.whatsapp-button:hover {
  background: linear-gradient(135deg, #DAA520, #FFD700);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(184, 134, 11, 0.4);
}

.chat-input {
  padding: var(--spacing-lg);
  border-top: 1px solid rgba(184, 134, 11, 0.2);
  background: var(--white);
}

.input-container {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.input-container input {
  flex: 1;
  background: var(--white);
  border: 2px solid rgba(184, 134, 11, 0.3);
  border-radius: 25px;
  padding: var(--spacing-sm) var(--spacing-lg);
  color: var(--text-dark);
  font-size: var(--font-size-sm);
}

.input-container input:focus {
  outline: none;
  border-color: #B8860B;
  box-shadow: 0 0 10px rgba(184, 134, 11, 0.3);
}

.input-container input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.send-button {
  background: linear-gradient(135deg, #B8860B, #DAA520);
  border: none;
  border-radius: 25px;
  padding: var(--spacing-sm) var(--spacing-lg);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.send-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(184, 134, 11, 0.4);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quick-questions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.quick-questions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  background: rgba(20, 20, 20, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.quick-question-btn {
  background: rgba(40, 40, 40, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: var(--font-size-xs);
}

.quick-question-btn:hover:not(:disabled) {
  background: rgba(184, 134, 11, 0.3);
  border-color: rgba(184, 134, 11, 0.5);
  color: var(--white);
  transform: translateY(-2px);
}

.quick-question-btn:active {
  transform: translateY(0);
}

.quick-question-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Parceiro Modal */
.parceiro-modal {
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

.parceiro-modal-content {
  background: var(--white);
  border-radius: 12px;
  padding: var(--spacing-xl);
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  border: none;
  font-size: var(--font-size-2xl);
  cursor: pointer;
  color: var(--text-dark);
}

.parceiro-modal-content h3 {
  color: var(--text-dark);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.modal-logo {
  display: block;
  margin: 0 auto var(--spacing-lg);
  max-height: 100px;
  max-width: 200px;
}

.modal-content p {
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.modal-benefits h4 {
  color: var(--accent-color);
  margin-bottom: var(--spacing-md);
}

.modal-benefits ul {
  list-style: none;
  padding: 0;
  margin-bottom: var(--spacing-lg);
}

.modal-benefits li {
  padding: var(--spacing-xs) 0;
  position: relative;
  padding-left: var(--spacing-lg);
}

.modal-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.modal-actions {
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cintia-style-chatbot {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .chatbot-left-panel {
    height: 300px;
    padding: var(--spacing-lg);
  }
  
  .chatbot-main-title {
    font-size: var(--font-size-2xl);
  }
  
  .chatbot-visual-elements {
    width: 150px;
    height: 150px;
  }
  
  .director-photo {
    width: 100px;
    height: 100px;
  }
  
  .photo-real {
    width: 100px;
    height: 100px;
  }
  
  .parceiro-actions {
    flex-direction: column;
  }
  
  .parceiro-modal-content {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .chatbot-left-panel {
    height: 250px;
  }
  
  .chatbot-main-title {
    font-size: var(--font-size-xl);
  }
  
  .chatbot-subtitle {
    font-size: var(--font-size-base);
  }
  
  .chat-messages {
    height: 250px;
  }
  
  .quick-questions {
    flex-direction: column;
  }
  
  .quick-question-btn {
    text-align: center;
  }
}
</style>
