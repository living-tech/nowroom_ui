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
var DarkGray01_1 = require("../../atoms/Text/DarkGray01");
var Presenter = function (_a) {
    var className = _a.className, content = _a.content, _b = _a.justify, justify = _b === void 0 ? "left" : _b, _c = _a.leftWidth, leftWidth = _c === void 0 ? 64 : _c, style = _a.style, title = _a.title;
    var containerClass = "";
    switch (justify) {
        case "left":
            break;
        case "space-between":
            containerClass = "justify-between";
            break;
    }
    var rightColumnClass = "";
    switch (justify) {
        case "left":
            rightColumnClass = "flex-grow";
            break;
        case "space-between":
            break;
    }
    return (jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center px-4 border-b border-gray-200 " + containerClass + " " + className, style: style }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "py-3", style: { width: justify === "left" ? leftWidth : undefined } }, { children: jsx_runtime_1.jsx(DarkGray01_1.TextDarkGray01, __assign({ size: "xs" }, { children: title }), void 0) }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "py-3 ml-4 " + rightColumnClass }, { children: content() }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map