module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "./coverage/",
  coverageReporters: ["json"],
  collectCoverage: true,
  collectCoverageFrom: ["packages/**/src/*.(ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: ["<rootDir>/examples"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  snapshotSerializers: [
    "@emotion/jest/serializer" /* if needed other snapshotSerializers should go here */
  ]
};
