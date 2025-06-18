<template>
  <footer class="bg-secondary text-primary pt-16 pb-6">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-center md:text-left">
        <!-- Lewa kolumna: Niebieskie Aparaty -->
        <div class="md:w-1/2 max-w-xl">
          <h3 class="font-italiana text-2xl mb-6">NIEBIESKIE APARATY</h3>
          <p class="font-light leading-relaxed">
            Fotografuję kobiety, pary i rodziny – łącząc minimalistyczną estetykę z autentycznymi emocjami.
          </p>
          <div class="mt-8 flex justify-center md:justify-start space-x-6">
            <a href="https://www.instagram.com/niebieskie_aparaty?utm_source=ig_web_button_share_sheet&igsh=cWFiZ3d4Mjd4NDdq"
              target="_blank" rel="noopener noreferrer"
              class="text-primary hover:text-text-light transition-colors duration-300" aria-label="Instagram">
              <Icon name="mdi:instagram" class="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100001562507926" target="_blank" rel="noopener noreferrer"
              class="text-primary hover:text-text-light transition-colors duration-300" aria-label="Facebook">
              <Icon name="mdi:facebook" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Prawa kolumna: Nawigacja -->
        <div class="md:w-1/2 md:text-right">
          <h3 class="font-italiana text-2xl mb-6">Nawigacja</h3>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink :to="item.path" class="inline-block font-light hover:underline">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-16 py-6 border-t border-white/10">
      <div class="container mx-auto px-4">
        <div class="text-center text-text-light text-sm">
          <p>&copy; {{ new Date().getFullYear() }} NIEBIESKIE APARATY. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { label: 'Strona główna', path: '/' },
  { label: 'O mnie', path: '/o-mnie' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontakt', path: '/kontakt' },
];
</script>
