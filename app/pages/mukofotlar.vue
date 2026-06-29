<script setup lang="ts">
useHead({
  title: 'Mukofotlar — AVTORADIO 102 FM',
})
</script>

<template>
  <main class="bg-y min-h-screen">
    <section class="w-full md:w-[980px] md:max-w-[980px] mx-auto px-4 md:px-0 pt-[200px] md:pt-[240px] pb-10 md:pb-14">
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
