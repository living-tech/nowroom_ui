"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var core_1 = require("@material-ui/core");
var colors_1 = require("../../../constnats/colors");
var Presenter = function (_a) {
    var className = _a.className, color = _a.color, _b = _a.duration, duration = _b === void 0 ? 500 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, style = _a.style;
    var rgbColor;
    switch (color) {
        case "white":
            rgbColor = colors_1.white;
            break;
        case "purple":
            rgbColor = colors_1.purple500;
            break;
        case "currentColor":
            rgbColor = "currentColor";
            break;
    }
    return (jsx_runtime_1.jsx(core_1.CircularProgress, { className: className, size: size, style: __assign({ animationDuration: duration + "ms", color: rgbColor }, style) }, void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map