#!/usr/bin/env bash
git checkout develop
git pull
yarn build-all-components
yarn test
yarn storybook
