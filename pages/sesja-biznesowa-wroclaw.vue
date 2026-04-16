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
              Jako profesjonalny fotograf biznesowy Wrocław specjalizuję się w sesjach biznesowych, tworząc profesjonalne zdjęcia, które budują Twój wizerunek w branży. Moje zdjęcia biznesowe łączą profesjonalizm z naturalnością.
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

    <!-- FAQ Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Często Zadawane Pytania</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Odpowiedzi na najczęściej zadawane pytania dotyczące sesji biznesowych we Wrocławiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje sesja biznesowa we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Ceny sesji biznesowych we Wrocławiu zaczynają się od 450 zł za portret LinkedIn (30 minut, 5 zdjęć).
              Pełna sesja biznesowa to 850 zł (1 godzina, 15 zdjęć). Pakiety korporacyjne dla firm wyceniam
              indywidualnie w zależności od liczby osób i zakresu usługi.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak przygotować się do sesji biznesowej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Przed sesją biznesową rekomenduje wybrać stonowane, jednokolorowe ubrania bez wyrazistych wzorów.
              Unikaj intensywnych kolorów i logotypów. Przed sesją oferuję bezpłatną konsultację, podczas której
              omówimy stylizację, fryzurę i makijaż. Prześlij mi też przykładowe zdjęcia, które Ci się podobają.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Gdzie odbywa się sesja biznesowa we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Sesje biznesowe realizuję w profesjonalnym studio we Wrocławiu lub w Twojej firmie.
              Mogę też fotografować w plenerze — np. w centrum Wrocławia lub w lokalizacji związanej
              z Twoją branżą. Wybór lokalizacji zależy od charakteru zdjęć i Twoich preferencji.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjęcia biznesowe?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowy czas realizacji sesji biznesowej to 2–5 dni roboczych. W przypadku pilnych potrzeb
              oferuję ekspresową obróbkę w 24–48 godzin (za dodatkową opłatą). Zdjęcia dostarczam
              w wysokiej rozdzielczości oraz w wersjach zoptymalizowanych do mediów społecznościowych.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy mogę wykorzystać zdjęcia biznesowe w celach komercyjnych?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, wszystkie zdjęcia z sesji biznesowej możesz wykorzystać do celów komercyjnych: na stronie
              internetowej, w mediach społecznościowych, materiałach marketingowych, CV czy wizytówkach.
              Przekazuję pełne prawa do wykorzystania zdjęć w działalności zawodowej.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy oferujesz sesje dla całego zespołu firmy?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, realizuję sesje korporacyjne dla zespołów i całych firm we Wrocławiu. Oferuję indywidualne
              portrety każdego pracownika oraz zdjęcia grupowe. Sesje mogą odbyć się w siedzibie firmy
              lub w studio. Ceny pakietów korporacyjnych zaczynają się od 1500 zł.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jakie formaty zdjęć otrzymam po sesji?</h3>
            <p class="text-gray-600 leading-relaxed">
              Dostarczam zdjęcia w różnych formatach: pełna rozdzielczość do druku (300 dpi), wersje
              zoptymalizowane do internetu, formaty kwadratowe do mediów społecznościowych oraz kadrowania
              dostosowane do LinkedIn, strony www i materiałów drukowanych.
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
          <NuxtLink to="/sesja-kobieca-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Sesja Kobieca</NuxtLink>
          <NuxtLink to="/chrzciny-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Chrzciny</NuxtLink>
          <NuxtLink to="/fotograf-portretowy-wroclaw" class="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-wider transition duration-300 hover:bg-secondary hover:text-white">Fotografia Portretowa</NuxtLink>
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
            "name": "Ile kosztuje sesja biznesowa we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ceny sesji biznesowych we Wrocławiu zaczynają się od 450 zł za portret LinkedIn (30 minut, 5 zdjęć). Pełna sesja biznesowa to 850 zł (1 godzina, 15 zdjęć). Pakiety korporacyjne wyceniam indywidualnie."
            }
          },
          {
            "@type": "Question",
            "name": "Jak przygotować się do sesji biznesowej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rekomenduje stonowane, jednokolorowe ubrania bez wyrazistych wzorów. Unikaj intensywnych kolorów i logotypów. Przed sesją oferuję bezpłatną konsultację stylizacyjną."
            }
          },
          {
            "@type": "Question",
            "name": "Gdzie odbywa się sesja biznesowa we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sesje biznesowe realizuję w profesjonalnym studio we Wrocławiu, w Twojej firmie lub w plenerze. Wybór lokalizacji zależy od charakteru zdjęć i Twoich preferencji."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjęcia biznesowe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowy czas realizacji to 2–5 dni roboczych. Oferuję też ekspresową obróbkę w 24–48 godzin. Zdjęcia dostarczam w wysokiej rozdzielczości i wersjach do social media."
            }
          },
          {
            "@type": "Question",
            "name": "Czy mogę wykorzystać zdjęcia biznesowe w celach komercyjnych?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, wszystkie zdjęcia możesz wykorzystać komercyjnie: na stronie www, w social media, materiałach marketingowych, CV czy wizytówkach. Przekazuję pełne prawa do wykorzystania."
            }
          },
          {
            "@type": "Question",
            "name": "Czy oferujesz sesje dla całego zespołu firmy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, realizuję sesje korporacyjne dla zespołów i firm we Wrocławiu. Oferuję portrety indywidualne i zdjęcia grupowe. Ceny pakietów korporacyjnych od 1500 zł."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie formaty zdjęć otrzymam po sesji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dostarczam zdjęcia w pełnej rozdzielczości do druku (300 dpi), wersje do internetu, formaty kwadratowe do social media oraz kadrowania do LinkedIn i materiałów drukowanych."
            }
          }
        ]
      })
    }
  ]
})
</script>