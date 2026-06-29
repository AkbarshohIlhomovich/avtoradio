<script setup lang="ts">
const social = [
  { name: 'YouTube',   href: 'https://youtube.com/@avtoradio',     img: '/icon-youtube.png' },
  { name: 'Instagram', href: 'https://instagram.com/avtoradio.uz', img: '/icon-instagram.png' },
  { name: 'Facebook',  href: 'https://facebook.com/avtoradio',     img: '/icon-facebook.png' },
  { name: 'Telegram',  href: 'https://t.me/avtoradio_102fm',       img: '/icon-telegram.png' },
]
</script>

<template>
  <section class="bg-y">
    <div class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto px-4 md:px-0 py-14 md:py-20">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
        <header>
          <span class="block text-[12px] tracking-[0.28em] uppercase font-bold text-black/70 mb-3">Aloqa</span>
          <h2 class="text-[34px] md:text-[52px] leading-[1.04] font-bold italic text-black tracking-tight">
            Bizga yozing.
          </h2>
        </header>

        <div class="flex flex-col gap-5 md:items-end md:text-right">
          <div>
            <span class="block text-[10px] tracking-[0.24em] uppercase font-bold text-black/55 mb-1.5">XALQONA · Telegram</span>
            <a href="tg://resolve?phone=998977101020" class="text-[22px] md:text-[28px] font-bold text-black tabular-nums hover:underline">+998 97 710 10 20</a>
          </div>
          <div>
            <span class="block text-[10px] tracking-[0.24em] uppercase font-bold text-black/55 mb-1.5">Studiya · Jonli efir</span>
            <a href="tel:+998712001020" class="text-[22px] md:text-[28px] font-bold text-black tabular-nums hover:underline">+998 71 200 10 20</a>
          </div>
          <div>
            <span class="block text-[10px] tracking-[0.24em] uppercase font-bold text-black/55 mb-1.5">Reklama</span>
            <a href="mailto:sales@avtoradio.uz" class="text-[18px] md:text-[20px] font-bold text-black hover:underline">sales@avtoradio.uz</a>
          </div>
        </div>
      </div>

      <!-- Socials strip -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 md:pt-10 border-t-2 border-black/85">
        <ul class="flex flex-wrap gap-2">
          <li v-for="s in social" :key="s.name">
            <a
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.name"
              class="group flex items-center gap-2 bg-black text-y px-3 py-2 hover:bg-white hover:text-black border border-black transition-colors"
            >
              <img :src="s.img" alt="" aria-hidden="true" class="w-4 h-4 object-contain invert brightness-200 group-hover:invert-0 group-hover:brightness-100 transition-all flex-shrink-0"/>
              <span class="text-[11px] tracking-[0.14em] uppercase font-bold">{{ s.name }}</span>
            </a>
          </li>
        </ul>

        <NuxtLink
          to="/aloqa"
          class="group inline-flex items-center gap-3 text-[12px] tracking-[0.24em] uppercase font-bold text-black border-b-2 border-black pb-1.5 hover:gap-5 transition-all self-start md:self-auto"
        >
          To‘liq aloqa sahifasi
          <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
