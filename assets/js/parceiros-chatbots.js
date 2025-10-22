/**
 * ARTE CONSTRUIR - PARCEIROS CHATBOTS MODULE
 * Chatbots idênticos ao exemplo da Cíntia IA
 */

class ParceirosChatbot {
    constructor(config) {
        this.name = config.name;
        this.role = config.role;
        this.containerId = config.containerId;
        this.conversationFlow = config.flow;
        this.messages = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.showChatbot();
    }

    bindEvents() {
        // Send message
        const sendBtn = document.getElementById(`${this.containerId}-send`);
        const messageInput = document.getElementById(`${this.containerId}-input`);
        
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
        const chatbot = document.getElementById(this.containerId);
        if (chatbot) {
            setTimeout(() => {
                chatbot.classList.add('visible');
                this.startConversation();
            }, 2000);
        }
    }

    startConversation() {
        this.clearMessages();
        
        const welcomeMessage = this.conversationFlow.welcome;
        this.addMessage(welcomeMessage, 'bot');
        
        // Add quick questions
        setTimeout(() => {
            this.addQuickQuestions();
        }, 500);
    }

    addQuickQuestions() {
        const questions = this.conversationFlow.quickQuestions || [];
        const container = document.getElementById(`${this.containerId}-quick-questions`);

        if (container) {
            container.innerHTML = ''; // Clear existing questions
        }

        questions.forEach(question => {
            const questionBtn = document.createElement('button');
            questionBtn.className = 'quick-question-btn';
            questionBtn.textContent = question;
            questionBtn.addEventListener('click', () => {
                this.sendQuickMessage(question);
            });
            
            if (container) {
                container.appendChild(questionBtn);
            }
        });
    }

    showQuickQuestions() {
        const container = document.getElementById(`${this.containerId}-quick-questions`);
        if (container) {
            container.style.display = 'block';
        }
    }

    showFollowUpQuestions(originalMessage) {
        const followUpQuestions = this.getFollowUpQuestions(originalMessage);
        const container = document.getElementById(`${this.containerId}-quick-questions`);
        
        if (container) {
            container.innerHTML = ''; // Clear existing questions
            
            followUpQuestions.forEach(question => {
                const questionBtn = document.createElement('button');
                questionBtn.className = 'quick-question-btn follow-up';
                questionBtn.textContent = question;
                questionBtn.addEventListener('click', () => {
                    this.sendQuickMessage(question);
                });
                
                container.appendChild(questionBtn);
            });
            
            container.style.display = 'block';
        }
    }

    sendQuickMessage(message) {
        this.addMessage(message, 'user');
        this.processUserMessage(message);
    }

