"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailwindCssConfig = void 0;
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var constnats_1 = require("../../constnats");
var checkedLabelPlugin = plugin_1.default(function (_a) {
    var addVariant = _a.addVariant, e = _a.e;
    addVariant("checked-label", function (_a) {
        var modifySelectors = _a.modifySelectors, separator = _a.separator;
        modifySelectors(function (_a) {
            var className = _a.className;
            return "." + e("radio-button" + separator + className) + ":checked + label";
        });
    });
});
exports.tailwindCssConfig = {
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
                    DEFAULT: constnats_1.black,
                    opacity: "rgba(0, 0, 0, 0.4)",
                },
                blue: {
                    600: constnats_1.blue600,
                    700: constnats_1.blue700,
                    DEFAULT: constnats_1.blue500,
                },
                current: "currentColor",
                cyan: {
                    600: constnats_1.cyan600,
                    700: constnats_1.cyan700,
                    DEFAULT: constnats_1.cyan500,
                },
                facebook: {
                    DEFAULT: constnats_1.facebookColor,
                },
                gray: {
                    100: constnats_1.gray100,
                    200: constnats_1.gray200,
                    300: constnats_1.gray300,
                    400: constnats_1.gray400,
                    50: constnats_1.gray50,
                    500: constnats_1.gray500,
                    600: constnats_1.gray600,
                    700: constnats_1.gray700,
                },
                green: {
                    DEFAULT: constnats_1.green500,
                },
                line: {
                    DEFAULT: constnats_1.lineColor,
                },
                overlay: {
                    DEFAULT: "rgba(41, 38, 61, 0.8)",
                },
                pink: {
                    600: constnats_1.pink600,
                    700: constnats_1.pink700,
                    DEFAULT: constnats_1.pink500,
                },
                purple: {
                    100: constnats_1.purple100,
                    200: constnats_1.purple200,
                    400: constnats_1.purple400,
                    500: constnats_1.purple500,
                    600: constnats_1.purple600,
                    700: constnats_1.purple700,
                    DEFAULT: constnats_1.purple500,
                },
                red: {
                    100: constnats_1.red100,
                    200: constnats_1.red200,
                    300: constnats_1.red300,
                    400: constnats_1.red400,
                    500: constnats_1.red500,
                    DEFAULT: constnats_1.red500,
                },
                transparent: "transparent",
                twitter: {
                    DEFAULT: constnats_1.twitterColor,
                },
                yellow: {
                    100: constnats_1.yellow100,
                    200: constnats_1.yellow200,
                    300: constnats_1.yellow300,
                    400: constnats_1.yellow400,
                    500: constnats_1.yellow500,
                    600: constnats_1.yellow600,
                    700: constnats_1.yellow700,
                    DEFAULT: constnats_1.yellow500,
                },
            },
            fontSize: {
                xxs: [".6875rem", "1.25rem"],
            },
            maxWidth: {
                inner: constnats_1.innerWidth,
                innerS: {
                    DEFAULT: 1000,
                    s: 100,
                },
                // innerS: 1000,
                large: 100,
            },
            screens: {
                xl: constnats_1.innerWidth + "px",
            },
            width: {
                inner: constnats_1.innerWidth,
            },
        },
        fill: function (theme) { return ({
            black: theme("colors.black"),
            current: "currentColor",
            purple: theme("colors.purple"),
            white: theme("colors.white"),
        }); },
        stroke: function (theme) { return ({
            black: theme("colors.black"),
            current: "currentColor",
            purple: theme("colors.purple"),
            white: theme("colors.white"),
        }); },
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
//# sourceMappingURL=index.js.map