<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Sesja Kobieca Wrocław</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalne sesje kobiece we Wrocławiu. Anna Migaj tworzy naturalne, zmysłowe portrety podkreślające Twoją kobiecość i unikalny charakter.
        </p>
      </div>
    </section>

    <!-- About Women Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Sesje Kobiece Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Naturalna Fotografia Kobieca</h3>
            <p class="mb-6 font-light leading-relaxed">
              Sesja kobieca to wyjątkowe doświadczenie, które pozwala Ci odkryć swoje piękno na nowo. Jako profesjonalny fotograf Wrocław specjalizujący się w sesjach kobiecych, tworzę bezpieczną przestrzeń, w której możesz być sobą.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Każda kobieta jest piękna na swój sposób. Moim celem jest uchwycić Twoją naturalność, pewność siebie i to, co czyni Cię wyjątkową. Bez sztucznego pozowania — tylko autentyczne emocje i prawdziwe Ty.
            </p>
            <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Umów sesję kobiecą
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
              alt="Sesja kobieca Wrocław - naturalne zdjęcia kobiety Anna Migaj fotograf"
              class="w-full h-[600px] object-cover rounded-lg"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Types of Women Sessions -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Rodzaje Sesji Kobiecych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferuję różne typy sesji kobiecych dostosowane do Twoich potrzeb i stylu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesja Budująca Pewność Siebie</h3>
            <p class="text-gray-600 mb-6">Sesja dla kobiet, które chcą poczuć się piękne i docenić siebie</p>
            <ul class="text-left space-y-2 text-sm">
              <li>&#8226; Bezpieczna, komfortowa atmosfera</li>
              <li>&#8226; Pomoc w doborze stylizacji</li>
              <li>&#8226; Naturalne, pełne emocji zdjęcia</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesja Zmysłowa / Boudoir</h3>
            <p class="text-gray-600 mb-6">Eleganckie, subtelne zdjęcia podkreślające Twoją kobiecość</p>
            <ul class="text-left space-y-2 text-sm">
              <li>&#8226; Delikatne, artystyczne kadry</li>
              <li>&#8226; Pełna dyskrecja</li>
              <li>&#8226; Sesja w studio lub u Ciebie</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesja Artystyczna / Edytorialna</h3>
            <p class="text-gray-600 mb-6">Kreatywne sesje inspirowane modą i sztuką</p>
            <ul class="text-left space-y-2 text-sm">
              <li>&#8226; Unikalne lokalizacje</li>
              <li>&#8226; Współpraca ze stylistami</li>
              <li>&#8226; Profesjonalna postprodukcja</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Women Gallery -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Portfolio Sesji Kobiecych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz przykłady moich sesji kobiecych — naturalne, autentyczne piękno.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
              alt="Sesja kobieca Wrocław - portret kobiety Anna Migaj 1"
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
              alt="Sesja kobieca Wrocław - naturalne zdjęcia Anna Migaj 2"
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
              alt="Sesja kobieca Wrocław - portret naturalny Anna Migaj 3"
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
              alt="Sesja kobieca Wrocław - fotografia kobieca Anna Migaj 4"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250441/kobiece-6_ecmdym.webp"
              alt="Sesja kobieca Wrocław - naturalne portrety Anna Migaj 5"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="400"
              height="533"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250638/fashion-2_t9wm6f.webp"
              alt="Sesja kobieca artystyczna Wrocław - fotografia modowa Anna Migaj 6"
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Jak Przebiega Sesja Kobieca</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 class="text-xl font-medium mb-4">Konsultacja</h3>
            <p class="text-gray-600">Poznajemy się i omawiamy Twoje oczekiwania, styl i charakter sesji</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="text-xl font-medium mb-4">Przygotowania</h3>
            <p class="text-gray-600">Pomagam w doborze stylizacji, makijażu i lokalizacji</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="text-xl font-medium mb-4">Sesja</h3>
            <p class="text-gray-600">Swobodna sesja w komfortowej atmosferze — prowadzę Cię przez pozowanie</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 class="text-xl font-medium mb-4">Odbiór</h3>
            <p class="text-gray-600">Otrzymujesz pięknie obrobione zdjęcia w prywatnej galerii online</p>
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
            Odpowiedzi na najczęściej zadawane pytania dotyczące sesji kobiecych we Wrocławiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje sesja kobieca we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Ceny sesji kobiecych we Wrocławiu zaczynają się od 700 zł za podstawową sesję (1–1,5 godziny, 15 zdjęć).
              Sesje z profesjonalnym makijażem i stylizacją to koszt od 1200 zł. Dokładna wycena zależy od długości sesji,
              liczby stylizacji i lokalizacji. Zapraszam do kontaktu po indywidualną ofertę.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak przygotować się do sesji kobiecej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Przed sesją kobiecą rekomenduje dobre wyspanie się i nawodnienie — to widać na zdjęciach! Przygotuj 2–3
              zestawy ubrań w różnych stylach. Przed sesją oferuję bezpłatną konsultację, podczas której omówimy
              stylizację, makijaż i oczekiwania. Warto też zebrać inspiracje ze zdjęć, które Ci się podobają.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy potrzebuję profesjonalnego makijażu na sesję?</h3>
            <p class="text-gray-600 leading-relaxed">
              Profesjonalny makijaż nie jest wymagany, ale może znacząco podnieść efekt końcowy zdjęć. Współpracuję
              z utalentowanymi wizażystkami we Wrocławiu, które mogę polecić. Mogą wykonać delikatny makijaż naturalny
              lub bardziej wyrazisty look — w zależności od charakteru sesji i Twoich preferencji.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak długo trwa sesja kobieca?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowa sesja kobieca we Wrocławiu trwa 1–2 godziny. Sesje z kilkoma stylizacjami lub w różnych
              lokalizacjach mogą trwać 2–3 godziny. Czas sesji dostosowuję do Twoich potrzeb — ważne, żebyś nie
              czuła się pospieszana i mogła w pełni cieszyć się doświadczeniem.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy mogę zabrać kogoś na sesję?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, jeśli czujesz się pewniej z osobą towarzyszącą — możesz zabrać przyjaciółkę lub partnera.
              Jednak wiele kobiet odkrywa, że sesja sam na sam z fotografką pozwala im bardziej się otworzyć
              i być sobą. To Twój wybór — zrobimy tak, jak będzie Ci najwygodniej.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjęcia z sesji kobiecej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Gotowe zdjęcia z sesji kobiecej otrzymasz w ciągu 7–14 dni od sesji. Każde zdjęcie jest starannie
              obrobione z zachowaniem naturalnego wyglądu — nie retuszeruję nadmiernie, ale dbam o piękne światło
              i kolory. Zdjęcia dostarczam w prywatnej galerii online z możliwością pobrania.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy zdjęcia mogą być prywatne?</h3>
            <p class="text-gray-600 leading-relaxed">
              Absolutnie tak! Pełna dyskrecja jest gwarantowana. Zdjęcia z sesji kobiecej są tylko Twoje — nie
              publikuję ich nigdzie bez Twojej wyraźnej zgody. Jeśli zechcesz, możesz pozwolić mi umieścić
              wybrane kadry w portfolio, ale to zawsze Twoja decyzja.
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
          <NuxtLink to="/sesja-slubna-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Sesja Ślubna</NuxtLink>
          <NuxtLink to="/sesja-biznesowa-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Sesja Biznesowa</NuxtLink>
          <NuxtLink to="/chrzciny-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Chrzciny</NuxtLink>
          <NuxtLink to="/fotograf-portretowy-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Fotografia Portretowa</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Zarezerwuj Swoją Sesję Kobiecą</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Umów się na bezpłatną konsultację i odkryj swoje piękno na nowo. Stworzę dla Ciebie zdjęcia, które pokochasz.
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
  title: 'Sesja Kobieca Wrocław - Anna Migaj | Naturalne Portrety Kobiet',
  description: 'Profesjonalne sesje kobiece we Wrocławiu. Anna Migaj - fotograf specjalizujący się w naturalnej fotografii kobiecej. Sesje budujące pewność siebie, boudoir, artystyczne. Umów sesję!',
  robots: 'index, follow',
  ogTitle: 'Sesja Kobieca Wrocław - Anna Migaj | Naturalne Portrety Kobiet',
  ogDescription: 'Profesjonalne sesje kobiece we Wrocławiu. Anna Migaj - fotograf specjalizujący się w naturalnej fotografii kobiecej. Umów sesję!',
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
        "name": "Sesja Kobieca Wrocław",
        "description": "Profesjonalne sesje kobiece we Wrocławiu. Naturalne, zmysłowe portrety podkreślające Twoją kobiecość i unikalny charakter.",
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
          "price": "700",
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
            "name": "Ile kosztuje sesja kobieca we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ceny sesji kobiecych we Wrocławiu zaczynają się od 700 zł za podstawową sesję (1–1,5 godziny, 15 zdjęć). Sesje z profesjonalnym makijażem i stylizacją to koszt od 1200 zł."
            }
          },
          {
            "@type": "Question",
            "name": "Jak przygotować się do sesji kobiecej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rekomenduje dobre wyspanie się i nawodnienie. Przygotuj 2–3 zestawy ubrań w różnych stylach. Oferuję bezpłatną konsultację przed sesją, podczas której omówimy stylizację i oczekiwania."
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
            "name": "Jak długo trwa sesja kobieca?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowa sesja kobieca trwa 1–2 godziny. Sesje z kilkoma stylizacjami mogą trwać 2–3 godziny. Czas dostosowuję do Twoich potrzeb."
            }
          },
          {
            "@type": "Question",
            "name": "Czy mogę zabrać kogoś na sesję?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, możesz zabrać przyjaciółkę lub partnera jeśli czujesz się pewniej. Wiele kobiet odkrywa jednak, że sesja sam na sam pozwala im bardziej się otworzyć."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjęcia z sesji kobiecej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gotowe zdjęcia otrzymasz w ciągu 7–14 dni. Każde zdjęcie jest starannie obrobione. Zdjęcia dostarczam w prywatnej galerii online z możliwością pobrania."
            }
          },
          {
            "@type": "Question",
            "name": "Czy zdjęcia mogą być prywatne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutnie tak! Pełna dyskrecja jest gwarantowana. Zdjęcia z sesji kobiecej są tylko Twoje — nie publikuję ich nigdzie bez Twojej wyraźnej zgody."
            }
          }
        ]
      })
    }
  ]
});
</script>
