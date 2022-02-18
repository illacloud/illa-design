module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "./coverage/",
  coverageReporters: ["json"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/*.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/examples",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  snapshotSerializers: [
    "@emotion/jest/serializer", /* if needed other snapshotSerializers should go here */
  ],
}
