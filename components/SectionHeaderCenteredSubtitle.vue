<template>
  <div class="mb-16 relative">
    <h2 class="font-italiana text-4xl relative inline-block">
      {{ title }}
      <span class="absolute -bottom-4 left-0 w-[50px] h-[1px] bg-secondary"></span>
    </h2>
    <p v-if="subtitle" class="mt-8 max-w-2xl font-light text-text-light leading-relaxed mx-auto text-center">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>