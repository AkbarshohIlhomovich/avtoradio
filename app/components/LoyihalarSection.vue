<script setup lang="ts">
interface Project {
  time: string
  title: string
  description: string
  img?: string
}

interface Block {
  code: 'A' | 'B' | 'C'
  name: string
  window: string
  tagline: string
  hosts: string
  projects: Project[]
}

const blocks: Block[] = [
  {
    code: 'A',
    name: 'Tongi reys',
    window: '07:00 — 10:00',
    tagline: 'Ertalabki uch soatlik jonli efir — kunning tetik boshlanishi.',
    hosts: 'Nazira Inoyatova · Mirzayor Erkinov',
    projects: [
      {
        time: '07:00',
        title: 'Tanaffus',
        description:
          'Bu soatda futbol, mundial haqida suhbatlashamiz. Boisi bu yilgi mundial biz uchun ham tarixiy — unda ilk bor O‘zbekiston milliy terma jamoasi ishtirok etmoqda.',
        img: '/img/projects/p-tongi-reys.jpg',
      },
      {
        time: '08:00',
        title: 'Omadli qo‘ng‘iroq',
        description:
          'Efir raqamlari +998 97 710 10 20 istalgan vaqtda parvoz tartibidan olinadi. O‘sha vaqtda bog‘lana olgan 1-tinglovchi to‘g‘ridan-to‘g‘ri g‘olibga aylanadi, 1-g‘olibni topib birinchi bo‘lib yetib kelgan tinglovchi 2-g‘olibga aylanadi. Yil so‘ngida g‘oliblar o‘rtasida 102 000 000 so‘m pul mukofoti o‘ynaladi.',
        img: '/img/projects/p-omadli.jpg',
      },
      {
        time: '09:00',
        title: 'Tekin dasturxon',
        description:
          'Tinglovchilar istalgan taomga «sevgi izhor» qilib, ovozli xabar yuborishadi. 2 ta eng ishtaxa ochar ovoz sohiblari tanlab olinadi, qolgan tinglovchilar ovozi bilan g‘olib aniqlanadi. G‘olib AKSU restoranida 2 kishilik bepul ovqatlanish vaucheri bilan taqdirlanadi.',
        img: '/img/projects/p-radio-kafe.jpg',
      },
    ],
  },
  {
    code: 'B',
    name: 'Radio charter',
    window: '13:00 — 16:00',
    tagline: 'Kunduzgi uch soat — o‘yin, ma’rifat va shahar bo‘ylab sayohat.',
    hosts: 'Kamola Ermatova · Madina Fayz',
    projects: [
      {
        time: '13:00',
        title: 'Yuzda yurma',
        description:
          'Haydovchilarni xushyorlikka, qoidalarga e’tiborga chorlaydi. Ruldagi tinglovchilar boshlovchi mavzusiga doir shaxsiy hodisalar va ko‘rganlari haqida ovozli xabar yuboradilar — bu sadolar boshqa haydovchilarga ibrat bo‘ladi.',
        img: '/img/projects/p-yuzda-yurma.jpg',
      },
      {
        time: '14:00',
        title: 'Xazina',
        description:
          'Ichida esdalik sovg‘alari, oltin taklifnoma va 102 grammli tilla quymani yutib olish imkoniyati bo‘lgan sirli sandiqcha shahar bo‘ylab yashiriladi. Radio hamda Instagram jonli efiri orqali beriladigan ma’lumotlarga qarab tinglovchilar sandiqchani birinchi bo‘lib topishlari kerak. G‘olib 102 gramm tilla yoki huddi shu qiymatga teng quyosh panellari uchun yil so‘ngida kurash olib boradi.',
        img: '/img/projects/p-xalqona.jpg',
      },
      {
        time: '15:00',
        title: 'Top taksi',
        description:
          'Radioga ishga kelayotgan boshlovchi ilova orqali taksi buyurtma qiladi. Buyurtma kimga nasib qilsa — o‘sha haydovchi g‘olibga aylanadi va safar so‘ngida avtomobil baki benzin bilan to‘ldiriladi. Agar taksi haydovchisi FM 102.0 Avtoradioni tinglayotgan bo‘lsa, asosiy sovrin — yap-yangi avtomobil — uchun yil so‘ngidagi Gala-konsertda kurashadi.',
        img: '/img/projects/p-agent.jpg',
      },
    ],
  },
  {
    code: 'C',
    name: 'Kechki safari',
    window: '17:00 — 20:00',
    tagline: 'Kun yakuni — asosiy sovrinlar, oilaviy suhbat va yurakdan chiqqan hikoyalar.',
    hosts: 'Jasur Xudayberganov · Nurmuhammad Isroil · Bekmirza Rashidov',
    projects: [
      {
        time: '17:00',
        title: 'Tonna benzin',
        description:
          'Kun davomida efirda yangragan kalit so‘zini yodlab olgan ishtirokchilar Tonna benzin mezboni turgan joyga yetib kelib, kalit so‘zini bexato aytishlari lozim. Mukammal bajargan inson mashinasi bakini bepul benzinga to‘ldirib oladi. Yil so‘ngidagi o‘yinda yangi avtomobil uchun kurashadi.',
        img: '/img/projects/p-tonna-benzin.png',
      },
      {
        time: '18:00',
        title: 'Love & Love shou',
        description:
          'Oila qurgan tinglovchilar efirga qo‘ng‘iroq qilib turmush o‘rtoqlarining 3 ta kamchiligini va shu kamchiliklarga qaramay baribir sevishlarini izhor qilishadi. G‘olib juftlik yil so‘ngidagi Gala-konsertga taklifnomani qo‘lga kiritadi — konsertda ushbu loyiha g‘oliblari o‘rtasida 2 kishilik chet-el sayohati yo‘llanmasi o‘ynaladi.',
        img: '/img/projects/p-baribir-sevaman.jpg',
      },
      {
        time: '19:00',
        title: 'Kun va yakun',
        description:
          'Kunning so‘nggi loyihasi yana bir kun nihoyasiga yetganini bildiradi. Boshlovchilar o‘rtaga tashlagan yurakkacha yetib boradigan mavzuda tinglovchilar kechinmalari va umr sarhisoblarini o‘rtoqlashadilar. Bu orqali kimdir dardini yengillaydi, kimdir esa boshqalarning hikoyasidan xulosa oladi.',
        img: '/img/projects/p-kechki-safar.png',
      },
    ],
  },
]
</script>

