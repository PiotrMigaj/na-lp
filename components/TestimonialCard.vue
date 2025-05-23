<template>
  <div class="bg-accent p-8 text-center">
    <p class="italic font-light text-text-light mb-6 leading-relaxed">{{ quote }}</p>
    <h4 class="font-medium mb-1">{{ author }}</h4>
    <p class="text-text-light text-sm">{{ role }}</p>
  </div>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});
</script>