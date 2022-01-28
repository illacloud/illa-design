module.exports = {
  stories: [
    "../packages/**/stories/*.stories.mdx",
    "../packages/**/stories/*.stories.tsx",
  ],
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
}
