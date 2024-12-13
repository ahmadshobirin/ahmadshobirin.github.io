<script setup lang="ts">
const handleSubmit = (event: Event) => {
  event.preventDefault();
  // Add form submission logic here
};
</script>

<template>
  <section id="contact" class="bg-white">
    <div class="section-container">
      <h2 class="section-title">Get in Touch</h2>
      <div class="max-w-2xl mx-auto">
        <form @submit="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary" />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"></textarea>
          </div>
          <div>
            <button type="submit"
              class="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>