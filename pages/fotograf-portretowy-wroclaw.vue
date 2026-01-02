<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl md:text-6xl mb-6">Fotograf Portretowy Wrocław</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalne sesje portretowe i kobiece we Wrocławiu. Anna Migaj tworzy naturalne portrety, które oddają Twoją osobowość i unikalny charakter.
        </p>
      </div>
    </section>

    <!-- About Portrait Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-italiana text-4xl mb-6">Sesje Portretowe Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Naturalne Portrety Pełne Charakteru</h3>
            <p class="mb-6 font-light leading-relaxed">
              Jako fotograf portretowy we Wrocławiu specjalizuję się w tworzeniu naturalnych, autentycznych portretów. Wierzę, że najpiękniejsze zdjęcia powstają, gdy czujesz się swobodnie i komfortowo.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Moje sesje portretowe to połączenie profesjonalizmu z luźną atmosferą. Pomagam Ci poczuć się pewnie przed obiektywem, dzięki czemu powstają zdjęcia, które prawdziwie Cię oddają.
            </p>
            <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Umów sesję portretową
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
              alt="Sesja portretowa Wrocław - naturalne zdjęcia kobiety Anna Migaj fotograf"
              class="w-full h-[600px] object-cover rounded-lg"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Types of Portrait Sessions -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Rodzaje Sesji Portretowych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferuję różne typy sesji portretowych dostosowane do Twoich potrzeb i stylu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesje Kobiece Wrocław</h3>
            <p class="text-gray-600 mb-6">Naturalne, kobiece portrety podkreślające Twoją unikalną urodę i osobowość</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Sesje w studio lub plenerze</li>
              <li>• Pomoc w doborze stylizacji</li>
              <li>• Naturalne pozowanie</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Portrety Biznesowe</h3>
            <p class="text-gray-600 mb-6">Profesjonalne zdjęcia do CV, LinkedIn, strony firmowej</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Zdjęcia do mediów społecznościowych</li>
              <li>• Portrety korporacyjne</li>
              <li>• Szybka realizacja</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesje Rodzinne</h3>
            <p class="text-gray-600 mb-6">Naturalne portrety rodzinne uchwycające Wasze więzi</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Sesje z dziećmi</li>
              <li>• Portrety wielopokoleniowe</li>
              <li>• Swobodna atmosfera</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Portrait Gallery -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Portfolio Portretów</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz przykłady moich prac portretowych - naturalne, autentyczne zdjęcia.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
              alt="Sesja portretowa kobieca Wrocław - naturalne zdjęcia Anna Migaj 1"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250439/kobiece-2_nsnioa.webp"
              alt="Sesja portretowa kobieca Wrocław - naturalne zdjęcia Anna Migaj 2"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250439/kobiece-4_txff42.webp"
              alt="Sesja portretowa kobieca Wrocław - naturalne zdjęcia Anna Migaj 3"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250522/biznesowe-1_fknqui.webp"
              alt="Sesja biznesowa portretowa Wrocław - profesjonalne zdjęcia Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250788/rodzinne-1_m1ii1u.webp"
              alt="Sesja rodzinna portretowa Wrocław - naturalne zdjęcia Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250440/kobiece-5_evb8sq.webp"
              alt="Sesja portretowa kobieca Wrocław - naturalne zdjęcia Anna Migaj 4"
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

    <!-- Process -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Jak Przebiega Sesja</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 class="text-xl font-medium mb-4">Konsultacja</h3>
            <p class="text-gray-600">Omawiamy Twoje oczekiwania, styl i lokalizację sesji</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="text-xl font-medium mb-4">Przygotowanie</h3>
            <p class="text-gray-600">Pomagam w doborze stylizacji i przygotowaniu do sesji</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="text-xl font-medium mb-4">Sesja</h3>
            <p class="text-gray-600">Swobodna sesja w wybranej lokalizacji</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 class="text-xl font-medium mb-4">Odbiór</h3>
            <p class="text-gray-600">Otrzymujesz obrobione zdjęcia w galerii online</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-italiana text-4xl mb-6">Zarezerwuj Swoją Sesję Portretową</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Umów się na konsultację i stwórzmy razem wyjątkowe portrety, które pokochasz.
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
  title: 'Fotograf Portretowy Wrocław - Anna Migaj | Sesje Kobiece Wrocław',
  description: 'Fotograf portretowy Wrocław - Anna Migaj. Profesjonalne sesje portretowe, kobiece i biznesowe. Naturalne zdjęcia oddające Twoją osobowość. Umów sesję!',
  keywords: 'fotograf portretowy Wrocław, sesja portretowa Wrocław, sesja kobieca Wrocław, zdjęcia portretowe, Anna Migaj portrait, fotografia portretowa',
  robots: 'index, follow',
  ogTitle: 'Fotograf Portretowy Wrocław - Anna Migaj | Sesje Kobiece',
  ogDescription: 'Fotograf portretowy Wrocław - Anna Migaj. Profesjonalne sesje portretowe, kobiece i biznesowe. Naturalne zdjęcia oddające Twoją osobowość.',
  ogImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp',
  ogLocale: 'pl_PL',
  twitterCard: 'summary_large_image'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sesje Kobiece Wrocław",
        "description": "Naturalne i autentyczne sesje kobiece we Wrocławiu. Poczuj się piękna i pewna siebie przed obiektywem.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Niebieskie Aparaty - Anna Migaj",
          "image": "https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
        },
        "areaServed": {
          "@type": "City",
          "name": "Wrocław"
        },
        "offers": {
          "@type": "Offer",
          "description": "Sesja kobieca Wrocław",
          "priceCurrency": "PLN",
          "availability": "https://schema.org/InStock"
        }
      })
    }
  ]
})
</script>