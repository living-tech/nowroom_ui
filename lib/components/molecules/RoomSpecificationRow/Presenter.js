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
var Black_1 = require("../../atoms/Text/Black");
var Presenter = function (_a) {
    var className = _a.className, content = _a.content, style = _a.style, title = _a.title;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center justify-between px-2 " + className, style: style }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "py-1" }, { children: jsx_runtime_1.jsx(Black_1.TextBlack, __assign({ size: "sm" }, { children: title }), void 0) }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "py-1 ml-4" }, { children: jsx_runtime_1.jsx(Black_1.TextBlack, __assign({ size: "sm", weight: "bold" }, { children: content }), void 0) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map