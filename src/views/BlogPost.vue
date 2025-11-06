<template>
  <div class="blog-post-page">
    <!-- Hero Section -->
    <section class="blog-post-hero">
      <div class="container">
        <router-link to="/blog" class="back-link">
          ← Voltar para o Blog
        </router-link>
        <div class="post-header">
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-category">{{ post.category }}</span>
          </div>
          <h1 class="post-title">{{ post.title }}</h1>
        </div>
      </div>
    </section>

    <!-- Post Image -->
    <section class="post-image-section" v-if="post.image">
      <img 
        :src="getImageUrl(post.image)" 
        :alt="post.title" 
        class="post-featured-image"
        loading="lazy"
      >
    </section>

    <!-- Post Content -->
    <section class="post-content-section section">
      <div class="container">
        <div class="post-content-text" v-html="formatContent(post.content)"></div>
        
          <div class="post-footer">
            <div class="share-buttons">
              <h4>Compartilhe:</h4>
              <a 
                href="https://www.instagram.com/arteconstruir/" 
                target="_blank"
                class="share-btn-icon instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                :href="`https://wa.me/5521960171061?text=${encodeURIComponent(shareText)}`" 
                target="_blank"
                class="share-btn-icon whatsapp"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getImageUrl } from '@/utils/images'

export default {
  name: 'BlogPost',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const post = ref({})

    // Dados dos posts (em produção, isso viria de uma API)
    const postsData = {
      'primeiro-feirao-unifeso': {
        id: 'primeiro-feirao-unifeso',
        title: '1ª Feira da Construção do Unifeso: Construindo o Futuro com Consciência',
        excerpt: 'A Arte Construir tem orgulho de participar da 1ª Feira da Construção do Unifeso, contribuindo com soluções sustentáveis que unem tecnologia, inovação e respeito ao meio ambiente.',
        date: new Date('2025-11-05'),
        category: 'Eventos',
        image: '/src/assets/images/primeiro-feirao.png',
        content: `
          Construir o futuro é construir com consciência.
          
          A Arte Construir tem orgulho de participar da 1ª Feira da Construção do Unifeso, contribuindo com soluções sustentáveis que unem tecnologia, inovação e respeito ao meio ambiente.
          
          Nosso propósito é transformar a forma de construir, tornando cada projeto mais eficiente, ecológico e duradouro — inspirando novas gerações de profissionais a repensar o impacto da construção civil.
          
          Vamos juntos construir um futuro mais verde e inteligente.
        `
      },
      'acompanhar-obra-detalhes': {
        id: 'acompanhar-obra-detalhes',
        title: 'Acompanhar uma Obra: Viver Cada Detalhe do Sonho',
        excerpt: 'Acompanhar uma obra é viver cada detalhe, desde o terreno até o resultado final. São muitos desafios pelo caminho e cada etapa exige atenção redobrada.',
        date: new Date(),
        category: 'Construção',
        image: '/src/assets/images/artigo-blog-costrucao.png',
        content: `
          Acompanhar uma obra é viver cada detalhe, desde o terreno até o resultado final. São muitos desafios pelo caminho e cada etapa exige atenção redobrada: planejamento, execução, segurança e, principalmente, cuidado com cada escolha. Nada pode ser deixado de lado quando o objetivo é transformar sonhos em realidade.
        `
      }
    }

    onMounted(() => {
      const postId = route.params.id
      const foundPost = postsData[postId]
      
      if (foundPost) {
        post.value = foundPost
      } else {
        // Post não encontrado, redirecionar para o blog
        router.push('/blog')
      }
    })

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const formatContent = (content) => {
      if (!content) return ''
      // Remove espaços extras e quebras de linha desnecessárias
      const cleaned = content.trim().replace(/\n\s*\n/g, '\n\n')
      // Converte quebras duplas em parágrafos separados
      return cleaned
        .split('\n\n')
        .filter(paragraph => paragraph.trim())
        .map((paragraph, index) => {
          const trimmed = paragraph.trim().replace(/\n/g, ' ')
          // Primeiro parágrafo curto pode ser um lead
          if (index === 0 && trimmed.length < 150) {
            return `<p class="lead">${trimmed}</p>`
          }
          // Verifica se tem palavras em negrito
          const boldText = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          return `<p>${boldText}</p>`
        })
        .join('')
    }

    const shareUrl = computed(() => {
      return window.location.href
    })

    const shareText = computed(() => {
      return post.value.title 
        ? `${post.value.title} - ${post.value.excerpt} ${shareUrl.value}`
        : ''
    })

    return {
      post,
      formatDate,
      formatContent,
      getImageUrl,
      shareUrl,
      shareText
    }
  }
}
</script>

<style scoped>
.blog-post-page {
  min-height: 100vh;
  background: var(--white);
}

/* Hero Section */
.blog-post-hero {
  background: linear-gradient(135deg, var(--accent-color), var(--gold-light));
  color: var(--white);
  padding: var(--spacing-3xl) 0 var(--spacing-2xl);
}

.back-link {
  color: var(--white);
  text-decoration: none;
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-lg);
  display: inline-block;
  opacity: 0.9;
  transition: opacity var(--transition-fast);
}

.back-link:hover {
  opacity: 1;
}

.post-header {
  max-width: 800px;
  margin: 0 auto;
}

.post-meta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-sm);
  opacity: 0.95;
}

.post-category {
  background: rgba(255, 255, 255, 0.2);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--font-size-xs);
  letter-spacing: 1px;
}

.post-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
}

/* Post Image Section */
.post-image-section {
  padding: 0;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.post-featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

/* Post Content Section */
.post-content-section {
  padding: var(--spacing-3xl) 0;
}

.post-content-text {
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--text-dark);
}

.post-content-text p {
  margin-bottom: var(--spacing-lg);
}

.post-content-text strong {
  color: var(--accent-color);
  font-weight: 600;
}

.lead {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.post-footer {
  max-width: 800px;
  margin: 0 auto;
  padding-top: var(--spacing-xl);
  border-top: 2px solid var(--border-color);
}

.share-buttons {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.share-buttons h4 {
  font-size: var(--font-size-base);
  color: var(--text-dark);
  margin: 0;
  margin-right: var(--spacing-sm);
}

.share-btn-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all var(--transition-fast);
  color: var(--white);
}

.share-btn-icon.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.share-btn-icon.instagram:hover {
  background: linear-gradient(45deg, #d8822a 0%, #d05c2f 25%, #c51f36 50%, #b51d56 75%, #a51471 100%);
  transform: scale(1.1);
}

.share-btn-icon.whatsapp {
  background: #25D366;
}

.share-btn-icon.whatsapp:hover {
  background: #128C7E;
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 768px) {
  .post-title {
    font-size: var(--font-size-3xl);
  }

  .post-content-text {
    font-size: var(--font-size-base);
  }

  .lead {
    font-size: var(--font-size-lg);
  }

  .share-buttons {
    flex-direction: column;
    align-items: flex-start;
  }

  .post-image-section {
    margin: 0 calc(-1 * var(--spacing-md));
  }
}
</style>

