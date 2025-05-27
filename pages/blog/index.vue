<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="font-italiana text-4xl md:text-5xl text-center mb-12">Photography Blog</h1>
    <p class="text-center text-text-light max-w-2xl mx-auto mb-16">
      Discover insights, tips, and inspiration from our professional photography journey. 
      From preparation guides to creative techniques, we share our expertise to help you capture perfect moments.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="post in blogPosts" 
        :key="post.slug"
        class="group bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      >
        <NuxtLink :to="`/blog/${post.slug}`">
          <div class="relative h-64 overflow-hidden">
            <NuxtImg 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h2 class="font-italiana text-2xl mb-3 group-hover:text-secondary transition-colors duration-300">
              {{ post.title }}
            </h2>
            <p class="text-text-light mb-4 line-clamp-2">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-text-light">{{ post.date }}</span>
              <span class="text-secondary group-hover:translate-x-2 transition-transform duration-300">
                Read more →
              </span>
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
const blogPosts = [
  {
    slug: 'how-to-prepare-for-session',
    title: 'How to Prepare for Your Photography Session',
    excerpt: 'Essential tips and checklist to ensure your photography session goes smoothly and produces stunning results.',
    image: 'https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'March 15, 2024'
  },
  {
    slug: 'choosing-perfect-location',
    title: 'Choosing the Perfect Location for Your Shoot',
    excerpt: 'Learn how to select and scout locations that will enhance your photography and create the perfect atmosphere.',
    image: 'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'March 10, 2024'
  },
  {
    slug: 'posing-techniques',
    title: 'Mastering Natural Posing Techniques',
    excerpt: 'Professional tips for achieving natural, flattering poses that capture authentic moments and emotions.',
    image: 'https://images.pexels.com/photos/1375883/pexels-photo-1375883.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'March 5, 2024'
  }
];

useSeoMeta({
  title: 'Photography Blog - Tips, Guides & Inspiration',
  description: 'Explore our photography blog for expert tips, preparation guides, and creative inspiration. Learn about session preparation, location scouting, and posing techniques.',
  ogTitle: 'Photography Blog - Tips, Guides & Inspiration',
  ogDescription: 'Explore our photography blog for expert tips, preparation guides, and creative inspiration.',
  ogImage: 'https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg',
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 