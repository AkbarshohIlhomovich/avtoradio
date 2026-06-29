<script setup lang="ts">
interface Host {
  name: string
  img: string
  block: 'A' | 'B' | 'C'
  blockName: string
  time: string
  show: string
  role: string
}

interface BlockHost {
  first: string
  last: string
  img: string
}

interface Block {
  code: 'A' | 'B' | 'C'
  subtitle: string
  title: string
  pencil: string
  pencilRight?: string
  bullets: { strong: string; rest: string }[]
  body: string
  hosts: BlockHost[]
}

const hosts: Host[] = [
  { name: 'Nazira Inoyatova',     img: '/img/host-nazira.jpg',      block: 'A', blockName: 'Tongi blok',     time: '06:00 — 09:00', show: '«Тараддуд» radioshou',         role: 'Bosh boshlovchi' },
  { name: 'Kamola Ermatova',      img: '/img/host-kamola.jpg',      block: 'B', blockName: 'Kundizgi blok',  time: '09:00 — 18:00', show: '«Нурли кун» dasturlari',       role: 'Olib boruvchi' },
  { name: 'Nurmuhammad Isroilov', img: '/img/host-nurmuhammad.jpg', block: 'C', blockName: 'Kechki blok',    time: '18:00 — 21:00', show: 'Сарҳисоб вақти — Кечки сафари', role: 'Bosh boshlovchi va muallif' },
  { name: 'Jasur Xudoyberganov',  img: '/img/host-jasur.jpg',       block: 'C', blockName: 'Kechki blok',    time: '18:00 — 21:00', show: 'Сарҳисоб вақти — Кечки сафари', role: 'Olib boruvchi' },
  { name: 'Otabek Tojiboyev',     img: '/img/host-otabek.jpg',      block: 'C', blockName: 'Kechki blok',    time: '18:00 — 21:00', show: 'Сарҳисоб вақти — Кечки сафари', role: 'Olib boruvchi' },
]

