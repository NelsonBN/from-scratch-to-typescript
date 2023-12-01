# 01.03 - Configure Project

[<< Back](../README.md)

- [Configure project](#configure-project)
  - [Initialize the project](#initialize-the-project)
  - [Install TypeScript](#install-typescript)
  - [Create `tsconfig.json` file](#create-tsconfigjson-file)
  - [`package.json` scripts](#packagejson-scripts)
  - [Improve the running of the project](#improve-the-running-of-the-project)
    - [Run the project in watch mode](#run-the-project-in-watch-mode)
- [Restore packages](#restore-packages)
- [Project structure](#project-structure)
  - [Folder `node_modules`](#folder-node_modules)
  - [File `package-lock.json`](#file-package-lockjson)
    - [What is the difference between `package.json` and `package-lock.json`?](#what-is-the-difference-between-packagejson-and-package-lockjson)



## Configure project

### Initialize the project

First, we need to initialize the project with `npm init -y`. This will create a file called `package.json`.
This file contains the project's metadata and dependencies.

**Example:**
```json
{
  "name": "DemoApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {}
}
```

In this file, we have two important sections: `dependencies` and `devDependencies`.
- `dependencies` are the packages that are required to run the application. To install a package, use `npm install <package-name>`.
- `devDependencies` are the packages that are required to develop the application. This will not be included in the final build. To install a package, use `npm install <package-name> --save-dev` or a shortcut `npm install -D <package-name>`.


### Install TypeScript

To install TypeScript, we need to run `npm install typescript --save-dev`. This will install the `typescript` package and add it to the `devDependencies` section in the `package.json` file.

**Example:**
```json
{
  ...
  "devDependencies": {
    "typescript": "^5.2.2"
  }
}
```


### Create `tsconfig.json` file

We allways will need to create a `tsconfig.json` file. Run `npx tsc --init` to create it. And we can't forget to configure the `tsconfig.json` regarding the project's needs.

After that, we already can transpile using `npx tsc`.


### `package.json` scripts

We can create our custom scripts to improve the development experience. In the following example, we are creating two scripts: `build` and `start`.

```json
{
  ...
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/app"
  }
  ...
}
```

And we can use the command `npm run build` to transpile the project and `npm run start` to run the project.


### Improve the running of the project

For this, we need to install the `ts-node` package. This package will transpile the project and run it.

To install the `ts-node` package, we need to run `npm install ts-node --save-dev`. The `ts-node` also should be added to the `devDependencies`, because we only need it to improve the development experience.

And now we can run the project using `npx ts-node app.ts`. Note that wasn't generated the `dist` folder. This is because the `ts-node` will transpile the project in memory and run it.

We can improve again the experience to build and run the project, adding the following script to the `package.json` file:

```json
{
  ...
  "scripts": {
    "dev": "npx ts-node app.ts"
  }
  ...
}
```

With this, we can run the project using `npm run dev`.

#### Run the project in watch mode

For this we can install the `nodemon` package in development mode, running `npm install nodemon --save-dev`.

And now we can run the project in watch mode using `npx nodemon app.ts`.

Or we can create a script in the `package.json` file:

```json
{
  ...
  "scripts": {
    "watch": "npx nodemon app.ts"
  }
  ...
}
```



## Restore packages

Imagine that we are cloning a project from a repository. In this case, we will not have the `node_modules` folder with the packages installed in our machine. To restore (install) the packages, we need to run `npm install`.



## Project structure

### Folder `node_modules`

When we install a package, it will be added to the `node_modules` folder. This folder contains all the packages that are installed in the project. This folder should not be included in the source control. This is why we should add it to the `.gitignore` file.

**Example:**
```gitignore
node_modules
```

### File `package-lock.json`

This file also will be created when we install a package. This file contains the exact version of the packages that are installed in the project. This file should be included in the source control.

#### What is the difference between `package.json` and `package-lock.json`?

The `package.json` file contains more information about the project. For example, it contains the project's metadata and dependencies.

But when are speaking about the dependencies, the `package.json` file contains the minimum version or the range of the versions.

The `package-lock.json` file contains the exact version of the packages that are installed in the project. This file is useful to install exactly the same version of the packages in different developers' machines.
