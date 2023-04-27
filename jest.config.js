/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  rootDir: "./src",
  coverageThreshold: {
    global: {
      functions: 95,
      statements: 95,
      branches: 95,
      lines: 95,
    },
  },
};
