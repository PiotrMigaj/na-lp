<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl mb-6">Portfolio</h1>
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
        <h2 class="font-cormorant text-4xl mb-6">Rozpocznij swój projekt</h2>
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
  // SLUBNE
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-1_jyc43n.webp',
    alt: 'Sesja slubna Wroclaw - Weronika i Szymon - fotograf slubny Anna Migaj'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249875/slubne-2_rwyoia.webp',
    alt: 'Zdjecia slubne Wroclaw - para mloda Weronika i Szymon - naturalna fotografia slubna'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249875/slubne-3_jrkhrs.webp',
    alt: 'Fotografia slubna Wroclaw - romantyczne zdjecia Weroniki i Szymona - Anna Migaj'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249876/slubne-4_hxcrau.webp',
    alt: 'Profesjonalna sesja slubna Wroclaw - Weronika i Szymon - emocjonalne kadry'
  },
  {
    title: 'Weronika i Szymon',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249877/slubne-5_sd1cv8.webp',
    alt: 'Sesja slubna plener Wroclaw - Weronika i Szymon - fotograf Anna Migaj'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249877/slubne-11_epvqau.webp',
    alt: 'Sesja slubna Wroclaw - Ewelina i Kamil - naturalne zdjecia slubne Anna Migaj'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249878/slubne-12_zdmsx4.webp',
    alt: 'Fotograf slubny Wroclaw - Ewelina i Kamil - romantyczna sesja slubna'
  },
  {
    title: 'Ewelina i Kamil',
    category: 'ślubne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249878/slubne-13_or8cxc.webp',
    alt: 'Zdjecia slubne Wroclaw - para mloda Ewelina i Kamil - profesjonalna fotografia'
  },
  // KOBIECE
  {
    title: 'Ania',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp',
    alt: 'Sesja kobieca Wroclaw - portret Ani - fotograf portretowy Anna Migaj'
  },
  {
    title: 'Agnieszka',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250439/kobiece-2_nsnioa.webp',
    alt: 'Sesja portretowa Wroclaw - Agnieszka - naturalne zdjecia kobiece Anna Migaj'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250439/kobiece-4_txff42.webp',
    alt: 'Fotografia kobieca Wroclaw - sesja Madzi - profesjonalne portrety Anna Migaj'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250440/kobiece-5_evb8sq.webp',
    alt: 'Sesja kobieca studio Wroclaw - Madzia - eleganckie portrety Anna Migaj'
  },
  {
    title: 'Madzia',
    category: 'kobiece',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250441/kobiece-6_ecmdym.webp',
    alt: 'Fotograf portretowy Wroclaw - naturalna sesja Madzi - Anna Migaj fotografia'
  },
  // BIZNESOWE
  {
    title: 'Edyta',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250522/biznesowe-1_fknqui.webp',
    alt: 'Sesja biznesowa Wroclaw - profesjonalny portret Edyty - fotograf Anna Migaj'
  },
  {
    title: 'Edyta',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250523/biznesowe-2_cu0imq.webp',
    alt: 'Zdjecia biznesowe Wroclaw - Edyta - fotografia korporacyjna Anna Migaj'
  },
  {
    title: 'Justyna',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250525/biznesowe-3_mqxyks.webp',
    alt: 'Sesja biznesowa Wroclaw - portret Justyny - profesjonalne zdjecia do LinkedIn'
  },
  {
    title: 'Justyna',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250526/biznesowe-4_ssnmoo.webp',
    alt: 'Fotografia biznesowa Wroclaw - Justyna - Anna Migaj fotograf korporacyjny'
  },
  {
    title: 'Krzysztof',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250527/biznesowe-5_uae4ts.webp',
    alt: 'Sesja biznesowa meska Wroclaw - Krzysztof - profesjonalne portrety Anna Migaj'
  },
  {
    title: 'Krzysztof',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250529/biznesowe-6_dkvnsw.webp',
    alt: 'Zdjecia korporacyjne Wroclaw - Krzysztof - fotograf biznesowy Anna Migaj'
  },
  {
    title: 'Centrum Rehabilitacji',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250530/biznesowe-7_jsng2y.webp',
    alt: 'Sesja firmowa Wroclaw - Centrum Rehabilitacji - fotografia biznesowa Anna Migaj'
  },
  {
    title: 'Centrum Rehabilitacji',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250531/biznesowe-8_ytltoh.webp',
    alt: 'Zdjecia firmowe Wroclaw - zespol Centrum Rehabilitacji - Anna Migaj fotograf'
  },
  {
    title: 'Marek',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250533/biznesowe-9_ej7dco.webp',
    alt: 'Sesja biznesowa Wroclaw - profesjonalny portret Marka - fotografia korporacyjna'
  },
  {
    title: 'Ola',
    category: 'biznesowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250534/biznesowe-10_xunggg.webp',
    alt: 'Sesja biznesowa kobieca Wroclaw - Ola - zdjecia do LinkedIn Anna Migaj'
  },
  // FASHION
  {
    title: 'Emilii',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250638/fashion-2_t9wm6f.webp',
    alt: 'Sesja fashion Wroclaw - Emilia - profesjonalna fotografia modowa Anna Migaj'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250639/fashion-3_mjof7d.webp',
    alt: 'Fotografia modowa Wroclaw - Marta - sesja fashion Anna Migaj'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250641/fashion-5_b3djjh.webp',
    alt: 'Sesja fashion Wroclaw - stylowe zdjecia Marty - fotograf Anna Migaj'
  },
  {
    title: 'Marta',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250642/fashion-6_pnv11m.webp',
    alt: 'Fotografia modowa Wroclaw - Marta - profesjonalne zdjecia fashion'
  },
  {
    title: 'Portretowe',
    category: 'fashion',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250645/fashion-7_pmwn3w.webp',
    alt: 'Sesja portretowa fashion Wroclaw - artystyczne zdjecia Anna Migaj'
  },
  // PRODUKTOWE
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250709/produktowe-2_fhz9gj.webp',
    alt: 'Fotografia produktowa Wroclaw - Nieba Przychylam - profesjonalne zdjecia produktow'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250713/produktowe-3_judq4l.webp',
    alt: 'Sesja produktowa Wroclaw - Nieba Przychylam - Anna Migaj fotograf produktowy'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250714/produktowe-4_sz8zpe.webp',
    alt: 'Zdjecia produktowe Wroclaw - Nieba Przychylam - profesjonalna fotografia'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250715/produktowe-5_bkmdup.webp',
    alt: 'Fotografia produktowa Wroclaw - Nieba Przychylam - Anna Migaj'
  },
  {
    title: 'Nieba Przychylam',
    category: 'produktowe',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250718/produktowe-6_d9zwi4.webp',
    alt: 'Sesja produktowa Wroclaw - Nieba Przychylam - zdjecia dla e-commerce'
  },
  // RODZINNE
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250788/rodzinne-1_m1ii1u.webp',
    alt: 'Sesja rodzinna Wroclaw - naturalne zdjecia rodzinne - fotograf Anna Migaj'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250789/rodzinne-2_jaxa46.webp',
    alt: 'Fotografia rodzinna Wroclaw - sesja z dziecmi - Anna Migaj fotograf'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250792/rodzinne-3_bmmt4o.webp',
    alt: 'Sesja rodzinna Wroclaw - naturalne portrety rodzinne - profesjonalna fotografia'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250794/rodzinne-4_dg45ou.webp',
    alt: 'Zdjecia rodzinne Wroclaw - sesja z rodzina - fotograf Anna Migaj'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250797/rodzinne-5_vxnxxv.webp',
    alt: 'Fotografia rodzinna Wroclaw - naturalne kadry rodzinne - Anna Migaj'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250801/rodzinne-7_kzthzq.webp',
    alt: 'Sesja rodzinna Wroclaw - emocjonalne zdjecia rodzinne - fotograf Anna Migaj'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250804/rodzinne-8_qv43r8.webp',
    alt: 'Fotografia rodzinna Wroclaw - naturalna sesja rodzinna - Anna Migaj'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250806/rodzinne-9_l01kul.webp',
    alt: 'Sesja rodzinna Wroclaw - profesjonalne zdjecia rodzinne - Anna Migaj fotograf'
  },
  {
    title: 'Rodzinne',
    category: 'rodzinne',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250809/rodzinne-10_lz51pc.webp',
    alt: 'Zdjecia rodzinne Wroclaw - naturalne portrety - fotograf rodzinny Anna Migaj'
  },
];

const filteredPortfolioItems = computed(() => {
  if (!selectedCategory) return portfolioItems;
  return portfolioItems.filter(item => item.category === selectedCategory.value);
});

useSeoMeta({
  title: 'Portfolio Fotograf Wrocław - Anna Migaj | Sesje Ślubne, Biznesowe',
  description: 'Portfolio Anny Migaj - fotografki ze Wrocławia. Zobacz realizacje sesji ślubnych, biznesowych, kobiecych i rodzinnych. Profesjonalna fotografia pełna emocji.',
  keywords: 'portfolio fotograf Wrocław, zdjęcia ślubne portfolio, sesje biznesowe Wrocław, fotografia kobieca, Anna Migaj portfolio',
  robots: 'index, follow',
  ogTitle: 'Portfolio Fotograf Wrocław - Anna Migaj | Sesje Ślubne, Biznesowe',
  ogDescription: 'Portfolio Anny Migaj - fotografki ze Wrocławia. Zobacz realizacje sesji ślubnych, biznesowych, kobiecych i rodzinnych.',
  ogImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-1_jyc43n.webp',
  ogLocale: 'pl_PL'
});
</script>
