<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <Chatbot />
    <BackToTop />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import Chatbot from '@/components/Chatbot.vue'
import BackToTop from '@/components/BackToTop.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Chatbot,
    BackToTop
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #fff;
  line-height: 1.6;
}
</style>
