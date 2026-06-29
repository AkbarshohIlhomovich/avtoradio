<script setup lang="ts">
const targetDate = '2026-12-15T19:00:00'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timerId: ReturnType<typeof setInterval> | undefined

function tick() {
  const now = new Date()
  const target = new Date(targetDate)
  const diff = target.getTime() - now.getTime()
  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0
    return
  }
  days.value    = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value   = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

onMounted(() => {
  tick()
  timerId = setInterval(tick, 1000)
})
onBeforeUnmount(() => { if (timerId) clearInterval(timerId) })

const pillars = [
  {
    title: 'Yo‘ldagi xavfsizlik',
    body: 'Yo‘l harakati madaniyatini oshirish, ogohlantirish va haqiqiy hayotiy holatlarni tezkor yetkazish — eng asosiy mas’uliyatimiz.',
  },
  {
    title: 'Oilalarni mustahkamlash',
    body: 'Oila institutini qadrlash, ota-onaning bolalar ko‘zidagi o‘rni va er-xotin munosabatlarini chuqurroq tushunish dasturlari orqali.',
  },
  {
    title: 'Madaniyat va o‘zlikka qaytish',
    body: 'Har bir tinglovchini o‘z ona tili, milliy madaniyati va ma’naviyatiga yaqinlashtirish — sokin lekin uzoq muddatli investitsiya.',
  },
]
</script>

<template>
  <section id="dekabr" class="bg-y">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0">

      <!-- ─── Top: gala-konsert hero ─── -->
      <div v-motion-slide-visible-once-bottom class="border-y-2 border-black/85 py-12 md:py-16">
        <div class="text-[11px] tracking-[0.32em] uppercase font-bold text-black/70">
          Dekabr · Xalqlar do‘stligi san’at saroyi
        </div>
        <h2 class="mt-3 text-[44px] md:text-[88px] leading-[0.95] font-bold italic uppercase text-black">
          10 YIL <br class="hidden md:block"/>ON AIR
        </h2>
        <p class="mt-5 max-w-[600px] text-[15px] md:text-[17px] leading-[1.55] text-black/85">
          Yil davomida g‘olib bo‘lgan barcha tinglovchilar, kuzgi stikerlar loyihasi ishtirokchilari, sodiq hamkorlar va xalqimiz uchun unutilmas jonli bayram dasturi — yirik media shou yil yakunida bir sahnaga jamlanadi.
        </p>

        <!-- Countdown -->
        <div class="mt-10 md:mt-12 grid grid-cols-4 gap-3 md:gap-5 max-w-[560px]">
          <div v-for="(b, i) in [
            { v: days,    l: 'Kun' },
            { v: hours,   l: 'Soat' },
            { v: minutes, l: 'Daqiqa' },
            { v: seconds, l: 'Soniya' },
          ]" :key="i" class="bg-black text-y aspect-square flex flex-col items-center justify-center">
            <span class="text-[34px] md:text-[48px] leading-none font-extrabold tabular-nums">{{ String(b.v).padStart(2, '0') }}</span>
            <span class="mt-1 md:mt-2 text-[9px] md:text-[10px] tracking-[0.22em] uppercase font-bold text-y/70">{{ b.l }}</span>
          </div>
        </div>
      </div>

      <!-- ─── Sticker campaign ─── -->
      <div v-motion-slide-visible-once-bottom class="py-14 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-14 items-center border-b-2 border-black/85">
        <div>
          <span class="block text-[11px] tracking-[0.32em] uppercase font-bold text-black/70 mb-4">Kuzgi mega-loyiha</span>
          <h3 class="text-[28px] md:text-[40px] font-bold italic uppercase leading-[1.05] text-black">
            Stikerni kuzda sanaymiz
          </h3>
          <p class="mt-5 text-[15px] md:text-[16px] leading-[1.6] text-black/85 max-w-[520px]">
            Xalqimizda “jo‘jani kuzda sanaymiz” degan hikmat bor. Avtoradio bu maqolni kreativ tarzda moslashtirib, yil davomidagi loyihalarda qatnashib “Avtoradio 10 yoshda” stikerini qo‘lga kiritgan va avtomobiliga yopishtirgan tinglovchilar avtomatik tarzda kuzgi mega-loyiha qahramonlariga aylanadilar.
          </p>
          <p class="mt-4 text-[14.5px] leading-[1.6] text-black/75 max-w-[520px] italic">
            Stiker — shunchaki esdalik emas, balki yil yakunidagi Gala-konsertga olib boruvchi o‘ziga xos “chipta”.
          </p>
        </div>

        <!-- Sticker visual: existing brand mark -->
        <div class="flex justify-center">
          <img
            src="/logo-tight.png"
            alt="Avtoradio 10 yil On Air stiker"
            class="w-[260px] md:w-[300px] h-auto rotate-[6deg]"
          />
        </div>
      </div>

      <!-- ─── Mission pillars ─── -->
      <div v-motion-slide-visible-once-bottom class="py-14 md:py-20">
        <div class="max-w-[700px]">
          <span class="block text-[11px] tracking-[0.32em] uppercase font-bold text-black/70 mb-3">Yakuniy maqsad</span>
          <h3 class="text-[28px] md:text-[40px] font-bold italic uppercase leading-[1.05] text-black">
            Katta shaharning <br class="hidden md:block"/>sog‘lom pulsi
          </h3>
          <p class="mt-5 text-[15px] md:text-[16px] leading-[1.6] text-black/85">
            Biz tinglovchiga faqatgina sovg‘a ulashmaymiz: yo‘ldagi asabiy haydovchini madaniyatli hamrohga, tarqoq diqqatni hushyorlikka, kundalik tashvishlarni esa hayotiy falsafaga aylantirishga harakat qilamiz. Jamiyat ruhiy salomatligi va ijtimoiy barqarorligiga — tibbiy va falsafiy investitsiya kiritish niyatimiz.
          </p>
        </div>

        <ul class="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          <li
            v-for="(p, i) in pillars"
            :key="p.title"
            v-motion="{
              initial: { opacity: 0, y: 28 },
              visibleOnce: { opacity: 1, y: 0, transition: { delay: 100 + i * 120, duration: 600, ease: [0.22, 0.61, 0.36, 1] } },
            }"
            class="pillar group relative overflow-hidden border-t-2 border-black/85 pt-5 pb-6 px-4 md:px-5"
          >
            <!-- Black sliding overlay from top -->
            <span class="pillar-overlay absolute inset-x-0 top-0 h-0 bg-black pointer-events-none transition-[height] duration-500 ease-out group-hover:h-full"></span>

            <!-- Content -->
            <div class="relative z-10">
              <span class="block text-[12px] tabular-nums tracking-[0.22em] uppercase font-bold text-black/55 transition-colors duration-500 group-hover:text-y/65">0{{ i + 1 }}</span>
              <h4 class="mt-3 text-[18px] md:text-[20px] font-bold uppercase tracking-[0.01em] text-black leading-tight transition-colors duration-500 group-hover:text-y">{{ p.title }}</h4>
              <p class="mt-3 text-[14px] leading-[1.6] text-black/80 transition-colors duration-500 group-hover:text-y/85">{{ p.body }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
