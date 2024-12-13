<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Career', href: '#career' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];
</script>

<template>
  <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <span class="text-xl font-bold text-secondary">Portfolio</span>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-gray-700 hover:text-secondary px-3 py-2 text-sm font-medium">
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen"
            class="text-gray-700 hover:text-secondary focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50"
          @click="isMenuOpen = false">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>