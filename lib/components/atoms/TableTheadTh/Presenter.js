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
var DarkGray01_1 = require("../Text/DarkGray01");
var Presenter = function (_a) {
    var className = _a.className, style = _a.style, title = _a.title;
    return (jsx_runtime_1.jsx("th", __assign({ className: "px-4 py-3 text-left border-b border-gray-200 " + className, style: style }, { children: title && jsx_runtime_1.jsx(DarkGray01_1.TextDarkGray01, __assign({ size: "xs" }, { children: title }), void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map