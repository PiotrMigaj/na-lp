<template>
  <div class="min-h-screen flex items-center justify-center bg-accent">
    <div class="container mx-auto px-4">
      <div class="max-w-lg mx-auto text-center">
        <h1 class="font-cormorant text-6xl mb-4">404</h1>
        <h2 class="font-cormorant text-2xl mb-6">Strona Nie Znaleziona</h2>
        <p class="mb-8 text-text-light">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <NuxtLink to="/"
          class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
          Powrót do strony głównej
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
});

useSeoMeta({
  title: 'Strona Nie Znaleziona',
  description: 'Strona, której szukasz, nie może zostać odnaleziona.'
});
</script>
