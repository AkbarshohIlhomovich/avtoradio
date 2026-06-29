<script setup lang="ts">
const vid = ref<HTMLVideoElement | null>(null)
const ended = ref(false)

function tryUnmute() {
  if (!vid.value) return
  vid.value.muted = false
  vid.value.volume = 1
  vid.value.play().catch(() => {
    if (vid.value) vid.value.muted = true
    vid.value?.play().catch(() => {})
  })
}

function replay() {
  if (!vid.value) return
  ended.value = false
  vid.value.currentTime = 0
  vid.value.muted = false
  vid.value.play().catch(() => {
    if (vid.value) vid.value.muted = true
    vid.value?.play().catch(() => {})
  })
}

function onEnded() { ended.value = true }

onMounted(async () => {
  if (!vid.value) return
  vid.value.muted = false
  try {
    await vid.value.play()
  } catch {
    vid.value.muted = true
    vid.value.play().catch(() => {})
    const onFirst = () => {
      tryUnmute()
      window.removeEventListener('click', onFirst)
      window.removeEventListener('keydown', onFirst)
      window.removeEventListener('touchstart', onFirst)
    }
    window.addEventListener('click', onFirst, { once: true })
    window.addEventListener('keydown', onFirst, { once: true })
    window.addEventListener('touchstart', onFirst, { once: true })
  }
})
</script>

<template>
  <section id="top" class="relative bg-y min-h-screen">
    <div class="w-full md:w-[980px] md:max-w-[980px] mx-auto px-4 md:px-0 pt-[180px] md:pt-[223px] pb-10">
      <div class="relative w-full md:w-[980px] md:h-[700px] aspect-video md:aspect-auto bg-y overflow-hidden">
        <video
          ref="vid"
          class="w-full h-full object-cover"
          src="/hero.mp4" poster="/hero-poster.png"
          autoplay playsinline preload="auto"
          @ended="onEnded"
          aria-hidden="true"
        />

        <!-- Replay button: shows when video ends -->
        <Transition
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0" enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200"
          leave-from-class="opacity-100" leave-to-class="opacity-0"
        >
          <button
            v-if="ended"
            type="button"
            @click="replay"
            aria-label="Videoni qaytadan boshlash"
            class="absolute inset-0 flex items-center justify-center group"
          >
            <span class="inline-flex w-[54px] h-[54px] items-center justify-center rounded-full bg-y/60 group-hover:bg-y/80 group-hover:scale-110 transition-all duration-200 backdrop-blur-sm">
              <svg viewBox="0 0 43 47" class="w-[22px] h-[22px] fill-black ml-0.5">
                <path d="M5.907 47a6 6 0 0 1-3.043-.829C1.022 45.086 0 43.032 0 40.921V6.019c0-1.68.635-3.34 1.894-4.475A5.99 5.99 0 0 1 8.86.777l31.187 17.695A5.79 5.79 0 0 1 43 23.5c0 2.073-1.127 3.989-2.953 5.027L8.86 46.223A6 6 0 0 1 5.907 47z"/>
              </svg>
            </span>
          </button>
        </Transition>
      </div>
    </div>
  </section>
</template>
