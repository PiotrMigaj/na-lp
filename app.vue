<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: theme('colors.primary');
  color: theme('colors.secondary');
  letter-spacing: 0.5px;
}

::selection {
  background-color: theme('colors.secondary');
  color: theme('colors.primary');
}
</style>