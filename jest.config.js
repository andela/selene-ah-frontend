module.exports = {
  setupFiles: ['<rootDir>/setup/enzymeSetup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/containers/App.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
