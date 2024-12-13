<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import AboutMe from './components/AboutMe.vue'
import Career from './components/Career.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <Navigation />
  <main class="pt-16">
    <AboutMe />
    <Career />
    <Portfolio />
    <Contact />
  </main>
</template>