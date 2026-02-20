export default defineNuxtPlugin(() => {
  const route = useRoute()
  const baseUrl = 'https://niebieskie-aparaty.pl'
  useHead(() => ({
    link: [{ rel: 'canonical', href: `${baseUrl}${route.path === '/index' ? '/' : route.path}` }]
  }))
})
