import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import typescript from "@rollup/plugin-typescript"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: "src/assets/*",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    sourcemap: true,
    minify: "esbuild",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@illa-design/table",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      plugins: [
        typescript({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          compilerOptions: {
            rootDir: path.resolve(__dirname, "src"),
            outDir: path.resolve(__dirname, "dist", "types"),
            declaration: true,
          },
          include: path.resolve(__dirname, "src/**"),
          exclude: path.resolve(__dirname, "node_modules/**"),
        }),
      ],
      external: [
        "react",
        "react-dom",
        "react-use",
        "@emotion/react",
        "framer-motion",
        "@illa-design/icon",
        "@illa-design/trigger",
        "@illa-design/button",
        "@illa-design/checkbox",
        "@illa-design/pagination",
        "@illa-design/theme",
        "@illa-design/system",
        "@illa-design/spin",
        "@illa-design/empty",
        "@tanstack/react-table",
        "@tanstack/match-sorter-utils",
        "@illa-design/select",
        "@illa-design/input",
        "chroma-js",
        "react-fast-compare",
        "lodash.debounce",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react-use": "react-use",
          "@emotion/react": "@emotion/react",
          "framer-motion": "framer-motion",
          "@illa-design/icon": "@illa-design/icon",
          "@illa-design/trigger": "@illa-design/trigger",
          "@illa-design/button": "@illa-design/button",
          "@illa-design/checkbox": "@illa-design/checkbox",
          "@illa-design/pagination": "@illa-design/pagination",
          "@illa-design/theme": "@illa-design/theme",
          "@illa-design/system": "@illa-design/system",
          "@illa-design/spin": "@illa-design/spin",
          "@illa-design/empty": "@illa-design/empty",
          "@tanstack/react-table": "@tanstack/react-table",
          "@tanstack/match-sorter-utils": "@tanstack/match-sorter-utils",
          "@illa-design/select": "@illa-design/select",
          "@illa-design/input": "@illa-design/input",
          "chroma-js": "chroma-js",
          "react-fast-compare": "react-fast-compare",
          "lodash.debounce": "@lodash/debounce",
        },
      },
    },
  },
})
