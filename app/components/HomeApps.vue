<script setup lang="ts">
const stores = [
  {
    label: 'Yuklab oling',
    name: 'App Store',
    href: 'https://apps.apple.com/uz/app/avtoradio/id6741562744',
    icon: 'apple',
  },
  {
    label: 'Yuklab oling',
    name: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.eurosoft.avtoradio',
    icon: 'play',
  },
]
</script>

<template>
  <section class="bg-black text-white">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 py-14 md:py-20">

      <div v-motion-slide-visible-once-bottom class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        <header class="max-w-[520px]">
          <span class="block text-[12px] tracking-[0.28em] uppercase font-bold text-y/70 mb-3">Mobil ilova</span>
          <h2 class="text-[34px] md:text-[52px] leading-[1.04] font-bold italic text-white tracking-tight">
            Avtoradio doim cho‘ntagingizda.
          </h2>
        </header>

        <ul class="flex flex-col sm:flex-row md:flex-col gap-3">
          <!-- App Store -->
          <li>
            <a
              :href="stores[0].href"
              target="_blank"
              rel="noopener"
              aria-label="App Store"
              class="flex items-center gap-3 bg-black text-white rounded-xl px-5 py-2.5 border border-white/15 hover:opacity-85 transition-opacity min-w-[200px]"
            >
              <svg viewBox="0 0 24 24" class="w-8 h-8 fill-white flex-shrink-0">
                <path d="M17.05 12.04c-.03-2.94 2.4-4.36 2.5-4.43-1.36-2-3.48-2.27-4.24-2.3-1.8-.18-3.52 1.06-4.44 1.06-.92 0-2.34-1.04-3.84-1.01-1.98.03-3.8 1.15-4.82 2.93-2.06 3.56-.52 8.83 1.48 11.72.98 1.42 2.14 3.01 3.66 2.95 1.46-.06 2.02-.95 3.8-.95 1.78 0 2.27.95 3.82.92 1.58-.03 2.58-1.43 3.55-2.86 1.12-1.64 1.58-3.23 1.6-3.31-.04-.02-3.07-1.18-3.07-4.72zM14.16 3.4c.8-.97 1.34-2.32 1.19-3.66-1.16.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.61-.66 3.41-1.63z"/>
              </svg>
              <span class="flex flex-col leading-tight">
                <span class="text-[10px] font-normal">Yuklab oling</span>
                <span class="text-[20px] font-semibold tracking-tight -mt-0.5">App Store</span>
              </span>
            </a>
          </li>

          <!-- Google Play -->
          <li>
            <a
              :href="stores[1].href"
              target="_blank"
              rel="noopener"
              aria-label="Google Play"
              class="flex items-center gap-3 bg-black text-white rounded-xl px-5 py-2.5 border border-white/15 hover:opacity-85 transition-opacity min-w-[200px]"
            >
              <svg viewBox="0 0 512 512" class="w-7 h-7 flex-shrink-0">
                <defs>
                  <linearGradient id="gp-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00C3FF"/><stop offset="100%" stop-color="#00E5A1"/>
                  </linearGradient>
                  <linearGradient id="gp-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FFD400"/><stop offset="100%" stop-color="#FFA801"/>
                  </linearGradient>
                  <linearGradient id="gp-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FF3A44"/><stop offset="100%" stop-color="#C31162"/>
                  </linearGradient>
                  <linearGradient id="gp-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00A0FF"/><stop offset="100%" stop-color="#00CFFF"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gp-grad4)" d="M37 22c-7 7-11 18-11 32v404c0 14 4 25 11 32l1 1 226-226v-5L38 21z"/>
                <path fill="url(#gp-grad2)" d="M340 338l-76-76v-6l76-76 2 1 89 50c26 14 26 38 0 53l-89 51z"/>
                <path fill="url(#gp-grad3)" d="M342 337L264 259 37 487c8 9 22 11 38 2l267-152"/>
                <path fill="url(#gp-grad1)" d="M342 181L75 30C59 21 45 23 37 32l227 227z"/>
              </svg>
              <span class="flex flex-col leading-tight">
                <span class="text-[10px] font-normal">Yuklab oling</span>
                <span class="text-[20px] font-semibold tracking-tight -mt-0.5">Google Play</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
