import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-swc';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const configs = [
  {
    input: `src/index.ts`,
    output: [
      {
        file: `lib/index.cjs`,
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: `lib/index.mjs`,
        format: 'esm',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      nodeResolve({ extensions: ['.ts'] }),
      commonjs(),
      typescript({
        jsc: {
          parser: {
            syntax: 'typescript',
          },
        },
      }),
      terser(),
    ],
  },
  {
    input: `./src/index.ts`,
    output: [{ file: `./lib/index.d.ts`, format: 'esm' }],
    plugins: [dts()],
  },
];

export default configs;
