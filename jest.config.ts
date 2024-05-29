/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec).ts?(x)'],
  coverageProvider: 'v8',
  preset: 'ts-jest'
};

export default config;
