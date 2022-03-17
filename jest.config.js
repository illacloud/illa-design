module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "./coverage/",
  coverageReporters: ["json"],
  collectCoverage: true,
  collectCoverageFrom: ["packages/**/src/**/*.(ts|tsx)"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  modulePathIgnorePatterns: ["<rootDir>/examples"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  preset: "ts-jest",
}
