<script setup lang="ts">
const skills = [
  'PHP (Laravel, CodeIgniter)',
  'JavaScript',
  'Golang',
  'Microservices',
  'Backend Development',
  'Full-stack Development'
];
</script>

<template>
  <section id="about" class="bg-gray-50">
    <div class="section-container">
      <h2 class="section-title">About Me</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="space-y-4">
          <div class="aspect-square w-64 mx-auto rounded-full overflow-hidden bg-gray-200">
            <!-- Replace with your photo -->
            <img src="https://via.placeholder.com/400" alt="Profile photo" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="space-y-6">
          <p class="text-lg text-gray-700">
            I am a Software Engineer specializing in backend development. With extensive experience in full-stack development,
            I focus on implementing features, fixing bugs, and improving products through efficient and scalable solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>