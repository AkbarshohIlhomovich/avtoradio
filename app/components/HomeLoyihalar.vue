<script setup lang="ts">
const featured = [
  { title: 'TONGI REYS',        sub: 'Tongi blok',     img: '/img/projects/p-tongi-reys.jpg' },
  { title: 'OMADLI QO‘NG‘IROQ', sub: 'Tongi blok',     img: '/img/projects/p-omadli.jpg' },
  { title: 'KECHKI SAFAR',      sub: 'Kechki blok',    img: '/img/projects/p-kechki-safar.png' },
  { title: 'TONNA BENZIN',      sub: 'Kechki blok',    img: '/img/projects/p-tonna-benzin.png' },
  { title: 'RADIO KAFE',        sub: 'Kundizgi blok',  img: '/img/projects/p-radio-kafe.jpg' },
  { title: 'XALQONA',           sub: 'Tinglovchilar ovozi', img: '/img/projects/p-xalqona.jpg' },
]
</script>

<template>
  <section class="bg-y">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 py-14 md:py-20">

      <header v-motion-slide-visible-once-bottom class="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span class="block text-[12px] tracking-[0.28em] uppercase font-bold text-black/70 mb-3">Loyihalar</span>
          <h2 class="text-[34px] md:text-[52px] leading-[1.04] font-bold italic text-black tracking-tight">
            15 ta loyiha, tongdan kechgacha.
          </h2>
        </div>
        <NuxtLink
          to="/loyihalar"
          class="group inline-flex items-center gap-2 self-start md:self-end text-[12px] tracking-[0.18em] uppercase font-bold text-black hover:gap-4 transition-all whitespace-nowrap"
        >
          Barcha loyihalar
          <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </header>

      <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        <li
          v-for="(p, i) in featured"
          :key="p.title"
          v-motion="{
            initial: { opacity: 0, y: 32 },
            visibleOnce: { opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 650, ease: [0.22, 0.61, 0.36, 1] } },
          }"
        >
          <NuxtLink to="/loyihalar" class="group block">
            <div class="relative aspect-[4/3] overflow-hidden bg-black">
              <img
                :src="p.img"
                :alt="p.title"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <div class="text-[10px] tracking-[0.22em] uppercase font-semibold text-y/85 mb-1">{{ p.sub }}</div>
                <div class="text-[16px] md:text-[17px] font-extrabold italic uppercase text-white leading-tight">{{ p.title }}</div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
