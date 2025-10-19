/**
 * ARTE CONSTRUIR - COMPONENTS MODULE
 * Modular components for header, footer, and other reusable elements
 */

// Header Component
class HeaderComponent {
    constructor() {
        this.header = null;
        this.init();
    }

    init() {
        this.createHeader();
        this.bindEvents();
        this.updateActiveLink();
    }

    createHeader() {
        const headerHTML = `
            <div class="header-content">
                <a href="index.html" class="logo">
                    <img src="assets/images/logo-arte-construir-02.png" alt="Arte Construir" loading="eager">
                </a>
                <nav>
                    <ul class="nav-menu" id="nav-menu">
                        <li><a href="index.html" data-page="home">Home</a></li>
                        <li><a href="projetos.html" data-page="projetos">Projetos</a></li>
                        <li><a href="decks.html" data-page="decks">Decks</a></li>
                        <li><a href="parceiros.html" data-page="parceiros">Parceiros</a></li>
                    </ul>
                    <button class="mobile-menu-toggle" id="mobile-toggle">
                        <i uk-icon="menu"></i>
                    </button>
                </nav>
            </div>
        `;

        const headerElement = document.getElementById('header');
        if (headerElement) {
            headerElement.className = 'header';
            headerElement.innerHTML = headerHTML;
            this.header = headerElement;
        }
    }

    bindEvents() {
        // Scroll event for header styling
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const navMenu = document.getElementById('nav-menu');
            const mobileToggle = document.getElementById('mobile-toggle');
            
            if (navMenu && mobileToggle && 
                !navMenu.contains(e.target) && 
                !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    handleScroll() {
        if (this.header) {
            if (window.scrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }
    }

    toggleMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    }

    updateActiveLink() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().split('.')[0];
        return page === '' || page === 'index' ? 'home' : page;
    }
}

// Footer Component
class FooterComponent {
    constructor() {
        this.footer = null;
        this.init();
    }

    init() {
        this.createFooter();
        this.bindEvents();
    }

    createFooter() {
        const footerHTML = `
            <div class="uk-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Arte Construir</h4>
                        <p>Especialistas em construção de chalés de madeira e decks sustentáveis no Rio de Janeiro.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook">
                                <i uk-icon="facebook"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i uk-icon="instagram"></i>
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <i uk-icon="whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Links Rápidos</h4>
                        <a href="index.html">Home</a>
                        <a href="projetos.html">Projetos</a>
                        <a href="decks.html">Decks</a>
                        <a href="parceiros.html">Parceiros</a>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Contato</h4>
                        <p><strong>Telefones:</strong><br>(11) 94311-2721<br>(21) 96017-1061</p>
                        <p><strong>E-mail:</strong><br>artechales@gmail.com</p>
                        <p><strong>Endereço:</strong><br>Av. Feliciano Sodré, 300<br>Várzea, Teresópolis - RJ</p>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Especialidades</h4>
                        <p>Chalés de Madeira</p>
                        <p>Decks Sustentáveis</p>
                        <p>Casas Ecológicas</p>
                        <p>Madeira Plástica</p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Arte Construir. Todos os direitos reservados.</p>
                </div>
            </div>
        `;

        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.className = 'footer';
            footerElement.innerHTML = footerHTML;
            this.footer = footerElement;
        }
    }

    bindEvents() {
        // Social links click tracking
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = link.getAttribute('aria-label').toLowerCase();
                this.trackSocialClick(platform);
            });
        });
    }

    trackSocialClick(platform) {
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'social',
                event_label: platform,
                value: 1
            });
        }
        
        // Show toast notification
        this.showToast(`Redirecionando para ${platform}...`);
        
        // Simulate redirect (replace with actual URLs)
        setTimeout(() => {
            console.log(`Redirecting to ${platform}`);
        }, 1000);
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast info';
        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>${message}</span>
                <div class="loading-spinner"></div>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 2000);
    }
}

// Modal Component
class ModalComponent {
    constructor() {
        this.modals = [];
        this.init();
    }

    init() {
        this.bindEvents();
    }

