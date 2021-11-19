module.exports = {
  "stories": [
    "../packages/**/stories/*.stories.mdx",
    "../packages/**/stories/*.stories.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-jest",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    "storybook-zeplin/register",
  ],
  "framework": "@storybook/react",
}