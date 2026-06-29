<script setup lang="ts">
useHead({
  title: 'Boshlovchilar — AVTORADIO 102 FM',
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <!-- Page hero: large title under the fixed nav -->
    <section v-motion-slide-visible-once-bottom class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 pt-[200px] md:pt-[240px] pb-12 md:pb-16">
      <span class="block text-[11px] tracking-[0.32em] uppercase text-black/70 font-semibold mb-4">Bosh sahifa / Boshlovchilar</span>
      <h1 class="text-[44px] md:text-[80px] leading-[1.02] font-normal text-black">
        Bizning boshlovchilar.
      </h1>
      <p class="mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-black/75">
        Efirning har bir blokida sizga hamroh bo‘ladigan ovozlar. Qiziqtirgan boshlovchini bosib, uning dasturi bilan tanishing.
      </p>
    </section>

    <BoshlovchilarSection class="!bg-white" />
  </main>
</template>
