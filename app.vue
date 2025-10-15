<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

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