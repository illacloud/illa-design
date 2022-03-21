import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      jsxRuntime: "automatic",
      babel: {
        plugins: ["@emotion/babel-plugin"],
        compact: false,
      },
      exclude: [/\.stories\.([tj])sx?$/, /\.test\.([tj])sx?$/],
      include: ["**/**.tsx", "**/**.ts"],
    }),
  ],
})
