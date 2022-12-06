module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "./jest-coverage/",
  coverageReporters: ["lcov"],
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: [
    "packages/**/src/**/*.(ts|tsx)",
    "!packages/react/src/*.(ts|tsx)",
    "!packages/**/src/index.(ts|tsx)",
    "!packages/table/src/types/*.(ts|tsx)",
    "!packages/**/src/**/*.d.ts",
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  modulePathIgnorePatterns: ["<rootDir>/examples"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/plop-templates/",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  preset: "ts-jest",
}
