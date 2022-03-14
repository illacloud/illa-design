import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
      babel: {
        compact: false,
      },
      exclude: [/\.stories\.([tj])sx?$/, /\.test\.([tj])sx?$/],
      include: ["**/**.tsx", "**/**.ts"],
    }),
  ],
})
