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
import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "../../atoms/Text/Default";
export var Presenter = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? "purple" : _b, _c = _a.isClickable, isClickable = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, style = _a.style;
    var baseClass = "inline-flex items-center border rounded transition ease-out duration-200";
    var cursorClass = "";
    if (isClickable) {
        cursorClass = "cursor-pointer";
    }
    var sizeClass = "";
    switch (size) {
        case "md":
            sizeClass = "py-1 px-1.5";
            break;
        case "sm":
            sizeClass = "py-1 px-1.5";
            break;
        case "xs":
            sizeClass = "py-1 px-1.5";
            break;
    }
    var backgroundColorClass = "";
    var borderColorClass = "";
    var backgroundColorHoverClass = "";
    var borderColorHoverClass = "";
    var textColor = "white";
    switch (color) {
        case "purple":
            backgroundColorClass = "bg-purple";
            borderColorClass = "border-purple";
            backgroundColorHoverClass = isClickable ? "hover:bg-purple-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-purple-700" : "";
            textColor = "white";
            break;
        case "pink":
            backgroundColorClass = "bg-pink";
            borderColorClass = "border-pink";
            backgroundColorHoverClass = isClickable ? "hover:bg-pink-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-pink-700" : "";
            textColor = "white";
            break;
        case "cyan":
            backgroundColorClass = "bg-cyan";
            borderColorClass = "border-cyan";
            backgroundColorHoverClass = isClickable ? "hover:bg-cyan-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-cyan-700" : "";
            textColor = "white";
            break;
        case "blue":
            backgroundColorClass = "bg-blue";
            borderColorClass = "border-blue";
            backgroundColorHoverClass = isClickable ? "hover:bg-blue-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-blue-700" : "";
            textColor = "white";
            break;
        case "green":
            backgroundColorClass = "bg-green";
            borderColorClass = "border-green";
            backgroundColorHoverClass = isClickable ? "hover:bg-green-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-green-700" : "";
            textColor = "white";
            break;
        case "yellow":
            backgroundColorClass = "bg-yellow";
            borderColorClass = "border-yellow";
            backgroundColorHoverClass = isClickable ? "hover:bg-yellow-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-yellow-700" : "";
            textColor = "white";
            break;
        case "mediumGray01":
            backgroundColorClass = "bg-gray-400";
            borderColorClass = "border-gray-400";
            backgroundColorHoverClass = isClickable ? "hover:bg-gray-600" : "";
            borderColorHoverClass = isClickable ? "hover:border-gray-600" : "";
            textColor = "white";
            break;
        case "lightGray02":
            backgroundColorClass = "bg-gray-300";
            borderColorClass = "border-gray-300";
            backgroundColorHoverClass = isClickable ? "hover:bg-gray-500" : "";
            borderColorHoverClass = isClickable ? "hover:border-gray-500" : "";
            textColor = "white";
            break;
        case "red":
            backgroundColorClass = "bg-red";
            borderColorClass = "border-red";
            backgroundColorHoverClass = isClickable ? "hover:bg-red-700" : "";
            borderColorHoverClass = isClickable ? "hover:border-red-700" : "";
            textColor = "white";
            break;
        case "white":
            backgroundColorClass = "bg-white";
            borderColorClass = "border-gray-200";
            backgroundColorHoverClass = isClickable ? "hover:bg-gray-200" : "";
            borderColorHoverClass = isClickable ? "hover:border-gray-200" : "";
            textColor = "darkGray02";
            break;
        case "blackOpacity":
            backgroundColorClass = "bg-black-opacity";
            borderColorClass = "border-transparent";
            textColor = "white";
            break;
    }
    return (_jsx("div", __assign({ className: baseClass + " " + cursorClass + " " + sizeClass + " " + backgroundColorClass + " " + backgroundColorHoverClass + " " + borderColorClass + " " + borderColorHoverClass + "  " + className, style: style }, { children: _jsx(Text, __assign({ className: " leading-none", color: textColor, size: size === "md" ? "xs" : "xxs", style: { paddingTop: 1 }, tag: "span", weight: "bold" }, { children: children }), void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map