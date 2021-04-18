import plugin from "tailwindcss/plugin";

import {
  black,
  blue500,
  blue600,
  blue700,
  cyan500,
  cyan600,
  cyan700,
  facebookColor,
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  gray700,
  green500,
  innerWidth,
  pink500,
  pink600,
  pink700,
  purple100,
  purple200,
  purple400,
  purple500,
  purple600,
  purple700,
  red100,
  red200,
  red300,
  red400,
  red500,
  twitterColor,
  yellow100,
  yellow200,
  yellow300,
  yellow400,
  yellow500,
  yellow600,
  yellow700,
} from "../../constnats";

const checkedLabelPlugin = plugin(function ({ addVariant, e }) {
  addVariant("checked-label", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`radio-button${separator}${className}`)}:checked + label`;
    });
  });
});

export const tailwindCssConfig = {
  darkMode: false,
  plugins: [checkedLabelPlugin],
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        DEFAULT: "0px 2px 4px rgba(116, 106, 232, 0.16)",
        lg: "0px 1px 4px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(30, 29, 37, 0.06);",
        md: " 0px 1px 3px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(30, 29, 37, 0.08)",
        sm: "0px 2px 6px rgba(30, 29, 37, 0.06)",
        xs: "0px 2px 4px rgba(30, 29, 37, 0.04)",
      },
      colors: {
        black: {
          DEFAULT: black,
          opacity: "rgba(0, 0, 0, 0.4)",
        },
        blue: {
          600: blue600,
          700: blue700,
          DEFAULT: blue500,
        },
        current: "currentColor",
        cyan: {
          600: cyan600,
          700: cyan700,
          DEFAULT: cyan500,
        },
        facebook: {
          DEFAULT: facebookColor,
        },
        gray: {
          100: gray100,
          200: gray200,
          300: gray300,
          400: gray400,
          500: gray500,
          600: gray600,
          700: gray700,
        },
        green: {
          DEFAULT: green500,
        },
        overlay: {
          DEFAULT: "rgba(41, 38, 61, 0.8)",
        },
        pink: {
          600: pink600,
          700: pink700,
          DEFAULT: pink500,
        },
        purple: {
          100: purple100,
          200: purple200,
          400: purple400,
          500: purple500,
          600: purple600,
          700: purple700,
          DEFAULT: purple500,
        },
        red: {
          100: red100,
          200: red200,
          300: red300,
          400: red400,
          500: red500,
          DEFAULT: red500,
        },
        transparent: "transparent",
        twitter: {
          DEFAULT: twitterColor,
        },
        yellow: {
          100: yellow100,
          200: yellow200,
          300: yellow300,
          400: yellow400,
          500: yellow500,
          600: yellow600,
          700: yellow700,
          DEFAULT: yellow500,
        },
      },
      fontSize: {
        xxs: [".6875rem", "1.25rem"],
      },
      maxWidth: {
        inner: innerWidth,
      },
      screens: {
        xl: `${innerWidth}px`,
      },
      width: {
        inner: innerWidth,
      },
    },
    fill: (theme) => ({
      black: theme("colors.black"),
      current: "currentColor",
      purple: theme("colors.purple"),
      white: theme("colors.white"),
    }),
    stroke: (theme) => ({
      black: theme("colors.black"),
      current: "currentColor",
      purple: theme("colors.purple"),
      white: theme("colors.white"),
    }),
  },
  variants: {
    extend: {
      backgroundColor: ["disabled", "checked", "checked-label"],
      borderColor: ["disabled", "checked", "last"],
      cursor: ["disabled"],
      fill: ["hover"],
      inset: ["checked"],
      margin: ["first", "last"],
      stroke: ["hover"],
      textColor: ["disabled"],
      transform: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
};
