"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialUiTheme = void 0;
var styles_1 = require("@material-ui/core/styles");
var constnats_1 = require("../../constnats");
exports.materialUiTheme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: constnats_1.purple500,
        },
    },
    typography: {
        fontFamily: [
            "YakuHanJP_Noto",
            "Roboto",
            "Noto Sans JP",
            "Hiragino Sans",
            "Hiragino Kaku Gothic ProN",
            "Meiryo",
            "sans-serif",
        ].join(","),
        fontWeightMedium: 500,
        fontWeightRegular: 500,
    },
});
//# sourceMappingURL=index.js.map