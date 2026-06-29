// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],

  css: ['~/assets/css/main.css'],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/../tailwind.config.ts',
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'AVTO RADIO 102 FM — Орзулар тўлқини',
      htmlAttrs: { lang: 'uz' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Авторадио 102 FM — катта шаҳарнинг соғлом пулси. Тонгги «Тараддуд», кундузги «Нурли кун», кечки «Сарҳисоб вақти» эфир блоклари ва «Орзулар тўлқини» концепцияси.',
        },
        { name: 'theme-color', content: '#FFCC00' },
        { property: 'og:title', content: 'AVTO RADIO 102 FM' },
        {
          property: 'og:description',
          content: 'Йўлдаги ҳамроҳ. Тонгги тараддуд, кечки сарҳисоб, ҳаётий фалсафа.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32',   href: '/favicon-32.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Manrope:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
        },
      ],
    },
  },
})
