import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projetos from '@/views/Projetos.vue'
import Decks from '@/views/Decks.vue'
import Parceiros from '@/views/Parceiros.vue'

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
    name: 'Decks',
    component: Decks
  },
  {
    path: '/parceiros',
    name: 'Parceiros',
    component: Parceiros
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
