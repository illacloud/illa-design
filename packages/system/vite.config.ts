import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import typescript from "@rollup/plugin-typescript"

const path = require("path")

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
    sourcemap: false,
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@illa-design/system",
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
        "@illa-design/theme",
        "dayjs",
        "number-precision",
        "react-focus-lock",
        "react-use",
        "react-fast-compare"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "@illa-design/theme": "@illa-design/theme",
          "dayjs":"dayjs",
          "number-precision":"number-precision",
          "react-focus-lock":"react-focus-lock",
          "react-use":"react-use",
          "react-fast-compare":"react-fast-compare"
        },
      },
    },
  },
})
