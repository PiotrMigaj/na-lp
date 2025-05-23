<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl mb-6">Services</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Professional photography services tailored to your specific needs and vision.
        </p>
      </div>
    </section>
    
    <!-- Services Overview -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="bg-accent p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div class="text-4xl mb-6">
              <Icon :name="service.icon" />
            </div>
            <h3 class="uppercase text-lg font-medium tracking-wide mb-4">{{ service.title }}</h3>
            <p class="text-text-light font-light mb-6">{{ service.description }}</p>
            <button @click="openServiceDetail(service)" class="text-secondary uppercase text-xs tracking-widest font-medium border-b border-secondary pb-1 hover:text-text-light hover:border-text-light transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Service Process -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="My Process"
          subtitle="How I work with clients to create stunning images that exceed expectations."
          class="text-center"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div 
            v-for="(step, index) in process" 
            :key="index"
            class="text-center relative"
          >
            <div v-if="index < process.length - 1" class="hidden md:block absolute top-16 left-1/2 w-full h-[1px] bg-secondary"></div>
            
            <div class="w-16 h-16 mx-auto bg-secondary text-primary rounded-full flex items-center justify-center text-2xl font-semibold mb-6 relative z-10">
              {{ index + 1 }}
            </div>
            
            <h3 class="uppercase text-lg font-medium tracking-wide mb-4">{{ step.title }}</h3>
            <p class="text-text-light font-light">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pricing -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="Pricing"
          subtitle="Transparent pricing options to suit projects of all sizes and requirements."
          class="text-center"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div 
            v-for="(plan, index) in pricingPlans" 
            :key="index"
            class="border border-gray-200 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            :class="{'bg-secondary text-primary border-secondary': plan.featured}"
          >
            <h3 class="uppercase text-lg font-medium tracking-wide mb-2">{{ plan.title }}</h3>
            <p class="text-text-light font-light mb-6" :class="{'text-white/70': plan.featured}">{{ plan.subtitle }}</p>
            
            <div class="mb-6">
              <span class="text-4xl font-light">{{ plan.price }}</span>
              <span class="text-text-light ml-1" :class="{'text-white/70': plan.featured}">{{ plan.unit }}</span>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li v-for="(feature, i) in plan.features" :key="i" class="font-light">
                {{ feature }}
              </li>
            </ul>
            
            <NuxtLink 
              to="/contact" 
              class="inline-block px-8 py-3 uppercase tracking-wider text-sm transition duration-300"
              :class="plan.featured ? 'bg-transparent border border-white text-white hover:bg-white hover:text-secondary' : 'bg-secondary text-primary hover:bg-opacity-80'"
            >
              Book Now
            </NuxtLink>
          </div>
        </div>
        
        <p class="text-center mt-12 text-text-light font-light">
          Need a custom package? <NuxtLink to="/contact" class="text-secondary hover:underline">Contact me</NuxtLink> for personalized solutions.
        </p>
      </div>
    </section>
    
    <!-- FAQ -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about my photography services."
          class="text-center"
        />
        
        <div class="mt-12 space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="border-b border-gray-300 pb-6"
          >
            <button 
              @click="faq.open = !faq.open"
              class="w-full text-left font-medium flex items-center justify-between focus:outline-none"
            >
              <span>{{ faq.question }}</span>
              <Icon 
                :name="faq.open ? 'heroicons:minus' : 'heroicons:plus'" 
                class="w-5 h-5 transition-transform"
              />
            </button>
            <div 
              v-if="faq.open"
              class="mt-4 font-light text-text-light"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-italiana text-4xl mb-6">Ready to Discuss Your Project?</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          I'm currently accepting bookings for projects starting from next month. Get in touch to secure your date.
        </p>
        <NuxtLink to="/contact" class="inline-block border border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-white hover:text-secondary">
          Contact Me
        </NuxtLink>
      </div>
    </section>
    
    <!-- Service Detail Modal -->
    <Teleport to="body">
      <div v-if="selectedService" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div class="bg-white max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-italiana text-2xl">{{ selectedService.title }}</h3>
            <button @click="selectedService = null" class="text-2xl">&times;</button>
          </div>
          
          <div v-if="selectedService.fullDescription" class="font-light leading-relaxed mb-6">
            <p v-for="(paragraph, index) in selectedService.fullDescription" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
          
          <div v-if="selectedService.includes">
            <h4 class="uppercase text-sm font-medium tracking-wide mb-4">What's Included</h4>
            <ul class="list-disc pl-5 space-y-2 mb-6">
              <li v-for="(item, index) in selectedService.includes" :key="index" class="font-light">
                {{ item }}
              </li>
            </ul>
          </div>
          
          <div class="text-center mt-8">
            <NuxtLink 
              to="/contact" 
              class="inline-block bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80"
              @click="selectedService = null"
            >
              Inquire About This Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const selectedService = ref(null);