    sendMessage() {
        const input = document.getElementById(`${this.containerId}-input`);
        if (input && input.value.trim()) {
            const message = input.value.trim();
            this.addMessage(message, 'user');
            input.value = '';
            this.processUserMessage(message);
        }
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById(`${this.containerId}-messages`);
        if (!messagesContainer) return;

        // Remove quick questions when user sends a message
        if (sender === 'user') {
            const questions = document.getElementById(`${this.containerId}-quick-questions`);
            if (questions) {
                questions.style.display = 'none';
            }
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message-bubble ${sender}`;
        
        const time = new Date().toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <div class="ai-icon">🤖</div>
                </div>
                <div class="message-content">
                    <p>${text}</p>
                    <span class="message-time">${time}</span>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                    <span class="message-time">${time}</span>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        this.messages.push({ text, sender, timestamp: new Date() });
    }

    processUserMessage(message) {
        const response = this.getResponse(message);
        
        setTimeout(() => {
            this.addMessage(response, 'bot');
            
            // Show follow-up questions after bot response
            setTimeout(() => {
                this.showFollowUpQuestions(message);
            }, 500);
        }, 1000);
    }

    getResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for specific keywords
        for (const [keyword, response] of Object.entries(this.conversationFlow.keywords)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        // Default response
        return this.conversationFlow.defaultResponse;
    }

    getFollowUpQuestions(message) {
        const lowerMessage = message.toLowerCase();
        
        // Return different follow-up questions based on the topic
        if (lowerMessage.includes('arquitetura') || lowerMessage.includes('sustentável')) {
            return [
                'Quanto custa um projeto?',
                'Qual o prazo de entrega?',
                'Posso ver exemplos de projetos?'
            ];
        } else if (lowerMessage.includes('material')) {
            return [
                'Quais fornecedores vocês usam?',
                'A madeira é certificada?',
                'Tem garantia dos materiais?'
            ];
        } else if (lowerMessage.includes('projeto') || lowerMessage.includes('preparar')) {
            return [
                'Como funciona o processo?',
                'Preciso de algum documento?',
                'Qual o primeiro passo?'
            ];
        } else if (lowerMessage.includes('mercado') || lowerMessage.includes('investimento')) {
            return [
                'Quais regiões são melhores?',
                'Qual o valor médio dos terrenos?',
                'Tem financiamento disponível?'
            ];
        } else if (lowerMessage.includes('comprar')) {
            return [
                'Posso visitar os terrenos?',
                'Como funciona a documentação?',
                'Tem parcelamento disponível?'
            ];
        }
        
        // Default follow-up questions
        return [
            'Posso saber mais detalhes?',
            'Como funciona o processo?',
            'Qual o próximo passo?',
            'Tem algum exemplo?'
        ];
    }

    clearMessages() {
        const messagesContainer = document.getElementById(`${this.containerId}-messages`);
        if (messagesContainer) {
            messagesContainer.innerHTML = '';
        }
        this.messages = [];
    }
}

// Configuration for Letícia (Arquiteta)
const leticiaConfig = {
    name: 'Letícia',
    role: 'Arquiteta',
    containerId: 'chatbot-leticia',
    flow: {
        welcome: 'Olá! Sou a Letícia, a IA da Arte Construir. Estou aqui para te guiar nos projetos de arquitetura sustentável. Como posso ajudá-lo hoje?',
        quickQuestions: [
            'Como será a arquitetura sustentável?',
            'Quais materiais vocês usam?',
            'Como posso me preparar para meu projeto?',
            'Conte sobre a arquiteta Letícia'
        ],
        keywords: {
            'arquitetura': 'A arquitetura sustentável é o futuro! Utilizamos madeira certificada, eficiência energética e materiais ecológicos para criar projetos únicos e responsáveis.',
            'sustentável': 'Trabalhamos com sustentabilidade em todos os aspectos: madeira de reflorestamento, aproveitamento de luz natural, materiais recicláveis e eficiência energética.',
            'material': 'Trabalhamos com madeira certificada, parcerias com TW Brazil e Inbrasil, e materiais sustentáveis. Cada escolha é pensada para durabilidade e responsabilidade ambiental.',
            'projeto': 'Desenvolvo projetos personalizados considerando suas necessidades, estilo de vida e orçamento. Cada projeto é único e considera o terreno, clima local e funcionalidade.',
            'preparar': 'Para se preparar para seu projeto, é importante definir suas necessidades, orçamento e localização. Posso te orientar em cada etapa do processo!',
            'leticia': 'Sou arquiteta especializada em projetos sustentáveis e construção com madeira. Responsável pelo desenvolvimento de projetos personalizados que atendem às necessidades específicas de cada cliente.',
            'custa': 'O valor do projeto varia conforme tamanho, complexidade e materiais escolhidos. Geralmente cobrimos entre R$ 80-150 por m². Posso fazer um orçamento personalizado para você!',
            'prazo': 'O prazo médio é de 3-6 meses para projetos completos, incluindo aprovação na prefeitura. Projetos mais simples podem ser entregues em 1-2 meses.',
            'exemplo': 'Temos vários projetos realizados! Posso te mostrar portfólio com chalés de diferentes estilos e tamanhos. Qual tipo de projeto te interessa mais?',
            'fornecedor': 'Trabalhamos com TW Brazil, Inbrasil e outros fornecedores certificados. Todos os materiais têm garantia e certificação de origem sustentável.',
            'certificada': 'Sim! Utilizamos apenas madeira certificada FSC, garantindo origem sustentável e qualidade superior. Todos os fornecedores são auditados.',
            'garantia': 'Oferecemos garantia de 2 anos para estrutura e 1 ano para acabamentos. Todos os materiais têm garantia do fornecedor.',
            'processo': '1) Consulta inicial gratuita 2) Levantamento do terreno 3) Desenvolvimento do projeto 4) Aprovação na prefeitura 5) Acompanhamento da obra',
            'documento': 'Precisa do IPTU do terreno, escritura, planta baixa existente (se houver) e documentos pessoais. Posso te ajudar com a lista completa!',
            'primeiro': 'O primeiro passo é agendar uma visita técnica gratuita! Vou conhecer o terreno, suas necessidades e apresentar as melhores opções para seu projeto.'
        },
        defaultResponse: 'Ótima pergunta! Como arquiteta, posso te ajudar com projetos personalizados, escolha de materiais sustentáveis e acompanhamento completo da obra. O que você gostaria de saber?'
    }
};

// Configuration for Tiago (Corretor)
const tiagoConfig = {
    name: 'Tiago',
    role: 'Corretor',
    containerId: 'chatbot-tiago',
    flow: {
        welcome: 'Olá! Sou o Tiago, a IA da Arte Construir. Estou aqui para te ajudar com investimentos em chalés e terrenos. Como posso ajudá-lo hoje?',
        quickQuestions: [
            'Como será o mercado imobiliário?',
            'Quais são os melhores investimentos?',
            'Como posso me preparar para comprar?',
            'Conte sobre o corretor Tiago'
        ],
        keywords: {
            'mercado': 'O mercado imobiliário para chalés está em alta! Chalés são excelente investimento, valorizam o terreno e oferecem retorno através de aluguel turístico.',
            'investimento': 'Chalés são excelente investimento! Além de valorizar o terreno, oferecem retorno através de aluguel turístico. Posso te explicar melhor sobre as oportunidades.',
            'comprar': 'Excelente! Posso te ajudar a encontrar o terreno ideal para seu projeto. Trabalhamos com as melhores localidades do RJ. Qual região te interessa?',
            'preparar': 'Para se preparar para comprar, é importante definir seu orçamento, localização desejada e tipo de projeto. Posso te orientar sobre financiamento e melhores opções!',
            'tiago': 'Sou corretor especializado em imóveis rurais e terrenos para construção. Conheço as melhores localidades do Rio de Janeiro para construção de chalés e posso ajudar tanto na compra quanto na venda.',
            'região': 'Trabalhamos principalmente em Teresópolis, Petrópolis, Nova Friburgo e região serrana. Cada local tem suas vantagens específicas para construção de chalés.',
            'valor': 'Os valores variam muito conforme localização e tamanho. Terrenos em Teresópolis custam entre R$ 200-800 por m². Posso te mostrar opções dentro do seu orçamento!',
            'financiamento': 'Sim! Trabalhamos com bancos parceiros que oferecem financiamento para terreno e construção. Posso te ajudar com as melhores condições disponíveis.',
            'visitar': 'Claro! Agendo visitas aos terrenos disponíveis. É importante conhecer pessoalmente a localização, acesso e características do terreno.',
            'documentação': 'Cuido de toda a documentação: escritura, ITR, certidões e regularização. Garanto que tudo esteja em dia antes da compra.',
            'parcelamento': 'Sim! Oferecemos parcelamento direto para terrenos próprios e também trabalhamos com financiamento bancário. Posso te mostrar as melhores opções!'
        },
        defaultResponse: 'Ótima pergunta! Como corretor, posso te ajudar a encontrar o local ideal para seu projeto ou ajudar na venda do seu terreno. Que tal conversarmos mais sobre suas necessidades?'
    }
};

// Initialize chatbots when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize on parceiros page
    if (window.location.pathname.includes('parceiros')) {
        window.leticiaChatbot = new ParceirosChatbot(leticiaConfig);
        window.tiagoChatbot = new ParceirosChatbot(tiagoConfig);
    }
});