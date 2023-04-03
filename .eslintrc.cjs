module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-use-before-define": ["error", {functions: false}],
  },
};