const openServiceDetail = (service) => {
  selectedService.value = service;
  document.body.style.overflow = 'hidden';
};

watch(selectedService, (newVal) => {
  if (!newVal) {
    document.body.style.overflow = '';
  }
});

// Services data with full details
const services = [
  {
    title: 'Editorial Photography',
    icon: 'mdi:camera',
    description: 'Creating compelling visual stories for print and digital publications with a distinctive editorial approach.',
    fullDescription: [
      'Editorial photography is at the heart of fashion storytelling, combining artistic vision with commercial appeal to create images that inspire and engage readers.',
      'My approach to editorial work is collaborative and narrative-driven. I work closely with creative directors, stylists, and makeup artists to develop a cohesive vision that aligns with the publication\'s identity while pushing creative boundaries.',
      'Each editorial shoot is meticulously planned from concept to execution, with attention to every detail from location scouting to lighting design and post-production.'
    ],
    includes: [
      'Pre-production consultation and concept development',
      'Full-day or half-day photoshoot',
      'Professional lighting and equipment',
      'Art direction during the shoot',
      'Post-production and image retouching',
      'Final high-resolution images suitable for print and digital use',
      'Rights management and usage guidelines'
    ]
  },
  {
    title: 'Campaign Shoots',
    icon: 'mdi:shopping',
    description: 'Developing brand-aligned imagery for advertising campaigns that capture the essence of your collections.',
    fullDescription: [
      'Campaign photography is the visual cornerstone of your brand\'s marketing strategy, creating powerful images that convey your message and connect with your audience.',
      'I approach campaign work with a deep understanding of brand identity, target audience, and marketing objectives. Each image is crafted to strategically communicate your brand\'s values and vision.',
      'From concept development to final delivery, I ensure that every campaign shoot produces cohesive, impactful images that drive engagement and conversion.'
    ],
    includes: [
      'Brand consultation and campaign strategy',
      'Mood board and concept development',
      'Location scouting and securing',
      'Model casting assistance',
      'Full production team coordination',
      'Multiple look shooting (typically 8-12 looks)',
      'Comprehensive post-production',
      'High-resolution files optimized for various media',
      'Optional social media assets and format adaptation'
    ]
  },
  {
    title: 'Lookbooks',
    icon: 'mdi:book-open-page-variant',
    description: 'Showcasing your collection through meticulously crafted lookbooks that highlight details and craftsmanship.',
    fullDescription: [
      'Lookbook photography focuses on showcasing each piece in your collection with clarity and consistency, creating a visual catalog that highlights the details, fit, and craftsmanship of your designs.',
      'My approach to lookbooks balances technical precision with artistic sensibility, ensuring each garment is presented in its best light while maintaining a cohesive visual language throughout the entire collection.',
      'Whether shot in-studio against a clean backdrop or on-location with contextual elements, your lookbook will be a versatile marketing tool that serves both B2B and B2C purposes.'
    ],
    includes: [
      'Pre-production consultation',
      'Studio or location shooting',
      'Consistent lighting and styling',
      'High volume capacity (typically 20-40 looks per day)',
      'Standardized cropping and composition',
      'Basic retouching and color correction',
      'Web-ready and print-ready files',
      'Optional layflat and detail shots'
    ]
  },
  {
    title: 'Location Scouting',
    icon: 'mdi:map-marker',
    description: 'Finding the perfect backdrop for your vision through my extensive network of unique locations worldwide.',
    fullDescription: [
      'The right location can transform an ordinary photoshoot into an extraordinary visual story. My location scouting service helps you find spaces that perfectly complement your creative vision.',
      'With connections to property owners, location agencies, and unique venues across multiple cities, I can secure access to a wide range of settings from architectural landmarks to private residences and natural landscapes.',
      'This service can be booked as a standalone offering or as part of a comprehensive photography package.'
    ],
    includes: [
      'Detailed brief consultation to understand your requirements',
      'Research and preliminary location options',
      'Site visits and technical assessment',
      'Sample photos of potential locations',
      'Logistical considerations and recommendations',
      'Permit acquisition assistance',
      'Negotiation with location owners',
      'Comprehensive location deck with all pertinent information'
    ]
  },
  {
    title: 'Creative Direction',
    icon: 'mdi:lightbulb',
    description: 'Overseeing the entire creative process from concept development to final execution.',
    fullDescription: [
      'Creative direction encompasses the overall vision and artistic approach of your project, ensuring cohesion across all visual elements and storytelling components.',
      'As a creative director, I work at the intersection of photography, styling, set design, and narrative development, orchestrating all creative elements to achieve a unified and impactful result.',
      'This service is ideal for brands looking for comprehensive creative guidance across multiple assets or campaigns, ensuring visual consistency and strategic alignment.'
    ],
    includes: [
      'Brand analysis and strategic planning',
      'Concept development and art direction',
      'Visual identity refinement',
      'Mood board and visual references',
      'Team curation (stylists, makeup artists, models)',
      'Production oversight and quality control',
      'Multi-channel content strategy',
      'Comprehensive creative deck',
      'Project management and timeline development'
    ]
  },
  {
    title: 'Post-Production',
    icon: 'mdi:image-edit',
    description: 'Professional retouching and color grading services to ensure your images have that perfect finish.',
    fullDescription: [
      'Post-production is where images are refined and perfected, transforming raw photographs into polished visual assets ready for publication or marketing use.',
      'My retouching philosophy emphasizes natural enhancement rather than excessive manipulation, preserving authenticity while achieving a refined, professional finish.',
      'From color grading that establishes your visual signature to detailed retouching that ensures flawless presentation, my post-production services elevate your images to their highest potential.'
    ],
    includes: [
      'Color correction and grading',
      'Skin retouching and digital makeup enhancement',
      'Garment refinement and texture preservation',
      'Background clean-up and environmental adjustments',
      'Composition refinement and framing optimization',
      'Format adaptation for multiple platforms',
      'File delivery in various resolutions and formats',
      'Optional advanced compositing and manipulation'
    ]
  }
];

