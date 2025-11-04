<template>
  <footer class="app-footer">
    <div class="footer-top-line"></div>
    <div class="container">
      <div class="footer-content">
        <!-- Coluna 1: Brand e Redes Sociais -->
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/src/assets/images/logo-arte-construir-02.png" alt="Arte Construir" class="footer-logo">
          </div>
          <div class="social-icons">
            <a href="https://www.facebook.com/arteconstruir" target="_blank" class="social-icon facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/arteconstruir/" target="_blank" class="social-icon instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/5521960171061?text=Olá,%20vim%20através%20do%20site%20Arte%20Construir%20e%20gostaria%20de%20saber%20mais%20informações." target="_blank" class="social-icon whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna 2: Projetos -->
        <div class="footer-section">
          <h3>Projetos</h3>
          <ul class="footer-links">
            <li><router-link to="/projetos">Chalés</router-link></li>
            <li><router-link to="/decks">Decks</router-link></li>
          </ul>
        </div>

        <!-- Coluna 3: Telefone -->
        <div class="footer-section">
          <h3>Telefone</h3>
          <div class="contact-info">
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <div class="contact-details">
                <a href="https://wa.me/5521960171061?text=Olá,%20vim%20através%20do%20site%20Arte%20Construir%20e%20gostaria%20de%20saber%20mais%20informações." target="_blank">(21) 96017-1061</a>
                <span class="contact-note">Segunda a Sexta, 9h às 16h</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna 4: Email -->
        <div class="footer-section">
          <h3>Email</h3>
          <div class="contact-info">
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div class="contact-details">
                <a href="mailto:artechales@gmail.com">artechales@gmail.com</a>
                <span class="contact-note">Resposta em até 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Arte Construir. Todos os direitos reservados.</p>
          <p class="created-by">
            <a href="https://wa.me/5521993350228?text=Olá%20Danilo!%20Vim%20através%20do%20site%20Arte%20Construir%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho" target="_blank">
              Criado por Danilo Farias
            </a>
          </p>
        </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    
    return {
      currentYear
    }
  }
}
</script>

<style scoped>
.app-footer {
  background: var(--black);
  padding: 0;
  position: relative;
}

.footer-top-line {
  height: 3px;
  background: var(--accent-color);
  width: 100%;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg) 0;
  margin-bottom: var(--spacing-sm);
}

/* Coluna 1: Brand e Redes Sociais */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.brand-logo {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm);
}

.footer-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-text h2 {
  color: var(--white);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

.brand-text p {
  color: var(--white);
  font-size: var(--font-size-sm);
  margin: 0;
  letter-spacing: 1px;
  opacity: 0.8;
}

.social-icons {
  display: flex;
  gap: var(--spacing-md);
}

.social-icon {
  width: 40px;
  height: 40px;
  background: var(--black);
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.social-icon svg {
  width: 20px;
  height: 20px;
}

.social-icon:hover {
  background: var(--accent-color);
  transform: translateY(-2px);
}

.social-icon.facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
}

.social-icon.instagram:hover {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  border-color: #bc1888;
}

.social-icon.whatsapp:hover {
  background: #25D366;
  border-color: #25D366;
}

/* Colunas 2, 3, 4: Seções */
.footer-section h3 {
  color: var(--white);
  font-size: var(--font-size-base);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  letter-spacing: 0.5px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: var(--spacing-xs);
}

.footer-links a {
  color: var(--white);
  text-decoration: none;
  font-size: var(--font-size-sm);
  opacity: 0.8;
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: var(--accent-color);
  opacity: 1;
}

/* Seção de Contato */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: var(--accent-color);
  margin-top: 2px;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.contact-details a {
  color: var(--white);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: color var(--transition-fast);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.contact-details a:hover {
  color: var(--accent-color);
}

.contact-note {
  color: var(--white);
  font-size: var(--font-size-xs);
  opacity: 0.7;
}

/* Footer Bottom */
.footer-bottom {
  text-align: center;
  padding: var(--spacing-md) 0;
  border-top: 1px solid rgba(184, 134, 11, 0.2);
}

.footer-bottom p {
  margin: 0 0 var(--spacing-sm) 0;
  color: var(--white);
  font-size: var(--font-size-sm);
}

.created-by {
  color: var(--accent-color) !important;
  font-weight: 500;
}

.created-by a {
  color: var(--accent-color);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.created-by a:hover {
  color: var(--gold-light);
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    text-align: center;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .contact-item {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .app-footer {
    padding: 0;
  }
  
  .footer-content {
    padding: var(--spacing-xl) 0;
  }
  
  .brand-logo {
    width: 60px;
    height: 60px;
  }
  
  .brand-text h2 {
    font-size: var(--font-size-xl);
  }
  
  .social-icon {
    width: 35px;
    height: 35px;
  }
  
  .social-icon svg {
    width: 18px;
    height: 18px;
  }
}
</style>