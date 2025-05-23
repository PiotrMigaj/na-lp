<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl mb-6">Contact Me</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Have a project in mind? I'd love to hear from you and discuss how we can work together.
        </p>
      </div>
    </section>
    
    <!-- Contact Form & Info -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Get in Touch" />
            <p class="mb-10 font-light leading-relaxed">
              Fill out the form with details about your project, and I'll get back to you as soon as possible to discuss how we can bring your vision to life.
            </p>
            
            <div class="space-y-6 mb-10">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-accent flex items-center justify-center rounded-full mr-4">
                  <Icon name="mdi:email" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-medium mb-1">Email</h3>
                  <p class="font-light text-text-light">info@niebieskie-aparaty.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 bg-accent flex items-center justify-center rounded-full mr-4">
                  <Icon name="mdi:phone" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-medium mb-1">Phone</h3>
                  <p class="font-light text-text-light">+1 (212) 555-7890</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 bg-accent flex items-center justify-center rounded-full mr-4">
                  <Icon name="mdi:map-marker" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-medium mb-1">Studio</h3>
                  <p class="font-light text-text-light">SoHo Studio, 123 Broadway</p>
                  <p class="font-light text-text-light">New York, NY 10013</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="font-medium mb-4">Connect with Me</h3>
              <div class="flex space-x-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-10 h-10 bg-accent flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Icon name="mdi:instagram" class="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-10 h-10 bg-accent flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Icon name="mdi:facebook" class="w-5 h-5" />
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-10 h-10 bg-accent flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  aria-label="Pinterest"
                >
                  <Icon name="mdi:pinterest" class="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-10 h-10 bg-accent flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Icon name="mdi:linkedin" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map -->
    <section class="pb-24">
      <div class="container mx-auto px-4">
        <div class="h-[450px] bg-accent relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9903990156354!2d-74.00340692397325!3d40.72371623818606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f7fcaa789%3A0x6256c92a55c5d6c7!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1682973712313!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Studio Location Map"
          ></iframe>
        </div>
      </div>
    </section>
    
    <!-- FAQ -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="Booking FAQ"
          subtitle="Answers to common questions about booking my services."
          class="text-center"
        />
        
        <div class="mt-12 space-y-6">
          <div 
            v-for="(faq, index) in bookingFaqs" 
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
  </div>
</template>

<script setup>
// Booking FAQs
const bookingFaqs = reactive([
  {
    question: 'What information should I include in my initial inquiry?',
    answer: 'To provide you with the most accurate quote and availability, please include: the type of project (editorial, campaign, etc.), approximate dates, location, expected deliverables, and any specific creative direction you have in mind. The more details you can provide, the better I can assess if your project is a good fit for my style and expertise.',
    open: true
  },
  {
    question: 'Do you offer rush delivery options?',
    answer: 'Yes, I offer expedited delivery for clients with tight deadlines. Rush fees vary depending on the turnaround time and project scope. For next-day delivery, a 50% rush fee applies. For 2-3 day delivery, a 25% rush fee applies. Please inquire about rush options when booking your project.',
    open: false
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Bookings cancelled more than 14 days before the shoot date are eligible for a 50% refund of the deposit. Cancellations with less than 14 days notice forfeit the deposit. For cancellations less than 48 hours before the shoot, the full fee will be charged. If I need to cancel due to illness or emergency, you will receive a full refund or the option to reschedule at no additional cost.',
    open: false
  },
  {
    question: 'Can I be present during the photo editing process?',
    answer: 'I offer the option for clients to participate in the initial editing selection process, where we can review the best shots together and discuss specific retouching requirements. For campaigns and major projects, I can arrange an in-person or virtual editing session at an additional hourly rate. This collaborative approach ensures your vision is fully realized in the final images.',
    open: false
  }
]);

useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Get in touch with NIEBIESKIE APARATY for your fashion photography needs. Contact us to discuss your project and book your session.' }
  ]
});
</script>