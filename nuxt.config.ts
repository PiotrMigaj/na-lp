// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/nuxt'
  ],
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | NIEBIESKIE APARATY',
      meta: [
        { name: 'description', content: 'Professional fashion photography services by NIEBIESKIE APARATY. Capturing timeless moments with a unique artistic vision.' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  googleFonts: {
    families: {
      Italiana: true,
      Montserrat: [300, 400, 500, 600],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
  
  image: {
    format: ['webp'],
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
    },
  },
  
  ssr: true,
    routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/portfolio': { prerender: true },
    '/services': { prerender: true },
    '/contact': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true }
  },
  
  typescript: {
    strict: true
  }
})