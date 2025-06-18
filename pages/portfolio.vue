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
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-1_jyc43n.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249875/slubne-2_rwyoia.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249875/slubne-3_jrkhrs.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249876/slubne-4_hxcrau.webp'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249877/slubne-5_sd1cv8.webp'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249877/slubne-11_epvqau.webp'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249878/slubne-12_zdmsx4.webp'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249878/slubne-13_or8cxc.webp'
  },
  {
    title: 'Ania',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp'
  },
  {
    title: 'Agnieszka',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250439/kobiece-4_txff42.webp'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250439/kobiece-4_txff42.webp'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250440/kobiece-5_evb8sq.webp'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250441/kobiece-6_ecmdym.webp'
  },
  {
    title: 'Edyta',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250522/biznesowe-1_fknqui.webp'
  },
  {
    title: 'Edyta',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250523/biznesowe-2_cu0imq.webp'
  },
  {
    title: 'Justyna',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250525/biznesowe-3_mqxyks.webp'
  },
  {
    title: 'Justyna',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250526/biznesowe-4_ssnmoo.webp'
  },
  {
    title: 'Krzysztof',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250527/biznesowe-5_uae4ts.webp'
  },
  {
    title: 'Krzysztof',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250529/biznesowe-6_dkvnsw.webp'
  },
  {
    title: 'Centrum Rehabilitacji',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250530/biznesowe-7_jsng2y.webp'
  },
  {
    title: 'Centrum Rehabilitacji',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250531/biznesowe-8_ytltoh.webp'
  },
  {
    title: 'Marek',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250533/biznesowe-9_ej7dco.webp'
  },
  {
    title: 'Ola',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250534/biznesowe-10_xunggg.webp'
  },
  {
    title: 'Emilii',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250638/fashion-2_t9wm6f.webp'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250639/fashion-3_mjof7d.webp'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250641/fashion-5_b3djjh.webp'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250642/fashion-6_pnv11m.webp'
  },
  {
    title: 'Portretowe',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250645/fashion-7_pmwn3w.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250709/produktowe-2_fhz9gj.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250713/produktowe-3_judq4l.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250714/produktowe-4_sz8zpe.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250715/produktowe-5_bkmdup.webp'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250718/produktowe-6_d9zwi4.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250788/rodzinne-1_m1ii1u.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250789/rodzinne-2_jaxa46.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250792/rodzinne-3_bmmt4o.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250794/rodzinne-4_dg45ou.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250797/rodzinne-5_vxnxxv.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250801/rodzinne-7_kzthzq.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250804/rodzinne-8_qv43r8.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250806/rodzinne-9_l01kul.webp'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250809/rodzinne-10_lz51pc.webp'
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
