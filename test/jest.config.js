module.exports = {
  rootDir: './../',
  reporters: [ 'default', 'jest-junit' ],

  // Coverage config
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/*.js',
  ],
  coverageDirectory: '<rootDir>/test/coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    "text",
    "cobertura"
  ],
}
