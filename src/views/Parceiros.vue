<template>
  <div class="parceiros">
    <!-- Hero Section -->
    <section class="hero-section parceiros-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Nossos Parceiros e Equipe</h1>
          <p class="hero-subtitle">Trabalhamos com os melhores fornecedores e temos uma equipe especializada para atender você</p>
          <div class="hero-buttons">
            <a href="#parceiros" class="btn btn-primary btn-large">
              Conheça Nossos Parceiros
            </a>
            <a href="#equipe" class="btn btn-secondary btn-large">
              Nossa Equipe
            </a>
          </div>
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
                <img src="/src/assets/images/logo-tw-brazil.jpg" alt="TW Brazil - Parceiro Estratégico" loading="lazy">
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
                  <button class="btn btn-secondary" @click="openParceiroModal('tw')">
                    Mais Informações
                  </button>
                </div>
              </div>
            </div>

            <!-- Inbrasil -->
            <div class="parceiro-card">
              <div class="parceiro-logo">
                <img src="/src/assets/images/logo-inbrasil.jpg" alt="Inbrasil - Parceiro Estratégico" loading="lazy">
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
                  <a href="https://inbrasil.com.br" target="_blank" class="btn btn-primary">
                    Visitar Site
                  </a>
                  <button class="btn btn-secondary" @click="openParceiroModal('inbrasil')">
                    Mais Informações
                  </button>
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
          <div class="cintia-style-chatbot top" :class="{ visible: leticiaVisible }" ref="leticiaChatbot">
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
                
                <div class="chat-messages" ref="leticiaMessages">
                  <div v-for="(message, index) in leticiaMessages" :key="index" class="message-bubble" :class="message.type">
                    <div class="message-avatar">
                      <span v-if="message.type === 'ai-message'" class="ai-icon">🤖</span>
                      <span v-else class="user-icon">👤</span>
                    </div>
                    <div class="message-content">
                      <p>{{ message.text }}</p>
                      <span class="message-time">{{ message.time }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="chat-input">
                  <div class="input-container">
                    <input 
                      type="text" 
                      v-model="leticiaInput" 
                      placeholder="Digite sua pergunta..."
                      @keyup.enter="sendLeticiaMessage"
                      ref="leticiaInputRef">
                    <button class="send-button" @click="sendLeticiaMessage" :disabled="!leticiaInput.trim()">
                      Enviar
                    </button>
                  </div>
                </div>
                
                <div class="quick-questions">
                  <button 
                    v-for="question in leticiaQuickQuestions" 
                    :key="question"
                    class="quick-question-btn"
                    @click="sendQuickQuestion(question, 'leticia')"
                    :disabled="isTyping">
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
          <div class="cintia-style-chatbot bottom" :class="{ visible: tiagoVisible }" ref="tiagoChatbot">
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
                
                <div class="chat-messages" ref="tiagoMessages">
                  <div v-for="(message, index) in tiagoMessages" :key="index" class="message-bubble" :class="message.type">
                    <div class="message-avatar">
                      <span v-if="message.type === 'ai-message'" class="ai-icon">🤖</span>
                      <span v-else class="user-icon">👤</span>
                    </div>
                    <div class="message-content">
                      <p>{{ message.text }}</p>
                      <span class="message-time">{{ message.time }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="chat-input">
                  <div class="input-container">
                    <input 
                      type="text" 
                      v-model="tiagoInput" 
                      placeholder="Digite sua pergunta..."
                      @keyup.enter="sendTiagoMessage"
                      ref="tiagoInputRef">
                    <button class="send-button" @click="sendTiagoMessage" :disabled="!tiagoInput.trim()">
                      Enviar
                    </button>
                  </div>
                </div>
                
                <div class="quick-questions">
                  <button 
                    v-for="question in tiagoQuickQuestions" 
                    :key="question"
                    class="quick-question-btn"
                    @click="sendQuickQuestion(question, 'tiago')"
                    :disabled="isTyping">
                    {{ question }}
                  </button>
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
        <div class="grid grid-2">
          <div>
            <h2>Entre em Contato</h2>
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
                <select v-model="form.contactReason" required>
                  <option value="">Motivo do contato</option>
                  <option value="projeto">Falar com Letícia - Projeto</option>
                  <option value="imovel">Falar com Tiago - Imóvel</option>
                  <option value="orcamento">Solicitar Orçamento</option>
                  <option value="duvida">Tirar Dúvidas</option>
                </select>
              </div>
              <div class="form-group">
                <textarea v-model="form.message" rows="5" placeholder="Sua mensagem..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">
                Enviar Mensagem
              </button>
            </form>
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
import { ref, reactive, onMounted, nextTick } from 'vue'

export default {
  name: 'Parceiros',
  setup() {
    const leticiaVisible = ref(false)
    const tiagoVisible = ref(false)
    const showParceiroModal = ref(false)
    const isTyping = ref(false)
    
    const leticiaInput = ref('')
    const tiagoInput = ref('')
    const leticiaMessages = ref([])
    const tiagoMessages = ref([])
    
    const form = reactive({
      name: '',
      phone: '',
      contactReason: '',
      message: ''
    })

    const leticiaQuickQuestions = [
      'Quanto custa um projeto?',
      'Qual o prazo de entrega?',
      'Vocês fazem projetos personalizados?',
      'Qual tipo de madeira é melhor?'
    ]

    const tiagoQuickQuestions = [
      'Vocês vendem imóveis prontos?',
      'Qual a região de atuação?',
      'Como funciona o financiamento?',
      'Posso visitar os projetos?'
    ]

    const currentParceiro = ref({})

    const parceirosData = {
      tw: {
        title: 'TW Brazil',
        logo: '/src/assets/images/logo-tw-brazil.jpg',
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
        logo: '/src/assets/images/logo-inbrasil.jpg',
        description: 'Referência em madeira plástica e materiais sustentáveis. A Inbrasil nos fornece produtos inovadores que combinam durabilidade, sustentabilidade e excelente custo-benefício.',
        benefits: [
          'Madeira plástica de alta qualidade',
          'Materiais 100% recicláveis',
          'Baixa manutenção',
          'Resistência superior',
          'Variedade de cores e texturas'
        ],
        website: 'https://inbrasil.com.br'
      }
    }

    const leticiaResponses = {
      'Quanto custa um projeto?': 'O custo varia conforme o tamanho e complexidade do projeto. Para um orçamento personalizado, preciso conhecer melhor suas necessidades. Posso te ajudar com isso!',
      'Qual o prazo de entrega?': 'O prazo médio é de 60 a 90 dias, dependendo da complexidade do projeto e condições climáticas. Sempre mantemos nossos clientes informados sobre o progresso.',
      'Vocês fazem projetos personalizados?': 'Sim! Cada projeto é único e desenvolvido especialmente para atender suas necessidades. Trabalhamos com madeira ecológica e design sustentável.',
      'Qual tipo de madeira é melhor?': 'Depende do seu projeto! Madeira natural oferece beleza única, enquanto madeira plástica tem baixa manutenção. Posso te ajudar a escolher a melhor opção.'
    }

    const tiagoResponses = {
      'Vocês vendem imóveis prontos?': 'Sim! Temos chalés e lofts prontos para entrega imediata, além de projetos personalizados. Posso te mostrar as opções disponíveis.',
      'Qual a região de atuação?': 'Atendemos todo o Rio de Janeiro, com foco na região serrana. Temos projetos em Teresópolis, Petrópolis, Nova Friburgo e outras cidades.',
      'Como funciona o financiamento?': 'Trabalhamos com várias opções de financiamento e parcelamento. Posso te apresentar as melhores condições disponíveis.',
      'Posso visitar os projetos?': 'Claro! Temos projetos modelo que você pode visitar. Agende uma visita e veja a qualidade dos nossos trabalhos pessoalmente.'
    }

    const openParceiroModal = (parceiroKey) => {
      currentParceiro.value = parceirosData[parceiroKey]
      showParceiroModal.value = true
    }

    const closeParceiroModal = () => {
      showParceiroModal.value = false
      currentParceiro.value = {}
    }

    const sendLeticiaMessage = async () => {
      if (!leticiaInput.value.trim()) return
      
      const userMessage = leticiaInput.value.trim()
      leticiaMessages.value.push({
        type: 'user-message',
        text: userMessage,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      })
      
      leticiaInput.value = ''
      isTyping.value = true
      
      await nextTick()
      scrollToBottom('leticiaMessages')
      
      setTimeout(() => {
        const response = leticiaResponses[userMessage] || 'Obrigada pela sua pergunta! Para informações mais específicas, entre em contato conosco pelos telefones (11) 94311-2721 ou (21) 96017-1061.'
        
        leticiaMessages.value.push({
          type: 'ai-message',
          text: response,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        })
        
        isTyping.value = false
        
        nextTick(() => {
          scrollToBottom('leticiaMessages')
        })
      }, 1500)
    }

    const sendTiagoMessage = async () => {
      if (!tiagoInput.value.trim()) return
      
      const userMessage = tiagoInput.value.trim()
      tiagoMessages.value.push({
        type: 'user-message',
        text: userMessage,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      })
      
      tiagoInput.value = ''
      isTyping.value = true
      
      await nextTick()
      scrollToBottom('tiagoMessages')
      
      setTimeout(() => {
        const response = tiagoResponses[userMessage] || 'Obrigado pela sua pergunta! Para informações mais específicas sobre imóveis, entre em contato conosco pelos telefones (11) 94311-2721 ou (21) 96017-1061.'
        
        tiagoMessages.value.push({
          type: 'ai-message',
          text: response,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        })
        
        isTyping.value = false
        
        nextTick(() => {
          scrollToBottom('tiagoMessages')
        })
      }, 1500)
    }

    const sendQuickQuestion = (question, chatbot) => {
      if (chatbot === 'leticia') {
        leticiaInput.value = question
        sendLeticiaMessage()
      } else {
        tiagoInput.value = question
        sendTiagoMessage()
      }
    }

    const scrollToBottom = (refName) => {
      const element = document.querySelector(`.${refName}`)
      if (element) {
        element.scrollTop = element.scrollHeight
      }
    }

    const submitForm = () => {
      console.log('Formulário enviado:', form)
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    }

    onMounted(() => {
      // Animar chatbots quando entrarem na viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('top')) {
              setTimeout(() => {
                leticiaVisible.value = true
              }, 500)
            } else if (entry.target.classList.contains('bottom')) {
              setTimeout(() => {
                tiagoVisible.value = true
              }, 1000)
            }
          }
        })
      }, { threshold: 0.3 })

      const leticiaChatbot = document.querySelector('.cintia-style-chatbot.top')
      const tiagoChatbot = document.querySelector('.cintia-style-chatbot.bottom')
      
      if (leticiaChatbot) observer.observe(leticiaChatbot)
      if (tiagoChatbot) observer.observe(tiagoChatbot)
    })

    return {
      leticiaVisible,
      tiagoVisible,
      showParceiroModal,
      isTyping,
      leticiaInput,
      tiagoInput,
      leticiaMessages,
      tiagoMessages,
      leticiaQuickQuestions,
      tiagoQuickQuestions,
      currentParceiro,
      form,
      openParceiroModal,
      closeParceiroModal,
      sendLeticiaMessage,
      sendTiagoMessage,
      sendQuickQuestion,
      submitForm
    }
  }
}
</script>

