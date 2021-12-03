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
exports.ItemDetail = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var atoms_1 = require("../atoms");
/*
 * 内訳表示
 */
var ItemDetail = function (_a) {
    var children = _a.children, className = _a.className, title = _a.title;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "" + className }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "py-1 text-center bg-gray-200" }, { children: jsx_runtime_1.jsx(atoms_1.TextDarkGray02, __assign({ size: "xs" }, { children: title }), void 0) }), void 0), children] }), void 0));
};
exports.ItemDetail = ItemDetail;
//# sourceMappingURL=index.js.map