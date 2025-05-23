<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl mb-6">About Me</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          The story behind my passion for fashion photography and the creative journey that shaped my artistic vision.
        </p>
      </div>
    </section>
    
    <!-- Photographer Bio -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <NuxtImg
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Alexandra Laurent - Fashion Photographer"
              class="w-full h-[600px] object-cover"
              width="800"
              height="600"
              format="webp"
            />
          </div>
          <div>
            <SectionHeader title="Meet Alexandra Laurent" />
            <p class="mb-6 font-light leading-relaxed">
              With over a decade of experience in the fashion photography industry, I've had the privilege of working with some of the most prestigious brands and publications around the world.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              My journey began at the Royal Academy of Arts, where I developed a strong foundation in classical photography techniques. After graduating, I apprenticed with legendary photographers in Paris and Milan, where I refined my skills and developed my distinctive visual language.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              What sets my work apart is the emphasis on creating a narrative that goes beyond just showcasing garments. Each photo tells a story, evokes an emotion, and captures a moment that feels both timeless and contemporary.
            </p>
            <p class="font-light leading-relaxed">
              When I'm not behind the camera, you can find me traveling the world in search of new inspiration, attending art exhibitions, or mentoring emerging photographers who share my passion for visual storytelling.
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
            <SectionHeader title="My Philosophy" />
            <p class="mb-6 font-light leading-relaxed">
              I believe that great fashion photography exists at the intersection of technical precision and artistic intuition. My approach combines meticulous attention to detail with an openness to the unexpected moments that often create the most compelling images.
            </p>
            <p class="mb-6 font-light leading-relaxed">
              For me, photography is not just about documenting clothes—it's about creating a mood, a feeling, and a world that viewers want to step into. It's about finding beauty in both the extraordinary and the everyday, and using light, composition, and narrative to create images that resonate.
            </p>
            <p class="font-light leading-relaxed">
              I value collaboration above all else. My best work happens when there's a true partnership with clients, models, stylists, and other creatives. When we all bring our unique perspectives to the table, magic happens.
            </p>
          </div>
          <div>
            <NuxtImg
              src="https://images.pexels.com/photos/3808012/pexels-photo-3808012.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Photography Philosophy"
              class="w-full h-[600px] object-cover"
              width="800"
              height="600"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experience -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="Experience & Achievements"
          subtitle="A glimpse into my professional journey and career milestones."
          class="text-center"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div class="border-l-2 border-secondary pl-8 py-2 relative">
            <div class="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-6"></div>
            <h3 class="font-italiana text-2xl mb-2">Education</h3>
            <ul class="space-y-4 font-light">
              <li>
                <p class="font-medium">Royal Academy of Arts</p>
                <p>Master of Fine Arts in Photography</p>
                <p class="text-text-light">2010 - 2012</p>
              </li>
              <li>
                <p class="font-medium">London College of Fashion</p>
                <p>Bachelor of Arts in Fashion Photography</p>
                <p class="text-text-light">2006 - 2010</p>
              </li>
              <li>
                <p class="font-medium">International Center of Photography</p>
                <p>Summer Intensive Program</p>
                <p class="text-text-light">2005</p>
              </li>
            </ul>
          </div>
          
          <div class="border-l-2 border-secondary pl-8 py-2 relative">
            <div class="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-6"></div>
            <h3 class="font-italiana text-2xl mb-2">Professional Experience</h3>
            <ul class="space-y-4 font-light">
              <li>
                <p class="font-medium">Freelance Fashion Photographer</p>
                <p>International Clients</p>
                <p class="text-text-light">2015 - Present</p>
              </li>
              <li>
                <p class="font-medium">FACADE Magazine</p>
                <p>Lead Photographer</p>
                <p class="text-text-light">2013 - 2015</p>
              </li>
              <li>
                <p class="font-medium">Studio Lumière</p>
                <p>Associate Photographer</p>
                <p class="text-text-light">2012 - 2013</p>
              </li>
            </ul>
          </div>
          
          <div class="border-l-2 border-secondary pl-8 py-2 relative">
            <div class="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-6"></div>
            <h3 class="font-italiana text-2xl mb-2">Publications</h3>
            <ul class="space-y-4 font-light">
              <li>
                <p class="font-medium">Vogue</p>
                <p>Regular contributor to Paris, Milan, and New York editions</p>
                <p class="text-text-light">2016 - Present</p>
              </li>
              <li>
                <p class="font-medium">Harper's Bazaar</p>
                <p>Featured photographer</p>
                <p class="text-text-light">2018 - Present</p>
              </li>
              <li>
                <p class="font-medium">Elle</p>
                <p>Cover shoots and fashion editorials</p>
                <p class="text-text-light">2015 - Present</p>
              </li>
            </ul>
          </div>
          
          <div class="border-l-2 border-secondary pl-8 py-2 relative">
            <div class="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-6"></div>
            <h3 class="font-italiana text-2xl mb-2">Awards & Recognition</h3>
            <ul class="space-y-4 font-light">
              <li>
                <p class="font-medium">International Photography Awards</p>
                <p>Gold in Fashion Category</p>
                <p class="text-text-light">2022</p>
              </li>
              <li>
                <p class="font-medium">Fashion Photographer of the Year</p>
                <p>MODA Awards</p>
                <p class="text-text-light">2021</p>
              </li>
              <li>
                <p class="font-medium">Young Talent Award</p>
                <p>Paris Photo Festival</p>
                <p class="text-text-light">2016</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4">
        <SectionHeader 
          title="My Team"
          subtitle="I work with a talented group of professionals who help bring creative visions to life."
          class="text-center"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div class="text-center">
            <div class="mb-6 relative">
              <NuxtImg
                src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Emma Rodriguez"
                class="w-full h-[300px] object-cover"
                width="300"
                height="300"
                format="webp"
              />
            </div>
            <h3 class="font-italiana text-xl mb-1">Emma Rodriguez</h3>
            <p class="text-text-light">Stylist</p>
          </div>
          
          <div class="text-center">
            <div class="mb-6 relative">
              <NuxtImg
                src="https://images.pexels.com/photos/3771826/pexels-photo-3771826.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Michael Chen"
                class="w-full h-[300px] object-cover"
                width="300"
                height="300"
                format="webp"
              />
            </div>
            <h3 class="font-italiana text-xl mb-1">Michael Chen</h3>
            <p class="text-text-light">Lighting Director</p>
          </div>
          
          <div class="text-center">
            <div class="mb-6 relative">
              <NuxtImg
                src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Sophia James"
                class="w-full h-[300px] object-cover"
                width="300"
                height="300"
                format="webp"
              />
            </div>
            <h3 class="font-italiana text-xl mb-1">Sophia James</h3>
            <p class="text-text-light">Makeup Artist</p>
          </div>
          
          <div class="text-center">
            <div class="mb-6 relative">
              <NuxtImg
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="David Wilson"
                class="w-full h-[300px] object-cover"
                width="300"
                height="300"
                format="webp"
              />
            </div>
            <h3 class="font-italiana text-xl mb-1">David Wilson</h3>
            <p class="text-text-light">Digital Retoucher</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-secondary text-primary text-center">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="font-italiana text-4xl mb-6">Let's Work Together</h2>
        <p class="font-light text-lg mb-10 leading-relaxed">
          Have a project in mind? Whether it's a campaign, editorial, or personal project, I'd love to hear about it.
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
  title: 'About Me',
  meta: [
    { name: 'description', content: 'Learn about Alexandra Laurent, a fashion photographer with over a decade of experience working with leading fashion houses and publications worldwide.' }
  ]
});
</script>