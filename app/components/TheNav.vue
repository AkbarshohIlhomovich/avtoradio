<script setup lang="ts">
const social = [
  { name: 'YouTube',   href: 'https://youtube.com/@avtoradio',     img: '/icon-youtube.png' },
  { name: 'Instagram', href: 'https://instagram.com/avtoradio.uz', img: '/icon-instagram.png' },
  { name: 'Facebook',  href: 'https://facebook.com/avtoradio',     img: '/icon-facebook.png' },
  { name: 'Telegram',  href: 'https://t.me/avtoradio_102fm',       img: '/icon-telegram.png' },
]

interface MenuItem { label: string; to: string }
const menu: MenuItem[] = [
  { label: 'Bosh sahifa',   to: '/' },
  { label: 'Boshlovchilar', to: '/boshlovchilar' },
  { label: 'Loyihalar',     to: '/loyihalar' },
  { label: 'Mukofotlar',    to: '/mukofotlar' },
  { label: 'Dekabr',        to: '/dekabr' },
  { label: 'Aloqa',         to: '/aloqa' },
]

const route = useRoute()
const isActive = (to: string) =>
  to === '/' ? route.path === '/' : route.path.startsWith(to)

const menuOpen = ref(false)
const scrolled = ref(false)
const { playing, loading, toggle: toggleLive } = useLivePlayer()

// ── Live Tashkent clock ──────────────────────────────────────
const now = ref(new Date())
let clockId: ReturnType<typeof setInterval> | undefined

function pickTashkentParts(date: Date) {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tashkent',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const [hh = '00', mm = '00', ss = '00'] = fmt.format(date).split(':')
  return { hh, mm, ss, hour: parseInt(hh, 10) }
}

const tashkent       = computed(() => pickTashkentParts(now.value))
const tashkentClock  = computed(() => `${tashkent.value.hh}:${tashkent.value.mm}:${tashkent.value.ss}`)

// ── Lifecycle ────────────────────────────────────────────────
function openMenu()  { menuOpen.value = true;  document.body.style.overflow = 'hidden' }
function closeMenu() { menuOpen.value = false; document.body.style.overflow = '' }
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') closeMenu() }
function onScroll() { scrolled.value = window.scrollY > 48 }

