const react = require("@vitejs/plugin-react")

module.exports = {
  stories: ["../packages/button/stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes("vite:react")),
    )
    config.plugins.push(
      react({
        jsxImportSource: "@emotion/react",
        jsxRuntime: "automatic",
        babel: {
          plugins: ["@emotion/babel-plugin"],
          compact: false,
        },
        exclude: [
          /\.e2e\.([tj])sx?$/,
          /\.test\.([tj])sx?$/,
          /\.stories\.([tj])sx?$/,
        ],
        include: ["**/**.tsx", "**/**.ts"],
      }),
    )
    return config
  },
}
