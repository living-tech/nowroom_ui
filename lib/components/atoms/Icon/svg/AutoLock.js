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
exports.AutoLock = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var AutoLock = function (_a) {
    var className = _a.className, size = _a.size, style = _a.style;
    return (jsx_runtime_1.jsxs("svg", __assign({ className: className, fill: "none", height: size, style: style, viewBox: "0 0 40 40", width: size, xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx_runtime_1.jsx("path", { d: "M9 17V9C9 7.34315 10.3431 6 12 6H28C29.6569 6 31 7.34315 31 9V31C31 32.6569 29.6569 34 28 34H12C10.3431 34 9 32.6569 9 31V29", strokeLinecap: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { clipRule: "evenodd", d: "M9 23C10.6569 23 12 21.6569 12 20C12 18.3431 10.6569 17 9 17C7.34315 17 6 18.3431 6 20C6 21.6569 7.34315 23 9 23Z", fillRule: "evenodd", strokeLinecap: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M12 20H23.75C23.8881 20 24 20.1119 24 20.25V24", strokeLinecap: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M19 20V23", strokeLinecap: "round", strokeWidth: "1.5" }, void 0)] }), void 0));
};
exports.AutoLock = AutoLock;
//# sourceMappingURL=AutoLock.js.map