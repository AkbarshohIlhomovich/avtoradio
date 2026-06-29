<script setup lang="ts">
// Social icons from avtoradio.uz CDN (saved locally to /public)
const social = [
  { name: 'YouTube',   href: 'https://youtube.com/@avtoradio',     img: '/icon-youtube.png',   w: 40, h: 40 },
  { name: 'Instagram', href: 'https://instagram.com/avtoradio.uz', img: '/icon-instagram.png', w: 39, h: 39 },
  { name: 'Facebook',  href: 'https://facebook.com/avtoradio',     img: '/icon-facebook.png',  w: 40, h: 40 },
  { name: 'Telegram',  href: 'https://t.me/avtoradio_102fm',       img: '/icon-telegram.png',  w: 39, h: 39 },
]

interface MenuItem { label: string; to?: string; href?: string }
const menu: MenuItem[] = [
  { label: 'Bosh sahifa',   to:   '/' },
  { label: 'Boshlovchilar', to:   '/boshlovchilar' },
  { label: 'Loyihalar',     to:   '/loyihalar' },
  { label: 'Mukofotlar',    to:   '/mukofotlar' },
  { label: 'Dekabr',        to:   '/dekabr' },
  { label: 'Aloqa',         to:   '/aloqa' },
]

const menuOpen = ref(false)
const playing  = ref(false)
const loading  = ref(false)
const audio    = ref<HTMLAudioElement | null>(null)

// Avtoradio 102 FM — Icecast live stream (HTTPS cert expired, fallback to HTTP on :8000)
const STREAM_URLS = [
  'http://fm102.uz:8000/autoradio',
  'https://fm102.uz:8443/autoradio',
]

function buildAudio(): HTMLAudioElement {
  const el = new Audio()
  el.preload = 'none'
  el.crossOrigin = 'anonymous'
  el.volume = 0.9
  el.addEventListener('playing', () => { loading.value = false; playing.value = true })
  el.addEventListener('pause',   () => { playing.value = false })
  el.addEventListener('waiting', () => { loading.value = true })
  el.addEventListener('error',   () => { loading.value = false; playing.value = false; tryNextStream() })
  return el
}

let streamIndex = 0
function tryNextStream() {
  if (!audio.value) return
  streamIndex = (streamIndex + 1) % STREAM_URLS.length
  audio.value.src = `${STREAM_URLS[streamIndex]}?t=${Date.now()}`
  audio.value.play().catch(() => { loading.value = false; playing.value = false })
}

async function toggleLive() {
  if (!audio.value) audio.value = buildAudio()

  if (playing.value) {
    audio.value.pause()
    audio.value.src = ''
    playing.value = false
    loading.value = false
    return
  }

  loading.value = true
  streamIndex = 0
  audio.value.src = `${STREAM_URLS[streamIndex]}?t=${Date.now()}`
  try {
    await audio.value.play()
  } catch {
    loading.value = false
  }
}

