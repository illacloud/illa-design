import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        compact: false,
      },
      // Exclude storybook stories
      exclude: [/\.stories\.([tj])sx?$/, /\.test\.([tj])sx?$/],
      // Only .tsx files
      include: ["**/*.tsx", "**/*.ts", "**/*.e2e.ts"],
    }),
  ],
})
