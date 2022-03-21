const { startDevServer } = require("@cypress/vite-dev-server")
const path = require("path")

module.exports = (on, config) => {
  on("dev-server:start", async (options) =>
    startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, "..", "vite.config.ts"),
      },
      optimizeDeps: {
        include: ["@emotion/react"]
      }
    }),
  )
  return config
}
