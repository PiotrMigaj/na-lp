<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <nav class="bg-white/95 shadow-sm backdrop-blur-sm py-4">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="font-cormorant text-3xl tracking-wider">
            NIEBIESKIE APARATY
          </NuxtLink>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <ul class="flex space-x-8">
              <li
                v-for="item in navItems"
                :key="item.path"
                class="relative"
                @mouseenter="item.hasDropdown ? openDropdown = item.label : null"
                @mouseleave="item.hasDropdown ? openDropdown = null : null"
              >
                <NuxtLink
                  :to="item.path"
                  class="uppercase text-sm tracking-widest font-medium relative after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full after:bg-secondary"
                  active-class="after:w-full"
                >
                  <span>{{ item.label }}</span>
                </NuxtLink>

                <!-- Dropdown Menu -->
                <div
                  v-if="item.hasDropdown"
                  v-show="openDropdown === item.label"
                  class="absolute top-full left-0 pt-4 w-56 z-50"
                >
                  <div class="bg-white shadow-lg rounded-sm py-2">
                    <NuxtLink
                      v-for="dropdownItem in item.dropdownItems"
                      :key="dropdownItem.path"
                      :to="dropdownItem.path"
                      class="block px-4 py-2 text-sm hover:bg-accent transition-colors duration-200"
                    >
                      {{ dropdownItem.label }}
                    </NuxtLink>
                  </div>
                </div>
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
      class="md:hidden bg-white fixed inset-0 z-40 pt-24 px-4 transition-all duration-300 overflow-y-auto"
      :class="isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <ul class="flex flex-col space-y-4 items-center">
        <li v-for="item in navItems" :key="item.path" class="w-full">
          <!-- Items with dropdown -->
          <template v-if="item.hasDropdown">
            <button
              @click="toggleMobileDropdown(item.label)"
              class="uppercase text-lg tracking-widest font-medium flex items-center justify-center w-full"
            >
              <span>{{ item.label }}</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-5 h-5 ml-2 transition-transform duration-200"
                :class="expandedMobileItem === item.label ? 'rotate-180' : ''"
              />
            </button>
            <!-- Submenu items -->
            <div
              v-show="expandedMobileItem === item.label"
              class="mt-3 space-y-2 px-4"
            >
              <NuxtLink
                v-for="dropdownItem in item.dropdownItems"
                :key="dropdownItem.path"
                :to="dropdownItem.path"
                class="block text-center py-2 text-base hover:text-secondary transition-colors"
                @click="isMenuOpen = false; expandedMobileItem = null"
              >
                {{ dropdownItem.label }}
              </NuxtLink>
            </div>
          </template>

          <!-- Regular items -->
          <NuxtLink
            v-else
            :to="item.path"
            class="uppercase text-lg tracking-widest font-medium block text-center"
            @click="isMenuOpen = false"
          >
            <span>{{ item.label }}</span>
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
const openDropdown = ref(null);
const expandedMobileItem = ref(null);

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
  { label: 'Home', path: '/home' },
  { label: 'O Mnie', path: '/o-mnie' },
  {
    label: 'Portfolio',
    path: '/portfolio',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Wszystkie Prace', path: '/portfolio' },
      { label: 'Sesje Ślubne', path: '/sesja-slubna-wroclaw' },
      { label: 'Sesje Biznesowe', path: '/sesja-biznesowa-wroclaw' },
      { label: 'Sesje Kobiece', path: '/sesja-kobieca-wroclaw' },
      { label: 'Sesje Produktowe', path: '/sesja-produktowa-wroclaw' },
      { label: 'Fotografia Portretowa', path: '/fotograf-portretowy-wroclaw' },
    ]
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontakt', path: '/kontakt' },
];

const toggleMobileDropdown = (label) => {
  expandedMobileItem.value = expandedMobileItem.value === label ? null : label;
};
</script>