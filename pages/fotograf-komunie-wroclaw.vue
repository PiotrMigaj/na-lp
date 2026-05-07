<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div>

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Fotograf Komunie Wrocław — Anna Migaj</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalna fotografia komunijna we Wrocławiu. Naturalny, reportażowy styl — uchwycę ceremonię w kościele, radość rodziny i wyjątkowe chwile Pierwszej Komunii Świętej Twojego dziecka.
        </p>
        <NuxtLink to="/kontakt" class="inline-block mt-8 bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
          Zarezerwuj termin
        </NuxtLink>
      </div>
    </section>

    <!-- About Communion Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Fotografia Komunijna Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Reportażowy Styl — Naturalne Zdjęcia z Komunii</h3>
            <p class="mb-6 font-light leading-relaxed">
              Jako profesjonalny fotograf komunijny we Wrocławiu towarzyszę rodzinom w jednym z najważniejszych sakramentalnych dni — dniu Pierwszej Komunii Świętej. Fotografuję dyskretnie i naturalnie, starając się uchwycić autentyczne emocje: wzruszenie rodziców, dumę dziadków, skupienie dziecka przy ołtarzu.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Mój styl to fotografia reportażowa — prawdziwa, pełna emocji. Pracuję tak, by nie zakłócać przebiegu ceremonii, a jednocześnie nie przegapić żadnego ważnego momentu: pierwszego przystąpienia do Komunii, chwil z rodziną, spontanicznych uśmiechów i łez szczęścia.
            </p>
            <p class="font-light leading-relaxed">
              Działam we Wrocławiu i w całym województwie dolnośląskim. Fotografuję zarówno uroczystości kościelne, jak i przyjęcia komunijne. Każda sesja komunijna jest wyceniana indywidualnie — skontaktuj się, aby omówić szczegóły.
            </p>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249188/sesja-rodzinna_khokg4.webp"
              alt="Fotograf komunie Wrocław — naturalne zdjęcia z Pierwszej Komunii Świętej, Anna Migaj"
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
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Co obejmuje fotografia komunijna</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa dokumentacja fotograficzna Pierwszej Komunii Świętej Twojego dziecka — od ceremonii po przyjęcie.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:church" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Ceremonia kościelna</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Dyskretna fotografia podczas całej Mszy komunijnej — pierwsze przystąpienie do Komunii, błogosławieństwo, modlitwa rodziny, chwile przy ołtarzu.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:account-group" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Portrety rodzinne</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Naturalne, grupowe zdjęcia rodzinne — z dziadkami, chrzestnymi i całą rodziną. Radosna atmosfera bez sztucznego pozowania.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:star" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Portret komunikanta</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Piękne, delikatne portrety dziecka — w stroju komunijnym, z symbolami wiary, w otoczeniu bliskich i w kościele.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:food" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Przyjęcie komunijne</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Reportaż z przyjęcia rodzinnego — radosna atmosfera, tort, życzenia, spontaniczne chwile i wzruszające rozmowy bliskich.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:image-edit" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Profesjonalna obróbka</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Staranna postprodukcja każdego zdjęcia — kolorystyka, retusz, klimat dostosowany do wyjątkowości tego dnia.</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <Icon name="mdi:cloud-download" class="w-6 h-6 text-secondary" />
            </div>
            <h3 class="text-xl font-medium mb-3">Galeria online</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Gotowe zdjęcia dostarczone przez prywatną galerię online w wysokiej rozdzielczości, gotowe do druku i udostępniania.</p>
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
              alt="Anna Migaj — fotograf komunijny Wrocław, naturalna fotografia chrzcin i komunii"
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
                  <p class="font-light text-gray-600 text-sm leading-relaxed">Napisz do mnie z datą komunii, lokalizacją kościoła i restauracji. Przygotuję indywidualną wycenę dopasowaną do Twoich potrzeb.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-secondary text-primary flex items-center justify-center rounded-full text-sm font-medium flex-shrink-0 mt-1">2</div>
                <div>
                  <h3 class="font-medium mb-1">Rezerwacja terminu</h3>
                  <p class="font-light text-gray-600 text-sm leading-relaxed">Po ustaleniu szczegółów termin zostaje zarezerwowany. Polecam kontaktować się 2–4 miesiące przed komunią, gdyż daty komunijne (maj) szybko się zapełniają.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-secondary text-primary flex items-center justify-center rounded-full text-sm font-medium flex-shrink-0 mt-1">3</div>
                <div>
                  <h3 class="font-medium mb-1">Dzień komunii</h3>
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
          Cena fotografii komunijnej zależy od czasu trwania uroczystości, liczby lokalizacji (kościół + restauracja) i zakresu realizacji. Każde zamówienie wyceniam indywidualnie.
        </p>
        <p class="font-light mb-10 leading-relaxed text-gray-600">
          Napisz do mnie z datą komunii i miejscem — odpiszę z propozycją ceny i szczegółami współpracy.
        </p>
        <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
          Zapytaj o wycenę
        </NuxtLink>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Często Zadawane Pytania</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Odpowiedzi na najczęściej zadawane pytania dotyczące fotografii komunijnej we Wrocławiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje fotograf komunijny we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Cena fotografii komunijnej we Wrocławiu jest ustalana indywidualnie i zależy od zakresu realizacji — czasu trwania uroczystości, liczby lokalizacji (kościół, restauracja lub dom) oraz liczby gotowych zdjęć. Zapraszam do kontaktu po indywidualną wycenę dopasowaną do Twoich potrzeb.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak wcześnie należy zarezerwować fotografa na komunię?</h3>
            <p class="text-gray-600 leading-relaxed">
              Polecam kontakt 2–4 miesiące przed planowaną datą komunii. Terminy komunijne (głównie maj) szybko się zapełniają. W przypadku nagłej rezerwacji warto sprawdzić dostępność jak najwcześniej.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak długo trwa sesja komunijna?</h3>
            <p class="text-gray-600 leading-relaxed">
              Czas trwania zależy od zakresu realizacji. Sama ceremonia kościelna to zazwyczaj 1–1,5 godziny. Jeśli fotografuję również przyjęcie, jestem z rodziną przez 4–6 godzin lub dłużej, zależnie od planu dnia.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy fotografujesz Pierwszą Komunię Świętą w kościele?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, fotografuję całą Mszę komunijną — przystąpienie do Komunii, błogosławieństwo kapłana, modlitwę i skupienie dziecka przy ołtarzu. Pracuję dyskretnie, nie zakłócając przebiegu nabożeństwa.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile zdjęć otrzymam po sesji komunijnej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Liczba gotowych zdjęć zależy od czasu trwania uroczystości i zakresu realizacji. Przy pełnej dokumentacji (ceremonia + przyjęcie) przygotowuję zazwyczaj 150–300 starannie wybranych i obrobionych fotografii.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjęcia z komunii?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowy czas realizacji wynosi 2–4 tygodnie od uroczystości. Gotowe fotografie dostarczam przez prywatną galerię online w wysokiej rozdzielczości, gotowe do druku i udostępniania bliskim.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy fotografujesz komunie poza Wrocławiem?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, fotografuję komunię w całym województwie dolnośląskim — w Oleśnicy, Oławie, Trzebnicy, Brzegu, Legnicy i okolicach. Dojazd do 50 km od Wrocławia jest wliczony w cenę. Za dalsze odległości doliczam koszt dojazdu.
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
          <NuxtLink to="/sesja-rodzinna-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Rodzinna</NuxtLink>
          <NuxtLink to="/sesja-slubna-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Ślubna</NuxtLink>
          <NuxtLink to="/sesja-kobieca-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Sesja Kobieca</NuxtLink>
          <NuxtLink to="/sesja-biznesowa-wroclaw" class="border border-secondary text-secondary px-6 py-2 uppercase tracking-wider text-sm transition duration-300 hover:bg-secondary hover:text-primary">Fotografia Biznesowa</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Uchwycę wyjątkowe chwile komunii Twojego dziecka</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Porozmawiajmy o Twoim wyjątkowym dniu — chętnie przygotuję indywidualną ofertę fotografii komunijnej we Wrocławiu.
        </p>
        <NuxtLink to="/kontakt" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Zarezerwuj termin
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Fotograf Komunijny Wrocław — Anna Migaj | Komunie',
  description: 'Fotograf komunijny Wrocław — Anna Migaj. Naturalna fotografia Pierwszej Komunii Świętej. Reportaż z kościoła i przyjęcia. Zapytaj o termin i wycenę!',
  robots: 'index, follow',
  ogTitle: 'Fotograf Komunijny Wrocław — Anna Migaj | Komunie',
  ogDescription: 'Fotograf komunijny Wrocław — Anna Migaj. Naturalna fotografia Pierwszej Komunii Świętej. Reportaż z kościoła i przyjęcia.',
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
        "name": "Fotografia Komunijna Wrocław",
        "description": "Profesjonalna fotografia komunijna we Wrocławiu. Naturalny, reportażowy styl — ceremonia kościelna, portrety rodzinne, przyjęcie komunijne. Wycena indywidualna.",
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
        "inLanguage": "pl-PL"
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
            "name": "Ile kosztuje fotograf komunijny we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cena fotografii komunijnej we Wrocławiu jest ustalana indywidualnie i zależy od zakresu realizacji — czasu trwania uroczystości, liczby lokalizacji (kościół, restauracja lub dom) oraz liczby gotowych zdjęć. Zapraszam do kontaktu po indywidualną wycenę dopasowaną do Twoich potrzeb."
            }
          },
          {
            "@type": "Question",
            "name": "Jak wcześnie należy zarezerwować fotografa na komunię?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Polecam kontakt 2–4 miesiące przed planowaną datą komunii. Terminy komunijne (głównie maj) szybko się zapełniają. W przypadku nagłej rezerwacji warto sprawdzić dostępność jak najwcześniej."
            }
          },
          {
            "@type": "Question",
            "name": "Jak długo trwa sesja komunijna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Czas trwania zależy od zakresu realizacji. Sama ceremonia kościelna to zazwyczaj 1–1,5 godziny. Jeśli fotografuję również przyjęcie, jestem z rodziną przez 4–6 godzin lub dłużej, zależnie od planu dnia."
            }
          },
          {
            "@type": "Question",
            "name": "Czy fotografujesz Pierwszą Komunię Świętą w kościele?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, fotografuję całą Mszę komunijną — przystąpienie do Komunii, błogosławieństwo kapłana, modlitwę i skupienie dziecka przy ołtarzu. Pracuję dyskretnie, nie zakłócając przebiegu nabożeństwa."
            }
          },
          {
            "@type": "Question",
            "name": "Ile zdjęć otrzymam po sesji komunijnej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Liczba gotowych zdjęć zależy od czasu trwania uroczystości i zakresu realizacji. Przy pełnej dokumentacji (ceremonia + przyjęcie) przygotowuję zazwyczaj 150–300 starannie wybranych i obrobionych fotografii."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjęcia z komunii?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowy czas realizacji wynosi 2–4 tygodnie od uroczystości. Gotowe fotografie dostarczam przez prywatną galerię online w wysokiej rozdzielczości, gotowe do druku i udostępniania bliskim."
            }
          },
          {
            "@type": "Question",
            "name": "Czy fotografujesz komunie poza Wrocławiem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, fotografuję komunię w całym województwie dolnośląskim — w Oleśnicy, Oławie, Trzebnicy, Brzegu, Legnicy i okolicach. Dojazd do 50 km od Wrocławia jest wliczony w cenę. Za dalsze odległości doliczam koszt dojazdu."
            }
          }
        ]
      })
    }
  ]
});
</script>
