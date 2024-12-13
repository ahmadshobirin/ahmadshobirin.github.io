<script setup lang="ts">
const career = [
  {
    title: 'Backend Developer',
    company: 'Current Company',
    period: '2022 - Present',
    description: 'Specializing in backend development, focusing on feature implementation and product improvement using Golang microservices.',
    technologies: ['Golang', 'Microservices', 'REST APIs']
  },
  {
    title: 'Full Stack Developer',
    company: 'Previous Company',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL']
  }
];
</script>

<template>
  <section id="career" class="bg-white">
    <div class="section-container">
      <h2 class="section-title">Career Journey</h2>
      <div class="space-y-12">
        <div v-for="(position, index) in career" :key="index"
          class="relative pl-8 border-l-2 border-secondary/30 pb-8 last:pb-0">
          <div class="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-0"></div>
          <div class="space-y-3">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold">{{ position.title }}</h3>
                <p class="text-gray-600">{{ position.company }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ position.period }}</span>
            </div>
            <p class="text-gray-700">{{ position.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in position.technologies" :key="tech"
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