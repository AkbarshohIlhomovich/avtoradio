<script setup lang="ts">
useSeoMeta({
  title: 'Mukofotlar',
  description: 'AVTORADIO 102 FM yutuqli loyihalarining bu yilgi sovrinlari: 102 million so‘m pul mukofoti (Omadli qo‘ng‘iroq), 102 gramm tilla quyma (Xazina), 2 ta yangi avtomobil (Tonna benzin va Top taksi) va 2 ta chet-el sayohati (Love & Love shou). Yakuniy g‘oliblar Gala-konsertda jonli efirda aniqlanadi.',
  ogTitle: 'Avtoradio Mukofotlari — Yubiley Jamg‘armasi',
  ogDescription: '102 mln so‘m, 102 g oltin, 2 ta avtomobil va 2 ta xorijiy sayohat — gala-konsertda jonli efirda topshiriladi.',
  ogUrl: 'https://avtoradio.uz/mukofotlar',
  ogImage: 'https://avtoradio.uz/og-cover.jpg',
  twitterTitle: 'Avtoradio Mukofotlari',
  twitterDescription: 'Yil sovrinlari — 102 mln so‘m, 102 gr tilla, 2 ta avtomobil va 2 ta chet-el sayohati.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://avtoradio.uz/mukofotlar' }],
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <section v-motion-slide-visible-once-bottom class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 pt-[110px] md:pt-[160px] pb-10 md:pb-14">
      <span class="block text-[11px] tracking-[0.32em] uppercase text-black/70 font-semibold mb-4">Bosh sahifa / Mukofotlar</span>
      <h1 class="text-[44px] md:text-[80px] leading-[1.02] font-bold italic text-black">
        MUKOFOTLAR
      </h1>
      <p class="mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-black/80">
        Yutuqli loyihalarimizning bu yilgi sovrinlari — Omadli qo‘ng‘iroq, Xazina, Tonna benzin, Top taksi va Love & Love shou g‘oliblari uchun. Har mukofot yakuniy Gala-konsertda jonli efirda topshiriladi.
      </p>
    </section>

    <MukofotlarSection />
  </main>
</template>
