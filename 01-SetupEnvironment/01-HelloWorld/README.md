# 01.01 - Hello World

[<< Back](../README.md)

- [Create first TypeScript file](#create-first-typescript-file)
- [Compile and run steps](#compile-and-run-steps)
  - [Run](#run)
- [Using `tsconfig.json`](#using-tsconfigjson)
- [Using VSCode to compile](#using-vscode-to-compile)
  - [Solve problem with `tsc` not found](#solve-problem-with-tsc-not-found)



## Create first TypeScript file
Create a new file `app.ts` with the following content:

```typescript
let message: string = 'Hello World';
console.log(message);
```

We used extension `.ts` because it is the extension used for TypeScript files.



## Compile and run steps
To compile the TypeScript file, we can use the command `tsc`:

```bash
tsc app.ts
```

The previous command will generate a new file `app.js` with only the JavaScript code. That was a process named transpilation.

### Run
To run the JavaScript file, we can use the command `node`:

```bash
node app.js
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

And then, we can use the command `tsc` to compile all TypeScript files;

```bash
tsc
```



## Using VSCode to compile

We can use the shortcut `Ctrl + Shift + B` and select the option:

- `tsc: build - tsconfig.json` - To compile all TypeScript files;
- `tsc: watch - tsconfig.json` - To compile all TypeScript files and watch for changes;

### Solve problem with `tsc` not found

If the options `tsc: build` and `tsc: watch` are not available, in extensions type `@builtin TypeScript`. Check if the `TypeScript and JavaScript Language Features` is enabled. If not, enable it and restart VSCode.