<template>
  <section id="loyihalar" class="bg-y">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0">

      <!-- 3 blocks (Tongi reys · Radio charter · Kechki safari) -->
      <ol class="divide-y divide-black/12">

        <li
          v-for="(block, bi) in blocks"
          :key="block.code"
          class="py-14 md:py-20"
        >
          <!-- Block header -->
          <header class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 mb-10 md:mb-14 items-end">
            <div class="flex items-baseline gap-3 md:gap-4">
              <span class="italic font-light text-black leading-[0.8]"
                    style="font-size: clamp(60px, 8vw, 110px); font-family: 'Open Sans', serif; letter-spacing: -0.02em;">{{ block.code }}.</span>
              <div>
                <span class="block text-[10px] tracking-[0.3em] uppercase font-bold text-black/60 mb-1">Blok {{ bi + 1 }} · {{ block.window }}</span>
                <h2 class="text-[28px] md:text-[42px] leading-[1.05] font-extrabold italic uppercase tracking-tight text-black">
                  {{ block.name }}
                </h2>
              </div>
            </div>
            <div class="md:pb-1.5">
              <p class="text-[15px] md:text-[16px] leading-[1.55] text-black/80 max-w-[480px]">{{ block.tagline }}</p>
              <p class="mt-3 text-[11px] tracking-[0.22em] uppercase font-semibold text-black/55">
                Boshlovchilar · {{ block.hosts }}
              </p>
            </div>
          </header>

          <!-- 3 projects grid -->
          <ul class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <li
              v-for="(p, i) in block.projects"
              :key="p.title"
              v-motion="{
                initial: { opacity: 0, y: 32 },
                visibleOnce: { opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 600, ease: [0.22, 0.61, 0.36, 1] } },
              }"
              class="group"
            >
              <article class="h-full">
                <div v-if="p.img" class="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <img
                    :src="p.img"
                    :alt="p.title"
                    loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span class="absolute top-3 left-3 bg-black text-y text-[10px] tracking-[0.22em] uppercase font-bold px-2.5 py-1 tabular-nums">
                    {{ p.time }}
                  </span>
                </div>

                <div class="mt-4">
                  <h3 class="text-[20px] md:text-[22px] font-extrabold italic uppercase tracking-tight text-black leading-tight">
                    {{ p.title }}
                  </h3>
                  <p class="mt-2 text-[13.5px] md:text-[14px] leading-[1.6] text-black/75">
                    {{ p.description }}
                  </p>
                </div>
              </article>
            </li>
          </ul>

          <!-- Xalqona telegram gap note (between blocks A→B and B→C) -->
          <div v-if="bi < blocks.length - 1"
               class="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-dashed border-black/25 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <span class="block text-[10px] tracking-[0.3em] uppercase font-bold text-black/55 mb-1">
                Oraliq · {{ bi === 0 ? '10:00 — 13:00 va 12:00 — 13:00' : '16:00 — 17:00' }}
              </span>
              <p class="text-[14px] md:text-[15px] italic text-black/75 max-w-[560px]">
                <span class="font-semibold not-italic text-black">Xalqona telegram</span> — avtomatik loyiha. Tinglovchilardan probka, avariya va yo‘l vaziyati haqidagi ovozli xabarlar jonli efirga uzatiladi. Boshlovchi yo‘q.
              </p>
            </div>
            <span class="text-black/50 text-[10px] tracking-[0.28em] uppercase font-bold">Auto-play · 24/7</span>
          </div>
        </li>
      </ol>

      <!-- End cap -->
      <div class="py-12 md:py-16 text-center border-t border-black/12">
        <p class="text-[11px] tracking-[0.3em] uppercase font-bold text-black/60">
          Kuniga 9 ta jonli loyiha · 3 ta blok · +2 avtomatik oraliq
        </p>
      </div>
    </div>
  </section>
</template>
