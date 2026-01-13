<template>
  <div>
    <!-- Breadcrumbs -->
    <!-- <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div> -->

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Sesja Produktowa Wrocław</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalna fotografia produktowa we Wrocławiu. Anna Migaj tworzy wysokiej jakości zdjęcia produktów, które przyciągają uwagę i zwiększają sprzedaż.
        </p>
      </div>
    </section>

    <!-- About Product Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Fotografia Produktowa Wrocław</h2>
            <h3 class="text-xl font-medium mb-4">Zdjęcia Produktów, Które Sprzedają</h3>
            <p class="mb-6 font-light leading-relaxed">
              Specjalizuję się w fotografii produktowej we Wrocławiu, tworząc profesjonalne zdjęcia, które pokazują Twoje produkty w najlepszym świetle. Wysokiej jakości fotografia produktowa to klucz do skutecznej sprzedaży online.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Pracuję z markami, sklepami internetowymi i przedsiębiorcami, dostarczając zdjęcia produktów do sklepów e-commerce, katalogów, social media i materiałów reklamowych.
            </p>
            <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Umów sesję produktową
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250709/produktowe-2_fhz9gj.webp"
              alt="Sesja produktowa Wrocław - profesjonalna fotografia produktów Anna Migaj"
              class="w-full h-[600px] object-cover rounded-lg"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Product Photography Services -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Rodzaje Fotografii Produktowej</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferuję kompleksowe usługi fotografii produktowej dostosowane do Twoich potrzeb.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Zdjęcia na Białym Tle</h3>
            <p class="text-gray-600 mb-6">Klasyczne zdjęcia produktów na czystym, białym tle do e-commerce</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Idealne do sklepów internetowych</li>
              <li>• Zgodne z wymaganiami platform</li>
              <li>• Profesjonalne oświetlenie</li>
              <li>• Szybka obróbka</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Fotografia Lifestylowa</h3>
            <p class="text-gray-600 mb-6">Produkty w kontekście użytkowania, z dodatkami i stylizacją</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Pokazanie produktu w akcji</li>
              <li>• Kreowanie atmosfery</li>
              <li>• Idealne do social media</li>
              <li>• Budowanie emocji wokół marki</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Zdjęcia 360°</h3>
            <p class="text-gray-600 mb-6">Interaktywne prezentacje produktu z każdej strony</p>
            <ul class="text-left space-y-2 text-sm">
              <li>• Pełna prezentacja produktu</li>
              <li>• Zwiększona interakcja</li>
              <li>• Redukcja zwrotów</li>
              <li>• Nowoczesna prezentacja</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Gallery -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Portfolio Fotografii Produktowej</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz przykłady moich realizacji fotografii produktowej we Wrocławiu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(image, index) in productImages" :key="index" class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
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

    <!-- Why Choose Product Photography -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Dlaczego Warto Zainwestować</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Zwiększ Sprzedaż</h3>
            <p class="text-gray-600">Profesjonalne zdjęcia produktów zwiększają konwersję nawet o 30%</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Buduj Zaufanie</h3>
            <p class="text-gray-600">Wysokiej jakości fotografia pokazuje profesjonalizm Twojej marki</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Wyróżnij Się</h3>
            <p class="text-gray-600">Wyróżnij swoje produkty na tle konkurencji</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-medium mb-4">Oszczędź Czas</h3>
            <p class="text-gray-600">Profesjonalne zdjęcia na lata - jedna sesja, setki zastosowań</p>
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
            Odpowiedzi na najczęściej zadawane pytania dotyczące sesji produktowych we Wrocławiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje sesja produktowa we Wrocławiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Ceny fotografii produktowej we Wrocławiu zależą od liczby produktów, rodzaju zdjęć i stopnia skomplikowania.
              Podstawowa sesja (do 10 produktów, białe tło) to koszt od 800 zł. Sesje lifestylowe i bardziej złożone projekty
              wyceniam indywidualnie. Zapraszam do kontaktu po szczegółową ofertę.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak przygotować produkty do sesji zdjęciowej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Produkty powinny być czyste, bez odcisków palców, kurzu i uszkodzeń opakowań. Jeśli fotografujemy odzież,
              warto ją wcześniej wyprasować. Przed sesją omówimy szczegóły - jakie ujęcia są potrzebne, czy planujemy
              stylizację lifestylową, czy zdjęcia na białym tle.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy mogę dostarczyć produkty kurierem?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, możesz przesłać produkty kurierem na adres studia we Wrocławiu. Po sesji odsyłam je z powrotem.
              Alternatywnie mogę przyjechać do siedziby Twojej firmy, jeśli produkty są duże, delikatne lub
              masz ich bardzo dużo - szczególnie w przypadku sesji produktowych dla sklepów i magazynów.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile produktów mogę sfotografować podczas jednej sesji?</h3>
            <p class="text-gray-600 leading-relaxed">
              Liczba produktów zależy od ich rozmiaru i rodzaju zdjęć. Przy prostych zdjęciach na białym tle mogę
              sfotografować 15-30 produktów dziennie. Przy sesjach lifestylowych ze stylizacją to zazwyczaj 5-10 produktów
              dziennie. Wszystko zależy od stopnia skomplikowania i Twoich potrzeb.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjęcia produktowe?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowy czas realizacji to 5-7 dni roboczych od sesji. W tym czasie wykonuję profesjonalną obróbkę
              każdego zdjęcia - korekcję kolorów, usunięcie niedoskonałości, dopracowanie tła. Oferuję także ekspresową
              realizację w 2-3 dni za dodatkową opłatą. Zdjęcia dostarczam w wysokiej rozdzielczości, gotowe do użycia.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">W jakich formatach otrzymam zdjęcia produktowe?</h3>
            <p class="text-gray-600 leading-relaxed">
              Dostarczam zdjęcia w formatach dostosowanych do Twoich potrzeb: pełna rozdzielczość do druku (300 dpi),
              wersje zoptymalizowane do sklepu internetowego, formaty do social media (kwadrat, pionowe stories).
              Zdjęcia dostarczam w formacie JPG, a na życzenie także w PNG z przezroczystym tłem.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy oferujesz retusz i obróbkę zdjęć produktowych?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, każde zdjęcie produktowe przechodzi profesjonalną obróbkę w cenie sesji. Obejmuje to korekcję kolorów,
              usunięcie niedoskonałości, wygładzenie tła, dopasowanie jasności i kontrastu. Na życzenie oferuję także
              zaawansowany retusz - usuwanie cieni, wymianę tła, dodanie efektów czy kompozycje produktowe.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Zarezerwuj Swoją Sesję Produktową</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Skontaktuj się ze mną, aby omówić Twoje potrzeby i zarezerwować termin na fotografię produktową we Wrocławiu.
        </p>
        <NuxtLink to="/kontakt" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Skontaktuj się ze mną
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const productImages = [
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250709/produktowe-2_fhz9gj.webp', alt: 'Fotografia produktowa Wrocław - profesjonalne zdjęcia produktów Anna Migaj' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250713/produktowe-3_judq4l.webp', alt: 'Sesja produktowa Wrocław - zdjęcia do e-commerce Anna Migaj' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250714/produktowe-4_sz8zpe.webp', alt: 'Zdjęcia produktowe Wrocław - fotografia komercyjna Anna Migaj' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250715/produktowe-5_bkmdup.webp', alt: 'Fotografia produktowa Wrocław - zdjęcia dla sklepów online' },
  { src: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250718/produktowe-6_d9zwi4.webp', alt: 'Sesja produktowa Wrocław - profesjonalne zdjęcia dla marek' },
];

