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
var Presenter = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? "purple" : _b, _c = _a.isClickable, isClickable = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, style = _a.style;
    var baseClass = "inline-flex items-center border rounded transition ease-out duration-200 font-bold leading-none whitespace-pre-wrap pb-1 px-1.5";
    var cursorClass = "";
    if (isClickable) {
        cursorClass = "cursor-pointer";
    }
    var fontSize = "";
    switch (size) {
        case "md":
            fontSize = "text-xs";
            break;
        case "sm":
            fontSize = "text-xxs";
            break;
        case "xs":
            fontSize = "text-xxs";
            break;
    }
    var backgroundColorClass = "";
    var borderColorClass = "";
    var backgroundColorHoverClass = "";
    var borderColorHoverClass = "";
    var textColor = "text-white";
    switch (color) {
        case "purple":
            backgroundColorClass = "bg-purple";
            borderColorClass = "border-purple";
            backgroundColorHoverClass = isClickable ? "hover:bg-purple-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-purple-700" : "";
            textColor = "text-white";
            break;
        case "pink":
            backgroundColorClass = "bg-pink";
            borderColorClass = "border-pink";
            backgroundColorHoverClass = isClickable ? "hover:bg-pink-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-pink-700" : "";
            textColor = "text-white";
            break;
        case "cyan":
            backgroundColorClass = "bg-cyan";
            borderColorClass = "border-cyan";
            backgroundColorHoverClass = isClickable ? "hover:bg-cyan-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-cyan-700" : "";
            textColor = "text-white";
            break;
        case "blue":
            backgroundColorClass = "bg-blue";
            borderColorClass = "border-blue";
            backgroundColorHoverClass = isClickable ? "hover:bg-blue-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-blue-700" : "";
            textColor = "text-white";
            break;
        case "green":
            backgroundColorClass = "bg-green";
            borderColorClass = "border-green";
            backgroundColorHoverClass = isClickable ? "hover:bg-green-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-green-700" : "";
            textColor = "text-white";
            break;
        case "yellow":
            backgroundColorClass = "bg-yellow";
            borderColorClass = "border-yellow";
            backgroundColorHoverClass = isClickable ? "hover:bg-yellow-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-yellow-700" : "";
            textColor = "text-white";
            break;
        case "mediumGray01":
            backgroundColorClass = "bg-gray-400";
            borderColorClass = "border-gray-400";
            backgroundColorHoverClass = isClickable ? "hover:bg-gray-600" : "";
            borderColorHoverClass = isClickable ? "hover:border-gray-600" : "";
            textColor = "text-white";
            break;
        case "lightGray02":
            backgroundColorClass = "bg-gray-300";
            borderColorClass = "border-gray-300";
            backgroundColorHoverClass = isClickable ? "hover:bg-gray-500" : "";
            borderColorHoverClass = isClickable ? "hover:border-gray-500" : "";
            textColor = "text-white";
            break;
        case "red":
            backgroundColorClass = "bg-red";
            borderColorClass = "border-red";
            backgroundColorHoverClass = isClickable ? "hover:bg-red-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-red-700" : "";
            textColor = "text-white";
            break;
        case "white":
            backgroundColorClass = "bg-white";
            borderColorClass = "border-gray-200";
            backgroundColorHoverClass = isClickable ? "hover:bg-gray-200" : "";
            borderColorHoverClass = isClickable ? "hover:border-gray-200" : "";
            textColor = "text-gray-700";
            break;
        case "blackOpacity":
            backgroundColorClass = "bg-black-opacity";
            borderColorClass = "border-transparent";
            textColor = "text-white";
            break;
        case "purpleOutline":
            backgroundColorClass = "bg-transparent";
            borderColorClass = "border-purple";
            textColor = "text-purple";
            break;
    }
    return (jsx_runtime_1.jsx("div", __assign({ className: baseClass + " " + cursorClass + " " + fontSize + " " + backgroundColorClass + " " + backgroundColorHoverClass + " " + borderColorClass + " " + textColor + " " + borderColorHoverClass + " " + className, style: __assign({ paddingTop: "5px" }, style) }, { children: children }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map