const blocks: Record<'A' | 'B' | 'C', Block> = {
  A: {
    code: 'A',
    subtitle: 'ТОНГГИ БЛОК ЛОЙИХАСИ:',
    title: '"ТАРАДДУД" РАДИОШОУСИ',
    pencil: '/img/pdf-tongi-main.jpg',
    body: 'Шарқ фалсафасида "Тараддуд" тушунчаси инсоннинг ички оламида салбий ва ёмон фикрларни рад этиб, эзгуликни тафаккур қилиши ҳамда янги кунга тадорик кўришини англатади. Ушбу фалсафий асосга таяниб ташкил этилган 3 соатлик жонли интерактив шоу тингловчиларни яхши кайфият билан янги кунга тайёрлайди. Тонгда <strong>"Омадли қўнғироқ"</strong>, <strong>"Танаффус – мундиал 2026"</strong>, <strong>"Текин дастурхон"</strong> лойиҳалари ўтказилади.',
    bullets: [
      { strong: 'Мукофот жамғармаси:', rest: '102 миллион сўм пул маблағи ва хорижга икки кишилик саёҳат йўлланмаси.' },
      { strong: 'Ижтимоий масъулият:', rest: 'Лойиҳа давомида тингловчилар эътиборини жалб қилган ҳолда йўл ҳаракати хавфсизлиги, йўллардаги жорий ҳолат, авариялар ва тирбандликлар ҳақида тезкор ва ҳаётий муҳим маълумотлар бериб борилади.' },
    ],
    hosts: [
      { first: 'Назира',  last: 'ИНОЯТОВА', img: '/img/host-nazira.jpg' },
      { first: 'Мирзаёр', last: 'ЭРКИНОВ',  img: '/img/host-nurmuhammad.jpg' },
    ],
  },
  B: {
    code: 'B',
    subtitle: 'КУНДИЗГИ БЛОК ЛОЙИХАЛАРИ:',
    title: '"НУРЛИ КУН" ДАСТУРЛАРИ',
    pencil: '/img/pdf-kundizgi-main.jpg',
    body: 'Бу пайтда тингловчиларнинг кундалик фаолияти энг қизғин нуқтага чиқади. Лойиҳа доирасида инсонларни ўзига ташқаридан қарашга ундовчи махсус <strong>"Халқона"</strong> лойиҳаси ишлайди. Унда кўчадаги қайноқ жараёнлар ва халқ ичидан келган овозли хабарлар "халқдан олиб халққа бериш" тамойили асосида эфирга узатилади.',
    bullets: [
      { strong: 'Асосий ўйинлар:', rest: '«Юзда юрма», «Хазина», «Топ Такси», «Зукко» — оригинал интерактив лойиҳалар.' },
      { strong: 'Мукофот:', rest: '«Олтин чипта» эгаларига 102 грамм олтин қуймаси гранд-концертда ўйналади.' },
    ],
    hosts: [
      { first: 'Камола', last: 'ЕРМАТОВА', img: '/img/host-kamola.jpg' },
    ],
  },
  C: {
    code: 'C',
    subtitle: 'КЕЧКИ БЛОК ЛОЙИХАЛАРИ:',
    title: 'САРҲИСОБ ВАҚТИ — КЕЧКИ САФАРИ',
    pencil: '/img/pdf-kechki-right.jpg',
    pencilRight: '/img/pdf-kechki-left.jpg',
    body: 'Кечки 3 соатлик дастур инсонларнинг кунлик ишларини сарҳисоб қилиш, яъни "куннинг ҳисоботи" қилиш вақтига тўғри келади. <strong>"Тонна бензин"</strong>, <strong>"Кун ва якун"</strong>, <strong>"Love Love Show"</strong>, <strong>"Релакс формат"</strong> каби лойиҳалар орқали тингловчилар куннинг энг қизиқ онларини жонли эфирда бирга кечирадилар.',
    bullets: [
      { strong: 'Тонна бензин:', rest: 'Калит сўзни тўғри топган тингловчига тўлиқ бак бензин ва йил якунидаги автомобиль ўйини йўлланмаси.' },
      { strong: 'Релакс формат (21:00 — 22:00):', rest: 'Нурмуҳаммад Исроиловнинг муаллифлик адабий дастури — нодир шеърий сатрлар ва мусиқалар.' },
    ],
    hosts: [
      { first: 'Нурмуҳаммад', last: 'ИСРОИЛОВ',     img: '/img/host-nurmuhammad.jpg' },
      { first: 'Жасур',       last: 'ХУДОЙБЕРГАНОВ', img: '/img/host-jasur.jpg' },
      { first: 'Отабек',      last: 'ТОЖИБОЕВ',     img: '/img/host-otabek.jpg' },
    ],
  },
}

const selected = ref<Host | null>(null)
const selectedBlock = computed(() => selected.value ? blocks[selected.value.block] : null)
const gridClass = computed(() =>
  selectedBlock.value?.pencilRight
    ? 'md:grid-cols-[30%_42%_28%]'
    : 'md:grid-cols-[44%_56%]'
)

