import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
    extensionsToTreatAsEsm: ['.ts'],
    verbose: true,
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
    },
    testPathIgnorePatterns: ['./dist'],
    moduleNameMapper: {
        '^@functions/(.*)$': '<rootDir>/src/functions/$1',
        '^@libs/(.*)$' : '<rootDir>/src/libs/$1',
    }
}

export default config
