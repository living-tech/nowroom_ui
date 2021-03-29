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
exports.Bath = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Bath = function (_a) {
    var className = _a.className, size = _a.size, style = _a.style;
    return (jsx_runtime_1.jsxs("svg", __assign({ className: className, fill: "none", height: size, style: style, viewBox: "0 0 40 40", width: size, xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx_runtime_1.jsx("path", { d: "M7 27H33", strokeLinecap: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M24 11V11C24 8.79086 25.7909 7 28 7H28.5C30.9853 7 33 9.01472 33 11.5V32C33 32.5523 32.5523 33 32 33H8C7.44772 33 7 32.5523 7 32V24C7 23.4477 7.44772 23 8 23H33", strokeLinecap: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("rect", { height: "3", rx: "1.5", strokeLinecap: "round", strokeWidth: "1.5", width: "6", x: "21", y: "11" }, void 0)] }), void 0));
};
exports.Bath = Bath;
//# sourceMappingURL=Bath.js.map