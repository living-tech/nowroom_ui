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
import { jsx as _jsx } from "react/jsx-runtime";
import { CircularProgress } from "@material-ui/core";
import { purple500, red500, white, yellow500 } from "../../../constnats/colors";
export var Presenter = function (_a) {
    var className = _a.className, color = _a.color, _b = _a.duration, duration = _b === void 0 ? 500 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, style = _a.style;
    var rgbColor;
    switch (color) {
        case "white":
            rgbColor = white;
            break;
        case "purple":
            rgbColor = purple500;
            break;
        case "red":
            rgbColor = red500;
            break;
        case "yellow":
            rgbColor = yellow500;
            break;
        case "currentColor":
            rgbColor = "currentColor";
            break;
    }
    return (_jsx(CircularProgress, { className: className, size: size, style: __assign({ animationDuration: duration + "ms", color: rgbColor }, style) }, void 0));
};
//# sourceMappingURL=Presenter.js.map