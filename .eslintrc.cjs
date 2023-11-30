module.exports = {
  /* globals: {
    React: true,
    JSX: true
  }, */
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ["html", "react-refresh", "@typescript-eslint"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [1, { ignoreRestSiblings: true }],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": [
      "warn",
      {
        ignoreDeclarationMerge: true
      }
    ],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-use-before-define": "off",
    // this is covered by the typescript compiler, so we don't need it
    "no-undef": "off",
    "no-shadow": "off" // TS does it
  }
};
