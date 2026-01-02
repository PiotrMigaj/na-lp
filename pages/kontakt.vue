<template>
  <div>
    <!-- Sekcja Hero -->
    <section class="py-24 bg-accent">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h1 class="font-italiana text-5xl mb-6">Kontakt</h1>
        <p class="text-lg font-light max-w-3xl mx-auto leading-relaxed">
          Masz pomysł na sesję? Napisz do mnie – chętnie porozmawiam i wspólnie stworzymy coś wyjątkowego.
        </p>
      </div>
    </section>

    <!-- Formularz i dane kontaktowe -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Skontaktuj się ze mną" />
            <p class="mb-10 font-light leading-relaxed">
              Wypełnij formularz, opisz swój projekt, a odezwę się jak najszybciej, by omówić szczegóły i wspólnie zaplanować sesję.
            </p>

            <div class="space-y-6 mb-10">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-accent flex items-center justify-center rounded-full mr-4">
                  <Icon name="mdi:email" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-medium mb-1">Email</h3>
                  <p class="font-light text-text-light">kozlowska0705@gmail.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-10 h-10 bg-accent flex items-center justify-center rounded-full mr-4">
                  <Icon name="mdi:phone" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-medium mb-1">Telefon</h3>
                  <p class="font-light text-text-light">+48 501 766 564</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-10 h-10 bg-accent flex items-center justify-center rounded-full mr-4">
                  <Icon name="mdi:map-marker" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-medium mb-1">Lokalizacja</h3>
                  <p class="font-light text-text-light">Wrocław / Cała Polska</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-medium mb-4">Znajdź mnie</h3>
              <div class="flex space-x-6">
                <a 
                  href="https://www.instagram.com/niebieskie_aparaty?utm_source=ig_web_button_share_sheet&igsh=cWFiZ3d4Mjd4NDdq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-10 h-10 bg-accent flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Icon name="mdi:instagram" class="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100001562507926" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-10 h-10 bg-accent flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Icon name="mdi:facebook" class="w-5 h-5" />
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

    <!-- Mapa -->
    <section class="pb-24">
      <div class="container mx-auto px-4">
        <div class="h-[450px] bg-accent relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10088.548230255667!2d17.025179!3d51.107885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3d3ef5153ef%3A0x40f8e3e2d3eeef59!2sWroc%C5%82aw!5e0!3m2!1spl!2spl!4v1718711220000!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Lokalizacja Wrocław"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Kontakt - Fotograf Wrocław Anna Migaj | Zarezerwuj Sesję',
  description: 'Skontaktuj się z Anną Migaj - fotografem ze Wrocławia. Umów sesję ślubną, portretową lub biznesową. Tel: +48 501 766 564. Działam w całej Polsce.',
  keywords: 'kontakt fotograf Wrocław, umówić sesję Wrocław, fotograf tel Wrocław, rezerwacja sesji zdjęciowej',
  robots: 'index, follow',
  ogTitle: 'Kontakt - Fotograf Wrocław Anna Migaj | Zarezerwuj Sesję',
  ogDescription: 'Skontaktuj się z Anną Migaj - fotografem ze Wrocławia. Umów sesję ślubną, portretową lub biznesową. Tel: +48 501 766 564.',
  ogImage: 'https://niebieskie-aparaty.pl/images/anna-migaj-fotograf.webp',
  ogLocale: 'pl_PL'
});
</script>
