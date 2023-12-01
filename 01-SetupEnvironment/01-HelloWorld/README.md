# 01.01 - Hello World

[<< Back](../README.md)

- [About TypeScript](#about-typescript)
- [Create first TypeScript file](#create-first-typescript-file)
- [Transpile and run steps](#transpile-and-run-steps)
  - [Run](#run)
  - [Transpile and run in one step](#transpile-and-run-in-one-step)
- [Using `tsconfig.json`](#using-tsconfigjson)
- [Using VSCode to transpile](#using-vscode-to-transpile)
  - [Solve problem with `tsc` not found](#solve-problem-with-tsc-not-found)


## About TypeScript
- The first thing to know about TypeScript is that it is a superset of JavaScript. So, we can use JavaScript code in TypeScript files.
- Second important thing we need to know TypeScript is not runnable. We always need to convert TypeScript code to JavaScript code before run it. And that is the reason for we say TypeScript is a transpiled language instead of a compiled language. Always we say "I will compile my TypeScript code" behind the scenes we are saying "I will transpile my TypeScript code".


## Create first TypeScript file
Create a new file `app.ts` with the following content:

```typescript
let message: string = 'Hello World';
console.log(message);
```

We used extension `.ts` because it is the extension used for TypeScript files.



## Transpile and run steps

To transpile the TypeScript file, we can use the command `tsc`:

```bash
tsc app.ts
```

The previous command will generate a new file `app.js` with only the JavaScript code. That was a process named transpilation.

### Run
To run the JavaScript file, we can use the command `node`:

```bash
node app.js
```

### Transpile and run in one step
```bash
# In windows
tsc app.ts --outDir ./out ; node ./out/app.js
```



## Using `tsconfig.json`

We can use the command `tsc --init` to create a `tsconfig.json` file with default values.

[tsconfig.json Documentation](https://www.typescriptlang.org/tsconfig)

**Example:**
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs"
  }
}
```

And then, we can use the command `tsc` to transpile all TypeScript files;

```bash
tsc
```



## Using VSCode to transpile

We can use the shortcut `Ctrl + Shift + B` and select the option:

- `tsc: build - tsconfig.json` - To transpile all TypeScript files;
- `tsc: watch - tsconfig.json` - To transpile all TypeScript files and watch for changes;

### Solve problem with `tsc` not found

If the options `tsc: build` and `tsc: watch` are not available, in extensions type `@builtin TypeScript`. Check if the `TypeScript and JavaScript Language Features` is enabled. If not, enable it and restart VSCode.
