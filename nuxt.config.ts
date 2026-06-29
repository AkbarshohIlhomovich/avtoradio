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

  runtimeConfig: {
    public: {
      siteUrl: 'https://avtoradio.uz',
      siteName: 'AVTORADIO 102 FM',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: (titleChunk?: string) =>
        titleChunk && titleChunk !== 'AVTORADIO 102 FM'
          ? `${titleChunk} — AVTORADIO 102 FM`
          : 'AVTORADIO 102 FM — Yolimiz bir · Orzular to‘lqini',
      htmlAttrs: { lang: 'uz' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Avtoradio 102 FM — Toshkentdagi jonli efir radiosi. Tonggi «Taraddud», kunduzgi «Nurli kun», kechki «Sarhisob vaqti» bloklari, 15 ta interaktiv loyiha, 102 mln so‘m mukofot va 10 yil On Air gala-konserti.',
        },
        { name: 'keywords', content: 'avtoradio, 102 fm, radio, Toshkent, jonli efir, tonna benzin, omadli qo‘ng‘iroq, tongi reys, kechki safar, xalqona, sonogramma, Nazira Inoyatova, Kamola Ermatova, Nurmuhammad Isroilov' },
        { name: 'author', content: 'AVTORADIO 102 FM' },
        { name: 'theme-color', content: '#FFCC00' },
        { name: 'msapplication-TileColor', content: '#FFCC00' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Avtoradio 102 FM' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'googlebot', content: 'index, follow' },

        // Open Graph defaults
        { property: 'og:site_name',  content: 'AVTORADIO 102 FM' },
        { property: 'og:locale',     content: 'uz_UZ' },
        { property: 'og:type',       content: 'website' },
        { property: 'og:url',        content: 'https://avtoradio.uz' },
        { property: 'og:title',      content: 'AVTORADIO 102 FM — Yolimiz bir · Orzular to‘lqini' },
        { property: 'og:description', content: 'Toshkent radiosi. Tonggi, kunduzgi va kechki bloklar — jonli efir, interaktiv loyihalar va 10 yil On Air gala-konserti.' },
        { property: 'og:image',      content: 'https://avtoradio.uz/og-cover.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width',  content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt',  content: 'Avtoradio 102 FM logo' },

        // Twitter Card
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'AVTORADIO 102 FM' },
        { name: 'twitter:description', content: 'Yolimiz bir · 102 FM. Toshkent radiosi.' },
        { name: 'twitter:image',       content: 'https://avtoradio.uz/og-cover.jpg' },
        { name: 'twitter:site',        content: '@avtoradio' },
      ],
      link: [
        { rel: 'canonical', href: 'https://avtoradio.uz' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32',   href: '/favicon-32.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Manrope:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
        },
      ],
      script: [
        // JSON-LD Radio Station structured data
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RadioStation',
            name: 'AVTORADIO 102 FM',
            alternateName: ['Avtoradio', 'AVTO RADIO 102 FM'],
            slogan: 'Yolimiz bir · Orzular to‘lqini',
            url: 'https://avtoradio.uz',
            logo: 'https://avtoradio.uz/logo-default.png',
            image: 'https://avtoradio.uz/og-cover.jpg',
            sameAs: [
              'https://youtube.com/@avtoradio',
              'https://instagram.com/avtoradio.uz',
              'https://facebook.com/avtoradio',
              'https://t.me/avtoradio_102fm',
            ],
            broadcastFrequency: '102 FM',
            broadcastDisplayName: 'Avtoradio 102 FM',
            inLanguage: 'uz',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Toshkent',
              addressRegion: 'Toshkent',
              addressCountry: 'UZ',
              streetAddress: 'Olmazor tumani, Navoiy ko‘chasi, 69',
            },
            contactPoint: [
              { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+998-71-200-10-20', availableLanguage: ['uz', 'ru'] },
              { '@type': 'ContactPoint', contactType: 'sales',            email: 'sales@avtoradio.uz' },
            ],
            potentialAction: {
              '@type': 'ListenAction',
              target: { '@type': 'EntryPoint', urlTemplate: 'http://fm102.uz:8000/autoradio' },
              actionStatus: 'PotentialActionStatus',
            },
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AVTORADIO 102 FM',
            url: 'https://avtoradio.uz',
            inLanguage: 'uz',
            publisher: { '@type': 'Organization', name: 'AVTORADIO 102 FM' },
          }),
        },
      ],
    },
  },
})
