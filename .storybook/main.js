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
        exclude: [/\.test\.([tj])sx?$/, /\.e2e\.([tj])sx?$/],
        include: ["**/**.tsx", "**/**.ts"],
      }),
    )

    config.server = {
      ...config.server,
      watch: {
        ignored: [
          "**/cypress-coverage/**",
          "**/jest-coverage/**",
          "**/coverage/**",
        ],
      },
    }
    config.optimizeDeps.include.push("@emotion/react/jsx-dev-runtime")
    config.build = {
      ...config.build,
      sourcemap: true,
    }
    return config
  },
}
