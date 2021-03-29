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
exports.AddRoom = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var AddRoom = function (_a) {
    var className = _a.className, size = _a.size, style = _a.style;
    return (jsx_runtime_1.jsxs("svg", __assign({ className: className, fill: "none", height: size, style: style, viewBox: "0 0 32 32", width: size, xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx_runtime_1.jsx("path", { d: "M16 27H7M7 27H5C4.44772 27 4 26.5523 4 26V21V6C4 5.44772 4.44772 5 5 5H20C20.5523 5 21 5.44772 21 6V16.5M7 27V11C7 10.4477 7.44772 10 8 10H17C17.5523 10 18 10.4477 18 11V19", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("circle", { cx: "25", cy: "25", r: "6", stroke: "#29263D", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("path", { d: "M22 25H25M28 25H25M25 25V22V28", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0),
            jsx_runtime_1.jsx("circle", { cx: "11", cy: "18", fill: "#29263D", r: "1", stroke: "#29263D", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }, void 0)] }), void 0));
};
exports.AddRoom = AddRoom;
//# sourceMappingURL=AddRoom.js.map