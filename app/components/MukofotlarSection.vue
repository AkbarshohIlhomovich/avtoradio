<script setup lang="ts">
interface Prize {
  amount: string
  unit: string
  category: string
  title: string
  description: string
  img: string
}

const prizes: Prize[] = [
  {
    amount: '102',
    unit: 'million so‘m',
    category: 'Moliyaviy rag‘bat',
    title: 'Naqd pul mukofoti',
    description: '«Omadli qo‘ng‘iroq» loyihasi omadli ishtirokchilariga yil davomida tarqatiladigan naqd pul jamg‘armasi. Yil yakunidagi gala-konsertda asosiy g‘olib aniqlanadi.',
    img: '/img/prizes/prize-cash.jpg',
  },
  {
    amount: '102',
    unit: 'gramm oltin',
    category: 'Qimmatbaho metall',
    title: 'Oltin quymasi',
    description: 'Yil davomida tarqatilgan «Oltin chipta» egalari o‘rtasida gala-konsertda o‘ynaladigan «Xazina» o‘yini bosh mukofoti.',
    img: '/img/prizes/prize-gold.jpg',
  },
  {
    amount: '2',
    unit: 'yangi avtomobil',
    category: 'Bosh avto-mukofot',
    title: 'Avtomobil sovg‘asi',
    description: 'Yil yakunidagi gala-konsertda «Top Taksi» va «Tonna Benzin» loyihalari bosh g‘oliblariga topshiriladi — kalit va hujjatlar bilan birga.',
    img: '/img/prizes/prize-car.jpg',
  },
  {
    amount: '2',
    unit: 'xorijiy yo‘llanma',
    category: 'Halqaro turizm',
    title: 'Sayohat yo‘llanmasi',
    description: 'Tongi va kechki dasturlar bosh g‘oliblariga ikki kishilik xorijiy sayohat — yangi joylar, yangi taassurotlar va Avtoradio bilan birga.',
    img: '/img/prizes/prize-travel.jpg',
  },
]
</script>

<template>
  <section id="mukofotlar" class="bg-y">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 pb-20 md:pb-28">

      <!-- Stats strip: 4200 listeners → grand concert -->
      <div v-motion-slide-visible-once-bottom class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 border-y-2 border-black/85 py-8 md:py-10">
        <div>
          <div class="text-[44px] md:text-[64px] leading-none font-extrabold text-black tabular-nums">4200</div>
          <div class="mt-2 text-[12px] tracking-[0.22em] uppercase font-semibold text-black/70">ta omadli tinglovchi</div>
        </div>
        <div>
          <div class="text-[44px] md:text-[64px] leading-none font-extrabold text-black tabular-nums">1</div>
          <div class="mt-2 text-[12px] tracking-[0.22em] uppercase font-semibold text-black/70">yil davomida saralash</div>
        </div>
        <div>
          <div class="text-[44px] md:text-[64px] leading-none font-extrabold italic text-black">Gala</div>
          <div class="mt-2 text-[12px] tracking-[0.22em] uppercase font-semibold text-black/70">yil yakunidagi konsert</div>
        </div>
      </div>

      <!-- Prize grid -->
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <li
          v-for="(p, i) in prizes"
          :key="p.title"
          v-motion="{
            initial: { opacity: 0, y: 40 },
            visibleOnce: { opacity: 1, y: 0, transition: { delay: 80 + i * 110, duration: 650, ease: [0.22, 0.61, 0.36, 1] } },
          }"
        >
          <article class="group relative bg-black text-white h-full flex flex-col overflow-hidden">
            <!-- Image header -->
            <div class="relative aspect-[16/10] overflow-hidden">
              <img
                :src="p.img"
                :alt="p.title"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <!-- Yellow tab overlay with category -->
              <span class="absolute top-4 left-4 bg-y text-black text-[10px] tracking-[0.22em] uppercase font-bold px-3 py-1.5">
                {{ p.category }}
              </span>
            </div>

            <!-- Body -->
            <div class="p-6 md:p-7 flex flex-col flex-1">
              <div class="flex items-baseline gap-2.5">
                <span class="text-[54px] md:text-[64px] leading-none font-extrabold text-y tabular-nums">{{ p.amount }}</span>
                <span class="text-[13px] md:text-[14px] tracking-[0.06em] uppercase font-semibold text-white/85">{{ p.unit }}</span>
              </div>
              <h3 class="mt-4 text-[20px] md:text-[22px] font-bold uppercase tracking-[0.01em] text-white leading-tight">
                {{ p.title }}
              </h3>
              <p class="mt-3 text-[14px] leading-[1.6] text-white/75">{{ p.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <!-- Footer note -->
      <p class="mt-12 md:mt-14 text-center text-[13px] md:text-[14px] tracking-[0.04em] italic text-black/70 max-w-[640px] mx-auto leading-relaxed">
        Barcha mukofotlar yil davomida kundalik va mavsumiy loyihalar orqali jamlanadi, omadli sara aniqlanadi va yakunda gala-konsertda jonli efirda topshiriladi.
      </p>
    </div>
  </section>
</template>
