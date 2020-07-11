module.exports = {
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.(js|ts)',
    '<rootDir>/test/**/*.spec.(js|ts)',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  moduleNameMapper: {
    '#test/(.*)': '<rootDir>/test/$1',
    '#app/(.*)': '<rootDir>/src/app/$1',
  },
  preset: 'ts-jest',
}
