<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl mb-6">Portfolio</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Kolekcja moich prac, obejmująca głównie sesje kobiece, biznesowe, ślubne, rodzinne oraz inne projekty tworzone
          z pasją — zarówno komercyjne, jak i osobiste.
        </p>
      </div>
    </section>

    <!-- Portfolio Categories -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <!-- <button @click="selectedCategory = null"
            class="px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300"
            :class="selectedCategory === null ? 'bg-secondary text-white' : 'bg-accent text-secondary hover:bg-gray-200'">
            Wszystkie
          </button> -->
          <button v-for="category in categories" :key="category" @click="selectedCategory = category"
            class="px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300"
            :class="selectedCategory === category ? 'bg-secondary text-white' : 'bg-accent text-secondary hover:bg-gray-200'">
            {{ category }}
          </button>
        </div>

        <PortfolioGrid :items="filteredPortfolioItems" />
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-italiana text-4xl mb-6">Rozpocznij swój projekt</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Gotowa na stworzenie wyjątkowych wizualizacji dla Twojej marki lub publikacji? Porozmawiajmy o Twojej wizji i
          zrealizujmy ją razem.
        </p>
        <NuxtLink to="/kontakt"
          class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Skontaktuj się
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const selectedCategory = ref('ślubne');

const categories = [
  'ślubne',
  'kobiece',
  'biznesowe',
  'fashion',
  'produktowe',
  'rodzinne'
];

const portfolioItems = [
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-3.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-2.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-1.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-4.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-5.webp'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-10.webp'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-11.webp'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-12.webp'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: '/images/portfolio/slubne/slubne-13.webp'
  },
  {
    title: 'Ania',
    category: 'kobiece',
    image: '/images/portfolio/kobiece/kobiece-1.webp'
  },
  {
    title: 'Agnieszka',
    category: 'kobiece',
    image: '/images/portfolio/kobiece/kobiece-2.webp'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: '/images/portfolio/kobiece/kobiece-4.webp'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: '/images/portfolio/kobiece/kobiece-5.webp'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: '/images/portfolio/kobiece/kobiece-6.webp'
  },
  {
    title: 'Edyta',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-1.webp'
  },
  {
    title: 'Edyta',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-2.webp'
  },
  {
    title: 'Justyna',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-3.webp'
  },
  {
    title: 'Justyna',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-4.webp'
  },
  {
    title: 'Krzysztof',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-5.webp'
  },
  {
    title: 'Krzysztof',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-6.webp'
  },
  {
    title: 'Centrum Rehabilitacji',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-7.webp'
  },
  {
    title: 'Centrum Rehabilitacji',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-8.webp'
  },
  {
    title: 'Marek',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-9.webp'
  },
  {
    title: 'Ola',
    category: 'biznesowe',
    image: '/images/portfolio/biznesowe/biznesowe-10.webp'
  },
  {
    title: 'Emilii',
    category: 'fashion',
    image: '/images/portfolio/fashion/fashion-2.webp'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: '/images/portfolio/fashion/fashion-3.webp'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: '/images/portfolio/fashion/fashion-5.webp'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: '/images/portfolio/fashion/fashion-6.webp'
  },
  {
    title: 'Portretowe',
    category: 'fashion',
    image: '/images/portfolio/fashion/fashion-7.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: '/images/portfolio/produktowe/produktowe-2.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: '/images/portfolio/produktowe/produktowe-3.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: '/images/portfolio/produktowe/produktowe-4.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: '/images/portfolio/produktowe/produktowe-5.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: '/images/portfolio/produktowe/produktowe-6.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-1.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-2.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-3.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-4.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-5.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-7.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-8.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-9.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: '/images/portfolio/rodzinne/rodzinne-10.webp'
  },
];

const filteredPortfolioItems = computed(() => {
  if (!selectedCategory) return portfolioItems;
  return portfolioItems.filter(item => item.category === selectedCategory.value);
});

useHead({
  title: 'Portfolio | Anna Migaj – Fotografia Kobieca, Ślubna, Rodzinna, Biznesowa',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio Anny Migaj – fotografki z Wrocławia. Zobacz wybrane sesje kobiece, ślubne, rodzinne i wizerunkowe. Estetyka, emocje i profesjonalizm w jednym kadrze.'
    }
  ]
});
</script>
