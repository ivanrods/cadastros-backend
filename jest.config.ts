import type { Config } from "jest";

const config: Config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: ["json"],
    setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
    testMatch: ["<rootDir>/tests/**/*.test.ts"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json",
        },
    },
    testEnvironment: "node",
};

export default config;
