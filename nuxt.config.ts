export default defineNuxtConfig({
  compatibilityDate: '2025-07-01',
  devtools: {
    enabled: true,
  },
  modules: ['@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt', '@nuxt/eslint'],
  css: ['~/assets/scss/main.scss'],
  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/abstracts/variables" as *;
            @use "@/assets/scss/abstracts/mixins" as *;
          `,
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      title: 'GASTROManager',
      meta: [
        {
          name: 'description',
          content:
            'Doradztwo i optymalizacja gastronomii. Pomagam restauracjom działać lepiej i efektywniej.',
        },
      ],
    },
  },
  runtimeConfig: {
    resendApiKey: '',
    resendFrom: 'GASTROManager <onboarding@resend.dev>',
    contactEmail: '',
  },
});
