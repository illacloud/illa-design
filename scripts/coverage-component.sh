#!/usr/bin/env bash
read -p "Component Name: " name
yarn jest packages/$name && yarn cypress run-ct -b chrome -s packages/$name/tests/$name.e2e.tsx -q && yarn report:combined