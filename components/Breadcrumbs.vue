<template>
  <nav aria-label="breadcrumb" class="py-4">
    <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="flex space-x-2 text-sm text-gray-600">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index"
          itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"
          class="flex items-center space-x-2">
        <span v-if="index > 0" class="text-gray-400">/</span>
        <NuxtLink v-if="breadcrumb.to" itemprop="item" :to="breadcrumb.to"
                  class="hover:text-secondary transition-colors">
          <span itemprop="name">{{ breadcrumb.name }}</span>
        </NuxtLink>
        <span v-else itemprop="name" class="text-gray-800 font-medium">{{ breadcrumb.name }}</span>
        <meta itemprop="position" :content="index + 1" />
      </li>
    </ol>
  </nav>
</template>

<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  }
});

// Automatyczne generowanie breadcrumbs na podstawie route
const route = useRoute();

const autoBreadcrumbs = computed(() => {
  if (props.breadcrumbs.length > 0) {
    return props.breadcrumbs;
  }

  const pathSegments = route.path.split('/').filter(Boolean);
  const breadcrumbs = [];

  // Mapowanie nazw stron
  const pageNames = {
    'o-mnie': 'O mnie',
    'kontakt': 'Kontakt',
    'portfolio': 'Portfolio',
    'blog': 'Blog',
    'sesje-swiateczne': 'Sesje świąteczne',
    'jak-przygotowac-sie-do-sesji-zdjeciowej': 'Jak przygotować się do sesji zdjęciowej',
    'jak-wybrac-idealne-miejsce-na-sesje': 'Jak wybrać idealne miejsce na sesję',
    'sztuka-naturalnego-pozowania-do-zdjec': 'Sztuka naturalnego pozowania do zdjęć'
  };

  let currentPath = '';
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    
    breadcrumbs.push({
      name: pageNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      to: isLast ? null : currentPath
    });
  });

  return breadcrumbs;
});
</script>