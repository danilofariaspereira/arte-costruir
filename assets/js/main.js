/**
 * ARTE CONSTRUIR - MAIN JAVASCRIPT
 * Main functionality and page interactions
 */

class ArteConstruirApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormValidation();
        this.setupAnimations();
        this.setupSmoothScrolling();
        this.setupAnalytics();
        this.setupLazyLoading();
        this.setupContactForm();
    }

    setupFormValidation() {
        // Contact form validation
        if (window.formValidation) {
            window.formValidation.addValidation('#contact-form', {
                name: [
                    { type: 'required', message: 'Nome é obrigatório' },
                    { type: 'minLength', value: 2, message: 'Nome deve ter pelo menos 2 caracteres' }
                ],
                phone: [
                    { type: 'required', message: 'Telefone é obrigatório' },
                    { type: 'phone', message: 'Telefone inválido' }
                ],
                message: [
                    { type: 'required', message: 'Mensagem é obrigatória' },
                    { type: 'minLength', value: 10, message: 'Mensagem deve ter pelo menos 10 caracteres' }
                ]
            });
        }
    }

    setupAnimations() {
        // Intersection Observer for animations
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            const animateElements = document.querySelectorAll('.project-card, .section-content, .deck-type');
            animateElements.forEach(el => {
                observer.observe(el);
            });
        }

        // Add CSS for animations
        this.addAnimationStyles();
    }

    addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .project-card, .section-content, .deck-type {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease-out;
            }
            
            .project-card.animate-in, .section-content.animate-in, .deck-type.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .project-card:nth-child(1).animate-in { transition-delay: 0.1s; }
            .project-card:nth-child(2).animate-in { transition-delay: 0.2s; }
            .project-card:nth-child(3).animate-in { transition-delay: 0.3s; }
        `;
        document.head.appendChild(style);
    }

    setupSmoothScrolling() {
        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });

        // Hero scroll indicator functionality
        const scrollIndicator = document.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const nextSection = document.querySelector('#quem-somos');
                if (nextSection) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = nextSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    setupAnalytics() {
        // Google Analytics setup
        if (typeof gtag !== 'undefined') {
            // Track page views
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href
            });
        }

        // Track CTA clicks
        this.trackCTAClicks();
    }

    trackCTAClicks() {
        document.addEventListener('click', (e) => {
            const ctaElement = e.target.closest('[id^="cta_"]');
            if (ctaElement) {
                const ctaId = ctaElement.getAttribute('id');
                const ctaText = ctaElement.textContent.trim();
                
                // Track with Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: ctaId,
                        value: 1
                    });
                }
                
                // Console log for debugging
                console.log(`CTA Clicked: ${ctaId} - "${ctaText}"`);
            }
        });
    }

    setupLazyLoading() {
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            img.classList.remove('lazy');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmit(contactForm);
            });
        }
    }

    handleContactFormSubmit(form) {
        const formData = new FormData(form);
        const data = {
            name: formData.get('name') || form.querySelector('input[type="text"]')?.value,
            phone: formData.get('phone') || form.querySelector('input[type="tel"]')?.value,
            message: formData.get('message') || form.querySelector('textarea')?.value
        };

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Enviando...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            console.log('Contact form submitted:', data);
            
            // Track form submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: 'Contact Form',
                    value: 1
                });
            }

            // Reset form
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            if (window.toastComponent) {
                window.toastComponent.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            }

            // Send WhatsApp message (optional)
            this.sendWhatsAppMessage(data);
            
        }, 2000);
    }

    sendWhatsAppMessage(data) {
        const phoneNumber = '5511943112721'; // Letícia's number
        const message = `Olá! Vim pelo site Arte Construir.

Nome: ${data.name}
Telefone: ${data.phone}

Mensagem: ${data.message}

Gostaria de saber mais sobre os projetos de vocês.`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Show WhatsApp option
        if (window.modalComponent) {
            window.modalComponent.createModal(
                'whatsapp-option',
                'Contato via WhatsApp',
                `
                    <p>Sua mensagem foi enviada com sucesso! Você também pode entrar em contato diretamente via WhatsApp:</p>
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="${whatsappUrl}" target="_blank" class="uk-button uk-button-primary">
                            <i uk-icon="whatsapp"></i> Enviar WhatsApp
                        </a>
                    </div>
                `,
                [
                    { text: 'Fechar', class: 'uk-button-secondary', action: 'close' }
                ]
            );
            
            setTimeout(() => {
                window.modalComponent.showModal('whatsapp-option');
            }, 1000);
        }
    }

    // Utility methods
    static showToast(message, type = 'info') {
        if (window.toastComponent) {
            return window.toastComponent.show(message, type);
        }
    }

    static trackEvent(category, action, label, value) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value || 1
            });
        }
    }

    static formatPhoneNumber(phone) {
        // Remove all non-digits
        const digits = phone.replace(/\D/g, '');
        
        // Format based on length
        if (digits.length === 11) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        } else if (digits.length === 10) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
        }
        
        return phone; // Return original if can't format
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Page-specific functionality
class HomePage {
    constructor() {
        this.init();
    }

    init() {
        this.setupHeroAnimations();
        this.setupProjectCards();
        this.setupMapIntegration();
    }

    setupHeroAnimations() {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            // Parallax effect for hero background
            window.addEventListener('scroll', ArteConstruirApp.throttle(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                heroSection.style.transform = `translateY(${rate}px)`;
            }, 10));
        }
    }

    setupProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    setupMapIntegration() {
        const mapContainer = document.querySelector('.map-container');
        if (mapContainer && mapContainer.querySelector('iframe')) {
            // Add click event to make map interactive
            mapContainer.addEventListener('click', () => {
                ArteConstruirApp.trackEvent('Map', 'click', 'Google Maps');
            });
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main app
    window.arteConstruirApp = new ArteConstruirApp();
    
    // Initialize page-specific functionality
    if (window.location.pathname === '/' || window.location.pathname.includes('index')) {
        window.homePage = new HomePage();
    }
    
    // Add loading complete class
    document.body.classList.add('loaded');
    
    // Track page load
    ArteConstruirApp.trackEvent('Page', 'load', document.title);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        ArteConstruirApp.trackEvent('Page', 'hidden', document.title);
    } else {
        ArteConstruirApp.trackEvent('Page', 'visible', document.title);
    }
});

// Handle beforeunload for analytics
window.addEventListener('beforeunload', () => {
    ArteConstruirApp.trackEvent('Page', 'unload', document.title);
});
