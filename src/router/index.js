import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projetos from '@/views/Projetos.vue'
import Decks from '@/views/Decks.vue'
import Parceiros from '@/views/Parceiros.vue'
import Blog from '@/views/Blog.vue'
import BlogPost from '@/views/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  },
  {
    path: '/decks',
    name: 'Portfolio',
    component: Decks
  },
  {
    path: '/parceiros',
    name: 'Parceiros',
    component: Parceiros
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
