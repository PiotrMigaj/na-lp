<template>
  <div>
    <!-- Breadcrumbs -->
    <!-- <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div> -->

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Sesja Ślubna Wrocław</h1>
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
            <h2 class="font-cormorant text-4xl mb-6">Fotografia Ślubna Wrocław</h2>
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Pakiety Ślubne</h2>
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Galeria Zdjęć Ślubnych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz przykłady moich prac z sesji ślubnych we Wrocławiu i okolicach.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(image, index) in weddingImages" :key="index" class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg
              :src="image.src"
              :alt="image.alt"
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Dlaczego Anna Migaj?</h2>
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

    <!-- FAQ Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Czesto Zadawane Pytania</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Odpowiedzi na najczesciej zadawane pytania dotyczace sesji slubnych we Wroclawiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje sesja slubna we Wroclawiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Ceny sesji slubnych we Wroclawiu zaczynaja sie od pakietu podstawowego obejmujacego 6 godzin fotografii.
              Dokladna wycena zalezy od wybranego pakietu, lokalizacji i dodatkowych uslug. Zapraszam do kontaktu
              po indywidualna oferte dostosowana do Waszych potrzeb.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak wczesnie nalezy zarezerwowac fotografa slubnego we Wroclawiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Rekomenduje rezerwacje terminu sesji slubnej we Wroclawiu z wyprzedzeniem 6-12 miesiecy, szczegolnie
              w sezonie slubnym (maj-wrzesien). Popularne daty rezerwowane sa nawet rok wczesniej. Im szybciej
              sie skontaktujesz, tym wieksza pewnosc dostepnosci terminu.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy wykonujesz sesje slubne poza Wroclawiem?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, realizuje sesje slubne nie tylko we Wroclawiu, ale rowniez w calym wojewodztwie dolnoslaskim
              i calej Polsce. Dojazd do 50 km od Wroclawia jest wliczony w cene. Przy wiekszych odleglosciach
              doliczam koszty dojazdu. Chetnie fotografuje rowniez sluby destination za granica.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymamy gotowe zdjecia slubne?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowy czas realizacji sesji slubnej wynosi 4-6 tygodni od dnia slubu. W tym czasie starannie
              selekcjonuje i obrabiam kazde zdjecie. Podglad kilku najlepszych zdjec wysylam juz w ciagu tygodnia.
              Gotowe zdjecia otrzymacie w prywatnej galerii online z mozliwoscia pobrania.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jaki styl fotografii slubnej reprezentujesz?</h3>
            <p class="text-gray-600 leading-relaxed">
              Moj styl fotografii slubnej to polaczenie reportazu z portretem. Stawiam na naturalnosc,
              spontaniczne emocje i autentyczne chwile. Unikam sztucznego pozowania - zamiast tego tworze
              warunki, w ktorych czujecie sie swobodnie. Zdjecia sa jasne, pelne ciepla i eleganckie.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy oferujesz sesje nareczenska przed slubem?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, sesja nareczenska we Wroclawiu jest wlaczona w pakiet Premium i VIP. To swietna okazja,
              zebysmy sie poznali przed slubem i zebyscie poczuli sie komfortowo przed obiektywem. Sesje
              nareczenska mozna rowniez zamowic osobno jako dodatek do pakietu podstawowego.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile zdjec slubnych otrzymamy po sesji?</h3>
            <p class="text-gray-600 leading-relaxed">
              Liczba zdjec zalezy od wybranego pakietu i dlugosci dnia slubnego. Pakiet podstawowy (6 godzin)
              to minimum 300 obrobionych zdjec, pakiet Premium (8 godzin) - 500+ zdjec, a pakiet VIP (10 godzin)
              - ponad 700 zdjec. Wszystkie zdjecia sa starannie wyselekcjonowane i obrobione.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Zarezerwuj Swoją Sesję Ślubną</h2>
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
const weddingImages = [
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-1_jyc43n.webp', alt: 'Sesja slubna Wroclaw - Weronika i Szymon - fotograf slubny Anna Migaj' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249875/slubne-2_rwyoia.webp', alt: 'Zdjecia slubne Wroclaw - para mloda Weronika i Szymon - naturalna fotografia slubna' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249875/slubne-3_jrkhrs.webp', alt: 'Fotografia slubna Wroclaw - romantyczne zdjecia Weroniki i Szymona - Anna Migaj' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249876/slubne-4_hxcrau.webp', alt: 'Profesjonalna sesja slubna Wroclaw - Weronika i Szymon - emocjonalne kadry' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249877/slubne-5_sd1cv8.webp', alt: 'Sesja slubna plener Wroclaw - Weronika i Szymon - fotograf Anna Migaj' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249877/slubne-11_epvqau.webp', alt: 'Sesja slubna Wroclaw - Ewelina i Kamil - naturalne zdjecia slubne Anna Migaj' },
];

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

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sesja Slubna Wroclaw",
        "description": "Profesjonalna fotografia slubna we Wroclawiu. Naturalne, pelne emocji zdjecia z Waszego wielkiego dnia.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Niebieskie Aparaty - Anna Migaj",
          "image": "https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249874/slubne-1_jyc43n.webp"
        },
        "areaServed": {
          "@type": "City",
          "name": "Wroclaw"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pakiety Slubne",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pakiet Podstawowy - 6 godzin"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pakiet Premium - 8 godzin"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pakiet VIP - 10 godzin"
              }
            }
          ]
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
            "name": "Ile kosztuje sesja slubna we Wroclawiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ceny sesji slubnych we Wroclawiu zaczynaja sie od pakietu podstawowego obejmujacego 6 godzin fotografii. Dokladna wycena zalezy od wybranego pakietu, lokalizacji i dodatkowych uslug."
            }
          },
          {
            "@type": "Question",
            "name": "Jak wczesnie nalezy zarezerwowac fotografa slubnego we Wroclawiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rekomenduje rezerwacje terminu sesji slubnej we Wroclawiu z wyprzedzeniem 6-12 miesiecy, szczegolnie w sezonie slubnym (maj-wrzesien). Popularne daty rezerwowane sa nawet rok wczesniej."
            }
          },
          {
            "@type": "Question",
            "name": "Czy wykonujesz sesje slubne poza Wroclawiem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, realizuje sesje slubne nie tylko we Wroclawiu, ale rowniez w calym wojewodztwie dolnoslaskim i calej Polsce. Dojazd do 50 km od Wroclawia jest wliczony w cene."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymamy gotowe zdjecia slubne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowy czas realizacji sesji slubnej wynosi 4-6 tygodni od dnia slubu. Podglad kilku najlepszych zdjec wysylam juz w ciagu tygodnia. Gotowe zdjecia otrzymacie w prywatnej galerii online."
            }
          },
          {
            "@type": "Question",
            "name": "Jaki styl fotografii slubnej reprezentujesz?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Moj styl fotografii slubnej to polaczenie reportazu z portretem. Stawiam na naturalnosc, spontaniczne emocje i autentyczne chwile. Zdjecia sa jasne, pelne ciepla i eleganckie."
            }
          },
          {
            "@type": "Question",
            "name": "Czy oferujesz sesje nareczenska przed slubem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, sesja nareczenska we Wroclawiu jest wlaczona w pakiet Premium i VIP. Sesje nareczenska mozna rowniez zamowic osobno jako dodatek do pakietu podstawowego."
            }
          },
          {
            "@type": "Question",
            "name": "Ile zdjec slubnych otrzymamy po sesji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Liczba zdjec zalezy od wybranego pakietu. Pakiet podstawowy to minimum 300 obrobionych zdjec, pakiet Premium - 500+ zdjec, a pakiet VIP - ponad 700 zdjec."
            }
          }
        ]
      })
    }
  ]
});
</script>