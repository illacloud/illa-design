import { mergeConfig } from "vite"

const path = require("path")
const fg = require("fast-glob")

const getStories = () =>
  fg.sync([
    path.resolve(__dirname, `../packages/**/stories/*.stories.tsx`),
    "!**/node_modules",
  ])

module.exports = {
  stories: async () => [...getStories()],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    config.devtool = "inline-source-map"
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import("../vite.config.js")).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          "@emotion/react/jsx-dev-runtime",
          "framer-motion",
          "@illa-design/react",
        ],
      },
    })
  },
}
