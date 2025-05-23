<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl mb-6">Portfolio</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          A collection of my work spanning editorial, commercial, and personal projects.
        </p>
      </div>
    </section>
    
    <!-- Portfolio Categories -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            @click="selectedCategory = null" 
            class="px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300"
            :class="selectedCategory === null ? 'bg-secondary text-white' : 'bg-accent text-secondary hover:bg-gray-200'"
          >
            All
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300"
            :class="selectedCategory === category ? 'bg-secondary text-white' : 'bg-accent text-secondary hover:bg-gray-200'"
          >
            {{ category }}
          </button>
        </div>
        
        <PortfolioGrid :items="filteredPortfolioItems" />
      </div>
    </section>
    
    <!-- Featured Project -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="Featured Project"
          subtitle="An in-depth look at one of my most recent and significant projects."
        />
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 class="font-italiana text-3xl mb-4">Ethereal Dreams</h3>
            <p class="text-text-light mb-2">Client: Haute Magazine</p>
            <p class="text-text-light mb-6">Category: Editorial</p>
            
            <p class="mb-6 font-light leading-relaxed">
              This editorial for Haute Magazine explores the boundaries between fantasy and reality, featuring couture pieces from the latest collections set against dreamlike landscapes.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              Working with a team of visionary stylists and makeup artists, we created a series of images that transport viewers to an ethereal world where fashion becomes a form of magical expression.
            </p>
            <p class="font-light leading-relaxed">
              The shoot took place over three days in locations ranging from misty forests to modernist architectural spaces, creating a visual journey that mirrors the emotional arc of the narrative.
            </p>
          </div>
          <div>
            <NuxtImg
              src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Ethereal Dreams Editorial"
              class="w-full h-[600px] object-cover"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <NuxtImg
            v-for="i in 3"
            :key="i"
            :src="`https://images.pexels.com/photos/${featuredImages[i-1]}/pexels-photo-${featuredImages[i-1]}.jpeg?auto=compress&cs=tinysrgb&w=1600`"
            :alt="`Ethereal Dreams Editorial ${i}`"
            class="w-full h-[400px] object-cover"
            width="600"
            height="400"
            format="webp"
          />
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-italiana text-4xl mb-6">Start Your Project</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Ready to create stunning visuals for your brand or publication? Let's discuss your vision and bring it to life.
        </p>
        <NuxtLink to="/contact" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Contact Me
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const selectedCategory = ref(null);

const categories = [
  'Editorial',
  'Campaign',
  'Portrait',
  'Runway',
  'Commercial'
];

const portfolioItems = [
  {
    title: 'Vogue Italia Cover',
    category: 'Editorial',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Summer Campaign',
    category: 'Campaign',
    image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Celebrity Portrait',
    category: 'Portrait',
    image: 'https://images.pexels.com/photos/2757549/pexels-photo-2757549.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Paris Fashion Week',
    category: 'Runway',
    image: 'https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Jewelry Collection',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Harper\'s Bazaar Feature',
    category: 'Editorial',
    image: 'https://images.pexels.com/photos/998687/pexels-photo-998687.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Autumn Lookbook',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Luxury Brand Campaign',
    category: 'Campaign',
    image: 'https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Model Portfolio',
    category: 'Portrait',
    image: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Milan Fashion Week',
    category: 'Runway',
    image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Elle Magazine Spread',
    category: 'Editorial',
    image: 'https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Fragrance Advertisement',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const featuredImages = [2944859, 1644888, 1926620];

const filteredPortfolioItems = computed(() => {
  if (!selectedCategory) return portfolioItems;
  return portfolioItems.filter(item => item.category === selectedCategory.value);
});

useHead({
  title: 'Portfolio',
  meta: [
    { name: 'description', content: 'Explore the portfolio of Alexandra Laurent, featuring fashion photography work for major publications, brands, and personal projects.' }
  ]
});
</script>