<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <img src="/src/assets/images/logo-arte-construir-02.png" alt="Arte Construir" class="logo">
          </router-link>
        </div>
        
        <div class="nav-menu" :class="{ 'active': isMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projetos" class="nav-link" @click="closeMenu">Projetos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/decks" class="nav-link" @click="closeMenu">Decks</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/parceiros" class="nav-link" @click="closeMenu">Parceiros</router-link>
            </li>
          </ul>
        </div>
        
        <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const isScrolled = ref(false)
    const isMenuOpen = ref(false)
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    
    const closeMenu = () => {
      isMenuOpen.value = false
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      isScrolled,
      isMenuOpen,
      toggleMenu,
      closeMenu
    }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: calc(100% - 40px);
  max-width: 1200px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  transition: all var(--transition-normal);
}

.app-header.scrolled {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-xl);
}

.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  display: block;
}

.logo {
  height: 60px;
  width: auto;
  filter: brightness(1.3) contrast(1.1);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.nav-list {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--white);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 12px;
  transition: all var(--transition-fast);
  position: relative;
  text-decoration: none;
  font-size: var(--font-size-base);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent-color);
  background: rgba(184, 134, 11, 0.15);
  backdrop-filter: blur(10px);
  transform: translateY(-1px);
  border: 1px solid var(--accent-color);
  border-radius: 20px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: rgba(184, 134, 11, 0.2);
  border: 2px solid rgba(184, 134, 11, 0.5);
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 10px;
  backdrop-filter: blur(10px);
  z-index: 1001;
  position: relative;
  width: 44px;
  height: 44px;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: var(--white);
  border-radius: 2px;
  transition: all var(--transition-fast);
  display: block;
  opacity: 1;
}

.menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Styles */
@media screen and (max-width: 768px) {
  .app-header {
    top: 10px;
    width: calc(100% - 20px);
    border-radius: 15px;
  }
  
  .nav {
    padding: var(--spacing-sm) var(--spacing-lg);
    position: relative;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100%;
  }
  
  .nav-brand {
    flex: 0 0 auto;
    max-width: calc(100% - 60px);
    z-index: 1;
  }
  
  .logo {
    max-height: 50px;
    height: 50px;
    width: auto;
  }
  
  .nav-menu {
    display: none !important;
    position: fixed;
    top: calc(100% + 10px);
    left: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-radius: 25px;
    flex-direction: column;
    padding: var(--spacing-xl);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all var(--transition-normal);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    z-index: 999;
    max-width: calc(100vw - 20px);
  }
  
  .nav-menu.active {
    display: flex !important;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .nav-list {
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin-bottom: var(--spacing-lg);
  }
  
  .nav-link {
    display: block;
    padding: var(--spacing-md);
    font-size: var(--font-size-lg);
    border-radius: 10px;
  }
  
  /* Garantir que o botão hambúrguer sempre apareça */
  .menu-toggle {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 1001 !important;
    position: relative !important;
    flex-shrink: 0 !important;
    width: 44px !important;
    height: 44px !important;
    min-width: 44px !important;
    min-height: 44px !important;
    order: 2;
    margin-left: auto;
    background: rgba(184, 134, 11, 0.3) !important;
    border: 2px solid rgba(184, 134, 11, 0.6) !important;
    cursor: pointer !important;
  }
  
  .hamburger-line {
    display: block !important;
    width: 25px !important;
    height: 3px !important;
    background: var(--white) !important;
    opacity: 1 !important;
    visibility: visible !important;
    margin: 0 !important;
  }
}

@media screen and (max-width: 480px) {
  .app-header {
    top: 5px;
    width: calc(100% - 10px);
    border-radius: 20px;
  }
  
  .nav {
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .logo {
    height: 40px;
  }
  
  .nav-menu {
    left: 5px;
    right: 5px;
    border-radius: 20px;
  }
  
  .menu-toggle {
    display: flex !important;
    width: 44px !important;
    height: 44px !important;
  }
}
</style>