onMounted(() => {
  clockId = setInterval(() => { now.value = new Date() }, 1000)
  window.addEventListener('keydown', onKey)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => {
  if (clockId) clearInterval(clockId)
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-40">

    <!-- ═════ TOP MOBILE STRIP (< lg only): centered frequency dial ═════ -->
    <div
      class="lg:hidden bg-black overflow-hidden h-[28px] flex items-center justify-center select-none"
      :class="scrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[28px] opacity-100'"
      style="transition: max-height 300ms ease, opacity 300ms ease;"
    >
      <div class="flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase tabular-nums">
        <span class="text-y/35">88</span>
        <span class="w-px h-2 bg-y/20"></span>
        <span class="text-y/55">96</span>
        <span class="w-px h-3 bg-y/40"></span>
        <span class="relative flex items-center gap-1.5 mx-0.5">
          <span class="absolute -top-2.5 left-1/2 -translate-x-1/2 w-0 h-0
                       border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent
                       border-t-[6px] border-t-y"></span>
          <span class="text-y font-extrabold text-[12px] tracking-[0.12em]">102.0</span>
          <span class="text-y/65 tracking-[0.22em]">MHz</span>
        </span>
        <span class="w-px h-3 bg-y/40"></span>
        <span class="text-y/55">104</span>
        <span class="w-px h-2 bg-y/20"></span>
        <span class="text-y/35">108</span>
      </div>
    </div>

    <!-- ═════ TOP BLACK STRIP (lg+): LIVE button + frequency dial + clock ═════ -->
    <div
      v-motion
      :initial="{ opacity: 0, y: -16 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, ease: [0.22, 0.61, 0.36, 1] } }"
      class="hidden lg:block bg-black text-y/65 select-none overflow-hidden
             transition-[max-height,opacity] duration-300 ease-out"
      :class="scrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[48px] opacity-100'"
    >
      <div class="w-full max-w-[1200px] mx-auto px-6 xl:px-0 h-[40px]
                  grid grid-cols-[auto_1fr_auto] gap-6 items-stretch">

        <!-- LIVE button (left) -->
        <button
          type="button"
          @click="toggleLive"
          :aria-label="playing ? 'To‘xtatish' : 'Jonli efirni eshitish'"
          class="live-strip group flex items-center gap-2.5 h-full px-3 -ml-3 hover:bg-white/[0.04] transition-colors"
        >
          <span class="w-[7px] h-[7px] rounded-full bg-[#FF1A1A] flex-shrink-0"
                :class="playing ? 'live-dot-pulse' : 'opacity-80'"></span>

          <span class="flex-shrink-0 w-[14px] h-[14px] flex items-center justify-center text-y">
            <span v-if="loading" class="block w-3 h-3 border-[1.5px] border-y/25 border-t-y rounded-full animate-spin"></span>
            <span v-else-if="playing" class="eq-bars flex items-end justify-between h-3 w-full" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
            <svg v-else viewBox="0 0 43 47" class="w-[12px] h-[12px] fill-current">
              <path d="M5.907 47a6 6 0 0 1-3.043-.829C1.022 45.086 0 43.032 0 40.921V6.019c0-1.68.635-3.34 1.894-4.475A5.99 5.99 0 0 1 8.86.777l31.187 17.695A5.79 5.79 0 0 1 43 23.5c0 2.073-1.127 3.989-2.953 5.027L8.86 46.223A6 6 0 0 1 5.907 47z"/>
            </svg>
          </span>

          <span class="text-y font-bold text-[10px] tracking-[0.3em] uppercase">
            {{ loading ? 'Yuklanmoqda' : playing ? 'EFIRDA' : 'ON AIR' }}
          </span>
        </button>

        <!-- Frequency dial (center) -->
        <div class="flex items-center justify-center gap-2.5 text-[10px] font-semibold tracking-[0.3em] uppercase tabular-nums">
          <span class="text-y/35">88</span>
          <span class="w-px h-2 bg-y/20"></span>
          <span class="text-y/55">96</span>
          <span class="w-px h-3 bg-y/40"></span>
          <span class="relative flex items-center gap-1.5 mx-0.5">
            <span class="absolute -top-2.5 left-1/2 -translate-x-1/2 w-0 h-0
                         border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent
                         border-t-[6px] border-t-y"></span>
            <span class="text-y font-extrabold text-[12px] tracking-[0.12em]">102.0</span>
            <span class="text-y/65 tracking-[0.22em]">MHz</span>
          </span>
          <span class="w-px h-3 bg-y/40"></span>
          <span class="text-y/55">104</span>
          <span class="w-px h-2 bg-y/20"></span>
          <span class="text-y/35">108</span>
        </div>

        <!-- Clock + anniversary (right) -->
        <div class="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] uppercase tabular-nums">
          <span class="text-y/55">Toshkent</span>
          <span class="text-y font-bold tracking-[0.12em]">{{ tashkentClock }}</span>
          <span class="text-y/25">|</span>
          <span class="text-y/70">10 yillik yubiley</span>
        </div>
      </div>
    </div>

    <!-- ═════ MAIN BAR ═════ -->
    <div
      class="bg-y transition-shadow duration-300"
      :class="scrolled ? 'shadow-[0_2px_10px_-4px_rgba(0,0,0,0.18)]' : ''"
    >
      <div class="w-full max-w-[1200px] mx-auto px-3 md:px-5 xl:px-0
                  grid grid-cols-[auto_1fr_auto] gap-3 md:gap-4 lg:gap-6 items-center
                  h-[64px] md:h-[80px] lg:h-[80px]">

        <!-- ── BRAND ── -->
        <NuxtLink
          to="/"
          v-motion
          :initial="{ opacity: 0, x: -16 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 100, duration: 500, ease: [0.22, 0.61, 0.36, 1] } }"
          class="brand-link group flex items-center gap-2 md:gap-2.5 lg:gap-3"
        >
          <span class="relative block w-[36px] h-[36px] md:w-[42px] md:h-[42px] lg:w-[46px] lg:h-[46px] flex-shrink-0">
            <img src="/logo-tight.png" alt="" aria-hidden="true"
                 class="brand-img-default absolute inset-0 w-full h-full object-contain transition-opacity duration-200"/>
            <img src="/logo-real-tight.png" alt="" aria-hidden="true"
                 class="brand-img-hover absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-200"/>
          </span>
          <span class="block font-extrabold text-black leading-none tracking-tight
                       text-[16px] md:text-[18px] lg:text-[22px]">AVTORADIO</span>
        </NuxtLink>

        <!-- ── INLINE NAV (lg+ only — tablet uses burger to keep things clean) ── -->
        <nav
          v-motion
          :initial="{ opacity: 0, y: -8 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500, ease: [0.22, 0.61, 0.36, 1] } }"
          class="hidden lg:flex items-center justify-center gap-0 lg:gap-1"
        >
          <NuxtLink
            v-for="(m, i) in menu"
            :key="m.label"
            :to="m.to"
            class="nav-link group relative px-2 xl:px-3 py-2
                   text-[10px] xl:text-[11px] tracking-[0.16em] xl:tracking-[0.18em] uppercase font-bold
                   text-black/65 hover:text-black transition-colors whitespace-nowrap"
            :class="{ 'is-active': isActive(m.to) }"
            v-motion
            :initial="{ opacity: 0, y: -8 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 240 + i * 40, duration: 400 } }"
          >
            {{ m.label }}
            <span class="nav-underline absolute left-2 right-2 xl:left-3 xl:right-3 bottom-1 h-[2px] bg-black
                         origin-left transition-transform duration-300"></span>
          </NuxtLink>
        </nav>

        <!-- ── RIGHT CLUSTER ── -->
        <div class="flex items-center justify-end gap-2 md:gap-2.5"
             v-motion
             :initial="{ opacity: 0, x: 16 }"
             :enter="{ opacity: 1, x: 0, transition: { delay: 320, duration: 500, ease: [0.22, 0.61, 0.36, 1] } }"
        >
          <!-- Compact play button (mobile + tablet + iPad Pro lg) -->
          <button
            type="button"
            @click="toggleLive"
            :aria-label="playing ? 'To‘xtatish' : 'Jonli efirni eshitish'"
            class="xl:hidden inline-flex items-center gap-2 h-10 px-2
                   text-black hover:opacity-70 transition-opacity"
          >
            <span v-if="loading" class="block w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
            <svg v-else viewBox="0 0 43 47" class="w-[18px] h-[18px] fill-current">
              <path v-if="!playing" d="M5.907 47a6 6 0 0 1-3.043-.829C1.022 45.086 0 43.032 0 40.921V6.019c0-1.68.635-3.34 1.894-4.475A5.99 5.99 0 0 1 8.86.777l31.187 17.695A5.79 5.79 0 0 1 43 23.5c0 2.073-1.127 3.989-2.953 5.027L8.86 46.223A6 6 0 0 1 5.907 47z"/>
              <g v-else>
                <rect x="6" y="6" width="11" height="35" rx="2"/>
                <rect x="26" y="6" width="11" height="35" rx="2"/>
              </g>
            </svg>
            <span class="text-[12px] tracking-[0.18em] uppercase font-bold whitespace-nowrap">
              {{ loading ? 'Yuklanmoqda' : playing ? 'EFIRDA' : 'ON AIR' }}
            </span>
          </button>

          <!-- Socials (xl+ only — at lg/1024 the nav already fills width) -->
          <ul class="hidden xl:flex items-center gap-0.5">
            <li v-for="s in social" :key="s.name">
              <a :href="s.href" target="_blank" rel="noopener" :aria-label="s.name"
                 class="block w-8 h-8 p-1.5 hover:bg-black/8 transition-colors">
                <img :src="s.img" alt="" aria-hidden="true" class="w-full h-full object-contain"/>
              </a>
            </li>
          </ul>

          <!-- Burger — mobile + tablet -->
          <button
            type="button"
            @click="openMenu"
            aria-label="Menyu"
            :aria-expanded="menuOpen"
            class="burger lg:hidden relative w-10 h-10 inline-flex flex-col items-center justify-center gap-[5px]
                   border border-transparent hover:border-black/15 hover:bg-black/5 transition-colors"
          >
            <span class="block w-[20px] h-[2.5px] bg-black rounded-full"></span>
            <span class="block w-[20px] h-[2.5px] bg-black rounded-full"></span>
            <span class="block w-[14px] h-[2.5px] bg-black rounded-full self-end mr-[10px]"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═════ MENU — slide-in panel from right (mobile only) ═════ -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100" leave-to-class="opacity-0"
    >
      <div v-if="menuOpen" class="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/45" @click="closeMenu"></div>

        <!-- Side panel — slides in from right -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full" enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-200 ease-in"
          leave-from-class="translate-x-0" leave-to-class="translate-x-full"
          appear
        >
          <aside
            v-if="menuOpen"
            class="absolute right-0 top-0 bottom-0 w-[82%] max-w-[340px] bg-y shadow-2xl
                   flex flex-col"
          >
            <!-- Panel header: brand mark + close -->
            <div class="flex items-center justify-between px-5 h-[64px]">
              <span class="flex items-center gap-2.5">
                <img src="/logo-tight.png" alt="" class="w-8 h-8 object-contain"/>
                <span class="font-extrabold text-black text-[15px] tracking-tight">AVTORADIO</span>
              </span>
              <button
                @click="closeMenu"
                aria-label="Yopish"
                class="w-10 h-10 -mr-2 inline-flex items-center justify-center text-black hover:bg-black/5 transition-colors"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            <!-- Nav links — left-aligned, vertical -->
            <nav class="flex-1 flex flex-col px-5 pt-6 overflow-y-auto">
              <NuxtLink
                v-for="(m, i) in menu"
                :key="m.label"
                :to="m.to"
                @click="closeMenu"
                v-motion
                :initial="{ opacity: 0, x: 24 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 120 + i * 50, duration: 350 } }"
                class="group py-3 text-black text-[20px] font-semibold uppercase tracking-[0.04em]
                       hover:tracking-[0.08em] transition-all"
              >
                <span class="relative inline-block">
                  {{ m.label }}
                  <span
                    v-if="isActive(m.to)"
                    class="absolute left-0 right-0 -bottom-1 h-[2px] bg-black"
                  ></span>
                </span>
              </NuxtLink>
            </nav>

            <!-- Footer: socials + tagline -->
            <div class="px-5 pb-7 pt-5">
              <div class="flex items-center gap-3 mb-4">
                <a v-for="s in social" :key="s.name" :href="s.href" target="_blank" rel="noopener" :aria-label="s.name"
                   class="w-9 h-9 inline-flex items-center justify-center hover:bg-black/8 transition-colors">
                  <img :src="s.img" alt="" aria-hidden="true" class="w-5 h-5 object-contain"/>
                </a>
              </div>
              <p class="text-black/65 text-[10px] tracking-[0.28em] uppercase font-bold">102.0 · Yolimiz bir</p>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Brand swap: full logo → rhombus-only on hover */
.brand-link:hover .brand-img-default { opacity: 0; }
.brand-link:hover .brand-img-hover   { opacity: 1; }

/* Nav link underline */
.nav-link .nav-underline { transform: scaleX(0); }
.nav-link:hover .nav-underline,
.nav-link.is-active .nav-underline { transform: scaleX(1); }
.nav-link.is-active { color: rgb(0 0 0); }

/* Pulsing red tally light */
.live-dot-pulse { animation: live-pulse 1.4s ease-in-out infinite; }
@keyframes live-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 26, 26, 0.55); }
  50%      { box-shadow: 0 0 0 5px rgba(255, 26, 26, 0); }
}

/* EQ visualizer when playing */
.eq-bars { gap: 1.5px; }
.eq-bars span {
  display: block;
  width: 2px;
  background: currentColor;
  border-radius: 1px 1px 0 0;
  height: 100%;
  transform: scaleY(0.35);
  transform-origin: bottom;
  animation: eq-bounce 0.85s ease-in-out infinite;
}
.eq-bars span:nth-child(1) { animation-delay: -0.15s; }
.eq-bars span:nth-child(2) { animation-delay: -0.45s; }
.eq-bars span:nth-child(3) { animation-delay: -0.25s; }
@keyframes eq-bounce {
  0%, 100% { transform: scaleY(0.3); }
  25%      { transform: scaleY(0.85); }
  50%      { transform: scaleY(0.5); }
  75%      { transform: scaleY(1); }
}
</style>
