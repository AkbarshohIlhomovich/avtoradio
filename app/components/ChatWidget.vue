<script setup lang="ts">
function openChat() {
  // placeholder: integrate with real chat (Wix uses tawk.to / similar)
  window.open('https://t.me/avtoradio_102fm', '_blank')
}
</script>

<template>
  <button
    type="button"
    @click="openChat"
    aria-label="Bizga yozing"
    class="fixed bottom-[16px] right-[16px] md:bottom-[24px] md:right-[24px] z-40 inline-flex items-center gap-[10px] bg-white text-[#2B2B2B] pl-[14px] pr-[14px] md:pr-[20px] h-[44px] md:h-[46px] rounded-full shadow-[0_2px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_22px_rgba(0,0,0,0.24)] transition-shadow"
  >
    <span class="w-[24px] h-[24px] md:w-[26px] md:h-[26px] rounded-full bg-[#FFCC00] flex items-center justify-center text-black">
      <svg viewBox="0 0 24 24" class="w-[14px] h-[14px] md:w-[15px] md:h-[15px] fill-current" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    </span>
    <span class="hidden sm:inline text-[14px] font-medium leading-none">Bizga yozing</span>
  </button>
</template>
