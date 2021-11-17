import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const input = "src/index.ts";
const plugins = [
  typescript(),
  commonjs(),
  resolve({ jsnext: true, main: true, browser: true }),
];
const external = ["ramda"];
export default [
  {
    input,
    output: {
      dir: "dist",
      format: "cjs",
    },
    external,
    plugins,
  },
  {
    input,
    output: {
      dir: "lib",
      format: "es",
    },
    external,
    plugins,
  },
];
