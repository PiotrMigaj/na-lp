<template>
  <footer class="bg-secondary text-primary pt-16 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 class="font-italiana text-2xl mb-6">NIEBIESKIE APARATY</h3>
          <p class="font-light leading-relaxed">
            Elevating fashion photography through a unique vision that combines minimalist elegance with emotional depth.
          </p>
          
          <div class="mt-8 flex space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-primary hover:text-text-light transition-colors duration-300"
              aria-label="Instagram"
            >
              <Icon name="mdi:instagram" class="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-primary hover:text-text-light transition-colors duration-300"
              aria-label="Facebook"
            >
              <Icon name="mdi:facebook" class="w-6 h-6" />
            </a>
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-primary hover:text-text-light transition-colors duration-300"
              aria-label="Pinterest"
            >
              <Icon name="mdi:pinterest" class="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-primary hover:text-text-light transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Icon name="mdi:linkedin" class="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="font-italiana text-2xl mb-6">Explore</h3>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink 
                :to="item.path" 
                class="inline-block font-light hover:underline"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-italiana text-2xl mb-6">Newsletter</h3>
          <p class="font-light mb-4">
            Subscribe to receive updates on new projects, exhibitions, and available booking dates.
          </p>
          <div class="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              class="py-2 px-4 w-full bg-white/10 border-0 focus:outline-none focus:ring-1 focus:ring-white/50"
            />
            <button class="bg-transparent border border-white px-4 py-2 uppercase text-xs tracking-wider hover:bg-white hover:text-secondary transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-16 py-6 border-t border-white/10">
      <div class="container mx-auto px-4">
        <div class="text-center text-text-light text-sm">
          <p>&copy; {{ new Date().getFullYear() }} NIEBIESKIE APARATY. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Navigation items for footer
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
];
</script>