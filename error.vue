<template>
  <div class="min-h-screen flex items-center justify-center bg-accent">
    <div class="container mx-auto px-4">
      <div class="max-w-lg mx-auto text-center">
        <h1 class="font-italiana text-6xl mb-4">404</h1>
        <h2 class="font-italiana text-2xl mb-6">Page Not Found</h2>
        <p class="mb-8 text-text-light">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div class="mb-8">
          <NuxtImg src="~/assets/images/error-camera.svg" alt="Camera Icon" class="mx-auto w-24 h-24" />
        </div>
        <NuxtLink to="/" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
          Back to Home
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
  title: 'Page Not Found',
  description: 'The page you are looking for cannot be found.'
});
</script>