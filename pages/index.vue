<template>
  <div>
    <!-- Hero Section -->
    <HeroCarousel />

    <!-- About Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 class="font-cormorant text-4xl mb-6">Profesjonalny Fotograf Wrocław — Sesje Kobiece, Ślubne, Biznesowe i Chrzciny</h1>
            <h2 class="text-xl font-medium mb-4">Anna Migaj — Twój Fotograf</h2>
            <p class="mb-6 font-light leading-relaxed">
              Jestem Anna Migaj — profesjonalny fotograf Wrocław, który towarzyszy Ci w najważniejszych momentach życia. Fotografuję sesje ślubne, sesje kobiece, sesje biznesowe, chrzciny i sesje rodzinne we Wrocławiu oraz w całym województwie dolnośląskim.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Z wykształcenia architektka, z pasji fotografka — zamiłowanie do estetyki, harmonii i detalu od zawsze towarzyszyło mojej pracy twórczej. Tworzę kadry ponadczasowe — subtelne, ale pełne znaczenia — uchwycające naturalne piękno i osobowość fotografowanej osoby.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Wierzę, że dobra fotografia rodzi się z uważności, wzajemnego zaufania i prawdziwej relacji. Jako fotograf Wrocław zależy mi na tym, byś czuła się swobodnie przed obiektywem — niezależnie od okazji.
            </p>
            <NuxtLink to="/o-mnie" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Dowiedz się więcej
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249189/anna-migaj-fotograf_rncd8m.webp"
              alt="Anna Migaj - profesjonalny fotograf ślubny i portretowy we Wrocławiu"
              class="w-full h-[900px] object-cover"
              width="800"
              height="900"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Portfolio Fotografa ze Wrocławia</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Przegląd moich najnowszych realizacji, które odzwierciedlają mój styl i podejście do fotografii.
          </p>
        </div>

        <PortfolioGrid :items="portfolioItems.slice(0, 6)" />

        <div class="mt-12 text-center">
          <NuxtLink to="/portfolio" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
            Zobacz wszystkie projekty
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-cormorant text-4xl md:text-5xl mb-6">Rodzaje Sesji Zdjęciowych we Wrocławiu</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesjonalna fotografia dopasowana do Twoich potrzeb i wizji.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div class="text-center">
            <h3 class="text-2xl font-medium mb-4"><NuxtLink to="/sesja-slubna-wroclaw" class="hover:text-secondary transition-colors">Sesja Ślubna Wrocław</NuxtLink></h3>
            <p class="text-gray-600 mb-4">Naturalne zdjęcia ślubne pełne emocji i spontanicznych momentów</p>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-medium mb-4"><NuxtLink to="/sesja-biznesowa-wroclaw" class="hover:text-secondary transition-colors">Sesja Biznesowa Wrocław</NuxtLink></h3>
            <p class="text-gray-600 mb-4">Profesjonalne zdjęcia biznesowe i korporacyjne</p>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-medium mb-4"><NuxtLink to="/sesja-kobieca-wroclaw" class="hover:text-secondary transition-colors">Sesja Kobieca Wrocław</NuxtLink></h3>
            <p class="text-gray-600 mb-4">Sesje portretowe i kobiece pełne naturalności</p>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-medium mb-4"><NuxtLink to="/chrzciny-wroclaw" class="hover:text-secondary transition-colors">Chrzciny Wrocław</NuxtLink></h3>
            <p class="text-gray-600 mb-4">Naturalna, reportażowa fotografia z chrztu Twojego dziecka</p>
          </div>
        </div>
        
        <ServicesGrid :services="services" />
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <SectionHeaderCenteredSubtitle 
          title="Opinie klientów"
          subtitle="Co mówią osoby, z którymi współpracowałam."
          class="text-center"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard 
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :quote="testimonial.quote"
            :author="testimonial.author"
            :role="testimonial.role"
          />
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-cormorant text-4xl mb-6">Stwórzmy razem coś pięknego</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Porozmawiajmy o Twoim projekcie – wspólnie stworzymy fotografie, które zachwycają i zostają w pamięci.
        </p>
        <NuxtLink to="/kontakt" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Skontaktuj się ze mną
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionHeaderCenteredSubtitle from '~/components/SectionHeaderCenteredSubtitle.vue';

useSeoMeta({
  title: 'Fotograf Wrocław - Anna Migaj | Sesje Kobiece, Biznesowe i Ślubne',
  description: 'Profesjonalny fotograf Wrocław - Anna Migaj. Wyjątkowe sesje kobiece, biznesowe i ślubne. Naturalna fotografia pełna emocji. Sprawdź ofertę! ✨',
  robots: 'index, follow',
  ogTitle: 'Fotograf Wrocław - Anna Migaj | Sesje Kobiece, Biznesowe i Ślubne',
  ogDescription: 'Profesjonalny fotograf Wrocław - Anna Migaj. Wyjątkowe sesje kobiece, biznesowe i ślubne. Naturalna fotografia pełna emocji.',
  ogImage: 'https://niebieskie-aparaty.pl/images/anna-migaj-fotograf.webp',
  ogLocale: 'pl_PL',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fotograf Wrocław - Anna Migaj | Sesje Kobiece, Biznesowe i Ślubne',
  twitterDescription: 'Profesjonalny fotograf Wrocław - Anna Migaj. Wyjątkowe sesje kobiece, biznesowe i ślubne.',
  twitterImage: 'https://niebieskie-aparaty.pl/images/anna-migaj-fotograf.webp'
});

