#!/usr/bin/env zx

// note alignment
const components = ["system", "theme", "icon", "image", "tag", "avatar"]

for (let i = 0; i < components.length; i++) {
  await $`lerna run build --scope=@illa-design/${components[i]}`
}

await $`lerna run build --scope=@illa-design/react`