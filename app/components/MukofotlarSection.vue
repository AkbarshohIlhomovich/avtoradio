<script setup lang="ts">
interface Prize {
  amount: string
  unit: string
  category: string
  title: string
  description: string
  rules: string[]
  img: string
}

const prizes: Prize[] = [
  {
    amount: '102',
    unit: 'million so‘m',
    category: 'Omadli qo‘ng‘iroq',
    title: 'Pul mukofoti',
    description:
      '«Omadli qo‘ng‘iroq» loyihasi g‘oliblari orasida yil so‘ngida Gala-konsertda o‘ynaladigan asosiy pul jamg‘armasi.',
    rules: [
      'Kun davomida efirga qo‘ng‘iroq qilib bog‘lana olgan 1-tinglovchi to‘g‘ridan-to‘g‘ri g‘olibga aylanadi.',
      '1-g‘olib turgan joyni topib birinchi bo‘lib yetib kelgan tinglovchi 2-g‘olibga aylanadi.',
      'Yil davomida shu tartibda g‘oliblar saralab olinadi va Gala-konsertda pul mukofoti ular orasida o‘ynaladi.',
    ],
    img: '/img/som.png',
  },
  {
    amount: '102',
    unit: 'gramm tilla quyma',
    category: 'Xazina',
    title: 'Oltin quymasi',
    description:
      '«Xazina» loyihasi doirasida sirli sandiqchani topgan xazinadorlar orasida gala-konsertda o‘ynaladigan bosh mukofot. Yoki huddi shu qiymatga teng bo‘lgan quyosh panellari.',
    rules: [
      'Sandiqcha shahar bo‘ylab yashiriladi. Ichida oltin taklifnoma va sovg‘alar.',
      'Radio va Instagram jonli efiri orqali beriladigan ma’lumotlarga qarab tinglovchilar sandiqchani topishlari kerak.',
      'Birinchi bo‘lib topgan tinglovchi xazinadorga aylanadi va Gala-konsertda 102 gramm tilla uchun kurashadi.',
    ],
    img: '/img/prizes/prize-gold.png',
  },
  {
    amount: '2',
    unit: 'yangi avtomobil',
    category: 'Tonna benzin · Top taksi',
    title: 'Avtomobil sovg‘asi',
    description:
      'O‘zbekiston avtomobillari — Cobalt, Gentra yoki Nexia 3 — Tonna benzin va Top taksi loyihalari g‘oliblari orasida Gala-konsertda o‘ynaladi. Kalit va hujjatlar sahnada topshiriladi.',
    rules: [
      '«Tonna benzin»: kalit so‘zni bexato yodlab bergan g‘oliblar bak benzin oladi va yil so‘ngidagi o‘yinda ishtirok etadi.',
      '«Top taksi»: FM 102.0 Avtoradioni tinglayotgan haydovchi buyurtmaga chiqib bak benzin va yil so‘ngidagi avtomobil o‘yiniga yo‘llanma oladi.',
      'Yakuniy g‘olib Gala-konsertda jonli efirda o‘ynaladi.',
    ],
    img: '/img/prizes/prize-car.png',
  },
  {
    amount: '2',
    unit: 'chet-el sayohati',
    category: 'Love & Love shou',
    title: 'Sayohat yo‘llanmasi',
    description:
      '«Love & Love shou» oilaviy juftliklari uchun bosh sovrin — 2 kishilik chet-el sayohati yo‘llanmasi. Yangi joylar, yangi taassurotlar va Avtoradio bilan birga.',
    rules: [
      'Oila qurgan tinglovchilar efirga qo‘ng‘iroq qilib turmush o‘rtoqlarining 3 ta kamchiligini va sevishlarini izhor qilishadi.',
      'G‘olib juftlik yil so‘ngidagi Gala-konsertga taklifnomani qo‘lga kiritadi.',
      'Konsertda ushbu loyiha g‘oliblari o‘rtasida 2 kishilik chet-el sayohati yo‘llanmasi o‘ynaladi.',
    ],
    img: '/img/prizes/prize-travel.jpg',
  },
]
</script>

<template>
  <section id="mukofotlar" class="bg-y">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 pb-20 md:pb-28">

      <!-- Stats strip: 9 projects → 3 blocks → gala -->
      <div v-motion-slide-visible-once-bottom class="grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20 border-y-2 border-black/85 py-8 md:py-10">
        <div>
          <div class="text-[36px] md:text-[64px] leading-none font-extrabold text-black tabular-nums">9</div>
          <div class="mt-2 text-[10px] md:text-[12px] tracking-[0.22em] uppercase font-semibold text-black/70">jonli loyiha</div>
        </div>
        <div>
          <div class="text-[36px] md:text-[64px] leading-none font-extrabold text-black tabular-nums">3</div>
          <div class="mt-2 text-[10px] md:text-[12px] tracking-[0.22em] uppercase font-semibold text-black/70">efir bloki</div>
        </div>
        <div>
          <div class="text-[36px] md:text-[64px] leading-none font-extrabold italic text-black">Gala</div>
          <div class="mt-2 text-[10px] md:text-[12px] tracking-[0.22em] uppercase font-semibold text-black/70">yakuniy konsert</div>
        </div>
      </div>

      <!-- Prize grid — 4 kartochka batafsil qoidalari bilan -->
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
            <div class="relative aspect-[16/10] overflow-hidden">
              <img
                :src="p.img"
                :alt="p.title"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span class="absolute top-4 left-4 bg-y text-black text-[10px] tracking-[0.22em] uppercase font-bold px-3 py-1.5">
                {{ p.category }}
              </span>
            </div>

            <div class="p-6 md:p-7 flex flex-col flex-1">
              <div class="flex items-baseline gap-2.5">
                <span class="text-[54px] md:text-[64px] leading-none font-extrabold text-y tabular-nums">{{ p.amount }}</span>
                <span class="text-[13px] md:text-[14px] tracking-[0.06em] uppercase font-semibold text-white/85">{{ p.unit }}</span>
              </div>
              <h3 class="mt-4 text-[20px] md:text-[22px] font-bold uppercase tracking-[0.01em] text-white leading-tight">
                {{ p.title }}
              </h3>
              <p class="mt-3 text-[14px] leading-[1.6] text-white/75">{{ p.description }}</p>

              <div class="mt-5 pt-5 border-t border-white/12">
                <span class="block text-[10px] tracking-[0.24em] uppercase font-bold text-y/70 mb-3">Qoidalar</span>
                <ul class="space-y-2">
                  <li v-for="(r, ri) in p.rules" :key="ri" class="relative pl-5 text-[13px] leading-[1.55] text-white/80">
                    <span class="absolute left-0 top-[8px] w-[6px] h-[6px] rounded-full bg-y"></span>
                    {{ r }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <!-- Footer note -->
      <p class="mt-12 md:mt-14 text-center text-[13px] md:text-[14px] tracking-[0.04em] italic text-black/70 max-w-[640px] mx-auto leading-relaxed">
        Barcha yutuqli loyihalarimizning bu yilgi sovrinlari — yil davomida saralanadi va yakunda Gala-konsertda jonli efirda topshiriladi.
      </p>
    </div>
  </section>
</template>
