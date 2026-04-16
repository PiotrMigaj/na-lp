<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Fotograf Portretowy Wrocław</h1>
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
            <h2 class="font-cormorant text-4xl mb-6">Sesje Portretowe Wrocław</h2>
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Rodzaje Sesji Portretowych</h2>
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Portfolio Portretów</h2>
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Jak Przebiega Sesja</h2>
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

    <!-- FAQ Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Często Zadawane Pytania</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Odpowiedzi na najczęściej zadawane pytania dotyczące sesji portretowych i kobiecych we Wrocławiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje sesja portretowa we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Ceny sesji portretowych we Wrocławiu zaczynają się od 500 zł za podstawową sesję (1 godzina, 10 zdjęć).
              Sesje kobiece i stylizowane to koszt od 700 zł. Dokładna wycena zależy od długości sesji,
              liczby stylizacji i lokalizacji. Zapraszam do kontaktu po indywidualną ofertę.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak przygotować się do sesji kobiecej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Przed sesją kobiecą we Wrocławiu rekomenduje dobre wyspanie się i nawodnienie. Przygotuj 2–3
              zestawy ubrań w różnych stylach. Oferuję bezpłatną konsultację przed sesją, podczas której
              omówimy stylizację, makijaż i oczekiwania. Warto też przygotować inspiracje ze zdjęć.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Gdzie odbywają się sesje portretowe we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Sesje portretowe realizuję w profesjonalnym studio we Wrocławiu, w plenerze (parki, stare miasto,
              nad Odrą) lub w wybranej przez Ciebie lokalizacji. Każde miejsce nadaje zdjęciom inny charakter —
              studio sprawdza się do eleganckich portretów, plener do naturalnych, swobodnych sesji.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy pomagasz w pozowaniu podczas sesji?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, przez całą sesję portretową prowadzę Cię przez pozowanie krok po kroku. Wiem, że wiele osób
              czuje się niepewnie przed obiektywem — to normalne! Moją rolą jest stworzyć luźną atmosferę
              i podpowiadać naturalne pozy, dzięki którym będziesz wyglądać i czuć się świetnie.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy potrzebuję profesjonalnego makijażu na sesję?</h3>
            <p class="text-gray-600 leading-relaxed">
              Profesjonalny makijaż nie jest wymagany, ale może znacząco podnieść efekt końcowy zdjęć.
              Współpracuję z utalentowanymi wizażystkami we Wrocławiu, które mogę polecić. Mogą wykonać
              delikatny makijaż naturalny lub bardziej wyrazisty look — w zależności od charakteru sesji.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak długo trwa sesja portretowa?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowa sesja portretowa we Wrocławiu trwa 1–2 godziny. Sesje kobiece z kilkoma stylizacjami
              mogą trwać 2–3 godziny. Czas sesji dostosowuję do Twoich potrzeb — ważne, żebyś nie czuła
              się pospieszana i mogła w pełni cieszyć się doświadczeniem.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjęcia z sesji portretowej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Gotowe zdjęcia z sesji portretowej otrzymasz w ciągu 7–14 dni od sesji. Każde zdjęcie jest
              starannie obrobione z zachowaniem naturalnego wyglądu. Zdjęcia dostarczam w prywatnej galerii
              online z możliwością pobrania w wysokiej rozdzielczości.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section class="py-16 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="font-cormorant text-3xl mb-4">Inne usługi fotograficzne</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/sesja-kobieca-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Sesja Kobieca</NuxtLink>
          <NuxtLink to="/sesja-slubna-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Sesja Ślubna</NuxtLink>
          <NuxtLink to="/sesja-biznesowa-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Sesja Biznesowa</NuxtLink>
          <NuxtLink to="/chrzciny-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Chrzciny</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Zarezerwuj Swoją Sesję Portretową</h2>
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
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ile kosztuje sesja portretowa we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ceny sesji portretowych we Wrocławiu zaczynają się od 500 zł za podstawową sesję (1 godzina, 10 zdjęć). Sesje kobiece i stylizowane to koszt od 700 zł. Dokładna wycena zależy od długości sesji i lokalizacji."
            }
          },
          {
            "@type": "Question",
            "name": "Jak przygotować się do sesji kobiecej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rekomenduje dobre wyspanie się i nawodnienie. Przygotuj 2–3 zestawy ubrań. Oferuję bezpłatną konsultację przed sesją, podczas której omówimy stylizację, makijaż i oczekiwania."
            }
          },
          {
            "@type": "Question",
            "name": "Gdzie odbywają się sesje portretowe we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sesje portretowe realizuję w profesjonalnym studio we Wrocławiu, w plenerze (parki, stare miasto, nad Odrą) lub w wybranej przez Ciebie lokalizacji."
            }
          },
          {
            "@type": "Question",
            "name": "Czy pomagasz w pozowaniu podczas sesji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, przez całą sesję prowadzę Cię przez pozowanie krok po kroku. Tworzę luźną atmosferę i podpowiadam naturalne pozy, dzięki którym będziesz wyglądać i czuć się świetnie."
            }
          },
          {
            "@type": "Question",
            "name": "Czy potrzebuję profesjonalnego makijażu na sesję?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Profesjonalny makijaż nie jest wymagany, ale może podnieść efekt zdjęć. Współpracuję z wizażystkami we Wrocławiu, które mogę polecić do makijażu naturalnego lub wyrazistego."
            }
          },
          {
            "@type": "Question",
            "name": "Jak długo trwa sesja portretowa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowa sesja portretowa trwa 1–2 godziny. Sesje kobiece z kilkoma stylizacjami mogą trwać 2–3 godziny. Czas dostosowuję do Twoich potrzeb."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjęcia z sesji portretowej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gotowe zdjęcia otrzymasz w ciągu 7–14 dni. Każde zdjęcie jest starannie obrobione. Zdjęcia dostarczam w prywatnej galerii online z możliwością pobrania."
            }
          }
        ]
      })
    }
  ]
})
</script>