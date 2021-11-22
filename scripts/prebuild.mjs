#!/usr/bin/env zx
await $`npx lerna bootstrap`
await $`yarn build-all-components`
await $`yarn test`