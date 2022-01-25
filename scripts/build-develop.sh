#!/usr/bin/env bash
git checkout develop
git pull
npx lerna bootstrap
yarn build-all-components
yarn test
yarn storybook