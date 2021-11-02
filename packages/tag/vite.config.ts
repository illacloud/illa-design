import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import typescript from "@rollup/plugin-typescript"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Exclude storybook stories
    exclude: /\.stories\.([tj])sx?$/,
    // Only .tsx files
    include: "**/*.tsx",
  })],
  css: {
    preprocessorOptions :{

    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@illa-design/tag",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      plugins: [
        typescript({
          target: "es2020",
          rootDir: path.resolve(__dirname, "src"),
          declaration: true,
          declarationDir: path.resolve(__dirname, "dist/types"),
          exclude: path.resolve(__dirname, "node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
      external: ["react", "react-dom"],
    },
  },
})
