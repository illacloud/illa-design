import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        compact: false,
      },
      // Exclude storybook stories
      exclude: [
        /\.stories\.([tj])sx?$/,
        /\.e2e\.([tj])sx?$/,
        /\.test\.([tj])sx?$/,
      ],
      // Only .tsx files
      include: ["**/*.tsx", "**/*.ts"],
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@illa-design/cypress",
      fileName: (format) => `${format}/index.js`,
    },
  },
})
