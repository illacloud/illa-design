const react = require("@vitejs/plugin-react")

module.exports = {
  stories: ["../packages/**/stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  core: { builder: "@storybook/builder-vite" },
  viteFinal: async (config, { configType }) => {
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
        exclude: [/\.stories\.([tj])sx?$/, /\.test\.([tj])sx?$/],
        include: ["**/**.tsx", "**/**.ts"],
      }),
    )
    return config
  },
}
