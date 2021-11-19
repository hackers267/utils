import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const input = "src/index.ts";
const external = ["ramda"];
export default [
  {
    input,
    output: {
      dir: "dist",
      format: "cjs",
    },
    external,
    plugins: [
      typescript({
        declarationDir: "./dist",
      }),
      commonjs(),
      resolve(),
    ],
  },
  {
    input,
    output: {
      dir: "lib",
      format: "es",
    },
    external,
    plugins: [
      typescript({
        declarationDir: "./lib",
      }),
      commonjs(),
      resolve(),
    ],
  },
];
