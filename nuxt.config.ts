// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],
  
app: {
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    titleTemplate: '%s | Anna Migaj - Fotografia Ślubna i Biznesowa | Wrocław',
    meta: [
      {
        name: 'description',
        content: 'Anna Migaj – fotografka ze Wrocławia specjalizująca się w fotografii ślubnej, kobiecej i biznesowej. Naturalne, pełne emocji zdjęcia, które uwieczniają najważniejsze chwile.',
      },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'language', content: 'pl' },
      { name: 'geo.region', content: 'PL-DS' },
      { name: 'geo.placename', content: 'Wrocław' },

      // Open Graph
      { property: 'og:title', content: 'Anna Migaj - Fotografia Ślubna i Biznesowa | Wrocław' },
      {
        property: 'og:description',
        content: 'Profesjonalna fotografia ślubna, kobieca i biznesowa we Wrocławiu. Naturalne, pełne emocji zdjęcia, które uwieczniają najważniejsze chwile.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://niebieskie-aparaty.pl' },
      { property: 'og:image', content: 'https://niebieskie-aparaty.pl/images/anna-migaj-fotograf.webp' },
      { property: 'og:locale', content: 'pl_PL' },
      { property: 'og:site_name', content: 'Niebieskie Aparaty - Anna Migaj' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Anna Migaj - Fotografia Ślubna i Biznesowa | Wrocław' },
      {
        name: 'twitter:description',
        content: 'Profesjonalna fotografia ślubna, kobieca i biznesowa we Wrocławiu. Naturalne, pełne emocji zdjęcia, które uwieczniają najważniejsze chwile.',
      },
      { name: 'twitter:image', content: 'https://niebieskie-aparaty.pl/images/anna-migaj-fotograf.webp' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://niebieskie-aparaty.pl' }
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
    '/': { redirect: '/sesje-swiateczne' },
    '/home': { prerender: true },
    '/sesje-swiateczne': { prerender: true },
    '/o-mnie': { prerender: true },
    '/portfolio': { prerender: true },
    '/blog': { prerender: true },
    '/blog/jak-przygotowac-sie-do-sesji-zdjeciowej': { prerender: true },
    '/blog/jak-wybrac-idealne-miejsce-na-sesje': { prerender: true },
    '/blog/sztuka-naturalnego-pozowania-do-zdjec': { prerender: true },
    '/kontakt': { prerender: true }
  },
  
  typescript: {
    strict: true
  }
})