module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/test/jest-setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.cache/',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/test/jest-transform.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby)/)',
  ],
  verbose: true,
};
