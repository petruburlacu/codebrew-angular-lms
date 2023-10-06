module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    collectCoverage: true,
    coverageReporters: ['html'],
    coverageDirectory: 'coverage/lms-app',
  };