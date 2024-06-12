// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 1907
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL || 'http://localhost:8081/',
    },
  },
  modules: ['nuxt-primevue', '@vee-validate/nuxt', '@pinia/nuxt', "@nuxt/image",'@pinia-plugin-persistedstate/nuxt',],
  primevue: {
    },
  css: [
    'primevue/resources/themes/aura-dark-noir/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
})