<style scoped>
/* Page-specific styles */
.parceiros-hero {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(184, 134, 11, 0.3)), url('/src/assets/images/parceiros-hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 633px;
}

.parceiros-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  font-size: var(--font-size-lg);
  color: var(--text-light);
}

.parceiro-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
}

.parceiro-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.parceiro-logo {
  padding: var(--spacing-xl);
  text-align: center;
  background: var(--light-gray);
  border-bottom: 1px solid var(--border-color);
}

.parceiro-logo img {
  max-height: 80px;
  max-width: 200px;
  object-fit: contain;
}

.parceiro-content {
  padding: var(--spacing-xl);
}

.parceiro-benefits {
  margin: var(--spacing-lg) 0;
}

.parceiro-benefits h4 {
  color: var(--text-dark);
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
}

.parceiro-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
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
  background-color: var(--light-gray);
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
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
  border-radius: 20px;
  padding: var(--spacing-3xl);
  margin: 0 auto;
  max-width: 1200px;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.5s ease;
}

.cintia-style-chatbot.visible {
  transform: translateY(0);
  opacity: 1;
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
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(0, 212, 255, 0.2);
  backdrop-filter: blur(10px);
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

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #B8860B, #DAA520);
  flex-shrink: 0;
}

.ai-icon {
  font-size: var(--font-size-lg);
}

.message-content {
  background: rgba(255, 255, 255, 0.05);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 15px;
  max-width: 80%;
  position: relative;
}

.message-content p {
  margin: 0 0 var(--spacing-xs) 0;
  line-height: 1.4;
  color: #ffffff;
}

.message-bubble.user-message .message-content {
  background: linear-gradient(135deg, #B8860B, #DAA520);
  color: white;
}

.message-time {
  font-size: var(--font-size-xs);
  opacity: 0.7;
}

.chat-input {
  padding: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.input-container {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.input-container input {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(184, 134, 11, 0.3);
  border-radius: 25px;
  padding: var(--spacing-sm) var(--spacing-lg);
  color: #ffffff;
  font-size: var(--font-size-sm);
}

.input-container input:focus {
  outline: none;
  border-color: #B8860B;
  box-shadow: 0 0 10px rgba(184, 134, 11, 0.3);
}

.input-container input::placeholder {
  color: rgba(255, 255, 255, 0.6);
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

.quick-question-btn {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  padding: var(--spacing-sm) var(--spacing-md);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: var(--font-size-xs);
}

.quick-question-btn:hover:not(:disabled) {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.25);
  color: #ffffff;
  transform: translateY(-2px);
}

.quick-question-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
