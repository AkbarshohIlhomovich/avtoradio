<script setup lang="ts">
useHead({
  title: 'Loyihalar — AVTORADIO 102 FM',
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <!-- Page hero -->
    <section class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto px-4 md:px-0 pt-[200px] md:pt-[240px] pb-8 md:pb-10">
      <span class="block text-[11px] tracking-[0.32em] uppercase text-black/70 font-semibold mb-4">Bosh sahifa / Loyihalar</span>
      <h1 class="text-[44px] md:text-[80px] leading-[1.02] font-bold italic text-black">
        EFIRLAR
      </h1>
      <p class="mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-black/80">
        Tongdan kechgacha — Avtoradio 102 FM ning jonli loyihalari, interaktiv shoular va mualliflik rukni.
      </p>
    </section>

    <LoyihalarSection />
  </main>
</template>
