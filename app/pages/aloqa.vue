<script setup lang="ts">
useHead({
  title: 'Aloqa — AVTORADIO 102 FM',
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <section v-motion-slide-visible-once-bottom class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto px-4 md:px-0 pt-[200px] md:pt-[240px] pb-8 md:pb-10">
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
