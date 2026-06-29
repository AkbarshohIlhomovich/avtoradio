<script setup lang="ts">
useSeoMeta({
  title: 'Aloqa',
  description: 'AVTORADIO 102 FM aloqa kanallari: XALQONA Telegram (+998 97 710 10 20), studiya jonli efir (+998 71 200 10 20), reklama (sales@avtoradio.uz). Toshkent, Toshkent viloyati va Sirdaryo bo‘ylab efir qamrovi.',
  ogTitle: 'Avtoradio Aloqa — Bizga yozing',
  ogDescription: 'Telegram orqali ovozli xabar, jonli efir telefon raqami, reklama va hamkorlik takliflari.',
  ogUrl: 'https://avtoradio.uz/aloqa',
  ogImage: 'https://avtoradio.uz/og-cover.jpg',
  twitterTitle: 'Avtoradio Aloqa',
  twitterDescription: 'Telegram, studiya telefoni, reklama va hamkorlik.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://avtoradio.uz/aloqa' }],
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <section v-motion-slide-visible-once-bottom class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 pt-[110px] md:pt-[160px] pb-8 md:pb-10">
      <span class="block text-[11px] tracking-[0.32em] uppercase text-black/70 font-semibold mb-4">Bosh sahifa / Aloqa</span>
      <h1 class="text-[44px] md:text-[80px] leading-[1.02] font-bold italic text-black">
        ALOQA
      </h1>
      <p class="mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-black/80">
        Bog‘lanish kanallari, studiya manzili va efir qamrovi. Telegram orqali xabar yuboring, jonli efirga qo‘shiling yoki ijtimoiy tarmoqlarda kuzating.
      </p>
    </section>

    <AloqaSection />
  </main>
</template>
