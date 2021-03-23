module.exports = {
  extends: ["@nowroom/eslint-config/presets/react-typescript-prettier"],
  globals: {
    i18n: false,
  },
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
};
