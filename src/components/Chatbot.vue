<template>
  <div class="chatbot-container">
    <!-- Botão principal do chatbot -->
    <div class="chatbot-toggle" @click="toggleChatbot" v-if="!isOpen">
      <img src="/src/assets/images/icone-arte-construir.png" alt="Arte Construir" class="chatbot-logo">
    </div>

    <!-- Chatbot aberto -->
    <div class="chatbot-window" v-if="isOpen">
      <div class="chatbot-header">
        <div class="chatbot-header-content">
          <img src="/src/assets/images/icone-arte-construir.png" alt="Arte Construir" class="chatbot-header-logo">
          <div class="chatbot-header-text">
            <h3>Arte Construir</h3>
            <div class="online-status">
              <span class="online-dot"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
        <button class="chatbot-close" @click="toggleChatbot">&times;</button>
      </div>

      <div class="chatbot-messages">
        <!-- Mensagem de boas-vindas -->
        <div class="bot-message welcome-message">
          <img src="/src/assets/images/icone-arte-construir.png" alt="Arte Construir" class="bot-avatar">
          <div class="message-content">
            <strong>Seja bem-vindo à Arte Construir!</strong>
          </div>
        </div>

        <!-- Mensagens do usuário -->
        <div v-if="selectedOption" class="user-message">
          <div class="message-content">
            <strong>{{ getSelectedOptionText() }}</strong>
          </div>
        </div>

        <!-- Resposta do chatbot -->
        <div v-if="selectedOption" class="bot-message">
          <img src="/src/assets/images/icone-arte-construir.png" alt="Arte Construir" class="bot-avatar inreply-message">
          <div class="message-content">
            <strong>Para tirar suas dúvidas, entre em contato pelo nosso WhatsApp</strong>
            <button class="whatsapp-button" @click="sendToWhatsApp(selectedOption)">
              <svg class="whatsapp-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Entrar em contato pelo WhatsApp
            </button>
          </div>
        </div>

        <!-- Opções iniciais -->
        <div class="chatbot-options">
          <button class="chatbot-option" @click="selectOption('info')">
            <div>
              <strong>Tenho dúvidas e gostaria de saber mais informações</strong>
            </div>
          </button>

          <button class="chatbot-option" @click="selectOption('projetos')">
            <div>
              <strong>Queria saber mais sobre os projetos</strong>
            </div>
          </button>

          <button class="chatbot-option" @click="selectOption('leticia')">
            <div>
              <strong>Falar com Leticia - Arquiteta</strong>
            </div>
          </button>

          <button class="chatbot-option" @click="selectOption('tiago')">
            <div>
              <strong>Falar com Tiago - Corretor</strong>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chatbot',
  data() {
    return {
      isOpen: false,
      selectedOption: null,
      whatsappNumber: '5521999999999' // Você pode alterar este número
    }
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen
      if (!this.isOpen) {
        this.selectedOption = null
      }
    },
    selectOption(type) {
      this.selectedOption = type
    },
    getSelectedOptionText() {
      switch(this.selectedOption) {
        case 'info':
          return 'Tenho dúvidas e gostaria de saber mais informações'
        case 'projetos':
          return 'Queria saber mais sobre os projetos'
        case 'leticia':
          return 'Falar com Leticia - Arquiteta'
        case 'tiago':
          return 'Falar com Tiago - Corretor'
        default:
          return ''
      }
    },
    sendToWhatsApp(type) {
      let message = ''
      
      switch(type) {
        case 'info':
          message = 'Olá, Arte Construir. Vim através do seu site e gostaria de saber mais informações.'
          break
        case 'projetos':
          message = 'Vim através do seu site e gostaria de saber mais sobre os projetos.'
          break
        case 'leticia':
          message = 'Olá, Leticia. Vim através do site Arte Construir e gostaria de entender mais sobre o seu trabalho.'
          break
        case 'tiago':
          message = 'Olá, Tiago. Vim através do site Arte Construir e gostaria de saber mais sobre o seu trabalho.'
          break
      }

      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`
      
      window.open(whatsappUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.chatbot-toggle {
  background: linear-gradient(135deg, var(--accent-color), var(--gold-light));
  border-radius: 50px;
  padding: 15px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(184, 134, 11, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}

.chatbot-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(184, 134, 11, 0.4);
}

.chatbot-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.chatbot-badge {
  color: white;
  font-weight: 600;
  font-size: 14px;
}

.chatbot-window {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  width: 350px;
  max-height: 500px;
  overflow: hidden;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chatbot-header {
  background: linear-gradient(135deg, var(--accent-color), var(--gold-light));
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-header-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chatbot-header-logo {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}

.chatbot-header-text h3 {
  color: black;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.online-status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}

.online-dot {
  width: 8px;
  height: 8px;
  background: #00FF00;
  border-radius: 50%;
  display: inline-block;
}

.online-status span {
  color: black;
  font-size: 12px;
  opacity: 0.8;
}

.chatbot-close {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.2s ease;
}

.chatbot-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.chatbot-messages {
  padding: 15px;
  max-height: 400px;
  overflow-y: auto;
}

.user-message {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.user-message .message-content {
  background: #f0f0f0;
  border-radius: 18px;
  padding: 12px 15px;
  max-width: 80%;
}

.user-message strong {
  color: #333;
  font-size: 14px;
}

.bot-message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 15px;
}

.bot-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.bot-message .message-content {
  background: #f8f9fa;
  border-radius: 18px;
  padding: 12px 15px;
  max-width: 80%;
}

.bot-message strong {
  color: #333;
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
}

.welcome-message {
  margin-bottom: 20px;
}

.welcome-message .message-content {
  background: #f8f9fa;
  border-radius: 18px;
  padding: 15px 18px;
  max-width: 80%;
}

.welcome-message strong {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0;
}

.whatsapp-button {
  background: #25D366;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
}

.whatsapp-button:hover {
  background: #128C7E;
  transform: translateY(-1px);
}

.whatsapp-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.chatbot-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chatbot-option {
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
}

.chatbot-option:hover {
  border-color: var(--accent-color);
  background: rgba(184, 134, 11, 0.05);
  transform: translateY(-1px);
}

.chatbot-option strong {
  color: #333;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .chatbot-container {
    bottom: 15px;
    right: 15px;
  }
  
  .chatbot-toggle {
    width: 55px;
    height: 55px;
    padding: 12px;
  }
  
  .chatbot-logo {
    width: 35px;
    height: 35px;
  }
  
  .chatbot-badge {
    font-size: 13px;
  }
  
  .chatbot-window {
    width: 300px;
  }
}

@media (max-width: 480px) {
  .chatbot-container {
    bottom: 10px;
    right: 10px;
  }
  
  .chatbot-toggle {
    width: 50px;
    height: 50px;
    padding: 10px;
  }
  
  .chatbot-logo {
    width: 30px;
    height: 30px;
  }
  
  .chatbot-badge {
    font-size: 12px;
  }
  
  .chatbot-window {
    width: 280px;
  }
  
  .chatbot-option {
    padding: 10px 12px;
  }
  
  .chatbot-option strong {
    font-size: 13px;
  }
}
</style>
