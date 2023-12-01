# 02 - Tests

[<< Back](../README.md)

- [Configure tool](#configure-tool)
  - [Create project structure](#create-project-structure)
  - [Prepare `tsconfig.json` file](#prepare-tsconfigjson-file)
  - [Install `jest`](#install-jest)
- [Run first test](#run-first-test)
  - [Configure `package.json` to run the tests](#configure-packagejson-to-run-the-tests)
  - [Improve test running experience](#improve-test-running-experience)
  - [Improve `package.json` configuration](#improve-packagejson-configuration)



## Configure tool

Let´s assume the project has already been configured. If not, go to the [01 - Setup Environment](../../01-SetupEnvironment/03-ConfigureProject/) section.


### Create project structure

To help us organize the project, we will create the following folders:

- `src`: contains the source code of the project. The code in this folder will be transpiled to the final artifacts we will deliver.
- `tests`: contains the tests of the project. The code in this folder will not be transpiled to the final artifacts, just used to validate our application.

We can use any folder names or structure we want. This is just a suggestion because it is a common structure aceppted by the community.


### Prepare `tsconfig.json` file

In `tsconfig.json` file, we need to add the previous folders to the TypeScript can transpile the code inside them.

```json
{
  "compilerOptions": {
    ..
  },
  "include": [
    "./src/**/*",
    "./tests/**/*"
  ]
}
```


### Install `jest`

The tool we will use to run the tests is [Jest](https://jestjs.io/). To install it, run the following command:

```bash
npm install -D jest @types/jest ts-jest
```

- `jest`: the tool itself.
- `ts-jest`: the tool that will help us to run the tests using TypeScript.
- `@types/jest`: the TypeScript definitions for Jest.



## Run first test

On folder `tests`, create a file named `index.test.ts`. It is a convention to name the test files with the `<code file>.test.ts` extension. Example: `index.ts` -> `index.test.ts`.

Add the following code to the file:

```typescript
import { sum } from "../src/index";

test("Example of a test with success", () => {
  const output = sum(2, 3);
  expect(output).toBe(5);
});

test("Example of a test with failure", () => {
  const output = sum(2, 3);
  expect(output).toBe(6);
});
```

And create the file `index.ts` on folder `src` with the following code:

```typescript
export function sum(x: number, y: number) {
  return x + y;
}
```

Now, run the following command to run the tests:

```bash
# Transpile the code
tsc

# Run the tests
npx jest ./dist/tests
```

### Configure `package.json` to run the tests

On `package.json` file, add the following scripts:

```json
{
  "scripts": {
    "test": "npx tsc && npx jest ./dist/tests"
  }
}
```

And now, we can run the command `npm test` to transpile and run the tests.


### Improve test running experience

We can use the `ts-jest` tool to run the tests without the need to transpile the code before. To do that, we need to first configure jest using the command `npx ts-jest config:init`. This command will create a file named `jest.config.js` with the settings to run the tests using `ts-jest`.

Now we can run the tests using the command `npx jest`. Note that we don´t need to pass the folder `./dist/tests` anymore.

### Improve `package.json` configuration

Override the script to run tests on `package.json` file:

```json
{
  "scripts": {
    "test": "npx jest"
  }
}
```