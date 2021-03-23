const OFF = "off";
const WARN = "warn";
const ERROR = "error";

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  globals: {
    i18n: false,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["simple-import-sort", "typescript-sort-keys", "sort-keys-fix", "sort-destructure-keys"],
  root: true,
  rules: {
    "@typescript-eslint/array-type": [
      ERROR,
      {
        default: "generic",
        readonly: "generic",
      },
    ],
    "@typescript-eslint/ban-ts-comment": OFF,
    "@typescript-eslint/ban-ts-ignore": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/no-explicit-any": WARN,
    "@typescript-eslint/no-unused-vars": [ERROR, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": OFF,
    "@typescript-eslint/no-var-requires": OFF,
    "react/display-name": OFF,
    "react/jsx-sort-props": [
      WARN,
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/jsx-uses-react": OFF,
    "react/prop-types": [OFF],
    "react/react-in-jsx-scope": OFF,
    "simple-import-sort/exports": ERROR,
    "simple-import-sort/imports": ERROR,
    "sort-destructure-keys/sort-destructure-keys": WARN,
    "sort-keys-fix/sort-keys-fix": WARN,
    "typescript-sort-keys/interface": WARN,
    "typescript-sort-keys/string-enum": WARN,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
