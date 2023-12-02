// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
// import postcss from 'rollup-plugin-postcss';
// import { nodeResolve } from '@rollup/plugin-node-resolve';

// import packageJson from "./package.json" assert { type: "json" };

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs({include: /node_modules/}),
//       typescript({
//         tsconfig: "./tsconfig.json",
//         declaration: true,
//         declarationDir: 'dist'
//       }),
//       postcss({
//         config: {
//           path: './postcss.config.js',
//         },
//         extensions: ['.css'],
//         minimize: true,
//         inject: {
//           insertAt: 'top',
//         },
//       }),
//       nodeResolve()
//     ],
//   },
//   {
//     input: "dist/esm/index.d.ts",
//     output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//     external: [/\.css$/],
//   },
// ];

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];