useSeoMeta({
  title: 'Sesja Produktowa Wrocław - Anna Migaj | Fotografia Produktów',
  description: 'Profesjonalna sesja produktowa Wrocław. Anna Migaj - fotograf produktowy. Wysokiej jakości zdjęcia produktów dla e-commerce, katalogów i social media. Umów sesję!',
  keywords: 'sesja produktowa Wrocław, fotografia produktowa Wrocław, zdjęcia produktów, e-commerce fotografia, Anna Migaj produkty, fotograf produktowy Wrocław',
  robots: 'index, follow',
  ogTitle: 'Sesja Produktowa Wrocław - Anna Migaj | Fotografia Produktów',
  ogDescription: 'Profesjonalna sesja produktowa Wrocław. Anna Migaj - fotograf produktowy. Wysokiej jakości zdjęcia produktów dla e-commerce, katalogów i social media.',
  ogImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250709/produktowe-2_fhz9gj.webp',
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
        "name": "Sesja Produktowa Wrocław",
        "description": "Profesjonalna fotografia produktowa we Wrocławiu. Wysokiej jakości zdjęcia produktów dla e-commerce, katalogów i social media.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Niebieskie Aparaty - Anna Migaj",
          "image": "https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250709/produktowe-2_fhz9gj.webp"
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
            "name": "Ile kosztuje sesja produktowa we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ceny fotografii produktowej we Wrocławiu zależą od liczby produktów i rodzaju zdjęć. Podstawowa sesja (do 10 produktów) to koszt od 800 zł. Sesje lifestylowe wyceniam indywidualnie."
            }
          },
          {
            "@type": "Question",
            "name": "Jak przygotować produkty do sesji zdjęciowej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Produkty powinny być czyste, bez odcisków palców, kurzu i uszkodzeń opakowań. Odzież należy wyprasować. Przed sesją omówimy szczegóły dotyczące rodzaju ujęć i stylizacji."
            }
          },
          {
            "@type": "Question",
            "name": "Czy mogę dostarczyć produkty kurierem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, możesz przesłać produkty kurierem na adres studia we Wrocławiu. Po sesji odsyłam je z powrotem. Mogę też przyjechać do siedziby firmy, jeśli produkty są duże lub delikatne."
            }
          },
          {
            "@type": "Question",
            "name": "Ile produktów mogę sfotografować podczas jednej sesji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Przy prostych zdjęciach na białym tle mogę sfotografować 15-30 produktów dziennie. Przy sesjach lifestylowych to zazwyczaj 5-10 produktów dziennie."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjęcia produktowe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowy czas realizacji to 5-7 dni roboczych. Oferuję ekspresową realizację w 2-3 dni za dodatkową opłatą. Zdjęcia dostarczam w wysokiej rozdzielczości."
            }
          },
          {
            "@type": "Question",
            "name": "W jakich formatach otrzymam zdjęcia produktowe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dostarczam zdjęcia w formatach dostosowanych do potrzeb: pełna rozdzielczość do druku (300 dpi), wersje do sklepu internetowego, formaty do social media. Format JPG, na życzenie PNG z przezroczystym tłem."
            }
          },
          {
            "@type": "Question",
            "name": "Czy oferujesz retusz i obróbkę zdjęć produktowych?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, każde zdjęcie przechodzi profesjonalną obróbkę: korekcję kolorów, usunięcie niedoskonałości, wygładzenie tła. Oferuję także zaawansowany retusz na życzenie."
            }
          }
        ]
      })
    }
  ]
});
</script>
