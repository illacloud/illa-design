// thx react-native
"use strict"
const visit = require("unist-util-visit-parents")
const u = require("unist-builder")
const dedent = require("dedent")

function parseParams(paramString) {
  let params = {}

  if (paramString) {
    let pairs = paramString.split("&")
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split("=")
      params[pair[0]] = pair[1]
    }
  }

  if (!params.platform) {
    params.platform = "web"
  }

  return params
}

function SnackPlayer() {
  return (tree) =>
    new Promise(async (resolve, reject) => {
      const nodesToProcess = []
      // Parse all CodeBlocks
      visit(tree, "code", (node, parent) => {
        //Add SnackPlayer CodeBlocks to processing queue
        if (node.lang === "SnackPlayer") {
          nodesToProcess.push(
            new Promise(async (resolve, reject) => {
              try {
                let params = parseParams(node.meta)

                // Gather necessary Params
                const name = "illa-design"
                const description = "Example usage"
                const sampleCode = node.value
                const encodedSampleCode = encodeURIComponent(sampleCode)
                const platform = "web"
                const supportedPlatforms = "web"
                const dependencies = params.dependencies
                  ? params.dependencies
                  : "@illa-design/react"
                const theme = params.theme ? params.theme : "light"
                // Generate Node for SnackPlayer
                const snackPlayerDiv = u("html", {
                  value: dedent`
                <div class="snack-player">
                  <div
                    data-snack-name="${name}"
                    data-snack-description="${description}"
                    data-snack-code="${encodedSampleCode}"
                    data-snack-platform="${platform}"
                    data-snack-supported-platforms="${supportedPlatforms}"
                    data-snack-dependencies="${dependencies}"
                    data-snack-theme="${theme}"
                    data-snack-preview="true"
                    style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"
                    >
                  </div>
                </div>
                `,
                })

                // Replace code block with SnackPlayer Node
                const index = parent[0].children.indexOf(node)
                parent[0].children.splice(index, 1, snackPlayerDiv)
              } catch (e) {
                return reject(e)
              }
              resolve()
            }),
          )
        }
      })

      // If there is one or more snackplayer(s) present
      if (nodesToProcess.length) {
        // To embed.js script
        const snackPlayerEmbed = u("html", {
          value: dedent`
          <script async src="https://snack.expo.io/embed.js" />
          `,
        })

        tree.children.push(snackPlayerEmbed)
      }
      // Wait for all promises to be resolved
      Promise.all(nodesToProcess)
        .then(() => resolve())
        .catch(() => reject())
    })
}

module.exports = SnackPlayer
