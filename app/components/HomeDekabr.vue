<script setup lang="ts">
const targetDate = '2026-12-15T19:00:00'
const days    = ref(0)
const hours   = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let timerId: ReturnType<typeof setInterval> | undefined

function tick() {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) { days.value = hours.value = minutes.value = seconds.value = 0; return }
  days.value    = Math.floor(diff / 86_400_000)
  hours.value   = Math.floor((diff / 3_600_000) % 24)
  minutes.value = Math.floor((diff / 60_000) % 60)
  seconds.value = Math.floor((diff / 1_000) % 60)
}
onMounted(() => { tick(); timerId = setInterval(tick, 1000) })
onBeforeUnmount(() => { if (timerId) clearInterval(timerId) })

const blocks = computed(() => [
  { v: days,    l: 'Kun' },
  { v: hours,   l: 'Soat' },
  { v: minutes, l: 'Daqiqa' },
  { v: seconds, l: 'Soniya' },
])
</script>

<template>
  <section class="bg-y">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 py-14 md:py-20">

      <header v-motion-slide-visible-once-bottom>
        <span class="block text-[12px] tracking-[0.28em] uppercase font-bold text-black/70 mb-3">Dekabr</span>
        <h2 class="text-[34px] md:text-[52px] leading-[1.04] font-bold italic uppercase text-black tracking-tight">
          10 YIL ON AIR
        </h2>
      </header>

      <div v-motion-slide-visible-once-bottom class="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 md:gap-16 items-center">

        <div>

          <!-- Countdown -->
          <div class="grid grid-cols-4 gap-2 md:gap-3 max-w-[440px]">
            <div v-for="(b, i) in blocks" :key="i" class="bg-black text-y aspect-square flex flex-col items-center justify-center">
              <span class="text-[24px] md:text-[36px] leading-none font-extrabold tabular-nums">{{ String(b.v.value).padStart(2, '0') }}</span>
              <span class="mt-1 text-[8px] md:text-[9px] tracking-[0.22em] uppercase font-bold text-y/65">{{ b.l }}</span>
            </div>
          </div>
        </div>

        <!-- Sticker -->
        <div class="flex justify-center md:justify-end">
          <NuxtLink to="/dekabr" class="block">
            <img
              src="/logo-tight.png"
              alt="Avtoradio 10 yil On Air"
              class="w-[220px] md:w-[260px] h-auto rotate-[6deg] hover:rotate-0 transition-transform duration-500"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
