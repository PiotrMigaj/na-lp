<template>
  <div>
    <!-- Breadcrumbs -->
    <!-- <div class="container mx-auto px-4">
      <Breadcrumbs />
    </div> -->

    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-cormorant text-5xl md:text-6xl mb-6">Sesja Kobieca Wroclaw</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Profesjonalne sesje kobiece we Wroclawiu. Anna Migaj tworzy naturalne, zmyslowe portrety podkreslajace Twoja kobiecosc i unikalny charakter.
        </p>
      </div>
    </section>

    <!-- About Women Photography -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-cormorant text-4xl mb-6">Sesje Kobiece Wroclaw</h2>
            <h3 class="text-xl font-medium mb-4">Naturalna Fotografia Kobieca</h3>
            <p class="mb-6 font-light leading-relaxed">
              Sesja kobieca to wyjatkowe doswiadczenie, ktore pozwala Ci odkryc swoje piekno na nowo. Jako fotografka specjalizujaca sie w sesjach kobiecych we Wroclawiu, tworze bezpieczna przestrzen, w ktorej mozesz byc soba.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Kazda kobieta jest piekna na swoj sposob. Moim celem jest uchwycic Twoja naturalnosc, pewnosc siebie i to, co czyni Cie wyjatkowa. Bez sztucznego pozowania - tylko autentyczne emocje i prawdziwe Ty.
            </p>
            <NuxtLink to="/kontakt" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Umow sesje kobieca
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
              alt="Sesja kobieca Wroclaw - naturalne zdjecia kobiety Anna Migaj fotograf"
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
            Oferuje rozne typy sesji kobiecych dostosowane do Twoich potrzeb i stylu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesja Budujaca Pewnosc Siebie</h3>
            <p class="text-gray-600 mb-6">Sesja dla kobiet, ktore chca poczuc sie piekne i docenic siebie</p>
            <ul class="text-left space-y-2 text-sm">
              <li>&#8226; Bezpieczna, komfortowa atmosfera</li>
              <li>&#8226; Pomoc w doborze stylizacji</li>
              <li>&#8226; Naturalne, pelnne emocji zdjecia</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesja Zmyslowa / Boudoir</h3>
            <p class="text-gray-600 mb-6">Eleganckie, subtelne zdjecia podkreslajace Twoja kobiecosc</p>
            <ul class="text-left space-y-2 text-sm">
              <li>&#8226; Delikatne, artystyczne kadry</li>
              <li>&#8226; Pelna dyskrecja</li>
              <li>&#8226; Sesja w studio lub u Ciebie</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-medium mb-4">Sesja Artystyczna / Edytorialna</h3>
            <p class="text-gray-600 mb-6">Kreatywne sesje inspirowane moda i sztuka</p>
            <ul class="text-left space-y-2 text-sm">
              <li>&#8226; Unikalne lokalizacje</li>
              <li>&#8226; Wspolpraca ze stylistami</li>
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
            Zobacz przyklady moich sesji kobiecych - naturalne, autentyczne piekno.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
              alt="Sesja kobieca Wroclaw - portret kobiety Anna Migaj 1"
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
              alt="Sesja kobieca Wroclaw - naturalne zdjecia Anna Migaj 2"
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
              alt="Sesja kobieca Wroclaw - portret naturalny Anna Migaj 3"
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
              alt="Sesja kobieca Wroclaw - fotografia kobieca Anna Migaj 4"
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
              alt="Sesja kobieca Wroclaw - naturalne portrety Anna Migaj 5"
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
              alt="Sesja kobieca artystyczna Wroclaw - fotografia modowa Anna Migaj 6"
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
            Zobacz pelne portfolio
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
            <p class="text-gray-600">Poznajemy sie i omawiamy Twoje oczekiwania, styl i charakter sesji</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="text-xl font-medium mb-4">Przygotowania</h3>
            <p class="text-gray-600">Pomagam w doborze stylizacji, makijazu i lokalizacji</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="text-xl font-medium mb-4">Sesja</h3>
            <p class="text-gray-600">Swobodna sesja w komfortowej atmosferze - prowadze Cie przez pozowanie</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 class="text-xl font-medium mb-4">Odbiór</h3>
            <p class="text-gray-600">Otrzymujesz pieknie obrobione zdjecia w prywatnej galerii online</p>
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
            Odpowiedzi na najczesciej zadawane pytania dotyczace sesji kobiecych we Wroclawiu.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Ile kosztuje sesja kobieca we Wroclawiu?</h3>
            <p class="text-gray-600 leading-relaxed">
              Ceny sesji kobiecych we Wroclawiu zaczynaja sie od 700 zl za podstawowa sesje (1-1,5 godziny, 15 zdjec).
              Sesje z profesjonalnym makijazem i stylizacja to koszt od 1200 zl. Dokladna wycena zalezy od dlugosci sesji,
              liczby stylizacji i lokalizacji. Zapraszam do kontaktu po indywidualna oferte.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak przygotowac sie do sesji kobiecej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Przed sesja kobieca rekomenduje dobre wyspanie sie i nawodnienie - to widac na zdjeciach! Przygotuj 2-3
              zestawy ubran w roznych stylach. Przed sesja oferuje bezplatna konsultacje, podczas ktorej omowimy
              stylizacje, makijaz i oczekiwania. Warto tez zebrac inspiracje ze zdjec, ktore Ci sie podobaja.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy potrzebuje profesjonalnego makijazu na sesje?</h3>
            <p class="text-gray-600 leading-relaxed">
              Profesjonalny makijaz nie jest wymagany, ale moze znaczaco podniesc efekt koncowy zdjec. Wspolpracuje
              z utalentowanymi wizazystkami we Wroclawiu, ktore moge polecic. Moga wykonac delikatny makijaz naturalny
              lub bardziej wyrazisty look - w zaleznosci od charakteru sesji i Twoich preferencji.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Jak dlugo trwa sesja kobieca?</h3>
            <p class="text-gray-600 leading-relaxed">
              Standardowa sesja kobieca we Wroclawiu trwa 1-2 godziny. Sesje z kilkoma stylizacjami lub w roznych
              lokalizacjach moga trwac 2-3 godziny. Czas sesji dostosowuje do Twoich potrzeb - wazne, zebys nie
              czula sie pospieszana i mogla w pelni cieszyc sie doswiadczeniem.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy moge zabrac kogos na sesje?</h3>
            <p class="text-gray-600 leading-relaxed">
              Tak, jesli czujesz sie pewniej z osoba towarzyszaca - mozesz zabrac przyjaciolke lub partnera.
              Jednak wiele kobiet odkrywa, ze sesja sam na sam z fotografka pozwala im bardziej sie otworzyc
              i byc soba. To Twoj wybor - zrobimy tak, jak bedzie Ci najwygodniej.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Kiedy otrzymam gotowe zdjecia z sesji kobiecej?</h3>
            <p class="text-gray-600 leading-relaxed">
              Gotowe zdjecia z sesji kobiecej otrzymasz w ciagu 7-14 dni od sesji. Kazde zdjecie jest starannie
              obrobione z zachowaniem naturalnego wygladu - nie retuszuje nadmiernie, ale dbam o piekne swiatlo
              i kolory. Zdjecia dostarczam w prywatnej galerii online z mozliwoscia pobrania.
            </p>
          </div>

          <div class="bg-accent p-6 rounded-lg">
            <h3 class="text-xl font-medium mb-3">Czy zdjecia moga byc prywatne?</h3>
            <p class="text-gray-600 leading-relaxed">
              Absolutnie tak! Pelna dyskrecja jest gwarantowana. Zdjecia z sesji kobiecej sa tylko Twoje - nie
              publikuje ich nigdzie bez Twojej wyraznej zgody. Jesli zechcesz, mozesz pozwolic mi umiescic
              wybrane kadry w portfolio, ale to zawsze Twoja decyzja.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Zarezerwuj Swoja Sesje Kobieca</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Umow sie na bezplatna konsultacje i odkryj swoje piekno na nowo. Stworze dla Ciebie zdjecia, ktore pokochasz.
        </p>
        <NuxtLink to="/kontakt" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Skontaktuj sie ze mna
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Sesja Kobieca Wroclaw - Anna Migaj | Naturalne Portrety Kobiet',
  description: 'Profesjonalne sesje kobiece we Wroclawiu. Anna Migaj - fotograf specjalizujacy sie w naturalnej fotografii kobiecej. Sesje budujace pewnosc siebie, boudoir, artystyczne. Umow sesje!',
  keywords: 'sesja kobieca Wroclaw, fotografia kobieca Wroclaw, sesja portretowa kobiet, Anna Migaj sesja kobieca, boudoir Wroclaw, sesja budujaca pewnosc siebie',
  robots: 'index, follow',
  ogTitle: 'Sesja Kobieca Wroclaw - Anna Migaj | Naturalne Portrety Kobiet',
  ogDescription: 'Profesjonalne sesje kobiece we Wroclawiu. Anna Migaj - fotograf specjalizujacy sie w naturalnej fotografii kobiecej. Umow sesje!',
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
        "name": "Sesja Kobieca Wroclaw",
        "description": "Profesjonalne sesje kobiece we Wroclawiu. Naturalne, zmyslowe portrety podkreslajace Twoja kobiecosc i unikalny charakter.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Niebieskie Aparaty - Anna Migaj",
          "image": "https://res.cloudinary.com/drbgrfsbo/image/upload/v1750250438/kobiece-1_ovdkxi.webp"
        },
        "areaServed": {
          "@type": "City",
          "name": "Wroclaw"
        },
        "offers": {
          "@type": "Offer",
          "description": "Sesja kobieca Wroclaw",
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
            "name": "Ile kosztuje sesja kobieca we Wroclawiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ceny sesji kobiecych we Wroclawiu zaczynaja sie od 700 zl za podstawowa sesje (1-1,5 godziny, 15 zdjec). Sesje z profesjonalnym makijazem i stylizacja to koszt od 1200 zl."
            }
          },
          {
            "@type": "Question",
            "name": "Jak przygotowac sie do sesji kobiecej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rekomenduje dobre wyspanie sie i nawodnienie. Przygotuj 2-3 zestawy ubran w roznych stylach. Oferuje bezplatna konsultacje przed sesja, podczas ktorej omowimy stylizacje i oczekiwania."
            }
          },
          {
            "@type": "Question",
            "name": "Czy potrzebuje profesjonalnego makijazu na sesje?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Profesjonalny makijaz nie jest wymagany, ale moze podniesc efekt zdjec. Wspolpracuje z wizazystkami we Wroclawiu, ktore moge polecic do makijazu naturalnego lub wyrazistego."
            }
          },
          {
            "@type": "Question",
            "name": "Jak dlugo trwa sesja kobieca?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowa sesja kobieca trwa 1-2 godziny. Sesje z kilkoma stylizacjami moga trwac 2-3 godziny. Czas dostosowuje do Twoich potrzeb."
            }
          },
          {
            "@type": "Question",
            "name": "Czy moge zabrac kogos na sesje?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, mozesz zabrac przyjaciolke lub partnera jesli czujesz sie pewniej. Wiele kobiet odkrywa jednak, ze sesja sam na sam pozwala im bardziej sie otworzyc."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy otrzymam gotowe zdjecia z sesji kobiecej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gotowe zdjecia otrzymasz w ciagu 7-14 dni. Kazde zdjecie jest starannie obrobione. Zdjecia dostarczam w prywatnej galerii online z mozliwoscia pobrania."
            }
          },
          {
            "@type": "Question",
            "name": "Czy zdjecia moga byc prywatne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutnie tak! Pelna dyskrecja jest gwarantowana. Zdjecia z sesji kobiecej sa tylko Twoje - nie publikuje ich nigdzie bez Twojej wyraznej zgody."
            }
          }
        ]
      })
    }
  ]
});
</script>
