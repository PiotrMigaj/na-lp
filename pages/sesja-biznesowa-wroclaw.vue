<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Sesja Biznesowa Wrocław</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalne zdjęcia biznesowe i korporacyjne we Wrocławiu. Anna Migaj tworzy autentyczne portrety biznesowe, które budują Twój wizerunek profesjonalny.
        </p>
      </div>
    </section>

    <!-- About Business Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Sesje Biznesowe Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Profesjonalne Zdjęcia do Biznesu</h3>
            <p class="mb-6 font-light leading-relaxed">
              Specjalizuję się w sesjach biznesowych we Wrocławiu, tworząc profesjonalne zdjęcia, które budują Twój wizerunek w branży. Moje zdjęcia biznesowe łączą profesjonalizm z naturalnością.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Pracuję z przedsiębiorcami, korporacjami i freelancerami, tworząc zdjęcia do LinkedIn, stron internetowych, materiałów marketingowych i kampanii reklamowych.
            </p>
            <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Umów sesję biznesową
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250522/biznesowe-1_fknqui.webp"
              alt="Sesja biznesowa Wrocław - profesjonalne zdjęcia korporacyjne Anna Migaj"
              class="w-full h-[600px] object-cover rounded-lg"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Business Services -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Rodzaje Sesji Biznesowych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferuję kompleksowe usługi fotografii biznesowej dostosowane do potrzeb Twojej firmy.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Portrety LinkedIn</h3>
            <p class="text-gray-600 mb-6">Profesjonalne zdjęcia do profili społecznościowych i CV</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Wysokiej jakości portrety</li>
              <li>• Szybka realizacja</li>
              <li>• Różne wersje zdjęć</li>
              <li>• Pomoc w doborze stylizacji</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesje Korporacyjne</h3>
            <p class="text-gray-600 mb-6">Zdjęcia zespołu, zarządu i pracowników firmy</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Zdjęcia zespołowe</li>
              <li>• Portrety zarządu</li>
              <li>• Sesje w biurze</li>
              <li>• Reportaż firmowy</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Personal Branding</h3>
            <p class="text-gray-600 mb-6">Sesje dla ekspertów i osobistych marek</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Zdjęcia do materiałów marketingowych</li>
              <li>• Sesje lifestyle</li>
              <li>• Content do social media</li>
              <li>• Konsultacja wizerunkowa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Gallery -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Portfolio Biznesowe</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz przykłady moich realizacji dla klientów biznesowych we Wrocławiu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250522/biznesowe-1_fknqui.webp"
              alt="Sesja biznesowa Wrocław - profesjonalne zdjęcia korporacyjne Anna Migaj 1"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250523/biznesowe-2_cu0imq.webp"
              alt="Sesja biznesowa Wrocław - profesjonalne zdjęcia korporacyjne Anna Migaj 2"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250525/biznesowe-3_mqxyks.webp"
              alt="Sesja biznesowa Wrocław - profesjonalne zdjęcia korporacyjne Anna Migaj 3"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250527/biznesowe-5_uae4ts.webp"
              alt="Sesja biznesowa męska Wrocław - profesjonalne zdjęcia Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250530/biznesowe-7_jsng2y.webp"
              alt="Sesja korporacyjna Wrocław - zdjęcia biznesowe Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250534/biznesowe-10_xunggg.webp"
              alt="Sesja biznesowa kobieca Wrocław - profesjonalne zdjęcia Anna Migaj"
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

    <!-- Pricing -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Cennik Sesji Biznesowych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Przejrzyste ceny dostosowane do potrzeb Twojego biznesu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-medium mb-4 text-center">Portret LinkedIn</h3>
            <div class="text-center mb-6">
              <span class="text-3xl font-bold text-secondary">450 zł</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li>• 30 minut sesji</li>
              <li>• 5 obrobionych zdjęć</li>
              <li>• Wersje poziome i pionowe</li>
              <li>• Szybka realizacja (2 dni)</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-secondary">
            <div class="text-center mb-4">
              <span class="bg-secondary text-white px-4 py-2 text-sm uppercase tracking-wider rounded-full">
                Najpopularniejszy
              </span>
            </div>
            <h3 class="text-2xl font-medium mb-4 text-center">Sesja Biznesowa</h3>
            <div class="text-center mb-6">
              <span class="text-3xl font-bold text-secondary">850 zł</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li>• 1 godzina sesji</li>
              <li>• 15 obrobionych zdjęć</li>
              <li>• Różne stylizacje</li>
              <li>• Konsultacja przed sesją</li>
              <li>• Galeria online</li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-medium mb-4 text-center">Pakiet Korporacyjny</h3>
            <div class="text-center mb-6">
              <span class="text-3xl font-bold text-secondary">od 1500 zł</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li>• Sesja zespołowa</li>
              <li>• Indywidualne portrety</li>
              <li>• Reportaż z życia firmy</li>
              <li>• Wszystkie prawa do zdjęć</li>
              <li>• Wycena indywidualna</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Business Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Dlaczego Warto Zainwestować</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Profesjonalny Wizerunek</h3>
            <p class="text-gray-600">Buduj zaufanie klientów dzięki profesjonalnym zdjęciom</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Zwiększ Sprzedaż</h3>
            <p class="text-gray-600">Dobre zdjęcia zwiększają konwersję w mediach społecznościowych</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Wyróżnij Się</h3>
            <p class="text-gray-600">Wyróżnij się na tle konkurencji unikalnymi zdjęciami</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Oszczędź Czas</h3>
            <p class="text-gray-600">Profesjonalne zdjęcia na lata - jedna inwestycja</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Zbuduj Profesjonalny Wizerunek</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Skontaktuj się ze mną, aby omówić Twoje potrzeby biznesowe i zarezerwować sesję.
        </p>
        <NuxtLink to="/kontakt" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Umów konsultację
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Sesja Biznesowa Wrocław - Anna Migaj | Zdjęcia Korporacyjne',
  description: 'Profesjonalne sesje biznesowe Wrocław. Anna Migaj - fotograf korporacyjny. Zdjęcia do LinkedIn, CV, stron internetowych. Buduj profesjonalny wizerunek!',
  keywords: 'sesja biznesowa Wrocław, fotograf biznesowy Wrocław, zdjęcia korporacyjne, LinkedIn zdjęcia, fotografia biznesowa, Anna Migaj business',
  robots: 'index, follow',
  ogTitle: 'Sesja Biznesowa Wrocław - Anna Migaj | Zdjęcia Korporacyjne',
  ogDescription: 'Profesjonalne sesje biznesowe Wrocław. Anna Migaj - fotograf korporacyjny. Zdjęcia do LinkedIn, CV, stron internetowych.',
  ogImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250522/biznesowe-1_fknqui.webp',
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
        "name": "Sesje Biznesowe Wrocław",
        "description": "Profesjonalne sesje biznesowe i korporacyjne we Wrocławiu. Zdjęcia do LinkedIn, CV i stron www.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Niebieskie Aparaty - Anna Migaj",
          "image": "https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250522/biznesowe-1_fknqui.webp"
        },
        "areaServed": {
          "@type": "City",
          "name": "Wrocław"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sesje Biznesowe",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Portret LinkedIn"
              },
              "price": "450",
              "priceCurrency": "PLN"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sesja Biznesowa Standard"
              },
              "price": "850",
              "priceCurrency": "PLN"
            }
          ]
        }
      })
    }
  ]
})
</script>