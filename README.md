# Node.js and Express Overview

## Node.js: Runtime Environment
Node.js is a runtime environment that allows JavaScript to be executed outside the browser.

### Process
The `process` object provides information about, and control over, the current Node.js process.

### process.argv
`process.argv` returns an array containing the command-line arguments passed when the Node.js process was launched.

### module.exports
- `require()`: A built-in function used to include external modules that exist in separate files.
- `module.exports`: A special object used to export functions, objects, or values from a module.

### npm (Node Package Manager)
- [npm](https://www.npmjs.com/) is the standard package manager for Node.js.
  1. **Library of packages:** A vast collection of libraries available for installation.
  2. **Command line tool:** Used to install packages and manage dependencies via the command line.

### package.json
The `package.json` file contains descriptive and functional metadata about the project, such as name, version, and dependencies.

To initialize a new `package.json` file, use:
```bash
npm init
