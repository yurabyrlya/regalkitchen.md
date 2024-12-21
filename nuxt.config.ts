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
  modules: ['vue3-carousel-nuxt', '@nuxt/image', '@nuxtjs/i18n'],
  vite: {},
  image: {
    // Options
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})