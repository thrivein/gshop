module.exports = {
  verbose: false,
  rootDir: './',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/utils/test-client.ts'
  ],
  collectCoverage: true,
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/typings/**',
    '!src/migration/**',
    '!src/utils/create-types.ts',
    '!src/utils/test-client.ts',
    '!src/utils/test-mutation-queries.ts',
    '!src/index.ts',
    '!src/seeder.ts',
    '!**/node_modules/**',
    '!**/vendor/**'
  ]
};
