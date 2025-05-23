<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div 
      v-for="(item, index) in items"
      :key="index"
      class="portfolio-item group relative overflow-hidden"
    >
      <NuxtImg
        :src="item.image"
        :alt="item.title"
        class="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"
        width="600"
        height="800"
        format="webp"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div class="text-center text-white">
          <h3 class="font-italiana text-xl tracking-wider mb-2">{{ item.title }}</h3>
          <p class="text-sm tracking-wide">{{ item.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>