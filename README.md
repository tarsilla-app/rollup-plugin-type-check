# @tarsilla/rollup-plugin-type-check

A Rollup plugin that performs a TypeScript type check during the build process. This plugin leverages the TypeScript compiler (`tsc`) to ensure that your codebase is type-safe without generating any output files.

## Features

- **Type Checking Only:** Runs `tsc --noEmit` to only verify type correctness.
- **Configurable:** Supports custom `tsconfig` paths through plugin options.
- **Easy Integration:** Plug and play with Rollup build process.

## Installation

```sh
npm install --save-dev @tarsilla/rollup-plugin-type-check
```

or

```sh
yarn add --dev @tarsilla/rollup-plugin-type-check
```

## Usage

In your Rollup configuration (see rollup.config.js), add the plugin to your plugins array:
```js
import { rollupPluginTypeCheck } from '@tarsilla/rollup-plugin-type-check';
 
export default {
  // ...existing configuration...
  plugins: [
    // ...other plugins...
    rollupPluginTypeCheck();
  ],
};
```

## Configuration Options

You can override default settings by creating passing options to the plugin.
The plugin accepts an object of type `RollupTypeCheckOptions`:

| Option   | Type   | Description                                                  | Default     |
|----------|--------|--------------------------------------------------------------|-------------|
| tsconfig | string | Path to your custom `tsconfig.json`. If not provided, the plugin will run with the default compiler settings. | `undefined` |


Example: 

```js
import { rollupPluginTypeCheck } from '@tarsilla/rollup-plugin-type-check';
 
export default {
  // ...existing configuration...
  plugins: [
    // ...other plugins...
    rollupPluginTypeCheck({ tsconfig: 'tsconfig.json' }),
  ],
};
```

## How It Works

During Rollup's `buildStart` hook, the plugin executes the TypeScript compiler in type-checking mode. If any type errors are detected, the build process is aborted with an error message.

## Contributing

Contributions are welcome! Please ensure your pull request adheres to the project's linting and testing guidelines.

## License

Released under the [MIT License](LICENSE).