module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  bail: 1,
  clearMocks: true,
  testMatch: ["**/tests/unit/**/*.test.js"],
  setupFiles: ["<rootDir>/tests/setup"],
  collectCoverage: true,
  collectCoverageFrom: ["src/components/**/*.vue"],
  coverageDirectory: "<rootDir>/tests/coverage",
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
};