const portfolioItems = [
  {
    title: 'Sesja ślubna Weroniki i Szymona',
    category: 'SESJA ŚLUBNA',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249189/sesja-slubna_oukxfe.webp'
  },
  {
    title: 'Sesja rodzinna na Dzień Mamy',
    category: 'SESJA RODZINNA',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249188/sesja-rodzinna_khokg4.webp'
  },
  {
    title: 'Sesja portretowa',
    category: 'PORTRET',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249190/sesja-portretowa_z1ibbr.webp'
  },
  {
    title: 'Sesja biznesowa dla Krzysztofa',
    category: 'SESJA BIZNESOWA',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249189/sesja-biznesowa-meska_pijzxm.webp'
  },
  {
    title: 'Sesja kobieca na Dzień Mamy',
    category: 'SESJA KOBIECA',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249189/sesja-kobieca_hlszsa.webp'
  },
  {
    title: 'Sesja produktowa dla Nieba Przychylam',
    category: 'SESJA PRODUKTOWA',
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249190/sesja-produktowa_v4qv7z.webp'
  }
];

const services = [
  {
    title: 'Fotografia edytorialowa',
    icon: 'mdi:camera',
    description: 'Tworzę sesje zdjęciowe do publikacji drukowanych i cyfrowych – z indywidualnym podejściem i artystyczną wrażliwością.'
  },
  {
    title: 'Sesje kampanijne',
    icon: 'mdi:shopping',
    description: 'Buduję wizualną opowieść dla Twojej marki – stylizacje i zdjęcia, które wzmacniają przekaz i przyciągają uwagę.'
  },
  {
    title: 'Lookbooki',
    icon: 'mdi:book-open-page-variant',
    description: 'Pokazuję kolekcję z dbałością o detale, klimat i formę – elegancko, nowocześnie, autentycznie.'
  },
  {
    title: 'Wybór lokalizacji',
    icon: 'mdi:map-marker',
    description: 'Pomagam znaleźć idealne miejsce do sesji – w Polsce i za granicą, dopasowane do charakteru projektu.'
  },
  {
    title: 'Kierownictwo artystyczne',
    icon: 'mdi:lightbulb',
    description: 'Od pomysłu po finalny efekt – czuwam nad każdym etapem realizacji sesji zdjęciowej.'
  },
  {
    title: 'Postprodukcja',
    icon: 'mdi:image-edit',
    description: 'Profesjonalna obróbka zdjęć – retusz, kolorystyka, klimat – wszystko, co nadaje zdjęciom charakteru.'
  }
];

const testimonials = [
  {
    quote: '"Współpraca z Anną to czysta przyjemność. Zdjęcia przerosły nasze oczekiwania – były piękne, naturalne i dokładnie oddawały naszą wizję."',
    author: 'Weronika i Szymon',
    role: ''
  },
  {
    quote: '"Anna ma niesamowite wyczucie estetyki i świetny kontakt z ludźmi. Czułem się swobodnie przed obiektywem, a efekt końcowy był zachwycający."',
    author: 'Krzysztof',
    role: ''
  },
  {
    quote: '"Dzięki Annie nasza kampania zyskała zupełnie nowy wymiar. Jej zdjęcia były dokładnie tym, czego potrzebowaliśmy."',
    author: 'Nieba Przychylam',
    role: ''
  }
];

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ile kosztuje fotograf we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ceny sesji zdjęciowych we Wrocławiu zaczynają się od 450 zł za portret biznesowy, 700 zł za sesję kobiecą i od pakietów podstawowych za fotografię ślubną. Ceny chrzcin i sesji rodzinnych wyceniam indywidualnie. Zapraszam do kontaktu po szczegółową ofertę."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie sesje fotograficzne oferujesz we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oferuję: sesje ślubne Wrocław, sesje kobiece Wrocław, sesje biznesowe Wrocław, fotografia chrzcin, sesje rodzinne, fotografia portretowa oraz sesje produktowe. Działam we Wrocławiu i całym województwie dolnośląskim."
            }
          },
          {
            "@type": "Question",
            "name": "Czy fotografujesz chrzciny we Wrocławiu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, fotografuję chrzciny we Wrocławiu i okolicach. Oferuję naturalny, reportażowy styl fotografii chrzcielnej — uchwycę ceremonię w kościele, radość rodziny i pierwsze chwile Twojego dziecka. Skontaktuj się po indywidualną wycenę."
            }
          },
          {
            "@type": "Question",
            "name": "Jak wcześnie należy zarezerwować fotografa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Na sesje ślubne rekomenduje rezerwację 6–12 miesięcy wcześniej, szczególnie w sezonie ślubnym (maj–wrzesień). Na sesje kobiece, biznesowe i chrzciny zazwyczaj wystarczy 2–4 tygodnie z wyprzedzeniem."
            }
          },
          {
            "@type": "Question",
            "name": "Gdzie działasz jako fotograf?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Głównie działam we Wrocławiu, ale fotografuję w całym województwie dolnośląskim i całej Polsce. Dojazd do 50 km od Wrocławia jest wliczony w cenę."
            }
          }
        ]
      })
    }
  ]
});
</script>
