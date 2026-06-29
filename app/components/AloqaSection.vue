<script setup lang="ts">
const channels = [
  {
    label: 'XALQONA · Telegram ovozli xabar',
    value: '+998 97 710 10 20',
    href: 'tg://resolve?phone=998977101020',
    note: 'Yo‘l bilan bog‘liq ko‘rgan-bilganlaringizni ovozli xabar shaklida yuboring.',
  },
  {
    label: 'Studiya · Jonli efir',
    value: '+998 71 200 10 20',
    href: 'tel:+998712001020',
    note: 'Jonli efir vaqtida — interaktiv loyihalar va o‘yinlar.',
  },
  {
    label: 'Reklama va hamkorlik',
    value: 'sales@avtoradio.uz',
    href: 'mailto:sales@avtoradio.uz',
    note: 'Tijoriy takliflar, sponsorlik va birgalikdagi loyihalar.',
  },
  {
    label: 'Umumiy savollar',
    value: 'info@avtoradio.uz',
    href: 'mailto:info@avtoradio.uz',
    note: 'Tahririyat, vakansiyalar va boshqa murojaatlar.',
  },
]

const social = [
  { name: 'YouTube',   href: 'https://youtube.com/@avtoradio',     img: '/icon-youtube.png' },
  { name: 'Instagram', href: 'https://instagram.com/avtoradio.uz', img: '/icon-instagram.png' },
  { name: 'Facebook',  href: 'https://facebook.com/avtoradio',     img: '/icon-facebook.png' },
  { name: 'Telegram',  href: 'https://t.me/avtoradio_102fm',       img: '/icon-telegram.png' },
]

const coverage = ['Toshkent shahar', 'Toshkent viloyati', 'Sirdaryo viloyati']
</script>

<template>
  <section id="aloqa" class="bg-y">
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0">

      <!-- ─── Top row: studio info + coverage ─── -->
      <div v-motion-slide-visible-once-bottom class="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-14 border-y-2 border-black/85 py-12 md:py-16">
        <div>
          <span class="block text-[11px] tracking-[0.32em] uppercase font-bold text-black/70 mb-3">Studiya manzili</span>
          <h2 class="text-[28px] md:text-[38px] font-bold italic uppercase leading-[1.05] text-black">
            AVTORADIO 102 FM
          </h2>
          <p class="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-black/85 max-w-[480px]">
            O‘zbekiston Respublikasi, Toshkent shahri,<br/>
            Olmazor tumani, Navoiy ko‘chasi, 69-uy.
          </p>
          <p class="mt-3 text-[14px] leading-[1.6] text-black/70 italic">
            Eshittirishlar xalqaro standartlarga javob beradigan zamonaviy yuqori texnologiyali studiya uskunalari orqali amalga oshiriladi.
          </p>
        </div>

        <div>
          <span class="block text-[11px] tracking-[0.32em] uppercase font-bold text-black/70 mb-3">Efir qamrovi</span>
          <ul class="space-y-2.5">
            <li v-for="c in coverage" :key="c" class="flex items-baseline gap-3">
              <span class="w-2.5 h-2.5 bg-black flex-shrink-0 translate-y-1"></span>
              <span class="text-[15px] md:text-[16px] font-semibold text-black">{{ c }}</span>
            </li>
          </ul>
          <p class="mt-5 text-[12px] tracking-[0.18em] uppercase font-semibold text-black/55">
            Chastota · 102.0 FM
          </p>
        </div>
      </div>

      <!-- ─── Channels grid ─── -->
      <div v-motion-slide-visible-once-bottom class="py-12 md:py-16">
        <span class="block text-[11px] tracking-[0.32em] uppercase font-bold text-black/70 mb-3">Bog‘lanish kanallari</span>
        <h3 class="text-[28px] md:text-[40px] font-bold italic uppercase leading-[1.05] text-black mb-10 md:mb-12">
          Bizga yozing
        </h3>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <li
            v-for="(ch, i) in channels"
            :key="ch.label"
            v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: { opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 600, ease: [0.22, 0.61, 0.36, 1] } },
            }"
          >
            <a
              :href="ch.href"
              class="channel group block h-full bg-y border-2 border-black p-6 md:p-7 relative overflow-hidden transition-colors"
              :target="ch.href.startsWith('http') || ch.href.startsWith('tg:') ? '_blank' : undefined"
              :rel="ch.href.startsWith('http') ? 'noopener' : undefined"
            >
              <span class="channel-fill absolute inset-x-0 top-0 h-0 bg-black pointer-events-none transition-[height] duration-500 ease-out group-hover:h-full"></span>
              <div class="relative z-10">
                <span class="block text-[10px] tracking-[0.24em] uppercase font-bold text-black/65 transition-colors duration-500 group-hover:text-y/65">{{ ch.label }}</span>
                <p class="mt-3 text-[20px] md:text-[24px] font-bold text-black leading-tight transition-colors duration-500 group-hover:text-y">{{ ch.value }}</p>
                <p class="mt-3 text-[13.5px] leading-[1.55] text-black/75 transition-colors duration-500 group-hover:text-y/80">{{ ch.note }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!-- ─── Socials + map row ─── -->
      <div v-motion-slide-visible-once-bottom class="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 md:gap-12 border-t-2 border-black/85 py-12 md:py-16">
        <div>
          <span class="block text-[11px] tracking-[0.32em] uppercase font-bold text-black/70 mb-3">Ijtimoiy tarmoqlar</span>
          <h3 class="text-[22px] md:text-[26px] font-bold italic uppercase leading-[1.1] text-black mb-6">
            Bizni kuzating
          </h3>
          <ul class="grid grid-cols-2 gap-2">
            <li v-for="s in social" :key="s.name">
              <a
                :href="s.href"
                target="_blank"
                rel="noopener"
                :aria-label="s.name"
                class="group flex items-center gap-2 bg-black text-y px-3 py-2 hover:bg-y hover:text-black border border-black transition-colors"
              >
                <img :src="s.img" alt="" aria-hidden="true" class="w-4 h-4 object-contain invert brightness-200 group-hover:invert-0 group-hover:brightness-100 transition-all flex-shrink-0"/>
                <span class="text-[11px] tracking-[0.14em] uppercase font-bold">{{ s.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <span class="block text-[11px] tracking-[0.32em] uppercase font-bold text-black/70 mb-3">Joylashuv</span>
          <div class="aspect-[16/9] overflow-hidden border-2 border-black">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.20%2C41.31%2C69.30%2C41.36&amp;layer=mapnik&amp;marker=41.3275%2C69.2500"
              class="w-full h-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Avtoradio joylashuvi"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
