<template>
  <div class="relative">
    <!-- Loading Overlay --> 
    <div v-if="isLoading" 
         class="absolute inset-0 bg-white flex items-center justify-center z-50"
         style="height: calc(100vh - 76px);">
      <div class="text-center text-black">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
        <p class="text-sm tracking-wider opacity-80">Ładowanie...</p>
      </div>
    </div>

    <!-- Carousel -->
    <div class="relative overflow-hidden" 
         style="height: calc(100vh - 76px);"
         :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }"
         :style="{ transition: 'opacity 0.8s ease-in-out' }">
      <div class="carousel-track flex transition-transform duration-600 h-full"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index"
          class="carousel-slide w-full h-full flex-shrink-0 bg-center bg-cover relative">
          <div class="absolute inset-0">
            <NuxtImg 
              :src="slide.image" 
              :alt="slide.title" 
              class="w-full h-full object-cover transition-opacity duration-700"
              :class="{ 
                'opacity-0': !imageLoaded[index], 
                'opacity-100': imageLoaded[index] 
              }"
              loading="eager" 
              @load="onImageLoad(index)"
              @error="onImageError(index)"
            />
            <!-- Image loading placeholder -->
            <div v-if="!imageLoaded[index]" 
                 class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
              <div class="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
          <div class="absolute inset-0 bg-black/50 flex items-center justify-center"
               :class="{ 
                 'opacity-0': !imageLoaded[index], 
                 'opacity-100': imageLoaded[index] 
               }"
               :style="{ transition: 'opacity 0.8s ease-in-out 0.3s' }">
            <div class="text-center text-white max-w-3xl px-4 transform"
                 :class="{ 
                   'translate-y-8 opacity-0': !imageLoaded[index], 
                   'translate-y-0 opacity-100': imageLoaded[index] 
                 }"
                 :style="{ transition: 'all 1s ease-out 0.6s' }">
              <h1 class="font-cormorant text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wider">{{ slide.title }}</h1>
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
        class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors duration-300 opacity-0"
        :class="{ 'opacity-100': !isLoading }"
        :style="{ transition: 'opacity 0.5s ease-in-out 1s' }"
        aria-label="Previous slide">
        <Icon name="heroicons:chevron-left" class="w-6 h-6" />
      </button>

      <button @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors duration-300 opacity-0"
        :class="{ 'opacity-100': !isLoading }"
        :style="{ transition: 'opacity 0.5s ease-in-out 1s' }"
        aria-label="Next slide">
        <Icon name="heroicons:chevron-right" class="w-6 h-6" />
      </button>

      <!-- Indicators -->
      <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 opacity-0"
           :class="{ 'opacity-100': !isLoading }"
           :style="{ transition: 'opacity 0.5s ease-in-out 1.2s' }">
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
const isLoading = ref(true);
const imageLoaded = ref({});
const loadedCount = ref(0);

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

// Preload images progressively
const preloadImages = () => {
  slides.forEach((slide, index) => {
    const img = new Image();
    img.onload = () => {
      onImageLoad(index);
    };
    img.onerror = () => {
      onImageError(index);
    };
    img.src = slide.image;
  });
};

const onImageLoad = (index) => {
  imageLoaded.value[index] = true;
  loadedCount.value++;
  
  // Hide loading screen once first image is loaded
  if (index === 0 && isLoading.value) {
    checkInitialLoad();
  }
};

const onImageError = (index) => {
  console.warn(`Failed to load image for slide ${index}`);
  imageLoaded.value[index] = true; // Show placeholder
  loadedCount.value++;
  
  if (index === 0 && isLoading.value) {
    checkInitialLoad();
  }
};

const checkInitialLoad = () => {
  if (imageLoaded.value[0]) {
    setTimeout(() => {
      isLoading.value = false;
      // Start autoplay after initial load animation completes
      setTimeout(() => {
        startAutoplay();
      }, 1500);
    }, 300);
  }
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
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

// Initialize image loading states
const initializeImageStates = () => {
  slides.forEach((_, index) => {
    imageLoaded.value[index] = false;
  });
};

onMounted(() => {
  initializeImageStates();
  preloadImages();
});

onBeforeUnmount(() => {
  stopAutoplay();
});

// Watch for active index changes to preload nearby images
watch(activeIndex, (newIndex) => {
  // Preload next image if not already loaded
  const nextIndex = (newIndex + 1) % slides.length;
  if (!imageLoaded.value[nextIndex]) {
    const img = new Image();
    img.onload = () => onImageLoad(nextIndex);
    img.onerror = () => onImageError(nextIndex);
    img.src = slides[nextIndex].image;
  }
});
</script>

<style scoped>
.carousel-track {
  will-change: transform;
}

.carousel-slide {
  transition: transform 0.6s ease-in-out;
}

/* Smooth loading animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Loading spinner animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Pulse animation for placeholder */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@media (max-width: 768px) {
  .carousel-slide {
    min-height: 500px;
  }
}
</style>