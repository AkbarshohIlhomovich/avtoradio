<script setup lang="ts">
const hosts = [
  { name: 'Nazira Inoyatova',     img: '/img/host-nazira.jpg',      role: 'Tongi blok' },
  { name: 'Kamola Ermatova',      img: '/img/host-kamola.jpg',      role: 'Kundizgi blok' },
  { name: 'Nurmuhammad Isroilov', img: '/img/host-nurmuhammad.jpg', role: 'Kechki blok' },
  { name: 'Jasur Xudoyberganov',  img: '/img/host-jasur.jpg',       role: 'Kechki blok' },
  { name: 'Otabek Tojiboyev',     img: '/img/host-otabek.jpg',      role: 'Kechki blok' },
]
</script>

<template>
  <section class="bg-black text-white">
    <div class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto px-4 md:px-0 py-14 md:py-20">

      <!-- Section header -->
      <header class="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span class="block text-[12px] tracking-[0.28em] uppercase font-bold text-y/70 mb-3">Boshlovchilar</span>
          <h2 class="text-[34px] md:text-[52px] leading-[1.04] font-bold italic text-white tracking-tight">
            Ovozlar ortida turgan insonlar.
          </h2>
        </div>
        <NuxtLink
          to="/boshlovchilar"
          class="group inline-flex items-center gap-2 self-start md:self-end text-[12px] tracking-[0.18em] uppercase font-bold text-y hover:gap-4 transition-all whitespace-nowrap"
        >
          Barcha boshlovchilar
          <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </header>

      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
        <li v-for="h in hosts" :key="h.name">
          <NuxtLink :to="`/boshlovchilar`" class="group block">
            <div class="aspect-square overflow-hidden bg-black/10">
              <img
                :src="h.img"
                :alt="h.name"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div class="mt-3">
              <div class="text-[12px] tracking-[0.14em] uppercase font-bold text-white leading-tight">{{ h.name }}</div>
              <div class="text-[10px] tracking-[0.18em] uppercase text-white/55 mt-1">{{ h.role }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>

    </div>
  </section>
</template>
