<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Fotograf na Chrzciny Wrocław — Anna Migaj</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalna fotografia chrzcin we Wrocławiu. Naturalny, reportażowy styl — uchwycę ceremonię kościelną, radość rodziny i pierwsze chwile Twojego dziecka.
        </p>
        <NuxtLink to="/kontakt" class="inline-block mt-8 bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
          Zapytaj o wycenę
        </NuxtLink>
      </div>
    </section>

    <!-- About Baptism Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Fotografia Chrzcin Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Reportażowy Styl — Naturalne Zdjęcia z Chrztu</h3>
            <p class="mb-6 font-light leading-relaxed">
              Jako profesjonalny fotograf chrzcin we Wrocławiu towarzyszę rodzinom w jednym z najważniejszych dni — dniu chrztu dziecka. Fotografuję w sposób dyskretny i naturalny, starając się uchwycić autentyczne emocje: wzruszenie rodziców, dumę dziadków, radość całej rodziny.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Mój styl to fotografia reportażowa — nie inscenizowana, ale prawdziwa. Pracuję tak, by nie zakłócać przebiegu ceremonii, a jednocześnie nie przegapić żadnego ważnego momentu: nałożenia wody chrzcielnej, pierwszego spojrzenia dziecka, łez szczęścia bliskich.
            </p>
            <p class="font-light leading-relaxed">
              Działam we Wrocławiu i w całym województwie dolnośląskim. Fotografuję zarówno ceremonie kościelne, jak i kameralne uroczystości rodzinne. Każda sesja chrzcielna jest wyceniana indywidualnie — skontaktuj się, aby omówić szczegóły.
            </p>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249188/sesja-rodzinna_khokg4.webp"
              alt="Fotografia chrzcin Wrocław - naturalne zdjęcia z ceremonii chrzcielnej Anna Migaj"
              class="w-full h-[700px] object-cover"
              width="800"
              height="700"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- What's Included -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Co obejmuje fotografia chrzcin</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa dokumentacja fotograficzna Twojego wyjątkowego dnia — od przygotowań po przyjęcie.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:church" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Ceremonia kościelna</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Dyskretna fotografia podczas całej ceremonii w kościele — nałożenie wody chrzcielnej, błogosławieństwo, modlitwa rodziny.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:account-group" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Portrety rodzinne</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Naturalne, grupowe zdjęcia rodzinne — z dziadkami, rodzicami chrzestnymi i całą rodziną. Bez sztucznego pozowania, ze swobodną atmosferą.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:baby-face-outline" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Portrety dziecka</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Piękne, delikatne portrety chrzczonego dziecka — w ramionach rodziców, w sukience chrzcielnej, w otoczeniu bliskich.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:food" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Przyjęcie i tort</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Reportaż z przyjęcia — radosna atmosfera, toast, krojenie tortu, spontaniczne chwile i wzruszające rozmowy bliskich.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:image-edit" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Profesjonalna obróbka</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Staranna postprodukcja każdego zdjęcia — kolorystyka, retusz, klimat dostosowany do charakteru dnia.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:cloud-download" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Galeria online</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Gotowe zdjęcia dostarczone poprzez prywatną galerię online w wysokiej rozdzielczości, gotowe do druku i udostępniania.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249189/anna-migaj-fotograf_rncd8m.webp"
              alt="Anna Migaj - fotograf chrzcin Wrocław - naturalna fotografia chrzcielna"
              class="w-full h-[600px] object-cover"
              width="800"
              height="600"
              format="webp"
            />
          </div>
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Jak przebiega współpraca</h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-secondary text-primary flex items-center justify-center rounded-full text-sm font-medium flex-shrink-0 mt-1">1</div>
                <div>
                  <h3 class="font-medium mb-1">Kontakt i wycena</h3>
                  <p class="font-light text-gray-600 text-sm leading-relaxed">Napisz do mnie z datą chrztu, lokalizacją kościoła i restauracji. Przygotuję indywidualną wycenę dopasowaną do Twoich potrzeb.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-secondary text-primary flex items-center justify-center rounded-full text-sm font-medium flex-shrink-0 mt-1">2</div>
                <div>
                  <h3 class="font-medium mb-1">Rezerwacja terminu</h3>
                  <p class="font-light text-gray-600 text-sm leading-relaxed">Po ustaleniu szczegółów i podpisaniu umowy termin zostaje zarezerwowany. Polecam kontaktować się 1–3 miesiące przed chrzcicami.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-secondary text-primary flex items-center justify-center rounded-full text-sm font-medium flex-shrink-0 mt-1">3</div>
                <div>
                  <h3 class="font-medium mb-1">Dzień chrztu</h3>
                  <p class="font-light text-gray-600 text-sm leading-relaxed">Przychodzę punktualnie, dyskretnie dokumentuję cały dzień — od ceremonii po przyjęcie. Twoja rodzina cieszy się chwilą, a ja dbam o zdjęcia.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-secondary text-primary flex items-center justify-center rounded-full text-sm font-medium flex-shrink-0 mt-1">4</div>
                <div>
                  <h3 class="font-medium mb-1">Gotowa galeria</h3>
                  <p class="font-light text-gray-600 text-sm leading-relaxed">Około 2–4 tygodnie po uroczystości otrzymasz galerię z gotowymi, obrobionymi zdjęciami w wysokiej rozdzielczości.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing CTA -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-cormorant text-4xl mb-6">Wycena indywidualna</h2>
        <p class="font-light text-lg mb-8 leading-relaxed">
          Cena fotografii chrzcin zależy od czasu trwania uroczystości, liczby lokalizacji (kościół + restauracja) i zakresu realizacji. Każde zamówienie wyceniam indywidualnie.
        </p>
        <p class="font-light mb-10 leading-relaxed text-gray-600">
          Napisz do mnie z datą i miejscem chrztu — odpiszę z propozycją ceny i szczegółami współpracy.
        </p>
        <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
          Skontaktuj się po wycenę
        </NuxtLink>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Często Zadawane Pytania</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Odpowiedzi na najczęściej zadawane pytania dotyczące fotografii chrzcin we Wrocławiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje fotografia chrzcin we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Cena fotografii chrzcin we Wrocławiu jest ustalana indywidualnie i zależy od zakresu realizacji — czasu trwania uroczystości, liczby lokalizacji (kościół, restauracja lub dom) oraz liczby gotowych zdjęć. Zapraszam do kontaktu po indywidualną wycenę dopasowaną do Twoich potrzeb.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak wcześnie należy zarezerwować fotografa na chrzciny?</h3>
            <p class="text-gray-600 leading-relaxed">
              Polecam kontakt 1–3 miesiące przed planowaną datą chrztu, szczególnie w sezonie wiosenno-letnim, gdy terminy się szybko zapełniają. W przypadku nagłej rezerwacji warto sprawdzić dostępność jak najwcześniej.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy fotografujesz zarówno ceremonię w kościele, jak i przyjęcie?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, standardowo fotografuję całą uroczystość — ceremonię kościelną i przyjęcie rodzinne. Możliwa jest również realizacja tylko ceremonii lub tylko przyjęcia, jeśli taki jest Twój plan. Omawiamy szczegóły przed rezerwacją.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile zdjęć otrzymam po sesji chrzcielnej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Liczba gotowych zdjęć zależy od czasu trwania uroczystości i zakresu realizacji. Przy pełnej dokumentacji (ceremonia + przyjęcie) przygotowuję zazwyczaj 150–300 starannie wybranych i obrobionych fotografii. Dokładną liczbę omawiamy przy ustalaniu oferty.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjęcia z chrztu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowy czas realizacji wynosi 2–4 tygodnie od uroczystości. W tym czasie każde zdjęcie przechodzi profesjonalną obróbkę — retusz, korekta kolorów, klimat. Gotowe fotografie dostarczam poprzez prywatną galerię online w wysokiej rozdzielczości.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy fotografujesz chrzciny poza Wrocławiem?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, fotografuję chrzciny w całym województwie dolnośląskim — w Oleśnicy, Oławie, Trzebnicy, Brzegu, Legnicy i okolicach. Dojazd do 50 km od Wrocławia jest wliczony w cenę. Za dalsze odległości doliczam koszt dojazdu.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy możliwe jest nagranie wideo z chrztu razem ze zdjęciami?</h3>
            <p class="text-gray-600 leading-relaxed">
              Specjalizuję się w fotografii. Jeśli zależy Ci na profesjonalnym filmie z chrztu, chętnie polecę sprawdzonego operatora wideo, z którym współpracuję. Razem możemy zadbać o kompletną dokumentację Twojego wyjątkowego dnia.
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
          <NuxtLink to="/sesja-rodzinna-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Rodzinna</NuxtLink>
          <NuxtLink to="/sesja-slubna-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Ślubna</NuxtLink>
          <NuxtLink to="/sesja-kobieca-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Kobieca</NuxtLink>
          <NuxtLink to="/sesja-biznesowa-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Biznesowa</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Uchwycę najpiękniejsze chwile chrztu Twojego dziecka</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Porozmawiajmy o Twoim wyjątkowym dniu — chętnie przygotuję indywidualną ofertę fotografii chrzcin we Wrocławiu.
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
  title: 'Fotograf na Chrzciny Wrocław - Anna Migaj | Reportaż z Chrztu',
  description: 'Profesjonalny fotograf chrzcin we Wrocławiu. Anna Migaj - naturalny, reportażowy styl. Uchwycę ceremonię, radość rodziny i pierwsze chwile dziecka. Zapytaj o wycenę!',
  robots: 'index, follow',
  ogTitle: 'Fotograf na Chrzciny Wrocław - Anna Migaj | Reportaż z Chrztu',
  ogDescription: 'Profesjonalny fotograf chrzcin we Wrocławiu. Anna Migaj - naturalny, reportażowy styl. Uchwycę ceremonię, radość rodziny i pierwsze chwile dziecka.',
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
        "name": "Fotografia Chrzcin Wrocław",
        "description": "Profesjonalna fotografia chrzcin we Wrocławiu. Naturalny, reportażowy styl — ceremonia kościelna, portrety rodzinne, przyjęcie. Wycena indywidualna.",
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
            "name": "Ile kosztuje fotografia chrzcin we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cena fotografii chrzcin we Wrocławiu jest ustalana indywidualnie i zależy od zakresu realizacji — czasu trwania uroczystości, liczby lokalizacji (kościół, restauracja lub dom) oraz liczby gotowych zdjęć. Zapraszam do kontaktu po indywidualną wycenę dopasowaną do Twoich potrzeb."
            }
          },
          {
            "@type": "Question",
            "name": "Jak wcześnie należy zarezerwować fotografa na chrzciny?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Polecam kontakt 1–3 miesiące przed planowaną datą chrztu, szczególnie w sezonie wiosenno-letnim, gdy terminy się szybko zapełniają. W przypadku nagłej rezerwacji warto sprawdzić dostępność jak najwcześniej."
            }
          },
          {
            "@type": "Question",
            "name": "Czy fotografujesz zarówno ceremonię w kościele, jak i przyjęcie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, standardowo fotografuję całą uroczystość — ceremonię kościelną i przyjęcie rodzinne. Możliwa jest również realizacja tylko ceremonii lub tylko przyjęcia, jeśli taki jest Twój plan. Omawiamy szczegóły przed rezerwacją."
            }
          },
          {
            "@type": "Question",
            "name": "Ile zdjęć otrzymam po sesji chrzcielnej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Liczba gotowych zdjęć zależy od czasu trwania uroczystości i zakresu realizacji. Przy pełnej dokumentacji (ceremonia + przyjęcie) przygotowuję zazwyczaj 150–300 starannie wybranych i obrobionych fotografii. Dokładną liczbę omawiamy przy ustalaniu oferty."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjęcia z chrztu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowy czas realizacji wynosi 2–4 tygodnie od uroczystości. Gotowe fotografie dostarczam poprzez prywatną galerię online w wysokiej rozdzielczości."
            }
          },
          {
            "@type": "Question",
            "name": "Czy fotografujesz chrzciny poza Wrocławiem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, fotografuję chrzciny w całym województwie dolnośląskim — w Oleśnicy, Oławie, Trzebnicy, Brzegu, Legnicy i okolicach. Dojazd do 50 km od Wrocławia jest wliczony w cenę. Za dalsze odległości doliczam koszt dojazdu."
            }
          },
          {
            "@type": "Question",
            "name": "Czy możliwe jest nagranie wideo z chrztu razem ze zdjęciami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Specjalizuję się w fotografii. Jeśli zależy Ci na profesjonalnym filmie z chrztu, chętnie polecę sprawdzonego operatora wideo, z którym współpracuję. Razem możemy zadbać o kompletną dokumentację Twojego wyjątkowego dnia."
            }
          }
        ]
      })
    }
  ]
});
</script>
