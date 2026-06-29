<script setup lang="ts">
useSeoMeta({
  title: 'Mukofotlar',
  description: 'AVTORADIO 102 FM 10 yillik yubiley mukofotlari tizimi: 102 million so‘m naqd pul, 102 gramm oltin quymasi, 2 ta yangi avtomobil va 2 ta xorijiy sayohat yo‘llanmasi. 4200 ta omadli tinglovchi yil davomida saralanadi.',
  ogTitle: 'Avtoradio Mukofotlari — Yubiley Jamg‘armasi',
  ogDescription: '102 mln so‘m, 102 g oltin, 2 ta avtomobil va 2 ta xorijiy sayohat — gala-konsertda jonli efirda topshiriladi.',
  ogUrl: 'https://avtoradio.uz/mukofotlar',
  ogImage: 'https://avtoradio.uz/og-cover.jpg',
  twitterTitle: 'Avtoradio Mukofotlari',
  twitterDescription: 'Yubiley jamg‘armasi — 102 mln so‘m va boshqa sovg‘alar.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://avtoradio.uz/mukofotlar' }],
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <section v-motion-slide-visible-once-bottom class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 pt-[200px] md:pt-[240px] pb-10 md:pb-14">
      <span class="block text-[11px] tracking-[0.32em] uppercase text-black/70 font-semibold mb-4">Bosh sahifa / Mukofotlar</span>
      <h1 class="text-[44px] md:text-[80px] leading-[1.02] font-bold italic text-black">
        MUKOFOTLAR
      </h1>
      <p class="mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-black/80">
        Yubiley yili — 102 FM tinglovchilarini kutayotgan asosiy sovg‘alar va o‘yinlar tizimi. Naqd pul, oltin, avtomobil va xorijiy sayohatlar.
      </p>
    </section>

    <MukofotlarSection />
  </main>
</template>
