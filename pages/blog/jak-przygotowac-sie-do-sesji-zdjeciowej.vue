<template>
  <article class="container mx-auto px-4 py-16 max-w-4xl">
    <header class="mb-12">
      <h1 class="font-italiana text-4xl md:text-5xl mb-6">Jak przygotować się do sesji zdjęciowej</h1>
      <div class="flex items-center text-text-light mb-8">
        <span>15 marca 2024</span>
        <span class="mx-2">•</span>
        <span>10 minut czytania</span>
      </div>
      <div class="relative h-[400px] md:h-[600px] overflow-hidden mb-12">
        <NuxtImg 
          src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249618/blog-preparation-1_dgl2mi.webp"
          alt="Przygotowanie do sesji fotograficznej"
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
      <p class="lead">
        Udana sesja zdjęciowa zaczyna się na długo przed tym, jak staniesz przed obiektywem. 
        Odpowiednie przygotowanie to klucz do tego, aby wyglądać i czuć się świetnie, 
        a fotograf z Wrocławia mógł uchwycić autentyczne chwile, które będą dla Ciebie pamiątką na lata.
      </p>

      <h2>1. Zaplanuj swoją sesję</h2>
      <p>
        Zastanów się, jaki efekt chcesz uzyskać — czy będzie to sesja biznesowa, rodzinna, 
        narzeczeńska, a może kreatywna sesja modowa? Każdy rodzaj zdjęć wymaga innego podejścia i stylizacji. 
        Fotograf we Wrocławiu może pomóc dobrać odpowiedni klimat i lokalizację.
      </p>

      <div class="my-8 p-6 bg-accent/10">
        <h3 class="text-xl font-semibold mb-4">Szybka checklista:</h3>
        <ul class="space-y-2">
          <li>✓ Wybierz typ i styl sesji</li>
          <li>✓ Przygotuj 2–3 zestawy ubrań</li>
          <li>✓ Zaplanuj fryzurę i makijaż</li>
          <li>✓ Wyśpij się przed sesją</li>
          <li>✓ Nawadniaj się</li>
        </ul>
      </div>

      <h2>2. Dobór ubrań</h2>
      <p>
        Ubranie ma ogromny wpływ na efekt końcowy zdjęć. Kilka wskazówek:
      </p>
      <ul>
        <li>Postaw na jednolite kolory lub delikatne wzory dopasowane do Twojej karnacji</li>
        <li>Unikaj dużych logotypów i jaskrawych wzorów</li>
        <li>Uwzględnij lokalizację (np. Wrocław – rynek, park, industrialne przestrzenie)</li>
        <li>Weź kilka opcji – da to większą różnorodność na zdjęciach</li>
      </ul>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="relative h-84 overflow-hidden">
          <NuxtImg 
            src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249618/blog-preparation-2_iiywwa.webp"
            alt="Przykład stylizacji na sesję"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="relative h-84 overflow-hidden">
          <NuxtImg 
            src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249618/blog-preparation-3_dqtbxp.webp"
            alt="Wybór lokalizacji na sesję we Wrocławiu"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <h2>3. Fryzura i makijaż</h2>
      <p>
        Profesjonalny makijaż i uczesanie znacząco wpływają na efekt zdjęć. Warto:
      </p>
      <ul>
        <li>Umówić się na fryzjera 1–2 dni przed sesją</li>
        <li>Makijaż powinien być naturalny, ale wyrazisty</li>
        <li>Zabrać ze sobą produkty do poprawek (szczególnie przy dłuższej sesji)</li>
        <li>Na wyjątkowe okazje rozważ współpracę z wizażystką</li>
      </ul>

      <h2>4. Dzień sesji zdjęciowej</h2>
      <p>
        W dniu sesji warto pamiętać o kilku rzeczach:
      </p>
      <ul>
        <li>Bądź 15 minut wcześniej, aby się oswoić z miejscem</li>
        <li>Weź ze sobą rekwizyty, które mają dla Ciebie znaczenie</li>
        <li>Zaufaj fotografowi – jego wskazówki naprawdę działają</li>
        <li>Bądź sobą i baw się dobrze!</li>
      </ul>

      <div class="my-8 p-6 bg-secondary/10">
        <h3 class="text-xl font-semibold mb-4">Wskazówka:</h3>
        <p>
          Poćwicz przed lustrem mimikę i pozy – to pomoże Ci poczuć się pewniej i naturalnie podczas zdjęć.
        </p>
      </div>

      <h2>5. Po sesji</h2>
      <p>
        Po zakończeniu zdjęć proces jeszcze się nie kończy:
      </p>
      <ul>
        <li>Fotograf wybierze i profesjonalnie obrobi najlepsze ujęcia</li>
        <li>Otrzymasz galerię online do wyboru ulubionych zdjęć</li>
        <li>Wybrane zdjęcia zostaną poddane retuszowi</li>
        <li>Gotowe fotografie dostarczone będą w wysokiej rozdzielczości</li>
      </ul>

      <div class="mt-12 pt-8 border-t">
        <h3 class="text-2xl font-italiana mb-4">Gotowa/y na swoją sesję we Wrocławiu?</h3>
        <p>
          Teraz, gdy wiesz już, jak się przygotować, czas umówić swoją sesję zdjęciową. 
          Skontaktuj się z nami, aby omówić swoją wizję i zarezerwować dogodny termin.
        </p>
        <NuxtLink 
          to="/kontakt" 
          class="inline-block mt-6 bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80"
        >
          Zarezerwuj sesję
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
useSeoMeta({
  title: 'Jak przygotować się do sesji zdjęciowej – Fotograf Wrocław',
  description: 'Dowiedz się, jak przygotować się do sesji zdjęciowej we Wrocławiu. Poznaj sprawdzone porady dotyczące stylizacji, makijażu i atmosfery przed obiektywem.',
  ogTitle: 'Jak przygotować się do sesji zdjęciowej – Fotograf Wrocław',
  ogDescription: 'Praktyczne porady jak przygotować się do sesji zdjęciowej we Wrocławiu. Stylizacje, lokalizacje, atmosfera – zaufaj profesjonaliście.',
  ogImage: 'https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg',
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
