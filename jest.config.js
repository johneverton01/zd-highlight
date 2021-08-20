module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/../../styleMock.js",
  }
};