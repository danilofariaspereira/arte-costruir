/**
 * ARTE CONSTRUIR - CHATBOT MODULE
 * Interactive chatbot with Letícia (architect) and Tiago (real estate agent)
 */

class ChatbotComponent {
    constructor() {
        this.isVisible = false;
        this.isOpen = false;
        this.currentAgent = 'tiago';
        this.messages = [];
        this.conversationFlow = {
            tiago: this.getTiagoFlow()
        };
        this.init();
    }

    init() {
        this.createChatbot();
        this.bindEvents();
        this.showChatbot();
        this.startConversation();
    }

    createChatbot() {
        const chatbotHTML = `
            <div class="chatbot" id="chatbot-container">
                <div class="chatbot-header" id="chatbot-header">
                    <div class="chatbot-avatar" id="chatbot-avatar">T</div>
                    <div class="chatbot-info">
                        <h4 id="chatbot-name">Tiago</h4>
                        <p id="chatbot-role">Corretor</p>
                    </div>
                    <button class="chatbot-toggle" id="chatbot-toggle">
                        <i uk-icon="chevron-down"></i>
                    </button>
                </div>
                <div class="chatbot-body" id="chatbot-body">
                    <div class="chatbot-messages" id="chatbot-messages">
                        <!-- Messages will be inserted here -->
                    </div>
                    <div class="chatbot-options" id="chatbot-options">
                        <button class="chatbot-option" data-agent="tiago">Falar com Tiago</button>
                    </div>
                    <div class="chatbot-input" id="chatbot-input" style="display: none;">
                        <input type="text" placeholder="Digite sua mensagem..." id="chatbot-message-input">
                        <button id="chatbot-send-btn">
                            <i uk-icon="arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const chatbotElement = document.getElementById('chatbot');
        if (chatbotElement) {
            chatbotElement.innerHTML = chatbotHTML;
        }
    }

    bindEvents() {
        // Toggle chatbot
        const toggleBtn = document.getElementById('chatbot-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.toggleChatbot();
            });
        }

        // Agent selection
        const optionButtons = document.querySelectorAll('.chatbot-option');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const agent = e.target.getAttribute('data-agent');
                this.switchAgent(agent);
            });
        });

        // Send message
        const sendBtn = document.getElementById('chatbot-send-btn');
        const messageInput = document.getElementById('chatbot-message-input');
        
        if (sendBtn && messageInput) {
            sendBtn.addEventListener('click', () => {
                this.sendMessage();
            });

            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    }

    showChatbot() {
        const chatbot = document.getElementById('chatbot-container');
        if (chatbot) {
            setTimeout(() => {
                chatbot.classList.add('visible');
            }, 2000); // Show after 2 seconds
        }
    }

    toggleChatbot() {
        const body = document.getElementById('chatbot-body');
        const toggle = document.getElementById('chatbot-toggle');
        
        if (body && toggle) {
            this.isOpen = !this.isOpen;
            body.classList.toggle('active');
            
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.setAttribute('uk-icon', this.isOpen ? 'chevron-up' : 'chevron-down');
            }
        }
    }

    switchAgent(agent) {
        this.currentAgent = agent;
        this.updateAgentDisplay();
        this.startConversation();
    }

    updateAgentDisplay() {
        const avatar = document.getElementById('chatbot-avatar');
        const name = document.getElementById('chatbot-name');
        const role = document.getElementById('chatbot-role');
        const options = document.getElementById('chatbot-options');
        const input = document.getElementById('chatbot-input');

        if (this.currentAgent === 'leticia') {
            if (avatar) avatar.textContent = 'L';
            if (name) name.textContent = 'Letícia';
            if (role) role.textContent = 'Arquiteta';
        } else {
            if (avatar) avatar.textContent = 'T';
            if (name) name.textContent = 'Tiago';
            if (role) role.textContent = 'Corretor';
        }

        // Show input after agent selection
        if (options) options.style.display = 'none';
        if (input) input.style.display = 'flex';
    }

    startConversation() {
        this.clearMessages();
        
        const welcomeMessage = 'Olá! Sou o Tiago, corretor da Arte Construir. Posso te ajudar com informações sobre compra e venda de chalés e terrenos.';

        this.addMessage(welcomeMessage, 'bot');
        
        // Add quick options based on agent
        this.addQuickOptions();
    }

    addQuickOptions() {
        const options = [
            'Tenho interesse em comprar um chalé',
            'Quero vender meu terreno',
            'Quais são os melhores locais para construir?',
            'Como funciona o financiamento?'
        ];

        options.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'chatbot-option';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => {
                this.sendQuickMessage(option);
            });
            
            const messagesContainer = document.getElementById('chatbot-messages');
            if (messagesContainer) {
                messagesContainer.appendChild(optionBtn);
            }
        });
    }

    sendQuickMessage(message) {
        this.addMessage(message, 'user');
        this.processUserMessage(message);
    }

    sendMessage() {
        const input = document.getElementById('chatbot-message-input');
        if (input && input.value.trim()) {
            const message = input.value.trim();
            this.addMessage(message, 'user');
            input.value = '';
            this.processUserMessage(message);
        }
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        // Remove quick options when user sends a message
        if (sender === 'user') {
            const options = messagesContainer.querySelectorAll('.chatbot-option');
            options.forEach(option => option.remove());
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        messageDiv.textContent = text;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        this.messages.push({ text, sender, timestamp: new Date() });
    }

    processUserMessage(message) {
        const flow = this.conversationFlow[this.currentAgent];
        const response = this.getResponse(message, flow);
        
        setTimeout(() => {
            this.addMessage(response, 'bot');
            
            // Add follow-up options if needed
            if (this.shouldShowFollowUp(message)) {
                this.addFollowUpOptions();
            }
        }, 1000);
    }

    getResponse(message, flow) {
        const lowerMessage = message.toLowerCase();
        
        // Check for specific keywords
        for (const [keyword, response] of Object.entries(flow)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        // Default response for Tiago
        return 'Ótima pergunta! Como corretor, posso te ajudar a encontrar o local ideal para seu projeto ou ajudar na venda do seu terreno. Que tal conversarmos mais sobre suas necessidades?';
    }


    getTiagoFlow() {
        return {
            'comprar': 'Excelente! Posso te ajudar a encontrar o terreno ideal para seu projeto. Trabalhamos com as melhores localidades do RJ. Qual região te interessa?',
            'vender': 'Perfeito! Posso te ajudar a valorizar e vender seu terreno. Trabalhamos com avaliação gratuita e marketing direcionado. Qual é a localização?',
            'terreno': 'Trabalhamos com terrenos em várias regiões do RJ, sempre em locais propícios para construção de chalés. Posso te mostrar algumas opções!',
            'financiamento': 'Trabalhamos com as principais instituições financeiras para facilitar o financiamento do seu projeto. Posso te orientar sobre as melhores opções.',
            'localização': 'As melhores localidades para construir chalés no RJ são: Teresópolis, Petrópolis, Nova Friburgo e região serrana. Cada uma tem suas vantagens!',
            'investimento': 'Chalés são excelente investimento! Além de valorizar o terreno, oferecem retorno através de aluguel turístico. Posso te explicar melhor.',
            'preço': 'Os valores variam conforme localização, tamanho e acabamentos. Para um orçamento preciso, preciso conhecer melhor suas necessidades.',
            'visita': 'Claro! Posso agendar uma visita técnica para avaliar o terreno e apresentar as melhores opções. Quando seria melhor para você?',
            'contato': 'Para conversarmos melhor sobre investimentos, você pode me ligar no (21) 96017-1061 ou enviar um e-mail para artechales@gmail.com.'
        };
    }

    shouldShowFollowUp(message) {
        const lowerMessage = message.toLowerCase();
        const followUpKeywords = ['orçamento', 'preço', 'contato', 'visita', 'agendar'];
        return followUpKeywords.some(keyword => lowerMessage.includes(keyword));
    }

    addFollowUpOptions() {
        const options = [
            'Agendar visita',
            'Ver terrenos',
            'Conversar sobre investimento'
        ];

        setTimeout(() => {
            options.forEach(option => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'chatbot-option';
                optionBtn.textContent = option;
                optionBtn.addEventListener('click', () => {
                    this.handleFollowUpAction(option);
                });
                
                const messagesContainer = document.getElementById('chatbot-messages');
                if (messagesContainer) {
                    messagesContainer.appendChild(optionBtn);
                }
            });
        }, 1500);
    }

    handleFollowUpAction(action) {
        const lowerAction = action.toLowerCase();
        
        if (lowerAction.includes('agendar') || lowerAction.includes('consulta') || lowerAction.includes('visita')) {
            this.addMessage(action, 'user');
            this.addMessage('Perfeito! Vou te ajudar a agendar. Qual seria o melhor horário para você?', 'bot');
            
            // Show contact options
            setTimeout(() => {
                this.addMessage('Você pode me contatar diretamente:', 'bot');
                this.addMessage('📞 (11) 94311-2721 - Letícia\n📞 (21) 96017-1061 - Tiago\n📧 artechales@gmail.com', 'bot');
            }, 1000);
            
        } else if (lowerAction.includes('orçamento')) {
            this.addMessage(action, 'user');
            this.addMessage('Ótimo! Para um orçamento personalizado, preciso de algumas informações. Você pode me contatar pelos nossos canais ou preencher o formulário no site.', 'bot');
            
        } else if (lowerAction.includes('projetos') || lowerAction.includes('terrenos')) {
            this.addMessage(action, 'user');
            this.addMessage('Excelente! Nossa página de projetos tem todas as informações. Você pode acessar através do menu principal ou clicar nos links que enviei.', 'bot');
        }
    }

    clearMessages() {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (messagesContainer) {
            messagesContainer.innerHTML = '';
        }
        this.messages = [];
    }

    // Analytics tracking
    trackChatbotEvent(action, agent = this.currentAgent) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'chatbot',
                event_label: agent,
                value: 1
            });
        }
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.chatbotComponent = new ChatbotComponent();
});