function openMenu()  { menuOpen.value = true;  document.body.style.overflow = 'hidden' }
function closeMenu() { menuOpen.value = false; document.body.style.overflow = '' }
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') closeMenu() }

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  audio.value?.pause()
  audio.value = null
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="absolute top-0 left-0 right-0 z-40 h-[180px] md:h-[220px]">
    <div class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto h-full px-4 md:px-0 relative">
      <!-- BRAND BLOCK -->
      <NuxtLink to="/" class="brand-link group absolute top-[16px] md:top-[23px] left-2 md:left-0 flex items-start gap-3 md:gap-[21px]">
        <span class="brand-box relative block w-[80px] h-[90px] md:w-[107px] md:h-[120px] flex-shrink-0 overflow-hidden rounded-sm transition-colors duration-200">
          <img src="/logo-default.png" alt="AVTORADIO" class="brand-img-default absolute inset-0 w-full h-full object-contain transition-opacity duration-200"/>
          <img src="/logo-hover.png"   alt="" aria-hidden="true" class="brand-img-hover absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-200"/>
          <img src="/logo-real.png"    alt="" aria-hidden="true" class="brand-img-active absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-200"/>
        </span>
        <div class="text-white pt-0 md:pt-[2px]">
          <div class="font-normal text-[32px] md:text-[50px] md:leading-[70px]">AVTORADIO</div>
          <div class="text-[14px] md:text-[20px] md:leading-[28px] mt-1 md:mt-[14px]">YOLIMIZ BIR 102 FM</div>
        </div>
      </NuxtLink>

      <!-- ON AIR -->
      <button
        type="button"
        @click="toggleLive"
        v-motion
        :initial="{ opacity: 0, y: 60 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 700, ease: [0.22, 0.61, 0.36, 1] } }"
        class="hidden md:flex items-center text-black absolute top-[102px] left-[358px] hover:opacity-80 transition-opacity gap-[11px]"
        aria-label="ON AIR"
      >
        <span class="w-[40px] h-[40px] flex items-center justify-center fill-black">
          <svg v-if="loading" viewBox="0 0 40 40" class="w-[34px] h-[34px] animate-spin">
            <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="3" fill="none" opacity="0.2"/>
            <path d="M20 4 a16 16 0 0 1 16 16" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>
          </svg>
          <svg v-else viewBox="0 0 43 47" class="w-[40px] h-[40px] fill-current">
            <path v-if="!playing" d="M5.907 47a6 6 0 0 1-3.043-.829C1.022 45.086 0 43.032 0 40.921V6.019c0-1.68.635-3.34 1.894-4.475A5.99 5.99 0 0 1 8.86.777l31.187 17.695A5.79 5.79 0 0 1 43 23.5c0 2.073-1.127 3.989-2.953 5.027L8.86 46.223A6 6 0 0 1 5.907 47z"/>
            <g v-else>
              <rect x="6" y="6" width="11" height="35" rx="2"/>
              <rect x="26" y="6" width="11" height="35" rx="2"/>
            </g>
          </svg>
        </span>
        <span class="text-[25px] leading-[35px] font-normal whitespace-nowrap">
          {{ loading ? 'YUKLANMOQDA' : playing ? 'ЭФИРДА' : 'ON AIR' }}
        </span>
      </button>

      <!-- Right cluster: burger image on top, 2×2 socials below (all PNGs from original) -->
      <div class="absolute top-[16px] right-2 flex flex-col items-center gap-0">
        <button
          aria-label="Menu"
          :aria-expanded="menuOpen"
          class="burger-btn relative block w-[48px] h-[48px] hover:opacity-80 transition-opacity"
          @click="openMenu"
        >
          <img src="/icon-burger.png"        alt="" class="burger-default absolute inset-0 w-full h-full object-contain transition-opacity duration-150"/>
          <img src="/icon-burger-hover.png"  alt="" aria-hidden="true" class="burger-hover   absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-150"/>
          <img src="/icon-burger-active.png" alt="" aria-hidden="true" class="burger-active  absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-150"/>
        </button>

        <ul class="grid grid-cols-2 gap-x-0 gap-y-[4px] mt-[5px]">
          <li v-for="s in social" :key="s.name" class="m-0">
            <a :href="s.href" target="_blank" rel="noopener" :aria-label="s.name"
               class="social-link block flex items-center justify-center hover:opacity-70 transition-opacity"
               :style="{ width: s.w + 'px', height: s.h + 'px' }">
              <img :src="s.img" :alt="s.name" :width="s.w" :height="s.h" class="block w-full h-full object-contain"/>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Full-screen menu overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100" leave-to-class="opacity-0"
    >
      <div v-if="menuOpen" class="fixed inset-0 z-[100] bg-y flex flex-col" role="dialog" aria-modal="true">
        <button @click="closeMenu" aria-label="Yopish" class="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 text-ink p-2 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 24 24" class="w-9 h-9 md:w-11 md:h-11 fill-current">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <nav class="flex-1 flex flex-col items-center justify-center gap-7 md:gap-9 px-6">
          <template v-for="m in menu" :key="m.label">
            <NuxtLink
              v-if="m.to"
              :to="m.to"
              @click="closeMenu"
              class="text-ink text-3xl md:text-5xl font-medium uppercase tracking-wide hover:tracking-[0.05em] transition-all"
            >{{ m.label }}</NuxtLink>
            <a
              v-else
              :href="m.href"
              @click="closeMenu"
              class="text-ink text-3xl md:text-5xl font-medium uppercase tracking-wide hover:tracking-[0.05em] transition-all"
            >{{ m.label }}</a>
          </template>
        </nav>
        <div class="pb-10 md:pb-14 flex flex-col items-center gap-5">
          <div class="flex items-center gap-5">
            <a v-for="s in social" :key="s.name" :href="s.href" target="_blank" rel="noopener" :aria-label="s.name" class="text-ink hover:opacity-60 transition-opacity">
              <img :src="s.img" :alt="s.name" class="w-7 h-7 object-contain"/>
            </a>
          </div>
          <p class="text-ink/70 text-xs tracking-[0.18em] uppercase">YOLIMIZ BIR 102 FM</p>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.brand-link:hover .brand-box { background-color: #FBC608; }
.brand-link:hover .brand-img-default { opacity: 0; }
.brand-link:hover .brand-img-hover   { opacity: 1; }
.brand-link:active .brand-img-default,
.brand-link:active .brand-img-hover  { opacity: 0; }
.brand-link:active .brand-img-active { opacity: 1; }
.brand-link:active .brand-box        { background-color: #FBC608; }

/* Burger swap states (default / hover / active) */
.burger-btn:hover  .burger-default { opacity: 0; }
.burger-btn:hover  .burger-hover   { opacity: 1; }
.burger-btn:active .burger-default,
.burger-btn:active .burger-hover   { opacity: 0; }
.burger-btn:active .burger-active  { opacity: 1; }
</style>
