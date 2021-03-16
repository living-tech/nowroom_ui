const plugin = require("tailwindcss/plugin");

const checkedLabelPlugin = plugin(function ({ addVariant, e }) {
  addVariant("checked-label", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`radio-button${separator}${className}`)}:checked + label`;
    });
  });
});

module.exports = {
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
          DEFAULT: "#29263D",
          opacity: "rgba(0, 0, 0, 0.4)",
        },
        blue: {
          600: "#4879DB",
          700: "#285EC7",
          DEFAULT: "#6A95E8",
        },
        current: "currentColor",
        cyan: {
          600: "#46B4D9",
          700: "#259BC2",
          DEFAULT: "#6ACAE8",
        },
        gray: {
          100: "#F6F6F9",
          200: "#E7E6EF",
          300: "#D8D6E2",
          400: "#BFBCD0",
          500: "#918EA3",
          600: "#807D94",
          700: "#656376",
        },
        green: {
          DEFAULT: "#4AD7AD",
        },
        overlay: {
          DEFAULT: "rgba(41, 38, 61, 0.8)",
        },
        pink: {
          600: "#C9425A",
          700: "#A9233B",
          DEFAULT: "#E86A81",
        },
        purple: {
          100: "#F6F5FE",
          200: "#DEDBFD",
          400: "#9992F1",
          500: "#746AE8",
          600: "#554ADC",
          700: "#3529CB",
          DEFAULT: "#746AE8",
        },
        red: {
          100: "#FFE8EB",
          200: "#FDBBC4",
          300: "#FB91A0",
          400: "#F86579",
          500: "#F54159",
          DEFAULT: "#F54159",
        },
        transparent: "transparent",
        yellow: {
          100: "#FFF8EB",
          200: "#FFEFD0",
          300: "#FFE4AF",
          400: "#FFD584",
          500: "#EEBC5A",
          600: "#D49E35",
          700: "#AC7A19",
          DEFAULT: "#EEBC5A",
        },
      },
      fontSize: {
        xxs: [".6875rem", "1.25rem"],
      },
      maxWidth: {
        inner: 1080,
      },
      width: {
        inner: 1080,
      },
    },
    fill: (theme) => ({
      current: "currentColor",
      purple: theme("colors.purple"),
    }),
    stroke: (theme) => ({
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
