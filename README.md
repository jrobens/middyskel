
# Using ESM imports

Middy in version 5 changed to ESM only imports. Initially this caused 2 types of errors with jest.

>  Cannot find module '@middy/http-json-body-parser' from 'src/libs/lambda.ts'


References

 * https://github.com/middyjs/middy/blob/main/website/docs/intro/06-testing.md#jest-and-typescript Jest recommended config.

## Versions of node

Move from node 16x to node 18x. Didn't change anything.

## Node set to 'module'

Set in package.json - didn't change anything

    "type": "module",

## Experimental modules

Set experimental vm modules

> NODE_OPTIONS=--experimental-vm-modules  jest --useStderr --config=jest.config.ts

Removes the error 

    ReferenceError: exports is not defined

Does not change the error 

     Cannot find module '@middy/http-json-body-parser' from 'src/libs/lambda.ts'

Does not change this error

    Jest encountered an unexpected token

    Details:

    /Users/jrobens/NetBeansProjects/azuron/winpay/winpay-azupay/node_modules/mock-jwks/build/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import { createJWKS, createKeyPair, signJwt } from './tools.js';


Creates the error

    ReferenceError: exports is not defined

      3 | import {default as mockCall} from '../../functions/identity-file-signer/mock.json';
      4 |
    > 5 | describe('Identity put file signer', () => {


## dotenv setup

Getting the dotenv config working

- set suffix to .ts dotenv-test.ts


## Importing 'jest'

To fix the 'jest not found' error. 

    import { jest } from '@jest/globals';
    
    global.jest = jest;
    

## Jest config

Final jest config. This by itself does not fix  'cannot find module': 

- don't transform any .js files with '@middy' in the text
- preset was ts-jest/presets/default-esm

    import {JestConfigWithTsJest} from "ts-jest";

    const esModules = ["@middy"].join("|")
    const config: JestConfigWithTsJest = {
    globalSetup: "<rootDir>/dotenv-test.ts",
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    setupFiles: ["<rootDir>/jest-setup.ts"],
    moduleNameMapper: {
    '^@functions/(.*)$': '<rootDir>/src/functions/$1',
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@api/(.*)$': '<rootDir>/src/$1',
    },
    
        transform: {
            "^.+\\.(ts|tsx)$": ["ts-jest", {useESM: true}],
        },
        extensionsToTreatAsEsm: ['.ts'],
        transformIgnorePatterns: [`node_modules/(?!${esModules})`],
        collectCoverage: true,
        collectCoverageFrom: [
            'src/**/*.{ts,js}'
        ]
    }
    export default config;


## Remove 'require'

FAIL  src/functions/make-payment/__test__/make-azupay-payment.spec.ts
● Test suite failed to run

    Must use import to load ES Module: /Users/jrobens/NetBeansProjects/azuron/winpay/winpay-azupay/src/services/__mocks__/axios.ts



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

## Jest encountered an unexpected token



## Exports is not defined

Update jest to resolve this

● Test suite failed to run

    ReferenceError: exports is not defined

      3 | import {mockClient} from "aws-sdk-client-mock";
      4 | import 'aws-sdk-client-mock-jest';
    > 5 | import {DynamoDBClient, GetItemCommand, PutItemCommand} from "@aws-sdk/client-dynamodb";

Versions

    @types/jest               ^29.5.1  →  ^29.5.12
    aws-sdk-client-mock-jest   ^3.0.0  →    ^3.0.1
    jest                      ^29.6.4  →   ^29.7.0
    ts-jest                   ^29.1.1  →   ^29.1.2

Causes 

    ReferenceError: require is not defined

Illogically in a JSON config making it hard to track down

● Test suite failed to run

    ReferenceError: require is not defined

      40 | const expectedResult1 = {
      41 |     "body": "{\"postEndpoint\":\"https://s3.amazonaws.com/path/to/object\",\"signature\":{}}",
    > 42 |     "headers": {
         |                   ^
      43 |         "Access-Control-Allow-Origin": "*"
      44 |     },
      45 |     "statusCode": 200

      at src/functions/identity-file-signer/__test__/identity-file-signer.spec.ts:42:19

It was 

    const presigner = require('@aws-sdk/s3-request-presigner/dist-cjs/getSignedUrl')

## Cannot find module

default export required. May be a large impact.

Cannot find module '../az-header.service' from 'jest-setup.ts'

      11 | import {buildClientPaymentClaimExpectedWinnerPaymentPending} from "@api/services/__test__/winpay-test-util";
      12 |
    > 13 | jest.mock('../az-header.service', () => {
         |      ^


## Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /node_modules/mock-jwks/build/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import { createJWKS, createKeyPair, signJwt } from './tools.js';
                                                                                      ^^^^^^


## Original jest.config.js

Default @/ module name wrapper looks broken.

ts-jest preset is not recommended by the jest documentation. 

    module.exports = {
      preset: 'ts-jest',
      globalSetup: "<rootDir>/dotenv-test.js",
      moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^~/(.*)$': '<rootDir>/$1',
      '^@functions/(.*)$': '<rootDir>/src/functions/$1',
      '^@libs/(.*)$': '<rootDir>/src/libs/$1',
      '^@api/(.*)$': '<rootDir>/src/$1',
      '#node-web-compat': './node-web-compat-node.js'
    },
    // https://github.com/awslabs/aws-jwt-verify/issues/66
    moduleFileExtensions: [
    'ts',
    'js',
    'json'
    ],
    transform: {
    "^.+\\.ts$": "ts-jest",
    },
    collectCoverage: true,
    collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
    ]
    }



ReferenceError: You are trying to `import` a file after the Jest environment has been torn down. From src/functions/approval-required-details/__test__/approval-required-details.spec.ts.

