// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 1907
  },
  modules: ['nuxt-primevue', '@vee-validate/nuxt'],
 primevue: {

  },
  css: [
    'primevue/resources/themes/aura-dark-noir/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
})