import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import typescript from "@rollup/plugin-typescript"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: "src/assets/*",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      jsxRuntime: "automatic",
      babel: {
        plugins: ["@emotion/babel-plugin"],
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
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@illa-design/table",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      plugins: [
        typescript({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          rootDir: path.resolve(__dirname, "src"),
          declaration: true,
          declarationDir: path.resolve(__dirname, "dist/types"),
          exclude: path.resolve(__dirname, "node_modules/**"),
        }),
      ],
      external: [
        "react",
        "react-dom",
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
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
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
        },
      },
    },
  },
})
