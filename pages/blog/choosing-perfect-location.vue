<template>
  <article class="container mx-auto px-4 py-16 max-w-4xl">
    <header class="mb-12">
      <h1 class="font-italiana text-4xl md:text-5xl mb-6">Choosing the Perfect Location for Your Shoot</h1>
      <div class="flex items-center text-text-light mb-8">
        <span>March 10, 2024</span>
        <span class="mx-2">•</span>
        <span>8 min read</span>
      </div>
      <div class="relative h-[400px] md:h-[500px] overflow-hidden mb-12">
        <NuxtImg 
          src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Photography location scouting"
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
      <p class="lead">
        The location of your photoshoot can make or break the final results. A well-chosen location 
        not only enhances your photos but also helps tell your story and create the perfect atmosphere 
        for your vision.
      </p>

      <h2>1. Understanding Location Types</h2>
      <p>
        Different types of locations serve different purposes in photography. Here's a breakdown of 
        popular location types and their best uses:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-6 bg-accent/10">
          <h3 class="text-xl font-semibold mb-4">Urban Locations</h3>
          <ul class="space-y-2">
            <li>City streets and alleys</li>
            <li>Architectural landmarks</li>
            <li>Urban parks</li>
            <li>Industrial areas</li>
          </ul>
        </div>
        <div class="p-6 bg-accent/10">
          <h3 class="text-xl font-semibold mb-4">Natural Settings</h3>
          <ul class="space-y-2">
            <li>Beaches and coastlines</li>
            <li>Forests and woodlands</li>
            <li>Mountain landscapes</li>
            <li>Open fields</li>
          </ul>
        </div>
      </div>

      <h2>2. Factors to Consider</h2>
      <p>
        When selecting a location, consider these important factors:
      </p>
      <ul>
        <li>Lighting conditions and time of day</li>
        <li>Accessibility and parking</li>
        <li>Permits and permissions required</li>
        <li>Weather considerations</li>
        <li>Privacy and crowds</li>
      </ul>

      <div class="my-8 p-6 bg-secondary/10">
        <h3 class="text-xl font-semibold mb-4">Pro Tip:</h3>
        <p>
          Visit your chosen location at the same time of day as your planned shoot to assess 
          lighting conditions and potential challenges.
        </p>
      </div>

      <h2>3. Location Scouting Checklist</h2>
      <p>
        Before finalizing your location, make sure to:
      </p>
      <ul>
        <li>Check for multiple shooting spots within the location</li>
        <li>Assess background options and potential distractions</li>
        <li>Note any safety concerns</li>
        <li>Consider backup locations in case of weather issues</li>
        <li>Verify any necessary permits or permissions</li>
      </ul>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="relative h-64 overflow-hidden">
          <NuxtImg 
            src="https://images.pexels.com/photos/1375883/pexels-photo-1375883.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Urban location example"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="relative h-64 overflow-hidden">
          <NuxtImg 
            src="https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Natural setting example"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <h2>4. Working with Your Photographer</h2>
      <p>
        Your photographer can be a valuable resource in location selection. They can:
      </p>
      <ul>
        <li>Suggest locations based on your vision</li>
        <li>Provide insights about lighting and composition</li>
        <li>Help secure necessary permits</li>
        <li>Recommend backup locations</li>
      </ul>

      <h2>5. Making the Most of Your Location</h2>
      <p>
        Once you've chosen your location, here are some tips to maximize its potential:
      </p>
      <ul>
        <li>Arrive early to scout the best spots</li>
        <li>Be flexible and open to unexpected opportunities</li>
        <li>Consider the time of day for optimal lighting</li>
        <li>Bring props that complement the location</li>
      </ul>

      <div class="mt-12 pt-8 border-t">
        <h3 class="text-2xl font-italiana mb-4">Ready to Find Your Perfect Location?</h3>
        <p>
          Let's work together to find the ideal location for your photoshoot. Contact us to discuss 
          your vision and explore location options.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-block mt-6 bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80"
        >
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
useSeoMeta({
  title: 'Choosing the Perfect Location for Your Photoshoot - Complete Guide',
  description: 'Learn how to select the ideal location for your photoshoot. From urban settings to natural landscapes, discover tips for location scouting and maximizing your chosen spot.',
  ogTitle: 'Choosing the Perfect Location for Your Photoshoot - Complete Guide',
  ogDescription: 'Learn how to select the ideal location for your photoshoot. From urban settings to natural landscapes, discover tips for location scouting and maximizing your chosen spot.',
  ogImage: 'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg',
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