    createModal(id, title, content, actions = []) {
        const modalHTML = `
            <div class="modal-overlay" id="modal-${id}">
                <div class="modal">
                    <div class="modal-header">
                        <h3 class="modal-title">${title}</h3>
                        <button class="modal-close" data-modal="${id}">
                            <i uk-icon="close"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    ${actions.length > 0 ? `
                        <div class="modal-footer">
                            ${actions.map(action => `
                                <button class="uk-button ${action.class || 'uk-button-secondary'}" 
                                        data-action="${action.action}">
                                    ${action.text}
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modals.push(id);
        this.bindModalEvents(id);
        
        return document.getElementById(`modal-${id}`);
    }

    showModal(id) {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hideModal(id) {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    bindModalEvents(id) {
        const modal = document.getElementById(`modal-${id}`);
        if (!modal) return;

        // Close button
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hideModal(id);
            });
        }

        // Overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideModal(id);
            }
        });

        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.hideModal(id);
            }
        });
    }

    bindEvents() {
        // Global modal triggers
        document.addEventListener('click', (e) => {
            const modalTrigger = e.target.closest('[data-modal-trigger]');
            if (modalTrigger) {
                e.preventDefault();
                const modalId = modalTrigger.getAttribute('data-modal-trigger');
                this.showModal(modalId);
            }
        });
    }
}

// Toast Notification Component
class ToastComponent {
    constructor() {
        this.toasts = [];
        this.init();
    }

    init() {
        this.createToastContainer();
    }

    createToastContainer() {
        if (!document.getElementById('toast-container')) {
            const container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: inherit; cursor: pointer;">
                    <i uk-icon="close"></i>
                </button>
            </div>
        `;

        const container = document.getElementById('toast-container');
        container.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentElement) {
                    toast.parentElement.removeChild(toast);
                }
            }, 300);
        }, duration);

        this.toasts.push(toast);
        return toast;
    }

    success(message, duration) {
        return this.show(message, 'success', duration);
    }

    error(message, duration) {
        return this.show(message, 'error', duration);
    }

    warning(message, duration) {
        return this.show(message, 'warning', duration);
    }

    info(message, duration) {
        return this.show(message, 'info', duration);
    }
}

// Form Validation Component
class FormValidationComponent {
    constructor() {
        this.forms = [];
        this.rules = {};
        this.init();
    }

    init() {
        this.bindEvents();
    }

    addValidation(formSelector, rules) {
        const form = document.querySelector(formSelector);
        if (form) {
            this.rules[formSelector] = rules;
            this.forms.push(form);
            this.bindFormEvents(form);
        }
    }

    bindFormEvents(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input, form);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm(form);
        });
    }

    validateField(field, form) {
        const formSelector = this.getFormSelector(form);
        const rules = this.rules[formSelector];
        const fieldRules = rules[field.name] || rules[field.type];
        
        if (!fieldRules) return true;

        let isValid = true;
        let errorMessage = '';

        for (const rule of fieldRules) {
            if (!this.checkRule(field.value, rule)) {
                isValid = false;
                errorMessage = rule.message;
                break;
            }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.clearFieldError(field);
        }

        return isValid;
    }

    validateForm(form) {
        const formSelector = this.getFormSelector(form);
        const rules = this.rules[formSelector];
        let isValid = true;

        Object.keys(rules).forEach(fieldName => {
            const field = form.querySelector(`[name="${fieldName}"]`);
            if (field && !this.validateField(field, form)) {
                isValid = false;
            }
        });

        if (isValid) {
            this.submitForm(form);
        } else {
            const toast = new ToastComponent();
            toast.error('Por favor, corrija os erros no formulário.');
        }

        return isValid;
    }

    checkRule(value, rule) {
        switch (rule.type) {
            case 'required':
                return value.trim() !== '';
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case 'phone':
                return /^[\d\s\(\)\-\+]+$/.test(value) && value.replace(/\D/g, '').length >= 10;
            case 'minLength':
                return value.length >= rule.value;
            case 'maxLength':
                return value.length <= rule.value;
            default:
                return true;
        }
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        errorDiv.textContent = message;
        
        field.parentElement.appendChild(errorDiv);
        field.classList.add('uk-form-danger');
    }

    clearFieldError(field) {
        const errorDiv = field.parentElement.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.classList.remove('uk-form-danger');
    }

    submitForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Enviando...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', data);
            
            // Reset form
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            const toast = new ToastComponent();
            toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        }, 2000);
    }

    getFormSelector(form) {
        return form.id ? `#${form.id}` : form.className ? `.${form.className.split(' ')[0]}` : '';
    }
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    window.headerComponent = new HeaderComponent();
    window.footerComponent = new FooterComponent();
    window.modalComponent = new ModalComponent();
    window.toastComponent = new ToastComponent();
    window.formValidation = new FormValidationComponent();
});
