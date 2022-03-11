import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        compact: false,
      },
      exclude: [/\.stories\.([tj])sx?$/, /\.test\.([tj])sx?$/],
      include: ["**/*.tsx", "**/*.ts", "**/*.e2e.ts"],
    }),
  ],
})
