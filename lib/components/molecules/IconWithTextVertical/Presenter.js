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
var Default_1 = require("../../atoms/Icon/Default");
var Default_2 = require("../../atoms/Text/Default");
var Presenter = function (_a) {
    var className = _a.className, color = _a.color, iconName = _a.iconName, label = _a.label, _b = _a.size, size = _b === void 0 ? "md" : _b, style = _a.style;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "inline-flex flex-col items-center justify-center " + className, style: style }, { children: [jsx_runtime_1.jsx(Default_1.Icon, { color: color, name: iconName, size: size === "md" ? "lg" : "md" }, void 0),
            jsx_runtime_1.jsx(Default_2.Text, __assign({ className: "leading-none", color: color, size: size === "md" ? "xs" : "xxs", style: { marginTop: size === "md" ? 8 : 2 } }, { children: label }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map