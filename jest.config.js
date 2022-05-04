module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "./jest-coverage/",
  coverageReporters: ["lcov"],
  collectCoverage: true,
  collectCoverageFrom: [
    "packages/**/src/**/*.(ts|tsx)",
    "!packages/react/src/*.(ts|tsx)",
    "!packages/**/src/index.(ts|tsx)",
    "!packages/table/src/types/*.(ts|tsx)",
    "!packages/**/src/**/*.d.ts",
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  modulePathIgnorePatterns: ["<rootDir>/examples"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/plop-templates/",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  preset: "ts-jest",
}
