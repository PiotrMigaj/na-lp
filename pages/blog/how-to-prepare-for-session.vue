<template>
  <article class="container mx-auto px-4 py-16 max-w-4xl">
    <header class="mb-12">
      <h1 class="font-italiana text-4xl md:text-5xl mb-6">How to Prepare for Your Photography Session</h1>
      <div class="flex items-center text-text-light mb-8">
        <span>March 15, 2024</span>
        <span class="mx-2">•</span>
        <span>10 min read</span>
      </div>
      <div class="relative h-[400px] md:h-[500px] overflow-hidden mb-12">
        <NuxtImg 
          src="https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Photography session preparation"
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
      <p class="lead">
        A successful photography session starts long before you step in front of the camera. 
        Proper preparation is key to ensuring you look and feel your best, and that we capture 
        the authentic moments you'll treasure forever.
      </p>

      <h2>1. Planning Your Session</h2>
      <p>
        Before your session, take some time to consider what you want to achieve. Are you looking 
        for professional headshots, family portraits, or perhaps a creative fashion shoot? Each type 
        of session requires different preparation and styling.
      </p>

      <div class="my-8 p-6 bg-accent/10">
        <h3 class="text-xl font-semibold mb-4">Quick Checklist:</h3>
        <ul class="space-y-2">
          <li>✓ Choose your session type and style</li>
          <li>✓ Select your outfits (2-3 options recommended)</li>
          <li>✓ Plan your hair and makeup</li>
          <li>✓ Get plenty of rest the night before</li>
          <li>✓ Stay hydrated</li>
        </ul>
      </div>

      <h2>2. Choosing Your Outfits</h2>
      <p>
        Your clothing choices can significantly impact the final results. Here are some key tips:
      </p>
      <ul>
        <li>Choose solid colors or subtle patterns that complement your skin tone</li>
        <li>Avoid large logos or busy patterns that might distract</li>
        <li>Consider the location and season when selecting outfits</li>
        <li>Bring multiple options to have variety in your photos</li>
      </ul>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="relative h-64 overflow-hidden">
          <NuxtImg 
            src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Outfit selection example"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="relative h-64 overflow-hidden">
          <NuxtImg 
            src="https://images.pexels.com/photos/1375883/pexels-photo-1375883.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Location scouting example"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <h2>3. Hair and Makeup</h2>
      <p>
        Professional hair and makeup can make a significant difference in your photos. Consider:
      </p>
      <ul>
        <li>Schedule your hair appointment 1-2 days before the session</li>
        <li>Keep makeup natural and slightly more defined than everyday wear</li>
        <li>Bring touch-up products for longer sessions</li>
        <li>Consider hiring a professional makeup artist for special occasions</li>
      </ul>

      <h2>4. The Day of Your Session</h2>
      <p>
        On the day of your session, remember to:
      </p>
      <ul>
        <li>Arrive 15 minutes early to settle in</li>
        <li>Bring any props or items you'd like to include</li>
        <li>Stay relaxed and trust your photographer's guidance</li>
        <li>Have fun and be yourself!</li>
      </ul>

      <div class="my-8 p-6 bg-secondary/10">
        <h3 class="text-xl font-semibold mb-4">Pro Tip:</h3>
        <p>
          Practice your poses and expressions in front of a mirror before the session. 
          This will help you feel more comfortable and natural during the shoot.
        </p>
      </div>

      <h2>5. After Your Session</h2>
      <p>
        The work doesn't end when the session does. Here's what to expect:
      </p>
      <ul>
        <li>Your photographer will carefully select and edit the best images</li>
        <li>You'll receive a gallery to choose your favorites</li>
        <li>Professional retouching will be applied to your selected images</li>
        <li>Final images will be delivered in high resolution</li>
      </ul>

      <div class="mt-12 pt-8 border-t">
        <h3 class="text-2xl font-italiana mb-4">Ready to Book Your Session?</h3>
        <p>
          Now that you know how to prepare, it's time to schedule your photography session. 
          Contact us to discuss your vision and book your date.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-block mt-6 bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80"
        >
          Book Your Session
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
useSeoMeta({
  title: 'How to Prepare for Your Photography Session - Complete Guide',
  description: 'Learn essential tips and preparation steps for your photography session. From outfit selection to hair and makeup, discover how to ensure your photoshoot is a success.',
  ogTitle: 'How to Prepare for Your Photography Session - Complete Guide',
  ogDescription: 'Learn essential tips and preparation steps for your photography session. From outfit selection to hair and makeup, discover how to ensure your photoshoot is a success.',
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