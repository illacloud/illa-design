#!/usr/bin/env zx

// note alignment
const components = ["system", "theme", "icon", "image", "tag", "avatar", "divider", "space", "button"]

for (let i = 0; i < components.length; i++) {
  await $`npx lerna run build --scope=@illa-design/${components[i]}`
}

await $`npx lerna run build --scope=@illa-design/react`