#!/usr/bin/env bash

name=""

if test $1; then name=$1;
else
read -p "Component Name: " component;
name=component
fi

echo "Generate $name ‘s coverage report..."

pnpm jest packages/$name

CYFILE=packages/$name/tests/$name.e2e.tsx
CYFILE_GLOB=packages/$name/tests/*.e2e.tsx

# Spec with component name should exist when run cypress test
if test -f "$CYFILE"
then
# run all e2e test under component tests dir
pnpm cypress run-ct -b chrome -s "$CYFILE_GLOB";
fi

pnpm report:combined

if command -v open
then open ./coverage/lcov-report/index.html
fi
