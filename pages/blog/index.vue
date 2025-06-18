<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="font-italiana text-4xl md:text-5xl text-center mb-12">Blog Fotograficzny</h1>
    <p class="text-center text-text-light max-w-2xl mx-auto mb-16">
      Odkryj porady, inspiracje i spostrzeżenia z naszej profesjonalnej podróży fotograficznej.
      Od poradników przygotowawczych po kreatywne techniki — dzielimy się wiedzą, aby pomóc Ci uchwycić idealne momenty.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="post in blogPosts" 
        :key="post.slug"
        class="group bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      >
        <NuxtLink :to="`/blog/${post.slug}`">
          <div class="relative h-84 overflow-hidden">
            <NuxtImg 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h2 class="font-italiana text-2xl mb-3 group-hover:text-secondary transition-colors duration-300">
              {{ post.title }}
            </h2>
            <p class="text-text-light mb-4 line-clamp-2">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-text-light">{{ post.date }}</span>
              <span class="text-secondary group-hover:translate-x-2 transition-transform duration-300">
                Czytaj dalej →
              </span>
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>
    
  </div>
  
</template>

<script setup>
const blogPosts = [
  {
    slug: 'jak-przygotowac-sie-do-sesji-zdjeciowej',
    title: 'Jak przygotować się do sesji zdjęciowej',
    excerpt: 'Najważniejsze wskazówki i lista kontrolna, które pomogą Ci przygotować się do udanej sesji zdjęciowej i uzyskać zachwycające rezultaty.',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249618/blog-preparation-1_dgl2mi.webp',
    date: '15 marca 2024'
  },
  {
    slug: 'jak-wybrac-idealne-miejsce-na-sesje',
    title: 'Jak wybrać idealne miejsce na sesję',
    excerpt: 'Dowiedz się, jak wybierać i sprawdzać lokalizacje, które podkreślą klimat Twoich zdjęć i stworzą odpowiednią atmosferę.',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249643/blog-location-1_vppdpx.webp',
    date: '10 marca 2024'
  },
  {
    slug: 'sztuka-naturalnego-pozowania-do-zdjec',
    title: 'Sztuka Naturalnego Pozowania do Zdjęć',
    excerpt: 'Profesjonalne porady, jak uzyskać naturalne, korzystne pozy, które oddadzą autentyczne emocje i chwile.',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249631/blog-posing-1_mcyarl.webp',
    date: '5 marca 2024'
  }
];

useSeoMeta({
  title: 'Blog Fotograficzny – Porady, Przewodniki i Inspiracje',
  description: 'Przeglądaj naszego bloga fotograficznego, aby znaleźć profesjonalne porady, przewodniki przygotowawcze i twórcze inspiracje. Dowiedz się, jak przygotować się do sesji, wybrać lokalizację i pozować naturalnie.',
  ogTitle: 'Blog Fotograficzny – Porady, Przewodniki i Inspiracje',
  ogDescription: 'Przeglądaj naszego bloga fotograficznego, aby znaleźć profesjonalne porady, przewodniki przygotowawcze i twórcze inspiracje.',
  ogImage: 'https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg',
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
