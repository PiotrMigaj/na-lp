<template>
  <div>
    <!-- Hero Section -->
    <HeroCarousel />
    
    <!-- About Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="About Me"
              subtitle="I'm Alexandra Laurent, a fashion photographer with over a decade of experience collaborating with leading fashion houses, magazines, and models across the globe."
            />
            <p class="mb-6 font-light leading-relaxed">
              My work is characterized by a clean, minimalist aesthetic that emphasizes the interplay between light, shadow, and form. I believe in creating timeless images that transcend fleeting trends while capturing the essence of contemporary style.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              After studying at the Royal Academy of Arts and apprenticing with legendary photographers in Paris and Milan, I developed a distinctive visual language that combines classical composition with modern sensibilities.
            </p>
            <NuxtLink to="/about" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 mt-4">
              Learn More
            </NuxtLink>
          </div>
          <div>
            <NuxtImg
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Fashion Photographer"
              class="w-full h-[600px] object-cover"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Portfolio Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="Featured Work"
          subtitle="A selection of my recent projects showcasing my approach to fashion photography."
          class="text-center"
        />
        
        <PortfolioGrid :items="portfolioItems.slice(0, 6)" />
        
        <div class="mt-12 text-center">
          <NuxtLink to="/portfolio" class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="Services"
          subtitle="Professional photography services tailored to your specific needs and vision."
          class="text-center"
        />
        
        <ServicesGrid :services="services" />
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="Testimonials"
          subtitle="What clients say about working with me."
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
        <h2 class="font-italiana text-4xl mb-6">Ready to Create Something Beautiful?</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Let's collaborate on your next project and create images that captivate and inspire.
        </p>
        <NuxtLink to="/contact" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Professional Fashion Photography',
  meta: [
    { name: 'description', content: 'NIEBIESKIE APARATY offers professional fashion photography services, creating stunning visual content for editorial, commercial, and personal projects.' }
  ]
});

// Portfolio items data
const portfolioItems = [
  {
    title: 'Editorial for Vogue',
    category: 'EDITORIAL',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Campaign for Dior',
    category: 'CAMPAIGN',
    image: 'https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Portrait Session',
    category: 'PORTRAIT',
    image: 'https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Runway Milan',
    category: 'RUNWAY',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Couture Paris',
    category: 'COUTURE',
    image: 'https://images.pexels.com/photos/2832322/pexels-photo-2832322.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    title: 'Avant-Garde Series',
    category: 'AVANT-GARDE',
    image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

// Services data
const services = [
  {
    title: 'Editorial Photography',
    icon: 'mdi:camera',
    description: 'Creating compelling visual stories for print and digital publications with a distinctive editorial approach.'
  },
  {
    title: 'Campaign Shoots',
    icon: 'mdi:shopping',
    description: 'Developing brand-aligned imagery for advertising campaigns that capture the essence of your collections.'
  },
  {
    title: 'Lookbooks',
    icon: 'mdi:book-open-page-variant',
    description: 'Showcasing your collection through meticulously crafted lookbooks that highlight details and craftsmanship.'
  },
  {
    title: 'Location Scouting',
    icon: 'mdi:map-marker',
    description: 'Finding the perfect backdrop for your vision through my extensive network of unique locations worldwide.'
  },
  {
    title: 'Creative Direction',
    icon: 'mdi:lightbulb',
    description: 'Overseeing the entire creative process from concept development to final execution.'
  },
  {
    title: 'Post-Production',
    icon: 'mdi:image-edit',
    description: 'Professional retouching and color grading services to ensure your images have that perfect finish.'
  }
];

// Testimonials data
const testimonials = [
  {
    quote: '"Alexandra\'s ability to capture the essence of our collection was remarkable. Her vision elevated our brand to new heights."',
    author: 'Marie Laurent',
    role: 'Creative Director, Maison Lumière'
  },
  {
    quote: '"Working with Alexandra was effortless. Her technical skill combined with her artistic eye resulted in images that exceeded our expectations."',
    author: 'James Richardson',
    role: 'Editor-in-Chief, FACADE Magazine'
  },
  {
    quote: '"Alexandra brings a unique perspective to every project. Her work for our campaign resonated deeply with our audience and increased engagement."',
    author: 'Sophia Chen',
    role: 'Marketing Director, NOVA Fashion'
  }
];
</script>