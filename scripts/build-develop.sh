#!/usr/bin/env bash
git checkout develop
git pull
yarn install
yarn storybook
