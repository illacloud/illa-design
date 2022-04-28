// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const localSearch = require.resolve("@cmfcmf/docusaurus-search-local")

const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "zh-cn"],
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "illa-design",
  tagline: "A fully responsive UI Library for React, Vue 3 and Svelte.",
  url: "https://design.illafamily.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "illa-family",
  projectName: "illa-design",
  i18n: i18nConfig,
  scripts: [{ src: 'https://snack.expo.dev/embed.js', defer: true }],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [require("./remark-snackplayer")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "illa-design",
        logo: {
          alt: "illa Logo",
          src: "img/illa_logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/illa-family/illa-design",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/2tGBuJkgd6",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/illa-family/illa-design",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ILLA, Inc. Create with ❤︎ by contributors`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      localSearch,
      {
        language: ["en", "zh"],
      },
    ],
  ],
}

module.exports = config
