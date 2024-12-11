import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ["node_modules", ".git", ".nuxt", ".output"]
  }
})