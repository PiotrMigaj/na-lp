<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Sesja Rodzinna Wrocław — Fotograf Anna Migaj</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalna sesja rodzinna we Wrocławiu — naturalne, pełne emocji zdjęcia z dziećmi, noworodkami i całą rodziną. Działam w plenerze, studiu i w domu.
        </p>
        <NuxtLink to="/kontakt" class="inline-block mt-8 bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
          Zarezerwuj sesję
        </NuxtLink>
      </div>
    </section>

    <!-- About Family Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Fotograf Rodzinny Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Naturalne Zdjęcia Rodzinne Pełne Emocji</h3>
            <p class="mb-6 font-light leading-relaxed">
              Jako profesjonalny fotograf rodzinny we Wrocławiu uchwycam to, co najważniejsze — autentyczną miłość, śmiech, bliskość i chwile, które przemijają zbyt szybko. Sesja rodzinna to coś więcej niż zdjęcia: to opowieść o Waszej rodzinie.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Pracuję w sposób naturalny i swobodny — nie proszę o sztuczne pozowanie. Tworzę atmosferę zabawy i relaksu, dzięki której dzieci zachowują się spontanicznie, a rodzice mogą po prostu cieszyć się wspólnym czasem. Efekt? Prawdziwe, wzruszające fotografie, które chcesz oprawić w ramkę.
            </p>
            <p class="font-light leading-relaxed">
              Fotografuję sesje rodzinne we Wrocławiu i w całym województwie dolnośląskim — w plenerze, w parku, na łące, w centrum miasta lub w zaciszu Waszego domu. Cena ustalana indywidualnie — napisz, żeby poznać szczegóły.
            </p>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249188/sesja-rodzinna_khokg4.webp"
              alt="Sesja rodzinna Wrocław - naturalne zdjęcia rodzinne z dziećmi Anna Migaj"
              class="w-full h-[700px] object-cover"
              width="800"
              height="700"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Session Types -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Rodzaje Sesji Rodzinnych</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Dostosowuję każdą sesję do wieku dzieci, charakteru rodziny i Waszej wizji.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-medium mb-3">Sesja w plenerze</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">Parki, łąki, lasy i wrocławskie ogrody japońskie — piękne naturalne tło dla spontanicznych rodzinnych kadrów. Idealna o złotej godzinie.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Park Szczytnicki, Ogrody Botaniczne</li>
              <li>• Łąki i lasy podmiejskie</li>
              <li>• Centrum Wrocławia i Ostrów Tumski</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-medium mb-3">Sesja z noworodkiem</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">Delikatna fotografia noworodkowa w domu lub studio — w bezpiecznej, ciepłej atmosferze. Uchwycę pierwsze chwile z Waszym maleństwem.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Pierwsze 2–3 tygodnie życia dziecka</li>
              <li>• Domowa atmosfera lub studio</li>
              <li>• Portrety z rodzicami i rodzeństwem</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-medium mb-3">Sesja z dziećmi</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">Zabawy, śmiech, bieganie — naturalne chwile z dziećmi w każdym wieku. Dzieci nie muszą pozować, wystarczy że są sobą.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Niemowlaki, maluchy, przedszkolaki, uczniowie</li>
              <li>• Rodzeństwo i całe rodziny</li>
              <li>• Spontaniczne, reportażowe ujęcia</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-medium mb-3">Sesja Dzień Mamy / Dzień Dziecka</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">Wyjątkowy prezent — sesja zdjęciowa z okazji Dnia Mamy, Dnia Dziecka lub Dnia Babci i Dziadka. Piękna pamiątka na całe życie.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Prezent dla mamy, babci, całej rodziny</li>
              <li>• Sesja plenerowa lub w domu</li>
              <li>• Bon podarunkowy dostępny na zamówienie</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-medium mb-3">Sesja ciążowa</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">Subtelna, elegancka fotografia ciążowa — pełna kobiecości i delikatności. Uchwycę piękno tego wyjątkowego czasu.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Najlepiej między 30. a 34. tygodniem ciąży</li>
              <li>• Solo lub z partnerem / rodzią</li>
              <li>• Plener lub studio</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-medium mb-3">Sesja w domu</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">Najbardziej intymna i autentyczna forma sesji rodzinnej — w Waszej codziennej przestrzeni, pośród tego, co kochacie.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Idealna dla noworodków i niemowląt</li>
              <li>• Naturalne światło dzienne</li>
              <li>• Zdjęcia pełne domowego ciepła</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Dlaczego warto wybrać sesję rodzinną ze mną</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-medium mb-2">Naturalność zamiast pozowania</h3>
                <p class="font-light text-gray-600 leading-relaxed">Nie reżyseruję sztucznie kadrów. Staram się, by rodzina zapomniała o aparacie i po prostu była razem — a ja dyskretnie uchwytuje to, co prawdziwe.</p>
              </div>
              <div>
                <h3 class="font-medium mb-2">Cierpliwość wobec dzieci</h3>
                <p class="font-light text-gray-600 leading-relaxed">Wiem, że dzieci mają swoje tempo. Nie spieszę, nie stressuję — daję czas, żeby zaufały i poczuły się swobodnie. Efekty mówią same za siebie.</p>
              </div>
              <div>
                <h3 class="font-medium mb-2">Estetyka i minimalizm</h3>
                <p class="font-light text-gray-600 leading-relaxed">Moje zdjęcia cechuje minimalistyczny styl — czyste kompozycje, piękne naturalne światło i ponadczasowa kolorystyka. Fotografie, które będą piękne za 20 lat.</p>
              </div>
              <div>
                <h3 class="font-medium mb-2">Doświadczenie i pasja</h3>
                <p class="font-light text-gray-600 leading-relaxed">Jako fotograf z wykształceniem architektonicznym przykładam szczególną wagę do kompozycji i harmonii. Każda sesja rodzinna to dla mnie osobista historia do opowiedzenia.</p>
              </div>
            </div>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249190/sesja-portretowa_z1ibbr.webp"
              alt="Fotograf rodzinny Wrocław - Anna Migaj - naturalne sesje z dziećmi"
              class="w-full h-[700px] object-cover"
              width="800"
              height="700"
              format="webp"
            />
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
            Odpowiedzi na najczęściej zadawane pytania dotyczące sesji rodzinnych we Wrocławiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje sesja rodzinna we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Cena sesji rodzinnej we Wrocławiu jest ustalana indywidualnie i zależy od czasu trwania sesji, liczby osób, lokalizacji i zakresu realizacji. Zapraszam do kontaktu po szczegółową wycenę dopasowaną do Waszych potrzeb.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak długo trwa sesja rodzinna?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowa sesja rodzinna trwa 1–2 godziny. W przypadku małych dzieci i noworodków planujemy więcej czasu, aby nie stresować malucha. Czas sesji omawiamy przy rezerwacji.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Co zrobić, jeśli dziecko nie chce pozować lub płacze?</h3>
            <p class="text-gray-600 leading-relaxed">
              To całkowicie normalne! Mam duże doświadczenie w pracy z dziećmi — wiem, jak podejść do malucha, kiedy zrobić przerwę i jak sprawić, by sesja była przyjemna. Spokojne tempo i dobra atmosfera robią cuda. Nawet płaczące dziecko może dać piękne, szczere kadry.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy najlepiej zrobić sesję z noworodkiem?</h3>
            <p class="text-gray-600 leading-relaxed">
              Najpiękniejsze sesje noworodkowe wykonuje się między 5. a 21. dniem życia dziecka. Maluch jest wówczas spokojny, śpi dużo i pozwala na delikatne pozycjonowanie. Warto zarezerwować mnie jeszcze w czasie ciąży, by mieć pewność dostępności terminu.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Gdzie fotografujesz sesje rodzinne we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Fotografuję w plenerze (parki, łąki, lasy wokół Wrocławia), w centrum miasta oraz w domu klientów. Pomagam wybrać lokalizację dopasowaną do charakteru rodziny i pory roku. Działam też w całym województwie dolnośląskim.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjęcia z sesji?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowy czas realizacji to 2–3 tygodnie. Gotowe, starannie obrobione fotografie dostarczam w prywatnej galerii online w wysokiej rozdzielczości, gotowe do druku i udostępniania.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section class="py-16 bg-white border-t">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="font-cormorant text-3xl mb-8">Inne usługi fotograficzne</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/chrzciny-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Chrzciny Wrocław</NuxtLink>
          <NuxtLink to="/sesja-slubna-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Ślubna</NuxtLink>
          <NuxtLink to="/sesja-kobieca-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Kobieca</NuxtLink>
          <NuxtLink to="/fotograf-portretowy-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Fotografia Portretowa</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Stwórzmy razem piękne wspomnienia</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Porozmawiajmy o Waszej sesji rodzinnej — chętnie dopasuję ofertę do Waszych potrzeb i zaproponuję idealną lokalizację we Wrocławiu.
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
  title: 'Sesja Rodzinna Wrocław - Anna Migaj | Fotograf Rodzinny',
  description: 'Profesjonalna sesja rodzinna Wrocław. Anna Migaj - naturalny styl, dzieci, noworodki, sesje plenerowe i domowe. Naturalne zdjęcia pełne emocji. Sprawdź ofertę!',
  robots: 'index, follow',
  ogTitle: 'Sesja Rodzinna Wrocław - Anna Migaj | Fotograf Rodzinny',
  ogDescription: 'Profesjonalna sesja rodzinna Wrocław. Naturalne zdjęcia rodzinne z dziećmi i noworodkami. Anna Migaj - fotograf rodzinny we Wrocławiu.',
  ogImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249188/sesja-rodzinna_khokg4.webp',
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
        "name": "Sesja Rodzinna Wrocław",
        "description": "Profesjonalna sesja rodzinna we Wrocławiu. Naturalne zdjęcia z dziećmi, noworodkami i całą rodziną — plener, dom lub studio. Fotograf rodzinny Anna Migaj.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Niebieskie Aparaty - Anna Migaj",
          "url": "https://niebieskie-aparaty.pl",
          "image": "https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249189/anna-migaj-fotograf_rncd8m.webp"
        },
        "areaServed": [
          { "@type": "City", "name": "Wrocław" },
          { "@type": "AdministrativeArea", "name": "Województwo Dolnośląskie" }
        ],
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "description": "Wycena indywidualna",
            "priceCurrency": "PLN"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Rodzaje sesji rodzinnych",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sesja rodzinna w plenerze" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sesja z noworodkiem" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sesja z dziećmi Wrocław" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sesja ciążowa Wrocław" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sesja domowa" } }
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
            "name": "Ile kosztuje sesja rodzinna we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cena sesji rodzinnej we Wrocławiu jest ustalana indywidualnie i zależy od czasu trwania sesji, liczby osób, lokalizacji i zakresu realizacji. Zapraszam do kontaktu po szczegółową wycenę dopasowaną do Waszych potrzeb."
            }
          },
          {
            "@type": "Question",
            "name": "Jak długo trwa sesja rodzinna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowa sesja rodzinna trwa 1–2 godziny. W przypadku małych dzieci i noworodków planujemy więcej czasu, aby nie stresować malucha. Czas sesji omawiamy przy rezerwacji."
            }
          },
          {
            "@type": "Question",
            "name": "Co zrobić, jeśli dziecko nie chce pozować lub płacze?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To całkowicie normalne! Mam duże doświadczenie w pracy z dziećmi — wiem, jak podejść do malucha, kiedy zrobić przerwę i jak sprawić, by sesja była przyjemna. Spokojne tempo i dobra atmosfera robią cuda."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy najlepiej zrobić sesję z noworodkiem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najpiękniejsze sesje noworodkowe wykonuje się między 5. a 21. dniem życia dziecka. Maluch jest wówczas spokojny, śpi dużo i pozwala na delikatne pozycjonowanie. Warto zarezerwować mnie jeszcze w czasie ciąży."
            }
          },
          {
            "@type": "Question",
            "name": "Gdzie fotografujesz sesje rodzinne we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fotografuję w plenerze (parki, łąki, lasy wokół Wrocławia), w centrum miasta oraz w domu klientów. Pomagam wybrać lokalizację dopasowaną do charakteru rodziny i pory roku. Działam też w całym województwie dolnośląskim."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjęcia z sesji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowy czas realizacji to 2–3 tygodnie. Gotowe, starannie obrobione fotografie dostarczam w prywatnej galerii online w wysokiej rozdzielczości, gotowe do druku i udostępniania."
            }
          }
        ]
      })
    }
  ]
});
</script>
