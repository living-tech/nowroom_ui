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
exports.Room = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Room = function (_a) {
    var className = _a.className, size = _a.size, style = _a.style;
    return (jsx_runtime_1.jsxs("svg", __assign({ className: className, fill: "none", height: size, style: style, viewBox: "0 0 32 32", width: size, xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx_runtime_1.jsx("path", { d: "M10 27H26C26.5523 27 27 26.5523 27 26V16.5V6C27 5.44772 26.5523 5 26 5H15.5H6C5.44772 5 5 5.44772 5 6V21V26C5 26.5523 5.44772 27 6 27H10ZM10 27V11C10 10.4477 10.4477 10 11 10H21C21.5523 10 22 10.4477 22 11V27", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("circle", { cx: "14", cy: "18", fill: "#29263D", r: "1", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0)] }), void 0));
};
exports.Room = Room;
//# sourceMappingURL=Room.js.map