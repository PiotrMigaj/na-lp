<template>
  <div>
    <!-- Hero Section -->
    <section class="py-32 md:py-40 relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center bg-fixed" style="background-image: url('/sesje-swiateczne-background.webp'); filter: blur(1px);"></div>
      <div class="absolute inset-0 bg-white/60"></div>
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-8 h-8 text-emerald-300 transform rotate-12">✨</div>
        <div class="absolute top-20 right-20 w-6 h-6 text-red-300 transform -rotate-12">❄️</div>
        <div class="absolute bottom-20 left-20 w-6 h-6 text-emerald-300 transform rotate-45">✨</div>
        <div class="absolute bottom-10 right-10 w-8 h-8 text-red-300 transform -rotate-45">❄️</div>
        <div class="absolute top-1/3 left-1/4 w-4 h-4 text-emerald-200 transform rotate-90">✨</div>
        <div class="absolute top-2/3 right-1/3 w-4 h-4 text-red-200 transform -rotate-90">❄️</div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="font-bodoni-moda text-5xl md:text-6xl lg:text-7xl mb-8 tracking-wider text-gray-800 font-normal">
            Sesje Świąteczne
          </h1>
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Świąteczna Sesja Zdjęciowa we Wrocławiu – 14 grudnia 2025, Fly Studio</strong>
            </p>
            <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Zapraszam Cię na moją ulubioną sesję w roku — pełną śmiechu i zapachu pierników! ✨
            </p>
            <p class="text-base md:text-lg text-gray-600 leading-relaxed">
              Sala we Fly Studio jest już pięknie przygotowana — w minimalistycznym, ciepłym świątecznym stylu. 
              Subtelne dekoracje, miękkie światło i delikatne akcenty choinkowe tworzą idealne tło, które podkreśla emocje i bliskość.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Offer Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-bodoni-moda text-4xl md:text-5xl mb-6">Świąteczna Oferta</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            W 45 minut uchwycimy świąteczne chwile pełne ciepła, naturalności i radości.<br><br>
            Nie musisz pozować jak model — wystarczy, że przyjdziesz z otwartością i uśmiechem (resztą zajmę się ja).<br><br>
            Wyjdziesz nie tylko z pięknymi zdjęciami, ale też z lekkością w sercu i świątecznym nastrojem. ❤️<br><br>
            Do zobaczenia 14 grudnia we Fly Studio — sala czeka, a ja już nie mogę się doczekać naszego spotkania!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <!-- Pakiet Lifestyle -->
          <div class="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div class="text-center mb-6">
              <h3 class="font-bodoni-moda text-2xl mb-4">Pakiet Lifestyle</h3>
              <div class="text-3xl font-bold text-secondary mb-2">550 PLN</div>
            </div>
            <ul class="space-y-3 mb-8 flex-grow">
              <li class="flex items-start">
                <span><strong>Czas trwania sesji:</strong> 45 minut</span>
              </li>
              <li class="flex items-start">
                <span><strong>Studio w cenie:</strong> Minimalistyczne wnętrze we Fly Studio</span>
              </li>
              <li class="flex items-start">
                <span><strong>Zdjęcia w formie elektronicznej:</strong> 20 sztuk, poddanych autorskiej obróbce</span>
              </li>
              <li class="flex items-start">
                <span><strong>Pomoc w pozowaniu</strong></span>
              </li>
              <li class="flex items-start">
                <span><strong>Możliwość dokupienia fotografii wywołanych,</strong> format 15x21 cm, cena 6zł za sztukę</span>
              </li>
              <li class="flex items-start">
                <span><strong>Możliwość dokupienia fotografii w formie elektronicznej,</strong> cena 40zł za sztukę</span>
              </li>
            </ul>
            <a 
              href="https://niebieskie-aparaty.mafelo.net/pl/reserve-packet/39480" 
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full bg-secondary text-white text-center py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80"
            >
              Wybierz pakiet
            </a>
          </div>

          <!-- Pakiet Premium -->
          <div class="bg-white border-2 border-secondary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col h-full">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-secondary text-white px-4 py-2 text-sm uppercase tracking-wider rounded-full">
                Najpopularniejszy
              </span>
            </div>
            <div class="text-center mb-6">
              <h3 class="font-bodoni-moda text-2xl mb-4">Pakiet Premium</h3>
              <div class="text-3xl font-bold text-secondary mb-2">650 PLN</div>
            </div>
            <ul class="space-y-3 mb-8 flex-grow">
              <li class="flex items-start">
                <span><strong>Czas trwania sesji:</strong> 45 minut</span>
              </li>
              <li class="flex items-start">
                <span><strong>Studio w cenie:</strong> Minimalistyczne wnętrze we Fly Studio</span>
              </li>
              <li class="flex items-start">
                <span><strong>Zdjęcia w formie elektronicznej:</strong> 35 sztuk, poddanych autorskiej obróbce</span>
              </li>
              <li class="flex items-start">
                <span><strong>Indywidualny Moodboard:</strong> Przygotowanie wizualnej inspiracji i koncepcji sesji</span>
              </li>
              <li class="flex items-start">
                <span><strong>Wsparcie w doborze ubrań</strong></span>
              </li>
              <li class="flex items-start">
                <span><strong>Pomoc w pozowaniu</strong></span>
              </li>
              <li class="flex items-start">
                <span><strong>GRATIS! Zdjęcia w formie papierowej:</strong> 35 sztuk, w formacie 15x21 cm</span>
              </li>
              <li class="flex items-start">
                <span><strong>Możliwość dokupienia fotografii w formie elektronicznej,</strong> cena 30zł za sztukę</span>
              </li>
            </ul>
            <a 
              href="https://niebieskie-aparaty.mafelo.net/pl/reserve-packet/39481" 
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full bg-secondary text-white text-center py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80"
            >
              Wybierz pakiet
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-bodoni-moda text-4xl md:text-5xl mb-6">Świąteczne Wspomnienia</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz, jak wyglądają nasze świąteczne sesje i zainspiruj się do stworzenia własnych magicznych wspomnień.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385961/sesja-swiateczna-anna-migaj-1_sqiqgr.webp"
              alt="Sesja świąteczna Wrocław - naturalne zdjęcia rodzinne Anna Migaj 1"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385962/sesja-swiateczna-anna-migaj-2_ogalhf.webp"
              alt="Sesja świąteczna Wrocław - naturalne zdjęcia rodzinne Anna Migaj 2"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385962/sesja-swiateczna-anna-migaj-3_tdw4nv.webp"
              alt="Sesja świąteczna Wrocław - naturalne zdjęcia rodzinne Anna Migaj 3"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385962/sesja-swiateczna-anna-migaj-4_qclg8n.webp"
              alt="Sesja świąteczna Wrocław - naturalne zdjęcia rodzinne Anna Migaj 4"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385964/sesja-swiateczna-anna-migaj-5_x4byuf.webp"
              alt="Sesja świąteczna Wrocław - naturalne zdjęcia rodzinne Anna Migaj 5"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385962/sesja-swiateczna-anna-migaj-6_rl8wvn.webp"
              alt="Sesja swiateczna Wroclaw - para z dzieckiem - fotograf Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385962/sesja-swiateczna-anna-migaj-7_dgxca1.webp"
              alt="Zdjecia swiateczne rodzinne Wroclaw - naturalne portrety Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385964/sesja-swiateczna-anna-migaj-8_u0tzng.webp"
              alt="Swiateczna sesja fotograficzna Wroclaw - radosne chwile Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385964/sesja-swiateczna-anna-migaj-9_sm10dp.webp"
              alt="Sesja swiateczna dzieci Wroclaw - profesjonalne zdjecia Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385964/sesja-swiateczna-anna-migaj-10_lvuqvk.webp"
              alt="Fotografia swiateczna rodzinna Wroclaw - emocjonalne kadry Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385964/sesja-swiateczna-anna-migaj-11_mgpqkv.webp"
              alt="Sesja swiateczna studio Wroclaw - eleganckie portrety Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385965/sesja-swiateczna-anna-migaj-12_ho0f3o.webp"
              alt="Zdjecia swiateczne Wroclaw - rodzina przy choince Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385966/sesja-swiateczna-anna-migaj-14_pn59uz.webp"
              alt="Sesja swiateczna Wroclaw - naturalne zdjecia rodzinne Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385966/sesja-swiateczna-anna-migaj-13_vqp504.webp"
              alt="Swiateczna sesja fotograficzna Wroclaw - wesole momenty Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385966/sesja-swiateczna-anna-migaj-15_vh4pvy.webp"
              alt="Fotografia swiateczna Wroclaw - sesja z dziecmi Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385966/sesja-swiateczna-anna-migaj-16_eh0h3a.webp"
              alt="Sesja swiateczna rodzinna Wroclaw - cieplo domowe Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385967/sesja-swiateczna-anna-migaj-17_syxwkr.webp"
              alt="Zdjecia swiateczne studio Wroclaw - profesjonalna fotografia Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385967/sesja-swiateczna-anna-migaj-18_tr2nfr.webp"
              alt="Sesja swiateczna Wroclaw - magiczne wspomnienia Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385967/sesja-swiateczna-anna-migaj-19_a6agto.webp"
              alt="Fotografia swiateczna rodzinna Wroclaw - naturalne kadry Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385967/sesja-swiateczna-anna-migaj-20_vbki9w.webp"
              alt="Sesja swiateczna Wroclaw - emocjonalne portrety rodzinne Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385970/sesja-swiateczna-anna-migaj-21_amws3k.webp"
              alt="Zdjecia swiateczne rodzinne Wroclaw - radosna atmosfera Anna Migaj"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Sesje Świąteczne Wrocław 2024 - Anna Migaj Fotograf | Rezerwuj',
  description: 'Magiczne sesje świąteczne we Wrocławiu! 14 grudnia 2024 w Fly Studio. Naturalne zdjęcia pełne ciepła i radości. Pakiety od 550 zł. Zarezerwuj miejsce!',
  keywords: 'sesje świąteczne Wrocław, fotograf świąteczny Wrocław, sesja rodzinna święta, zdjęcia świąteczne 2024, Anna Migaj',
  robots: 'index, follow',
  ogTitle: 'Sesje Świąteczne Wrocław 2024 - Anna Migaj Fotograf',
  ogDescription: 'Magiczne sesje świąteczne we Wrocławiu! 14 grudnia 2024 w Fly Studio. Naturalne zdjęcia pełne ciepła i radości.',
  ogImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385961/sesja-swiateczna-anna-migaj-1_sqiqgr.webp',
  ogLocale: 'pl_PL',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sesje Świąteczne Wrocław 2024 - Anna Migaj Fotograf',
  twitterDescription: 'Magiczne sesje świąteczne we Wrocławiu! 14 grudnia 2024 w Fly Studio.',
  twitterImage: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1760385961/sesja-swiateczna-anna-migaj-1_sqiqgr.webp'
});
</script>

<style scoped>
.prose {
  @apply text-gray-800;
}

.prose h2 {
  @apply font-cormorant text-3xl mt-12 mb-6;
}

.prose p {
  @apply mb-6;
}

.prose ul {
  @apply list-disc list-inside mb-6 space-y-2;
}

.prose .lead {
  @apply text-xl text-gray-600;
}
</style>
