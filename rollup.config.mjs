import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';
const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));
const cssExportMap = {};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
      postcss({
        getExportNamed: false,
        getExport (id) {
          return cssExportMap[id];
        },
        extract: 'styles.css',
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
  {
    input: 'dist/esm/styles.css',
    output: [{ file: 'dist/styles.css', format: 'esm' }],
    plugins: [
      postcss({
        getExportNamed: false,
        getExport (id) {
          return cssExportMap[id];
        },
        extract: 'styles.css',
      }),
    ],
    external: [/\.css$/],
  },
];
