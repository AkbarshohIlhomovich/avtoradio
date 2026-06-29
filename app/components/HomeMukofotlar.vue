<script setup lang="ts">
const featured = {
  amount: '102', unit: 'million so‘m', label: 'Naqd pul mukofoti', img: '/img/prizes/prize-cash.jpg',
}
const side = [
  { amount: '102', unit: 'gramm oltin',     label: 'Oltin quymasi',     img: '/img/prizes/prize-gold.jpg' },
  { amount: '2',   unit: 'yangi avtomobil', label: 'Bosh avto-mukofot', img: '/img/prizes/prize-car.jpg' },
  { amount: '2',   unit: 'xorijiy sayohat', label: 'Halqaro turizm',    img: '/img/prizes/prize-travel.jpg' },
]
</script>

<template>
  <section class="bg-black text-white">
    <div class="w-full md:w-[980px] md:max-w-[980px] mx-auto px-4 md:px-0 py-14 md:py-20">

      <header class="mb-12 md:mb-16">
        <span class="block text-[12px] tracking-[0.28em] uppercase font-bold text-y/70 mb-3">Mukofotlar</span>
        <h2 class="text-[34px] md:text-[52px] leading-[1.04] font-bold italic text-white tracking-tight">
          Yubiley jamg‘armasi.
        </h2>
      </header>

      <!-- 2-column mosaic: big featured + 3 stacked -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 md:h-[520px]">

        <!-- Featured card -->
        <NuxtLink
          to="/mukofotlar"
          class="md:col-span-7 group relative block aspect-[4/3] md:aspect-auto md:h-full overflow-hidden"
        >
          <img :src="featured.img" :alt="featured.label" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"></div>
          <div class="absolute inset-0 p-6 md:p-9 flex flex-col justify-between">
            <span class="self-start text-[10px] tracking-[0.24em] uppercase font-bold text-y bg-black/55 backdrop-blur-sm px-3 py-1.5">
              {{ featured.label }}
            </span>
            <div>
              <span class="block text-[88px] md:text-[140px] leading-[0.85] font-extrabold italic text-y tabular-nums">{{ featured.amount }}</span>
              <span class="mt-2 block text-[14px] md:text-[16px] tracking-[0.08em] uppercase font-semibold text-white">{{ featured.unit }}</span>
            </div>
          </div>
        </NuxtLink>

        <!-- Side stack -->
        <div class="md:col-span-5 grid grid-cols-1 grid-rows-3 gap-3 md:gap-4">
          <NuxtLink
            v-for="p in side"
            :key="p.label"
            to="/mukofotlar"
            class="group relative block overflow-hidden aspect-[3/2] md:aspect-auto"
          >
            <img :src="p.img" :alt="p.label" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"/>
            <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent"></div>
            <div class="absolute inset-0 p-5 md:p-6 flex items-center gap-5">
              <span class="text-[52px] md:text-[68px] leading-none font-extrabold italic text-y tabular-nums flex-shrink-0">{{ p.amount }}</span>
              <div class="min-w-0">
                <div class="text-[12px] md:text-[13px] tracking-[0.08em] uppercase font-bold text-white leading-tight">{{ p.unit }}</div>
                <div class="mt-1.5 text-[10px] md:text-[11px] tracking-[0.22em] uppercase font-semibold text-y/75">{{ p.label }}</div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
