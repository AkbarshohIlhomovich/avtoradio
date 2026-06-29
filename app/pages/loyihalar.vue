<script setup lang="ts">
useHead({
  title: 'Efirlar — AVTORADIO 102 FM',
})

const { playing, loading, toggle: toggleLive } = useLivePlayer()
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero section -->
    <section class="bg-y pt-[200px] md:pt-[240px] pb-16 md:pb-24">
      <div
        v-motion-slide-visible-once-bottom
        class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto px-4 md:px-0"
      >
        <div class="bg-black text-white px-6 md:px-14 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-14 items-center">

          <!-- Left: title + player + description -->
          <div>
            <div class="flex items-center gap-6 md:gap-8 flex-wrap">
              <h1 class="text-[44px] md:text-[68px] leading-none font-normal text-white tracking-tight">
                EFIRLAR
              </h1>

              <!-- Inline ON AIR player -->
              <div class="flex items-center gap-4">
                <button
                  type="button"
                  @click="toggleLive"
                  class="text-y hover:opacity-80 transition-opacity flex items-center justify-center flex-shrink-0"
                  :aria-label="playing ? 'Pause' : 'Play'"
                >
                  <svg v-if="loading" viewBox="0 0 40 40" class="w-[40px] h-[40px] animate-spin">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="3" fill="none" opacity="0.25"/>
                    <path d="M20 4 a16 16 0 0 1 16 16" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>
                  </svg>
                  <svg v-else viewBox="0 0 43 47" class="w-[40px] h-[40px] fill-current">
                    <path v-if="!playing" d="M5.907 47a6 6 0 0 1-3.043-.829C1.022 45.086 0 43.032 0 40.921V6.019c0-1.68.635-3.34 1.894-4.475A5.99 5.99 0 0 1 8.86.777l31.187 17.695A5.79 5.79 0 0 1 43 23.5c0 2.073-1.127 3.989-2.953 5.027L8.86 46.223A6 6 0 0 1 5.907 47z"/>
                    <g v-else>
                      <rect x="6" y="6" width="11" height="35" rx="2"/>
                      <rect x="26" y="6" width="11" height="35" rx="2"/>
                    </g>
                  </svg>
                </button>

                <div>
                  <div class="text-[16px] md:text-[18px] font-semibold text-white tracking-wide">
                    ON AIR <span class="text-white/55 font-normal mx-1">·</span> avtoradio
                  </div>
                  <div class="mt-1 flex items-center gap-2">
                    <span class="block w-2 h-2 rounded-full bg-red-500" :class="playing ? 'animate-pulse' : 'opacity-40'"></span>
                    <span class="text-[12px] tracking-[0.18em] uppercase font-semibold text-white/65">
                      {{ loading ? 'Yuklanmoqda' : playing ? 'Jonli efir' : 'Bosing va eshiting' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10 md:mt-12 space-y-5 text-[15px] md:text-[16px] leading-[1.7] text-white/80 max-w-[520px]">
              <p>Efir tili: <span class="font-semibold text-white">o‘zbek.</span></p>
              <p>
                Eshittirishlar xalqaro standartlarga javob beradigan zamonaviy yuqori texnologiyali studiya uskunalari va uzatish texnologiyalari orqali amalga oshiriladi.
              </p>
              <p>
                Efir qamrovi: <span class="font-semibold text-white">Toshkent, Toshkent viloyati va Sirdaryo.</span>
              </p>
            </div>
          </div>

          <!-- Right: schedule card image -->
          <div class="flex justify-center md:justify-end">
            <img
              src="/img/efirlar/schedule.jpg"
              alt="Avtoradioda haftalik dasturlar"
              class="w-[260px] md:w-[300px] h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <LoyihalarSection />
  </main>
</template>
