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
    titleTemplate: '%s | Anna Migaj - NIEBIESKIE APARATY',
    meta: [
      {
        name: 'description',
        content: 'Anna Migaj – fotografka ze Wrocławia specjalizująca się w fotografii ślubnej, kobiecej i biznesowej. Uwieczniam wyjątkowe chwile z naturalnością, stylem i profesjonalizmem.',
      },
      { name: 'theme-color', content: '#ffffff' },

      // Open Graph
      { property: 'og:title', content: 'Anna Migaj - NIEBIESKIE APARATY' },
      {
        property: 'og:description',
        content: 'Profesjonalna fotografia ślubna, kobieca i biznesowa ze Wrocławia. Zaufaj Annie Migaj, by uwiecznić Twoje najważniejsze momenty.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://niebieskie-aparaty.pl' }, // Podmień na swój URL
      { property: 'og:image', content: 'https://niebieskie-aparaty.pl/favicon.ico' }, // Podmień na obrazek reprezentujący stronę

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Anna Migaj - NIEBIESKIE APARATY' },
      {
        name: 'twitter:description',
        content: 'Fotografia ślubna, kobieca i biznesowa ze Wrocławia. Profesjonalne sesje zdjęciowe z duszą i stylem.',
      },
      { name: 'twitter:image', content: 'https://niebieskie-aparaty.pl/favicon.ico' }, // Podmień na swój obrazek

      // Optional: Twitter site & creator (if masz konto Twitter)
      // { name: 'twitter:site', content: '@TwojTwitter' },
      // { name: 'twitter:creator', content: '@TwojTwitter' }
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