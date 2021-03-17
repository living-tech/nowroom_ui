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
var Default_1 = require("../../atoms/Text/Default");
var Presenter = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? "purple" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c;
    var baseClass = "inline-flex items-center border rounded";
    var sizeClass = "";
    switch (size) {
        case "md":
            sizeClass = "py-1 px-1.5";
            break;
        case "sm":
            sizeClass = "py-1 px-1.5";
            break;
    }
    var backgroundColorClass = "";
    var borderColorClass = "";
    var textColor = "white";
    switch (color) {
        case "purple":
            backgroundColorClass = "bg-purple";
            borderColorClass = "border-purple";
            textColor = "white";
            break;
        case "pink":
            backgroundColorClass = "bg-pink";
            borderColorClass = "border-pink";
            textColor = "white";
            break;
        case "cyan":
            backgroundColorClass = "bg-cyan";
            borderColorClass = "border-cyan";
            textColor = "white";
            break;
        case "blue":
            backgroundColorClass = "bg-blue";
            borderColorClass = "border-blue";
            textColor = "white";
            break;
        case "green":
            backgroundColorClass = "bg-green";
            borderColorClass = "border-green";
            textColor = "white";
            break;
        case "yellow":
            backgroundColorClass = "bg-yellow";
            borderColorClass = "border-yellow";
            textColor = "white";
            break;
        case "mediumGray01":
            backgroundColorClass = "bg-gray-400";
            borderColorClass = "border-gray-400";
            textColor = "white";
            break;
        case "lightGray02":
            backgroundColorClass = "bg-gray-300";
            borderColorClass = "border-gray-300";
            textColor = "white";
            break;
        case "white":
            backgroundColorClass = "bg-white";
            borderColorClass = "border-gray-200";
            textColor = "darkGray02";
            break;
        case "blackOpacity":
            backgroundColorClass = "bg-black-opacity";
            borderColorClass = "border-transparent";
            textColor = "white";
            break;
    }
    return (jsx_runtime_1.jsx("div", __assign({ className: baseClass + " " + sizeClass + " " + backgroundColorClass + " " + borderColorClass + " " + className, style: {
            paddingTop: 5,
        } }, { children: jsx_runtime_1.jsx(Default_1.Text, __assign({ className: "leading-none", color: textColor, size: size === "md" ? "xs" : "xxs", tag: "span", weight: "bold" }, { children: children }), void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map