// Process steps
const process = [
  {
    title: 'Consultation',
    description: 'We discuss your vision, goals, and requirements to establish a clear creative direction.'
  },
  {
    title: 'Pre-Production',
    description: 'Detailed planning including mood boards, location scouting, and team assembly.'
  },
  {
    title: 'Shooting',
    description: 'The photoshoot day(s) where we bring the creative vision to life with precision and artistry.'
  },
  {
    title: 'Post-Production',
    description: 'Professional editing and retouching to perfect every image before final delivery.'
  }
];

// Pricing plans
const pricingPlans = [
  {
    title: 'Essential',
    subtitle: 'For smaller projects',
    price: '$1,500',
    unit: 'starting at',
    features: [
      'Half-day photoshoot (4 hours)',
      'Pre-shoot consultation',
      'One location',
      '15 fully edited images',
      'Digital delivery within 7 days',
      'Usage rights for digital platforms'
    ],
    featured: false
  },
  {
    title: 'Professional',
    subtitle: 'Most popular choice',
    price: '$3,000',
    unit: 'starting at',
    features: [
      'Full-day photoshoot (8 hours)',
      'Comprehensive pre-production',
      'Two locations',
      '30 fully edited images',
      'Digital delivery within 5 days',
      'Extended usage rights',
      'Social media optimized files'
    ],
    featured: true
  },
  {
    title: 'Premium',
    subtitle: 'For complete campaigns',
    price: '$5,500',
    unit: 'starting at',
    features: [
      'Two-day photoshoot',
      'Complete creative direction',
      'Multiple locations',
      '50+ fully edited images',
      'Priority delivery within 3 days',
      'Comprehensive usage rights',
      'Dedicated support throughout'
    ],
    featured: false
  }
];

// FAQs
const faqs = reactive([
  {
    question: 'How far in advance should I book your services?',
    answer: 'For campaign and editorial work, I recommend booking at least 6-8 weeks in advance to ensure availability and allow sufficient time for pre-production. For smaller projects, 3-4 weeks notice is usually sufficient, though I occasionally have last-minute availability.',
    open: true
  },
  {
    question: 'Do you travel for photoshoots?',
    answer: 'Yes, I am available for projects worldwide. Travel and accommodation expenses are additional to the standard photography rates and will be outlined clearly in your proposal.',
    open: false
  },
  {
    question: 'What happens if we need to reschedule due to weather or unforeseen circumstances?',
    answer: 'I understand that circumstances change. For outdoor shoots affected by weather, we can reschedule without additional fees with 24 hours notice. For other rescheduling, my policy allows one free date change with at least 7 days notice. Changes with less notice may incur a fee.',
    open: false
  },
  {
    question: 'How many final images will I receive?',
    answer: 'The number of final images depends on the package you select. Typically, a half-day shoot yields 10-15 finished images, while a full-day shoot provides 25-35 images. Custom packages can be created based on your specific needs and image requirements.',
    open: false
  },
  {
    question: 'Do you help with model casting and styling?',
    answer: 'Yes, I offer comprehensive production services including model casting, styling coordination, hair and makeup arrangement, and location scouting. These services can be included in your package or arranged à la carte based on your needs.',
    open: false
  },
  {
    question: 'What are your payment terms?',
    answer: 'I require a 50% non-refundable deposit to secure your booking, with the remaining balance due upon completion of the shoot before final image delivery. For larger projects, I offer the option of splitting the final payment into installments.',
    open: false
  }
]);

useHead({
  title: 'Services',
  meta: [
    { name: 'description', content: 'Professional fashion photography services including editorial shoots, campaigns, lookbooks, creative direction, and post-production.' }
  ]
});
</script>