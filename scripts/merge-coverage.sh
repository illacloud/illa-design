#!/usr/bin/env bash
mkdir reports || true
cp cypress-coverage/lcov.info reports/from-cypress.info && cp jest-coverage/lcov.info reports/from-jest.info
mkdir coverage || true

cypressInfoPath=./reports/from-cypress.info
jestInfoPath=./reports/from-jest.info

./scripts/mergeLcov.perl -a $cypressInfoPath -a $jestInfoPath -o ./coverage/lcov.info

./scripts/genHtml.perl --legend --branch-coverage -t merged-coverage-overview $cypressInfoPath $jestInfoPath --o=./coverage/lcov-report -c=./scripts/lcov-style.css
