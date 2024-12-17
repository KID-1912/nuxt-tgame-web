// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from '@nuxt/schema'

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["nuxt-windicss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  // generate: {
  //   // exclude: ["/home"],
  //   routes: ["/news", "/product"],
  // },
  // nitro: {
  //   prerender: {
  //     // ignore: ["/home"]
  //     failOnError: false,
  //   },
  // },
});
