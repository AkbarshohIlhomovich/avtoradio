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
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 py-14 md:py-16">

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

      <!-- Socials — bigger buttons with brand names -->
      <div class="border-t border-white/12 pt-10 pb-2 mb-8">
        <div class="mb-6 text-center md:text-left">
          <p class="text-[16px] md:text-[18px] font-bold text-white leading-tight">
            Bizni ijtimoiy tarmoqlarda ham kuzating
          </p>
          <p class="mt-2 text-[13px] text-white/55 leading-relaxed max-w-[520px] mx-auto md:mx-0">
            Yangi loyihalar, jonli efir e’lonlari va g‘oliblar tabriki — bosing va obuna bo‘ling.
          </p>
        </div>
        <ul class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <li v-for="s in social" :key="s.name">
            <a
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.name"
              class="group flex items-center gap-3 bg-white/8 hover:bg-y hover:text-black text-white
                     px-4 py-3.5 border border-white/12 hover:border-y transition-colors"
            >
              <img :src="s.img" alt="" aria-hidden="true"
                   class="w-6 h-6 object-contain invert brightness-200 group-hover:invert-0 group-hover:brightness-100 transition-all flex-shrink-0"/>
              <span class="text-[14px] font-bold tracking-tight">{{ s.name }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobil ilova block — prominent CTA -->
      <div class="border-t border-white/12 pt-10 pb-2 mb-8">
        <div class="mb-6 text-center md:text-left">
          <p class="text-[16px] md:text-[18px] font-bold text-white leading-tight">
            Avtoradioni cho‘ntagingizga soling
          </p>
          <p class="mt-2 text-[13px] text-white/55 leading-relaxed max-w-[520px] mx-auto md:mx-0">
            Jonli efir, dastur jadvali va arxiv yozuvlari — istalgan joyda va istalgan vaqtda. Bepul yuklab oling.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <!-- App Store -->
          <a
            href="https://apps.apple.com/uz/app/avtoradio/id6741562744"
            target="_blank"
            rel="noopener"
            aria-label="App Store"
            class="group flex items-center gap-3 bg-white text-black hover:bg-y
                   px-4 py-2.5 border-2 border-white hover:border-y transition-colors"
          >
            <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current flex-shrink-0">
              <path d="M17.05 12.04c-.03-2.94 2.4-4.36 2.5-4.43-1.36-2-3.48-2.27-4.24-2.3-1.8-.18-3.52 1.06-4.44 1.06-.92 0-2.34-1.04-3.84-1.01-1.98.03-3.8 1.15-4.82 2.93-2.06 3.56-.52 8.83 1.48 11.72.98 1.42 2.14 3.01 3.66 2.95 1.46-.06 2.02-.95 3.8-.95 1.78 0 2.27.95 3.82.92 1.58-.03 2.58-1.43 3.55-2.86 1.12-1.64 1.58-3.23 1.6-3.31-.04-.02-3.07-1.18-3.07-4.72zM14.16 3.4c.8-.97 1.34-2.32 1.19-3.66-1.16.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.61-.66 3.41-1.63z"/>
            </svg>
            <span class="flex flex-col leading-tight">
              <span class="text-[9px] tracking-[0.14em] uppercase font-semibold opacity-70">Yuklab oling</span>
              <span class="text-[15px] font-bold tracking-tight">App Store</span>
            </span>
          </a>

          <!-- Google Play -->
          <a
            href="https://play.google.com/store/apps/details?id=com.eurosoft.avtoradio"
            target="_blank"
            rel="noopener"
            aria-label="Google Play"
            class="group flex items-center gap-3 bg-white text-black hover:bg-y
                   px-4 py-2.5 border-2 border-white hover:border-y transition-colors"
          >
            <svg viewBox="0 0 512 512" class="w-7 h-7 flex-shrink-0">
              <defs>
                <linearGradient id="fp-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#00C3FF"/><stop offset="100%" stop-color="#00E5A1"/>
                </linearGradient>
                <linearGradient id="fp-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFD400"/><stop offset="100%" stop-color="#FFA801"/>
                </linearGradient>
                <linearGradient id="fp-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FF3A44"/><stop offset="100%" stop-color="#C31162"/>
                </linearGradient>
                <linearGradient id="fp-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#00A0FF"/><stop offset="100%" stop-color="#00CFFF"/>
                </linearGradient>
              </defs>
              <path fill="url(#fp-grad4)" d="M37 22c-7 7-11 18-11 32v404c0 14 4 25 11 32l1 1 226-226v-5L38 21z"/>
              <path fill="url(#fp-grad2)" d="M340 338l-76-76v-6l76-76 2 1 89 50c26 14 26 38 0 53l-89 51z"/>
              <path fill="url(#fp-grad3)" d="M342 337L264 259 37 487c8 9 22 11 38 2l267-152"/>
              <path fill="url(#fp-grad1)" d="M342 181L75 30C59 21 45 23 37 32l227 227z"/>
            </svg>
            <span class="flex flex-col leading-tight">
              <span class="text-[9px] tracking-[0.14em] uppercase font-semibold opacity-70">Yuklab oling</span>
              <span class="text-[15px] font-bold tracking-tight">Google Play</span>
            </span>
          </a>
        </div>
      </div>

      <!-- Bottom strip -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-white/45">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>© {{ year }} Avtoradio 102 FM.</span>
          <span class="hidden md:inline text-white/25">·</span>
          <span>Barcha huquqlar himoyalangan.</span>
        </div>
        <a
          href="https://eurosoft.uz"
          target="_blank"
          rel="noopener"
          class="group inline-flex items-center gap-1.5 text-[12px] tracking-[0.18em] uppercase font-semibold text-white/40 hover:text-y transition-colors"
        >
          <span>Made by</span>
          <span class="font-bold text-white/70 group-hover:text-y transition-colors">Eurosoft.uz</span>
        </a>
      </div>
    </div> 
  </footer>
</template>
