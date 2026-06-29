<script setup lang="ts">
useSeoMeta({
  title: 'Dekabr — 10 Yil On Air',
  description: 'AVTORADIO 102 FM 10 yilligi munosabati bilan dekabr oyida Xalqlar do‘stligi san‘at saroyida bo‘lib o‘tadigan «10 Yil On Air» gala-konserti. Kuzgi stiker aksiyasi, yakuniy maqsadlar va katta shaharning sog‘lom pulsi falsafasi.',
  ogTitle: '10 YIL ON AIR — Dekabr Gala-Konserti',
  ogDescription: 'Xalqlar do‘stligi san‘at saroyida — yil yakunidagi yirik media-shou. Yil davomidagi g‘oliblar, sodiq tinglovchilar va sheriklar bir sahnada.',
  ogUrl: 'https://avtoradio.uz/dekabr',
  ogImage: 'https://avtoradio.uz/og-cover.jpg',
  twitterTitle: '10 YIL ON AIR — Dekabr',
  twitterDescription: 'Avtoradio 102 FM 10 yilligi gala-konserti.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://avtoradio.uz/dekabr' }],
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <section v-motion-slide-visible-once-bottom class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 pt-[110px] md:pt-[160px] pb-8 md:pb-10">
      <span class="block text-[11px] tracking-[0.32em] uppercase text-black/70 font-semibold mb-4">Bosh sahifa / Dekabr</span>
      <h1 class="text-[44px] md:text-[80px] leading-[1.02] font-bold italic text-black">
        DEKABR
      </h1>
      <p class="mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-black/80">
        10 yillik yo‘lning yakuniy nuqtasi — Xalqlar do‘stligi san’at saroyida bo‘lib o‘tadigan gala-konsert va “Avtoradio 10 yil: On Air” shiori ostidagi yirik media shou.
      </p>
    </section>

    <DekabrSection />
  </main>
</template>
