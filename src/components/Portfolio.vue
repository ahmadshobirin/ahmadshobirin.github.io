<script setup lang="ts">
const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Backend',
    description: 'Developed a scalable e-commerce backend using Golang microservices.',
    technologies: ['Golang', 'gRPC', 'PostgreSQL'],
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'CRM System',
    category: 'Full Stack',
    description: 'Built a customer relationship management system using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    image: 'https://via.placeholder.com/400x300'
  }
];

const categories = ['All', 'Backend', 'Full Stack', 'Web'];
</script>

<template>
  <section id="portfolio" class="bg-gray-50">
    <div class="section-container">
      <h2 class="section-title">Portfolio</h2>
      <div class="flex justify-center gap-4 mb-8">
        <button v-for="category in categories" :key="category"
          class="px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors">
          {{ category }}
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index"
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
          <div class="p-6 space-y-4">
            <span class="text-sm text-secondary font-medium">{{ project.category }}</span>
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-gray-600">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>