import typescript from "@rollup/plugin-typescript";

const input = "src/index.ts";
const external = ["ramda"];
export default [
  {
    input,
    output: {
      file: "dist/index.js",
      format: "cjs",
    },
    external,
    plugins: [typescript({})],
  },
  {
    input,
    output: {
      file: "dist/index.esm.js",
      format: "es",
    },
    external,
    plugins: [typescript({})],
  },
];
