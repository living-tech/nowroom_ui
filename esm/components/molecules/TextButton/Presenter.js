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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from "../../atoms/Icon/Default";
import { Spinner } from "../../atoms/Spinner/Default";
export var Presenter = function (_a) {
    var _b = _a.block, block = _b === void 0 ? false : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.color, color = _d === void 0 ? "purple" : _d, disabled = _a.disabled, href = _a.href, iconName = _a.iconName, _e = _a.iconPosition, iconPosition = _e === void 0 ? "left" : _e, loading = _a.loading, _f = _a.size, size = _f === void 0 ? "md" : _f, style = _a.style, _g = _a.tag, tag = _g === void 0 ? "button" : _g, target = _a.target, _h = _a.type, type = _h === void 0 ? "button" : _h, _j = _a.weight, weight = _j === void 0 ? "bold" : _j, props = __rest(_a, ["block", "children", "className", "color", "disabled", "href", "iconName", "iconPosition", "loading", "size", "style", "tag", "target", "type", "weight"]);
    var baseClass = "relative cursor-pointer focus:outline-none transition duration-200 ease-out inline-flex disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:text-gray-500 justify-center items-center";
    var textSizeClass;
    var iconSize;
    var loadingSizeClass;
    switch (size) {
        case "xxs":
            textSizeClass = "text-xxs";
            iconSize = "sm";
            loadingSizeClass = 16;
            break;
        case "xs":
            textSizeClass = "text-xs";
            iconSize = "sm";
            loadingSizeClass = 16;
            break;
        case "sm":
            textSizeClass = "text-sm";
            iconSize = "sm";
            loadingSizeClass = 18;
            break;
        case "md":
            textSizeClass = "text-md";
            iconSize = "sm";
            loadingSizeClass = 20;
            break;
        case "lg":
            textSizeClass = "text-lg";
            iconSize = "sm";
            loadingSizeClass = 24;
            break;
        case "xl":
            textSizeClass = "text-xl";
            iconSize = "md";
            loadingSizeClass = 24;
            break;
        case "xxl":
            textSizeClass = "text-2xl";
            iconSize = "md";
            loadingSizeClass = 26;
            break;
    }
    var weightClass = "";
    if (weight === "bold") {
        weightClass = "font-bold";
    }
    var loadingTextClass = "";
    if (loading) {
        loadingTextClass = "opacity-0";
    }
    var textColorClass = "";
    switch (color) {
        case "purple":
            textColorClass = "text-purple hover:text-black";
            break;
        case "white":
            textColorClass = "text-white hover:text-purple";
            break;
        case "black":
            textColorClass = "text-black hover:text-purple";
            break;
        case "darkGray02":
            textColorClass = "text-gray-700 hover:text-purple";
            break;
        case "darkGray01":
            textColorClass = "text-gray-600 hover:text-purple";
            break;
        case "mediumGray02":
            textColorClass = "text-gray-500 hover:text-purple";
            break;
        case "mediumGray01":
            textColorClass = "text-gray-400 hover:text-purple";
            break;
        case "lightGray02":
            textColorClass = "text-gray-300 hover:text-purple";
            break;
        case "lightGray01":
            textColorClass = "text-gray-200 hover:text-purple";
            break;
    }
    var blockClass = "";
    if (block) {
        blockClass = "w-full";
    }
    var Inner = function () { return (_jsxs(_Fragment, { children: [_jsxs("span", __assign({ className: "flex items-center " + loadingTextClass }, { children: [iconName && iconPosition === "left" && (_jsx("span", __assign({ className: "mr-2" }, { children: _jsx(Icon, { name: iconName, size: iconSize }, void 0) }), void 0)), children, iconName && iconPosition === "right" && (_jsx("span", __assign({ className: "ml-2" }, { children: _jsx(Icon, { name: iconName, size: iconSize }, void 0) }), void 0))] }), void 0),
            loading && (_jsx("span", __assign({ className: "absolute flex top-1/2 transform -translate-y-1/2" }, { children: _jsx(Spinner, { size: loadingSizeClass }, void 0) }), void 0))] }, void 0)); };
    if (tag === "a") {
        return (_jsx("a", __assign({ className: baseClass + " " + textSizeClass + " " + textColorClass + " " + weightClass + " " + blockClass + " " + className, href: href, style: style, target: target }, props, { children: _jsx(Inner, {}, void 0) }), void 0));
    }
    else {
        return (_jsx("button", __assign({ className: baseClass + " " + textSizeClass + " " + textColorClass + " " + weightClass + " " + blockClass + " " + className, disabled: disabled || loading, style: style, type: type }, props, { children: _jsx(Inner, {}, void 0) }), void 0));
    }
};
//# sourceMappingURL=Presenter.js.map