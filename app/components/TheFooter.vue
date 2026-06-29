<script setup lang="ts">
const navLinks = [
  { label: 'Boshlovchilar', to: '/boshlovchilar' },
  { label: 'Loyihalar',     to: '/loyihalar' },
  { label: 'Mukofotlar',    to: '/mukofotlar' },
  { label: 'Dekabr',        to: '/dekabr' },
  { label: 'Aloqa',         to: '/aloqa' },
]

const social = [
  { name: 'YouTube',   href: 'https://youtube.com/@avtoradio',     img: '/icon-youtube.png' },
  { name: 'Instagram', href: 'https://instagram.com/avtoradio.uz', img: '/icon-instagram.png' },
  { name: 'Facebook',  href: 'https://facebook.com/avtoradio',     img: '/icon-facebook.png' },
  { name: 'Telegram',  href: 'https://t.me/avtoradio_102fm',       img: '/icon-telegram.png' },
]

const year = 2026
</script>

<template>
  <footer class="bg-black text-white">
    <div class="w-full md:w-[980px] md:max-w-[980px] mx-auto px-4 md:px-0 py-14 md:py-16">

      <!-- Top row: brand · nav · contacts -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 mb-12 md:mb-14">

        <!-- Brand -->
        <NuxtLink to="/" class="flex items-start gap-4 group">
          <img src="/logo-default.png" alt="AVTORADIO 102 FM" class="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"/>
          <div>
            <div class="text-[22px] md:text-[28px] font-normal leading-none text-white">AVTORADIO</div>
            <div class="text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-y/80 mt-1.5">Yolimiz bir · 102 FM</div>
            <p class="mt-3 text-[13px] leading-[1.55] text-white/55 max-w-[300px]">
              Katta shaharning sog‘lom pulsi — tongdan kechgacha jonli efirda.
            </p>
          </div>
        </NuxtLink>

        <!-- Nav -->
        <div>
          <span class="block text-[10px] tracking-[0.28em] uppercase font-bold text-y/65 mb-4">Bo‘limlar</span>
          <ul class="space-y-2">
            <li v-for="l in navLinks" :key="l.to">
              <NuxtLink :to="l.to" class="text-[14px] text-white/85 hover:text-y transition-colors">
                {{ l.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contacts -->
        <div>
          <span class="block text-[10px] tracking-[0.28em] uppercase font-bold text-y/65 mb-4">Aloqa</span>
          <ul class="space-y-2.5 text-[14px]">
            <li>
              <a href="tg://resolve?phone=998977101020" class="text-white/85 hover:text-y transition-colors tabular-nums">
                +998 97 710 10 20
              </a>
              <span class="block text-[10px] tracking-[0.16em] uppercase text-white/40 mt-0.5">XALQONA · Telegram</span>
            </li>
            <li>
              <a href="mailto:info@avtoradio.uz" class="text-white/85 hover:text-y transition-colors">
                info@avtoradio.uz
              </a>
              <span class="block text-[10px] tracking-[0.16em] uppercase text-white/40 mt-0.5">Umumiy savollar</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Socials -->
      <div class="border-t border-white/12 pt-7 mb-7 flex flex-wrap items-center gap-3">
        <span class="text-[10px] tracking-[0.28em] uppercase font-bold text-y/65 mr-2">Kuzating</span>
        <a
          v-for="s in social"
          :key="s.name"
          :href="s.href"
          target="_blank"
          rel="noopener"
          :aria-label="s.name"
          class="w-9 h-9 inline-flex items-center justify-center bg-white/8 hover:bg-y rounded-full transition-colors group"
        >
          <img :src="s.img" alt="" aria-hidden="true" class="w-4 h-4 object-contain invert brightness-200 group-hover:invert-0 group-hover:brightness-100 transition-all"/>
        </a>
      </div>

      <!-- Bottom strip -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-white/45">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>© {{ year }} Avtoradio 102 FM.</span>
          <span class="hidden md:inline text-white/25">·</span>
          <span>Barcha huquqlar himoyalangan.</span>
        </div>
        <div class="flex items-center gap-3 tabular-nums uppercase tracking-[0.18em]">
          <span>Chastota 102.0 FM</span>
          <span class="text-white/25">·</span>
          <span>Toshkent · Sirdaryo</span>
        </div>
      </div>
    </div>
  </footer>
</template>
