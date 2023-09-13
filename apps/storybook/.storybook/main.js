import { dirname, join, resolve } from "path";

// https://vitejs.dev/config/
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-styling"],
  framework: "@storybook/react-vite",

  docs: {
    autodocs: true,
  },
};

export default config;