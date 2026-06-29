<script setup lang="ts">
interface Project {
  title: string
  description: string
  img?: string
}

const projects: Project[] = [
  {
    title: 'TONGI REYS',
    description: 'Quyosh bilan birga uyg‘onganlar diqqatiga! Har tong Fm 102 megagerts to‘lqinida yangi reys yo‘lga tushadi. Yo‘l boshlovchilar: Nazira Inoyatova va Bekmirza Rashidov. Xavfsizlik qoidalariga rioya qiling.',
    img: '/img/projects/p-tongi-reys.jpg',
  },
  {
    title: 'AGENT BIR NOL IKKI',
    description: 'Avval hamyonga, keyin radioga diqqat qiling! Zotan, “biriz ikki” bo‘ladi, albatta Avtoradioda. Naqd 102 ming sizniki, yakunda esa 102 million sohibi bo‘lishingiz ham mumkin. Shaharda harakatlanayotgan agentimizni topsangiz bas.',
    img: '/img/projects/p-agent.jpg',
  },
  {
    title: 'OMADLI QO‘NG‘IROQ',
    description: 'Faqat Avtoradio bilan biriz ikki bo‘ladi. Sim qoqsangiz bas — urinishingiz omadli bo‘lsa, bir qo‘ng‘iroq bilan ikki sovg‘aga erishasiz. Sovg‘aning biri sizga, ikkinchisi esa sizni topgan yana bir omadliga.',
    img: '/img/projects/p-omadli.jpg',
  },
  {
    title: 'RADIO KAFE',
    description: 'Kunni radio kafe jo‘rligida o‘tkazish — kuningizga unum bag‘ishlasin. Pult boshqaruvi “barista” Madina Fayzda. Yengil suhbat, qaynoq musiqalar.',
    img: '/img/projects/p-radio-kafe.jpg',
  },
  {
    title: 'RADIO CHARTER',
    description: 'Avtoradioning havo kemasida dunyo bo‘ylab sayohatga hozirmisiz? Soat 13:00 dan boshlab radio mavjida birga nol ikkini qo‘shib uch soatlik safarga shaylanamiz — AYLANAMIZ.',
    img: '/img/projects/p-radio-charter.png',
  },
  {
    title: 'KECHKI SAFAR!',
    description: 'Dushanbadan jumagacha soat 17:00 da kun safarimiz oqshom safarisiga ulanadi. Tonna benzin, interaktiv loyihalar, romantik notalar va albatta qovurilgan mavzular. Jasur Xudayberganov, Kamola Ermatova, Nurmuhammad Isroil, Madina Fayz — KECHKI SAFAR. Fm 102 — haroratli bo‘ladi.',
    img: '/img/projects/p-kechki-safar.png',
  },
  {
    title: 'TONNA BENZIN',
    description: 'Tonna yoqilg‘i bo‘lsa, yoqadimi? Dushanbadan jumagacha oqshomgi efirda — «TONNA BENZIN». Kalit so‘zni toping va tinglovchilar uchun katta sovg‘alar yutib oling.',
    img: '/img/projects/p-tonna-benzin.png',
  },
  {
    title: 'SONOGRAMMA',
    description: 'Nurmuhammad Isroilning qushlar olamiga oid mualliflik loyihasi. Tabiat tovushlari, ornitologiya va estetik adabiy formatda — sokin tunda eshitilishi uchun.',
    img: '/img/projects/p-sonogramma.png',
  },
  {
    title: 'TOJIM ONAM',
    description: 'Onaga atalgan mualliflik dasturi. Bu dunyoda hech kim va hech nima ovozsiz emas — eng yaqin insonga bag‘ishlangan eslatmalar, suhbatlar va musiqalar.',
    img: '/img/projects/p-tojim-onam.jpg',
  },
  {
    title: 'DAVLATIM OTAM',
    description: 'Otaga bag‘ishlangan mualliflik rukni. Bu dunyoda hatto eng qimmat olmosning bahosi bor — ammo ota bebaho davlat. Sog‘inch, hurmat va minnatdorlik haqida.',
    img: '/img/projects/p-davlatim-otam.jpg',
  },
  {
    title: 'BARIBIR SENI SEVAVERAMAN',
    description: 'Love-Love Shou Fm 102 da. Sevgan insoningizning uch kamchiligini ayting va yakunda uni baribir sevishingizni ham. Odamning mukammalligi — uning nomukammalligida.',
    img: '/img/projects/p-baribir-sevaman.jpg',
  },
  {
    title: 'YUZDA YURMA YUZGA KIR',
    description: 'Yurtimizda yo‘l harakati xavfsizligi bo‘yicha nazarda tutilgan muhim eslatmalar, hikoyalar va tajribalar — ushbu dasturda. “100 da yurma, 100 ga kir!”',
    img: '/img/projects/p-yuzda-yurma.jpg',
  },
  {
    title: 'AVTOMONITORING',
    description: '“AVTOMONITORING” bir nol ikkida — yo‘ldagi vaziyat, tirbandliklar, hodisalar va shahar harakati bo‘yicha tezkor monitoring jamoaviy kuzatuvi.',
    img: '/img/projects/p-avtomonitoring.jpg',
  },
  {
    title: 'AYLANAY',
    description: 'Yer o‘z o‘qi atrofida aylanib aylanaga aylandi. Oradan million yillar o‘tdi. Avtoradio Yer sayyorasini aylanmoqda — birga ikki va aylana nolni qo‘shib, olam bo‘ylab AYLANAMIZ.',
    img: '/img/projects/p-aylanay.jpg',
  },
  {
    title: 'XALQONA',
    description: 'Yo‘l bilan bog‘liq ko‘rgan-bilganlaringizni hozirning o‘zida 97 710 10 20 telegram raqamiga ovozli xabar shaklida yuboring! XALQONA — xalqdan olib xalqqa beramiz.',
    img: '/img/projects/p-xalqona.jpg',
  },
]
</script>

<template>
  <section id="loyihalar" class="bg-y">
    <div class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto px-4 md:px-0">

      <!-- Project rows: alternating image left / image right -->
      <ul class="divide-y divide-[#5BBFBA]/80">
        <li
          v-for="(p, i) in projects"
          :key="p.title"
          class="py-14 md:py-20"
        >
          <article
            :class="[
              'flex flex-col md:items-center gap-8 md:gap-14',
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            ]"
          >
            <!-- Image (or fallback yellow tile with title) -->
            <div class="md:w-[420px] md:flex-shrink-0">
              <div v-if="p.img" class="aspect-[4/3] overflow-hidden shadow-sm bg-black/5">
                <img
                  :src="p.img"
                  :alt="p.title"
                  loading="lazy"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                v-else
                class="aspect-[4/3] flex items-center justify-center bg-black text-y px-6 text-center"
              >
                <span class="font-extrabold italic uppercase tracking-[0.04em] leading-tight text-[26px] md:text-[30px]">
                  {{ p.title }}
                </span>
              </div>
            </div>

            <!-- Text -->
            <div class="flex-1 max-w-[460px]">
              <h2 class="font-extrabold italic uppercase text-black text-[26px] md:text-[34px] leading-[1.05] tracking-[0.005em]">
                {{ p.title }}
              </h2>
              <p class="mt-5 text-black/85 text-[15px] md:text-[16px] leading-[1.6]">
                {{ p.description }}
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
