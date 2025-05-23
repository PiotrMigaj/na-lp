<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div 
      v-for="(service, index) in services"
      :key="index"
      class="bg-accent p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div class="text-4xl mb-6">
        <Icon :name="service.icon" />
      </div>
      <h3 class="uppercase text-lg font-medium tracking-wide mb-4">{{ service.title }}</h3>
      <p class="text-text-light font-light">{{ service.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  services: {
    type: Array,
    required: true
  }
});
</script>