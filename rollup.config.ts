import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";

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
    plugins: [typescript({}), commonjs(), resolve()],
  },
  {
    input,
    output: {
      dir: "./types",
      format: "es",
    },
    plugins: [dts()],
  },
  {
    input,
    output: {
      dir: "lib",
      format: "es",
    },
    external,
    plugins: [typescript({}), commonjs(), resolve()],
  },
];
