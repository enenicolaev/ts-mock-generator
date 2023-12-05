import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.+)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;