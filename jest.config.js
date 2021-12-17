module.exports = {
  testEnvironment: "jest-electron/environment",
  coverageDirectory: "./coverage/",
  coverageReporters: ["json"],
  collectCoverage: true,
  collectCoverageFrom: ["packages/**/src/*.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/examples",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  runner: "jest-electron/runner",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  snapshotSerializers: [
    "@emotion/jest/serializer", /* if needed other snapshotSerializers should go here */
  ],
}