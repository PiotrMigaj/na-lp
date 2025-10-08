<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-red-50 to-green-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="font-italiana text-5xl md:text-6xl lg:text-7xl mb-8 tracking-wider text-gray-800">
            🎄 Sesje Świąteczne 🎅
          </h1>
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              <strong>🎄 Świąteczna Sesja Zdjęciowa we Wrocławiu – 14 grudnia 2025, Fly Studio 🎅</strong>
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
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Świąteczna Oferta</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Podczas 45 minut wspólnie stworzymy kadry pełne ciepła, naturalności i świątecznej radości.<br><br>
            Nie musisz pozować jak model — wystarczy, że przyjdziesz z dobrym humorem (a jeśli go zapomnisz, spokojnie, mam sposoby, żeby go szybko odnaleźć 😉).<br><br>
            Zadbam o to, byś wyszedł z sesji nie tylko z pięknymi zdjęciami, ale też z lekkim sercem i uśmiechem, który zostanie z Tobą na długo. ❤️<br><br>
            Do zobaczenia 14 grudnia we Fly Studio — sala już czeka, a ja nie mogę się doczekać spotkania! 🎁✨
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <!-- Pakiet Lifestyle -->
          <div class="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <h3 class="font-italiana text-2xl mb-4">Pakiet Lifestyle</h3>
              <div class="text-3xl font-bold text-secondary mb-2">550 PLN</div>
              <p class="text-gray-600">45 minut</p>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Czas trwania sesji:</strong> 45 minut</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Zdjęcia w formie elektronicznej:</strong> 20 sztuk, poddanych autorskiej obróbce</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Indywidualny Moodboard:</strong> Przygotowanie wizualnej inspiracji i koncepcji sesji</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Pomoc w stylizacji:</strong> Wsparcie w doborze ubrań i akcesoriów</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Pomoc w pozowaniu:</strong> Instrukcje i wskazówki, jak ustawiać się podczas sesji</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Opcja dodatkowa:</strong> Możliwość dokupienia fotografii wywołanych (wydruków)</span>
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
          <div class="bg-white border-2 border-secondary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-secondary text-white px-4 py-2 text-sm uppercase tracking-wider rounded-full">
                Najpopularniejszy
              </span>
            </div>
            <div class="text-center mb-6">
              <h3 class="font-italiana text-2xl mb-4">Pakiet Premium</h3>
              <div class="text-3xl font-bold text-secondary mb-2">650 PLN</div>
              <p class="text-gray-600">45 minut</p>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Czas trwania sesji:</strong> 45 minut</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Zdjęcia w formie elektronicznej:</strong> 35 sztuk, poddanych autorskiej obróbce</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Indywidualny Moodboard:</strong> Przygotowanie wizualnej inspiracji i koncepcji sesji</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Pomoc w stylizacji:</strong> Wsparcie w doborze ubrań i akcesoriów</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Pomoc w pozowaniu:</strong> Instrukcje i wskazówki, jak ustawiać się podczas sesji</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Opcja dodatkowa:</strong> Możliwość dokupienia fotografii wywołanych (wydruków)</span>
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
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Świąteczne Wspomnienia</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz, jak wyglądają nasze świąteczne sesje i zainspiruj się do stworzenia własnych magicznych wspomnień.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869724/sesja-swiateczna-1_cczfot.webp"
              alt="Świąteczna sesja rodzinna"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869723/sesja-swiateczna-2_h4c8vy.webp"
              alt="Dzieci przy choince"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869724/sesja-swiateczna-3_csx81h.webp"
              alt="Świąteczne portrety"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869724/sesja-swiateczna-4_akzcng.webp"
              alt="Rodzina przy kominku"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869725/sesja-swiateczna-5_lqsyy4.webp"
              alt="Świąteczne dekoracje"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869725/sesja-swiateczna-6_yflvb2.webp"
              alt="Magia świąt"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869725/sesja-swiateczna-7_piuqti.webp"
              alt="Świąteczne wspomnienia"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869725/sesja-swiateczna-8_bg9b80.webp"
              alt="Rodzinne chwile"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869724/sesja-swiateczna-9_oajbhu.webp"
              alt="Świąteczna atmosfera"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869724/sesja-swiateczna-10_dnmo07.webp"
              alt="Ciepłe chwile"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869725/sesja-swiateczna-11_dccxtv.webp"
              alt="Świąteczne emocje"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="800"
              format="webp"
            />
          </div>
          <div class="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <NuxtImg 
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1759869725/sesja-swiateczna-12_x6ch0f.webp"
              alt="Magiczne wspomnienia"
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

    <!-- What's Included Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-italiana text-4xl md:text-5xl mb-6">Co Zawiera Sesja</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Każda świąteczna sesja to kompleksowa usługa, która zapewni Ci piękne wspomnienia na lata.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:camera" class="w-8 h-8 text-secondary" />
            </div>
            <h3 class="font-italiana text-xl mb-4">Profesjonalne Zdjęcia</h3>
            <p class="text-gray-600">
              Wysokiej jakości fotografie wykonane profesjonalnym sprzętem w pięknych lokalizacjach.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:sparkles" class="w-8 h-8 text-secondary" />
            </div>
            <h3 class="font-italiana text-xl mb-4">Świąteczne Rekwizyty</h3>
            <p class="text-gray-600">
              Dostęp do pięknych świątecznych rekwizytów, dekoracji i akcesoriów.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:photo" class="w-8 h-8 text-secondary" />
            </div>
            <h3 class="font-italiana text-xl mb-4">Profesjonalna Edycja</h3>
            <p class="text-gray-600">
              Każde zdjęcie jest starannie wyselekcjonowane i profesjonalnie edytowane.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="heroicons:cloud-arrow-down" class="w-8 h-8 text-secondary" />
            </div>
            <h3 class="font-italiana text-xl mb-4">Szybka Dostawa</h3>
            <p class="text-gray-600">
              Gotowe zdjęcia otrzymasz w ciągu 7-10 dni roboczych w wysokiej rozdzielczości.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Świąteczne Sesje Zdjęciowe – Fotograf Wrocław | Niebieskie Aparaty',
  description: 'Uchwyć magię świąt w pięknych, rodzinnych zdjęciach. Specjalne sesje świąteczne dla całej rodziny we Wrocławiu. Zarezerwuj swoją świąteczną sesję już dziś!',
  ogTitle: 'Świąteczne Sesje Zdjęciowe – Fotograf Wrocław',
  ogDescription: 'Uchwyć magię świąt w pięknych, rodzinnych zdjęciach. Specjalne sesje świąteczne dla całej rodziny we Wrocławiu.',
  ogImage: 'https://picsum.photos/1200/630?random=christmas-og',
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
.prose {
  @apply text-gray-800;
}

.prose h2 {
  @apply font-italiana text-3xl mt-12 mb-6;
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
