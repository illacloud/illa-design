import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Exclude storybook stories
    exclude: /\.stories\.([tj])sx?$/,
    // Only .tsx files
    include: "**/*.tsx",
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@illa-design/theme",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
})
