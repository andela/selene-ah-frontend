module.exports = {
  setupFiles: ['<rootDir>/tests/setup/enzymeSetup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  }
}
