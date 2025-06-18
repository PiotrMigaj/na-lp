<template>
  <div class="relative">
    <!-- Carousel -->
    <div class="relative overflow-hidden" style="height: calc(100vh - 76px);">
      <div class="carousel-track flex transition-transform duration-600 h-full"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index"
          class="carousel-slide w-full h-full flex-shrink-0 bg-center bg-cover relative">
          <div class="absolute inset-0">
            <NuxtImg :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" loading="eager" />
          </div>
          <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div class="text-center text-white max-w-3xl px-4">
              <h1 class="font-italiana text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wider">{{ slide.title }}</h1>
              <p class="font-light text-base md:text-lg lg:text-xl mb-8 tracking-wide max-w-2xl mx-auto">{{
                slide.description }}</p>
              <NuxtLink :to="slide.buttonLink"
                class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
                {{ slide.buttonText }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors duration-300"
        aria-label="Previous slide">
        <Icon name="heroicons:chevron-left" class="w-6 h-6" />
      </button>

      <button @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors duration-300"
        aria-label="Next slide">
        <Icon name="heroicons:chevron-right" class="w-6 h-6" />
      </button>

      <!-- Indicators -->
      <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        <button v-for="(_, index) in slides" :key="index" @click="goToSlide(index)"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="activeIndex === index ? 'bg-white w-6' : 'bg-white/50'"
          :aria-label="`Go to slide ${index + 1}`"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeIndex = ref(0);
const autoplayInterval = ref(null);

const slides = [
  {
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750240182/sesja-fashion-marta_e7r1mn.webp',
    title: 'Uchwycić Piękno w Każdym Kadrze',
    description: 'Specjalizuję się w fotografii mody najwyższej jakości, tworząc opowieści i podkreślając Twoją unikalną wizję.',
    buttonText: 'Zobacz portfolio',
    buttonLink: '/portfolio'
  },
  {
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750240194/sesja-zmyslowa_wjbi8h.webp',
    title: 'Kierunek Artystyczny i Stylizacja',
    description: 'Od koncepcji po realizację – ożywiam modowe historie z dbałością o każdy detal.',
    buttonText: 'Nasze usługi',
    buttonLink: '/portfolio'
  },
  {
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750240205/sesja-plenerowa_wjdgoo.webp',
    title: 'Doskonale Edytoriale',
    description: 'Tworzę klimatyczne i estetyczne sesje zdjęciowe inspirowane modą i sztuką.',
    buttonText: 'O mnie',
    buttonLink: '/o-mnie'
  },
  {
    image: 'https://res.cloudinary.com/drbgrfsbo/image/upload/v1750240221/sesja-zmyslowa-madzia_itabli.webp',
    title: 'Stwórzmy Coś Razem',
    description: 'Masz pomysł na projekt? Z przyjemnością pomogę zrealizować Twoją wizję.',
    buttonText: 'Skontaktuj się',
    buttonLink: '/kontakt'
  }
];

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
  activeIndex.value = index;
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<style scoped>
.carousel-track {
  will-change: transform;
}

.carousel-slide {
  transition: transform 0.6s ease-in-out;
}

@media (max-width: 768px) {
  .carousel-slide {
    min-height: 500px;
  }
}
</style>