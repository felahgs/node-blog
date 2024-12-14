import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  preset: "ts-jest/presets/js-with-babel",
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],

  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/*.d.ts",
    "!app/**/index.ts",
    "!app/**/test/**/*.ts",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["text", "lcov", "json", "html"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};

export default config;
