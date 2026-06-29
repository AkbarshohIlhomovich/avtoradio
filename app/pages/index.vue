<script setup lang="ts">
useSeoMeta({
  title: 'Bosh sahifa',
  description: 'AVTORADIO 102 FM — Toshkent radiosi. Jonli efir, 5 ta boshlovchi, 15 ta interaktiv loyiha, 102 mln so‘m yubiley mukofotlari va dekabr oyidagi 10 Yil On Air gala-konserti.',
  ogTitle: 'AVTORADIO 102 FM — Yolimiz bir',
  ogDescription: 'Toshkent radiosi. Tonggi «Taraddud», kunduzgi «Nurli kun», kechki «Sarhisob vaqti» — jonli efirda 24/7.',
  ogUrl: 'https://avtoradio.uz/',
  ogImage: 'https://avtoradio.uz/og-cover.jpg',
  twitterTitle: 'AVTORADIO 102 FM',
  twitterDescription: 'Yolimiz bir · 102 FM Toshkent. Jonli efir, interaktiv loyihalar va dekabr gala-konserti.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://avtoradio.uz/' }],
})
</script>

<template>
  <div>
    <LandingHero />
    <HomeBoshlovchilar />
    <HomeLoyihalar />
    <HomeMukofotlar />
    <HomeDekabr />
    <HomeApps />
  </div>
</template>
