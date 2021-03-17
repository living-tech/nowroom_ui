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
var Presenter = function (_a) {
    var _b = _a.border, border = _b === void 0 ? true : _b, children = _a.children, className = _a.className, _c = _a.color, color = _c === void 0 ? "purple" : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, style = _a.style;
    var baseClass = "rounded-md";
    var sizeClass = "";
    switch (size) {
        case "md":
            sizeClass = "p-4";
            break;
        case "sm":
            sizeClass = "p-3";
            break;
        default:
    }
    var backgroundColorClass = "";
    switch (color) {
        case "purple":
            backgroundColorClass = "bg-purple-100";
            break;
        case "red":
            backgroundColorClass = "bg-red-100";
            break;
        case "yellow":
            backgroundColorClass = "bg-yellow-100";
            break;
        default:
    }
    var borderClass = "";
    if (border) {
        borderClass = "border";
    }
    var borderColorClass;
    switch (color) {
        case "purple":
            borderColorClass = "border-purple";
            break;
        case "red":
            borderColorClass = "border-red";
            break;
        case "yellow":
            borderColorClass = "border-yellow";
            break;
        default:
    }
    return (jsx_runtime_1.jsx("div", __assign({ className: borderClass + " " + borderColorClass + " " + backgroundColorClass + " " + sizeClass + " " + baseClass + " " + className, style: style }, { children: children }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map