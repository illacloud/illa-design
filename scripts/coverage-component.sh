#!/usr/bin/env bash

name=""

if test $1; then name=$1;
else
read -p "Component Name: " component;
name=component
fi

echo "Generate $name ‘s coverage report..."

yarn jest packages/$name

CYFILE=packages/$name/tests/$name.e2e.tsx

if test -f "$CYFILE"
then
"yarn cypress run-ct -b chrome -s $CYFILE";
fi

yarn report:combined

if command -v open
then open ./coverage/lcov-report/index.html
fi
