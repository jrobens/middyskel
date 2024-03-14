
- remove 'dom' as node does not natively have it
- 
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import crypto from 'crypto'
const fs = require('fs')
This answer is lifted straight from the this page: https://dev.to/caspergeek/how-to-use-require-in-ecmascript-modules-1l42

import {JestConfigWithTsJest} from "ts-jest";

const esModules = ["@middy"].join("|")
const config: JestConfigWithTsJest = {
globalSetup: "<rootDir>/dotenv-test.js",
extensionsToTreatAsEsm: [".ts"],
moduleNameMapper: {
'^@/(.*)$': '<rootDir>/$1',
'^~/(.*)$': '<rootDir>/$1',
'^@functions/(.*)$': '<rootDir>/src/functions/$1',
'^@libs/(.*)$': '<rootDir>/src/libs/$1',
'^@api/(.*)$': '<rootDir>/src/$1',
'#node-web-compat': './node-web-compat-node.js',
"^@middy/core$": "<rootDir>/node_modules/@middy/core",
"^@middy/util$": "<rootDir>/node_modules/@middy/util",
"^@middy/http-error-handler$": "<rootDir>/node_modules/@middy/http-error-handler",
"^@middy/http-json-body-parser$": "<rootDir>/node_modules/@middy/http-json-body-parser"
},
transform: {
"^.+\\.(ts|tsx)$": ["ts-jest", {useESM: true}],
},
transformIgnorePatterns: [`node_modules/(?!${esModules})`],
collectCoverage: true,
collectCoverageFrom: [
'src/**/*.{ts,js}'
]
}
export default config;
