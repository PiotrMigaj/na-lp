<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl md:text-6xl mb-6">Sesja Ślubna Wrocław</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Naturalne, pełne emocji zdjęcia ślubne we Wrocławiu. Anna Migaj specjalizuje się w uchwyceniu spontanicznych momentów i prawdziwych uczuć w dniu ślubu.
        </p>
      </div>
    </section>

    <!-- About Wedding Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-italiana text-4xl mb-6">Fotografia Ślubna Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Naturalne Zdjęcia Ślubne</h3>
            <p class="mb-6 font-light leading-relaxed">
              Specjalizuję się w fotografii ślubnej we Wrocławiu, tworząc naturalne, spontaniczne zdjęcia, które oddają prawdziwe emocje dnia ślubu. Mój styl to minimalizm, elegancja i uchwycenie najważniejszych momentów.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Każda para młoda jest wyjątkowa, dlatego podchodzę do każdej sesji ślubnej indywidualnie. Tworzę zdjęcia, które będą przypominać o najpiękniejszych chwilach przez lata.
            </p>
            <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Umów sesję ślubną
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-1_jyc43n.webp"
              alt="Sesja ślubna Wrocław - naturalne zdjęcia pary młodej Anna Migaj fotograf"
              class="w-full h-[600px] object-cover rounded-lg"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Wedding Services -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Pakiety Ślubne</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferuję różne pakiety fotografii ślubnej dostosowane do Waszych potrzeb i budżetu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-medium mb-4">Pakiet Podstawowy</h3>
            <ul class="space-y-3 mb-6">
              <li>• 6 godzin fotografii</li>
              <li>• Przygotowania + ceremonia</li>
              <li>• 300+ obrobionych zdjęć</li>
              <li>• Galeria online</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-secondary">
            <div class="text-center mb-4">
              <span class="bg-secondary text-white px-4 py-2 text-sm uppercase tracking-wider rounded-full">
                Najpopularniejszy
              </span>
            </div>
            <h3 class="text-2xl font-medium mb-4">Pakiet Premium</h3>
            <ul class="space-y-3 mb-6">
              <li>• 8 godzin fotografii</li>
              <li>• Cały dzień ślubu</li>
              <li>• 500+ obrobionych zdjęć</li>
              <li>• Sesja narzeczeńska gratis</li>
              <li>• Album ślubny</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-medium mb-4">Pakiet VIP</h3>
            <ul class="space-y-3 mb-6">
              <li>• 10 godzin fotografii</li>
              <li>• Drugi fotograf</li>
              <li>• 700+ obrobionych zdjęć</li>
              <li>• Sesja narzeczeńska</li>
              <li>• Album premium + pendrive</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Wedding Gallery -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Galeria Zdjęć Ślubnych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz przykłady moich prac z sesji ślubnych we Wrocławiu i okolicach.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="i in 6" :key="i" class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              :src="`https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-${i}_jyc43n.webp`"
              :alt="`Zdjęcia ślubne Wrocław - profesjonalna fotografia ślubna Anna Migaj ${i}`"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
        </div>

        <div class="mt-12 text-center">
          <NuxtLink to="/portfolio" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
            Zobacz pełne portfolio
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Me -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Dlaczego Anna Migaj?</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Doświadczenie</h3>
            <p class="text-gray-600">Lata doświadczenia w fotografii ślubnej we Wrocławiu</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Naturalność</h3>
            <p class="text-gray-600">Specjalizuję się w naturalnych, spontanicznych kadrach</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Profesjonalizm</h3>
            <p class="text-gray-600">Nowoczesny sprzęt i profesjonalne podejście</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Indywidualne podejście</h3>
            <p class="text-gray-600">Każda para młoda otrzymuje unikalną opiekę</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-italiana text-4xl mb-6">Zarezerwuj Swoją Sesję Ślubną</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Skontaktuj się ze mną, aby omówić szczegóły Waszego ślubu i zarezerwować termin na fotografię ślubną we Wrocławiu.
        </p>
        <NuxtLink to="/kontakt" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Skontaktuj się ze mną
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Sesja Ślubna Wrocław - Anna Migaj | Naturalne Zdjęcia Ślubne',
  description: 'Profesjonalna sesja ślubna Wrocław. Anna Migaj - doświadczony fotograf ślubny. Naturalne, pełne emocji zdjęcia z Waszego wielkiego dnia. Sprawdź pakiety!',
  keywords: 'sesja ślubna Wrocław, fotograf ślubny Wrocław, zdjęcia ślubne Wrocław, fotografia ślubna, Anna Migaj ślub, naturalne zdjęcia ślubne',
  robots: 'index, follow',
  ogTitle: 'Sesja Ślubna Wrocław - Anna Migaj | Naturalne Zdjęcia Ślubne',
  ogDescription: 'Profesjonalna sesja ślubna Wrocław. Anna Migaj - doświadczony fotograf ślubny. Naturalne, pełne emocji zdjęcia z Waszego wielkiego dnia.',
  ogImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-1_jyc43n.webp',
  ogLocale: 'pl_PL',
  twitterCard: 'summary_large_image'
});
</script>