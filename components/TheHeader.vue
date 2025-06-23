<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <nav class="bg-white/95 shadow-sm backdrop-blur-sm py-4">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="font-italiana text-3xl tracking-wider">
            NIEBIESKIE APARATY
          </NuxtLink>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <ul class="flex space-x-8">
              <li v-for="item in navItems" :key="item.path">
                <NuxtLink 
                  :to="item.path" 
                  class="uppercase text-sm tracking-widest font-medium relative after:absolute after:w-0 after:h-px after:bg-secondary after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                  active-class="after:w-full"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <!-- Mobile Navigation Toggle -->
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden text-secondary"
            aria-label="Toggle menu"
          >
            <Icon 
              :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
              class="w-6 h-6" 
            />
          </button>
        </div>
      </div>
    </nav>
    
    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden bg-white fixed inset-0 z-40 pt-24 px-4 transition-all duration-300"
      :class="isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <ul class="flex flex-col space-y-6 items-center">
        <li v-for="item in navItems" :key="item.path">
          <NuxtLink 
            :to="item.path" 
            class="uppercase text-lg tracking-widest font-medium"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      
      <div class="mt-12 flex justify-center space-x-6">
        <a href="https://www.instagram.com/niebieskie_aparaty?utm_source=ig_web_button_share_sheet&igsh=cWFiZ3d4Mjd4NDdq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Icon name="mdi:instagram" class="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100001562507926" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Icon name="mdi:facebook" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);

// Close menu when window is resized to desktop size
onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen.value) {
      isMenuOpen.value = false;
    }
  });
});

// Navigation items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'O Mnie', path: '/o-mnie' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontakt', path: '/kontakt' },
];
</script>