function open(h: Host) { selected.value = h; document.body.style.overflow = 'hidden' }
function close() { selected.value = null; document.body.style.overflow = '' }
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') close() }

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="efir" class="bg-white py-16 md:py-24">
    <div class="w-full md:w-[1200px] md:max-w-[1200px] mx-auto px-4 md:px-0">
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
        <li
          v-for="(h, i) in hosts"
          :key="h.name"
          v-motion="{
            initial: { opacity: 0, y: 32 },
            visibleOnce: { opacity: 1, y: 0, transition: { delay: 80 + i * 90, duration: 600, ease: [0.22, 0.61, 0.36, 1] } },
          }"
        >
          <button
            type="button"
            @click="open(h)"
            class="group block w-full text-left"
            :aria-label="`${h.name} — batafsil`"
          >
            <div class="aspect-square overflow-hidden bg-y">
              <img
                :src="h.img"
                :alt="h.name"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div class="mt-4">
              <div class="text-[14px] tracking-[0.18em] uppercase font-semibold text-black">{{ h.name }}</div>
              <div class="text-[12px] text-black/55 mt-1">{{ h.blockName }} · {{ h.time }}</div>
            </div>
          </button>
        </li>
      </ul>
    </div>

    <!-- ───────────────────────────────────────────
         Full-screen PDF-page-7-style detail view
         ─────────────────────────────────────────── -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100" leave-to-class="opacity-0"
    >
      <div
        v-if="selected && selectedBlock"
        class="fixed inset-0 z-[100] bg-black/55 overflow-y-auto flex items-start md:items-center justify-center p-3 md:p-8"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <!-- A3 landscape-style spread (compact, edge-bleed illustrations) -->
        <article class="relative bg-white w-full max-w-[1180px] my-auto overflow-hidden shadow-2xl">
          <!-- Close button (inside the modal card) -->
          <button
            @click="close"
            aria-label="Yopish"
            class="absolute top-3 right-3 md:top-4 md:right-4 z-[120] w-10 h-10 md:w-11 md:h-11 inline-flex items-center justify-center rounded-full bg-white hover:bg-y border border-black/15 shadow-md transition-colors"
          >
            <svg viewBox="0 0 24 24" class="w-4 h-4 md:w-5 md:h-5 fill-black"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>

          <div :class="['grid grid-cols-1 gap-0 md:min-h-[640px]', gridClass]">

            <!-- ─── LEFT PENCIL (Jasur + Bekmirza for Block C) ─── -->
            <div
              v-if="selectedBlock.pencilRight"
              class="relative h-[420px] md:h-auto md:min-h-[620px] overflow-hidden bg-white"
            >
              <img
                :src="selectedBlock.pencil"
                alt=""
                aria-hidden="true"
                class="absolute top-1/2 -translate-y-1/2 left-0 z-[5] h-[110%] w-auto max-w-none mix-blend-multiply"
                style="filter: contrast(1.08);"
              />
            </div>

            <!-- ─── CENTER / TEXT COLUMN ─── -->
            <div class="relative flex flex-col px-6 md:px-8 lg:px-10 py-8 md:py-10">
              <!-- Header: big italic letter + subtitle/title -->
              <header class="flex items-start gap-3 md:gap-5">
                <div class="flex flex-col items-center shrink-0">
                  <span
                    class="block italic font-light text-y leading-[0.85]"
                    style="font-size: 96px; font-family: 'Open Sans', serif; letter-spacing: -0.02em;"
                  >{{ selectedBlock.code }}.</span>
                  <span class="w-px h-10 bg-black/70 mt-1"></span>
                </div>
                <div class="pt-5 md:pt-8">
                  <div class="italic uppercase text-black leading-[1.15] tracking-[0.02em]" style="font-size: 12px; font-weight: 400;">
                    {{ selectedBlock.subtitle }}
                  </div>
                  <h3 class="italic uppercase text-black leading-[1.15] tracking-[0.02em] mt-1 font-semibold" style="font-size: 16px;">
                    {{ selectedBlock.title }}
                  </h3>
                </div>
              </header>

              <!-- Inner two-column area: photos + names/body -->
              <div class="mt-6 md:mt-8 grid grid-cols-[90px_1fr] md:grid-cols-[96px_1fr] gap-4 md:gap-5">
                <!-- Photos column -->
                <div class="flex flex-col gap-3 shrink-0">
                  <figure
                    v-for="h in selectedBlock.hosts"
                    :key="h.first + h.last"
                    class="w-[90px] h-[90px] md:w-[96px] md:h-[96px] border-[3px] border-y overflow-hidden m-0"
                  >
                    <img
                      :src="h.img"
                      :alt="`${h.first} ${h.last}`"
                      class="w-full h-full object-cover grayscale contrast-125 brightness-95"
                    />
                  </figure>
                </div>

                <!-- Names + body column -->
                <div class="pt-0.5">
                  <div class="italic text-right pr-2 text-black leading-[1.4]" style="font-size: 12.5px;">
                    <p v-for="(h, i) in selectedBlock.hosts" :key="h.first + h.last">
                      {{ h.first }} {{ h.last }}<template v-if="i < selectedBlock.hosts.length - 1">,</template>
                    </p>
                  </div>
                  <p
                    class="mt-3 md:mt-4 text-black leading-[1.5] body-text"
                    style="font-size: 12.5px; text-align: justify; hyphens: auto;"
                    v-html="selectedBlock.body"
                  ></p>

                  <!-- Bullets sit under body text when there is a second illustration on the right -->
                  <ul
                    v-if="selectedBlock.pencilRight"
                    class="mt-4 md:mt-5 space-y-2"
                  >
                    <li
                      v-for="(b, i) in selectedBlock.bullets"
                      :key="i"
                      class="relative pl-5 leading-[1.45] text-black"
                      style="font-size: 12px;"
                    >
                      <span class="absolute left-1 top-[8px] w-[5px] h-[5px] rounded-full bg-black"></span>
                      <strong class="font-bold text-black">{{ b.strong }}</strong> {{ b.rest }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- ─── RIGHT COLUMN: pencil + (for single-pencil blocks) yellow rectangle + bullets ─── -->
            <div class="relative h-[420px] md:h-auto md:min-h-[620px] overflow-hidden bg-white">
              <!-- Yellow tilted rectangle near Nurmuhammad's head (Block C only) -->
              <div
                v-if="selectedBlock.pencilRight"
                class="absolute z-[2] border-[3px] border-y pointer-events-none"
                style="
                  top: 4%;
                  right: -12%;
                  width: 115%;
                  height: 42%;
                  transform: rotate(4deg);
                  transform-origin: top right;
                  box-sizing: border-box;
                "
              ></div>

              <img
                :src="selectedBlock.pencilRight || selectedBlock.pencil"
                alt=""
                aria-hidden="true"
                v-if="selectedBlock.pencilRight"
                class="absolute top-1/2 -translate-y-1/2 right-0 z-[5] h-[110%] w-auto max-w-none mix-blend-multiply"
                style="filter: contrast(1.08);"
              />

              <img
                v-else
                :src="selectedBlock.pencil"
                alt=""
                aria-hidden="true"
                class="absolute top-0 right-0 z-[5] h-full w-auto max-w-none object-contain object-top mix-blend-multiply"
                style="filter: contrast(1.08);"
              />

              <template v-if="!selectedBlock.pencilRight">
                <!-- Yellow tilted rectangle outline (single-pencil blocks A & B) -->
                <div
                  class="absolute z-[2] border-[3px] border-y pointer-events-none"
                  style="
                    top: 8%;
                    left: 10%;
                    width: 120%;
                    height: 50%;
                    transform: rotate(5.5deg);
                    transform-origin: top left;
                    box-sizing: border-box;
                  "
                ></div>

                <!-- Bullets overlaid on illustration -->
                <ul class="absolute z-[10] left-3 right-3 md:left-5 md:right-5 space-y-2 md:space-y-3" style="bottom: 6%;">
                  <li
                    v-for="(b, i) in selectedBlock.bullets"
                    :key="i"
                    class="relative pl-5 md:pl-6 leading-[1.45] text-black bg-white/95 backdrop-blur-[2px] py-1.5 pr-2"
                    style="font-size: clamp(11.5px, 0.9vw, 13.5px);"
                  >
                    <span class="absolute left-1 top-[9px] md:top-[10px] w-[5px] h-[5px] rounded-full bg-black"></span>
                    <strong class="font-bold text-black">{{ b.strong }}</strong> {{ b.rest }}
                  </li>
                </ul>
              </template>
            </div>
          </div>
        </article>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.body-text :deep(strong) {
  font-weight: 700;
  color: #000;
}
</style>
