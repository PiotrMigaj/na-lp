<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl mb-6">O mnie</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Poznaj historię mojej drogi twórczej i pasji do fotografii, która łączy w sobie estetykę, relacje i uważność.
        </p>
      </div>
    </section>

    <!-- Photographer Bio -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <NuxtImg src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249189/anna-migaj-fotograf_rncd8m.webp" alt="Anna Migaj – Fotograf"
              class="w-full h-[800px] object-cover" width="800" height="800" format="webp" />
          </div>
          <div>
            <SectionHeader title="Kim jestem" />
            <p class="mb-6 font-light leading-relaxed">
              Nazywam się Anna Migaj i od kilku lat zajmuję się fotografią. Z wykształcenia jestem architektką –
              zamiłowanie do estetyki, harmonii i detalu od zawsze towarzyszyło mojej pracy twórczej.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Studiowałam architekturę i współpracowałam z osobami kreatywnymi z różnych branż. Dziś łączę te
              doświadczenia z miłością do pracy z ludźmi. Wierzę, że dobra fotografia rodzi się z uważności, wzajemnego
              zaufania i prawdziwej relacji.
            </p>
            <p class="font-light leading-relaxed">
              Moje zdjęcia charakteryzują się minimalistycznym stylem, w którym światło i forma odgrywają kluczową rolę.
              Tworzę kadry ponadczasowe – subtelne, ale pełne znaczenia – uchwycające naturalne piękno i osobowość
              fotografowanej osoby.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader title="Moje podejście" />
            <p class="mb-6 font-light leading-relaxed">
              Wierzę, że dobra fotografia to połączenie technicznej precyzji i artystycznej wrażliwości. Kluczowe są dla
              mnie światło, kompozycja i emocje, które sprawiają, że zdjęcia zostają w pamięci.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              W pracy kieruję się uważnością, zaufaniem i szacunkiem do osoby fotografowanej. To właśnie prawdziwa
              relacja i wzajemne zrozumienie sprawiają, że powstają najpiękniejsze kadry.
            </p>
            <p class="font-light leading-relaxed">
              Najlepsze efekty osiągam, gdy w projekcie uczestniczą zaangażowane osoby – klienci, modele, styliści,
              twórcy. Każdy wnosi coś unikalnego, a wspólna wizja staje się rzeczywistością.
            </p>
          </div>
          <div>
            <NuxtImg
              src="https://res.cloudinary.com/drbgrfsbo/image/upload/v1750249188/o-mnie-anna-migaj-fotograf_pghi8g.webp"
              alt="Filozofia fotografii" class="w-full h-[600px] object-cover" width="800" height="600" format="webp" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-italiana text-4xl mb-6">Stwórzmy razem coś pięknego</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Porozmawiajmy o Twoim projekcie – wspólnie stworzymy fotografie, które zachwycają i zostają w pamięci.
        </p>
        <NuxtLink to="/kontakt"
          class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Skontaktuj się ze mną
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'O mnie – Anna Migaj',
  meta: [
    { name: 'description', content: 'Poznaj Annę Migaj – fotografkę z wykształceniem architektonicznym, która łączy wrażliwość estetyczną z pasją do pracy z ludźmi.' }
  ]
});
</script>
