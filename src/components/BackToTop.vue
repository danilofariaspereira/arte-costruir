<template>
  <div class="back-to-top" @click="scrollToTop" v-if="isVisible">
    <svg viewBox="0 0 24 24" width="24" height="24" class="arrow-icon">
      <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent-color), var(--gold-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(184, 134, 11, 0.3);
  transition: all 0.3s ease;
  z-index: 999;
  animation: fadeInUp 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(184, 134, 11, 0.4);
}

.arrow-icon {
  color: white;
  width: 24px;
  height: 24px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .back-to-top {
    bottom: 15px;
    left: 15px;
    width: 45px;
    height: 45px;
  }
  
  .arrow-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .back-to-top {
    bottom: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
  }
  
  .arrow-icon {
    width: 18px;
    height: 18px;
  }
}
</style>

