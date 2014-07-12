This experiment shows the example of `angular` and `browserify` integration.

This is a running example: you can play with the code.

## WAT?

1. `/user` is a "package". The package is an angular+browserify module.
2. Angular-dependent code is **separated** from CommonJS module code (see `user/index.js`)
3. The package can be "required" (as if it is a component) and gives the access to angular "User" module (see `bundle.js`)
4. The package is **path-independent** itself. The path dependency reside only in `bundle.js`

## Profit?

1. No need to handle **the order of scripts inclusion** - angular modules will make the magic work.
2. Packages can be easily refactored. CommonJS resolves the inner components using *relative paths*, so you can change the project structure easily. All path dependencies are encapsulated in high-level entry point (`bundle.js`)
