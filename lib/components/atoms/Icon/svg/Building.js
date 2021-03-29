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
exports.Building = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Building = function (_a) {
    var className = _a.className, size = _a.size, style = _a.style;
    return (jsx_runtime_1.jsxs("svg", __assign({ className: className, fill: "none", height: size, style: style, viewBox: "0 0 32 32", width: size, xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx_runtime_1.jsx("path", { d: "M24 5H8C7.44772 5 7 5.44772 7 6V27C7 27.5523 7.44772 28 8 28H19.7059H24C24.5523 28 25 27.5523 25 27V6C25 5.44772 24.5523 5 24 5Z", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M10 9H22", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M10 13H22", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M10 17H22", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M12 22C12 21.4477 12.4477 21 13 21H19C19.5523 21 20 21.4477 20 22V28H12V22Z", stroke: "#29263D", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0)] }), void 0));
};
exports.Building = Building;
//# sourceMappingURL=Building.js.map