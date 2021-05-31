module.exports = {
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branch: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  maxWorkers: '50%',
  watchPathIgnorePatterns: ['node_modules', 'build'],
};
