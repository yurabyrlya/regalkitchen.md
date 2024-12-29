// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'German Kitchens in Moldova',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        },
        {
          name: 'keywords',
          content: 'German kitchens in Moldova'
        },
        {
          name: 'description',
          content: 'German kitchens in Moldova'
        }
      ],
      link: [
        //Google Web Fonts 
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
        },
        //Icon Font Stylesheet
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css'
        },
        //Libraries Stylesheet
        {
          rel: 'stylesheet',
          href: '/assets/lib/animate/animate.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/lib/lightbox/css/lightbox.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/assets/lib/owlcarousel/owl.carousel.min.css'
        },
        //Template Stylesheet
        {
          rel: 'stylesheet',
          href: '/assets/css/style.css'
        },
      ],
      script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' },
        { src: '/assets/lib/wow/wow.min.js' },
        { src: '/assets/lib/easing/easing.min.js'},
        { src: '/assets/lib/waypoints/waypoints.min.js'},
        { src: '/assets/lib/counterup/counterup.min.js'},
        { src: '/assets/lib/lightbox/js/lightbox.min.js'},
        { src: '/assets/lib/owlcarousel/owl.carousel.min.js'},
        { src: 'assets/js/main.js' }
      ]
    }
  },
  css: [
     '~/assets/scss/bootstrap.scss',
     '~/assets/scss/main.scss',
    //'bootstrap/dist/css/bootstrap.min.css'
  ],
  modules: ['vue3-carousel-nuxt', '@nuxt/image', '@nuxtjs/i18n', '@nuxthub/core'],
  vite: {},
  image: {
    // Options
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  hub: {
    analytics: false, // Default to false - Enables analytics for your project (coming soon).
    blob: true, // Default to false - Enables blob storage to store static assets, such as images, videos and more.
    cache: false, // Default to false - Enables cache storage to cache your server route responses or functions using Nitro's cachedEventHandler and cachedFunction
    database: false, // Default to false - Enables SQL database to store your application's data.
    kv: false, // Default to false - Enables Key-Value to store JSON data accessible globally.
    remote: false, // Default to false - Allows working with remote storage (database, kv, blob) from your deployed project.
    dir: '.data/hub' // Default to '.data/hub' - The directory used for storage (D1, KV, R2, etc.) in development mode.
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    projectKey: '',
    sendgridApiKey: '',
    contactFromEmail: '',
    contactToEmail: '',

    // Keys within public, will be also exposed to the client-side
    public: {},

  },
  nitro: {
    experimental: {
      openAPI: true
    }
  }
})