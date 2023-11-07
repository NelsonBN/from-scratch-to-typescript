# 02 - Hello World

[<< Back](../README.md)

- [References](#references)
- [Configure environment](#configure-environment)
  - [Notes](#notes)
- [Debugging](#debugging)



## References
[Official documentation](https://code.visualstudio.com/docs/typescript/typescript-debugging)



## Configure environment

1. We can use the command `tsc --init` to create a `tsconfig.json` file with default values.

2. In the `tsconfig.json` file, set the set `sourceMap` property to `true`. This will generate a `*.js.map` files that will be used for debugging. And set the `outDir` property to `./out`.

3. Create the `.vscode/launch.json` file with the following content:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": [ "${workspaceFolder}/out/**/*.js" ]
    }
  ]
}
```

### Notes

In the `launch.json` file, the `program` property should point to the main file of the project. In this case, the `index.ts` file.

And the `outFiles` property should point to the `out` folder exacly as it is in the `tsconfig.json` file (the `outDir` property).

The folder `outDir` (in this case, `out`) should not be included in the source control because it will be generated when the project is built. This is why we should add it to the `.gitignore` file.

**Example:**
```gitignore
out
```



## Debugging

Press `F5` to start debugging. Or go to the `Run and Debug` (`Ctrl` + `Shift` + `D`) tab and click on the `Start Debugging` button.
