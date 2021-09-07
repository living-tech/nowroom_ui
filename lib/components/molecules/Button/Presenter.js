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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Default_1 = require("../../atoms/Icon/Default");
var Default_2 = require("../../atoms/Spinner/Default");
exports.Presenter = react_1.memo(function (_a) {
    var _b = _a.block, block = _b === void 0 ? false : _b, _c = _a.border, border = _c === void 0 ? true : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.color, color = _e === void 0 ? "purple" : _e, disabled = _a.disabled, href = _a.href, iconName = _a.iconName, _f = _a.iconPosition, iconPosition = _f === void 0 ? "left" : _f, loading = _a.loading, onClick = _a.onClick, _g = _a.padding, padding = _g === void 0 ? true : _g, _h = _a.radius, radius = _h === void 0 ? true : _h, _j = _a.shadow, shadow = _j === void 0 ? true : _j, _k = _a.size, size = _k === void 0 ? "md" : _k, style = _a.style, _l = _a.tag, tag = _l === void 0 ? "button" : _l, target = _a.target, _m = _a.type, type = _m === void 0 ? "button" : _m, _o = _a.visualType, visualType = _o === void 0 ? "fill" : _o, props = __rest(_a, ["block", "border", "children", "className", "color", "disabled", "href", "iconName", "iconPosition", "loading", "onClick", "padding", "radius", "shadow", "size", "style", "tag", "target", "type", "visualType"]);
    var baseClass = "relative cursor-pointer font-bold focus:outline-none transition duration-200 ease-out inline-flex disabled:cursor-not-allowed justify-center items-center";
    var sizeClass = "";
    var iconSize;
    var loadingSize;
    var spaceXSize;
    switch (size) {
        case "xs":
            sizeClass = padding ? "py-2 px-2 text-xs" : "text-xs";
            spaceXSize = 1;
            iconSize = 14;
            loadingSize = 18;
            break;
        case "sm":
            sizeClass = padding ? "py-2 px-6 text-sm" : "text-sm";
            spaceXSize = 2;
            iconSize = "sm";
            loadingSize = 18;
            break;
        case "md":
            sizeClass = padding ? "py-2.5 px-6 text-sm" : "text-sm";
            spaceXSize = 2;
            iconSize = "sm";
            loadingSize = 20;
            break;
        case "lg":
            sizeClass = padding ? "py-3 px-8 text-base" : "text-base";
            spaceXSize = 2;
            iconSize = "sm";
            loadingSize = 24;
            break;
        case "xl":
            sizeClass = padding ? "py-4 px-10 text-base" : "text-base";
            spaceXSize = 2;
            iconSize = "md";
            loadingSize = 24;
            break;
    }
    var loadingTextClass = "";
    if (loading) {
        loadingTextClass = "opacity-0";
    }
    var roundedClass = "";
    if (radius) {
        roundedClass = "rounded";
    }
    var borderColorClass = "";
    switch (visualType) {
        case "fill":
            switch (color) {
                case "purple":
                    borderColorClass = border
                        ? "border border-purple disabled:border-gray-500"
                        : "border border-transparent disabled:border-transparent";
                    break;
                case "white":
                    borderColorClass = border ? "border border-gray-200" : "border border-transparent";
                    break;
                case "red":
                    borderColorClass = border
                        ? "border border-red disabled:border-gray-500"
                        : "border border-transparent disabled:border-transparent";
                    break;
            }
            break;
        case "outline":
            switch (color) {
                case "purple":
                    borderColorClass = border
                        ? "border border-purple disabled:border-gray-200"
                        : "border border-transparent disabled:border-transparent";
                    break;
                case "white":
                    borderColorClass = border ? "border border-gray-200" : "border border-transparent";
                    break;
                case "red":
                    borderColorClass = border
                        ? "border border-red disabled:border-gray-200"
                        : "border border-transparent disabled:border-transparent";
                    break;
            }
            break;
    }
    var backgroundColorClass = "";
    switch (visualType) {
        case "fill":
            switch (color) {
                case "purple":
                    backgroundColorClass = "bg-purple hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "white":
                    backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
                    break;
                case "red":
                    backgroundColorClass = "bg-red hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
            }
            break;
        case "outline":
            switch (color) {
                case "purple":
                    backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
                    break;
                case "white":
                    backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
                    break;
                case "red":
                    backgroundColorClass = "bg-red hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
            }
            break;
    }
    var textColorClass = "";
    switch (visualType) {
        case "fill":
            switch (color) {
                case "purple":
                    textColorClass = "text-white hover:text-purple disabled:text-white disabled:hover:text-white";
                    break;
                case "white":
                    textColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
                    break;
                case "red":
                    textColorClass = "text-white hover:text-red disabled:text-white disabled:hover:text-white";
                    break;
            }
            break;
        case "outline":
            switch (color) {
                case "purple":
                    textColorClass = "text-purple hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    break;
                case "white":
                    textColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
                    break;
                case "red":
                    textColorClass = "text-red hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    break;
            }
            break;
    }
    var blockClass = "";
    if (block) {
        blockClass = "w-full";
    }
    var shadowClass = "";
    if (shadow) {
        shadowClass = "shadow-xs";
    }
    var Inner = function () { return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("span", __assign({ className: "flex items-center " + loadingTextClass }, { children: [iconName && iconPosition === "left" && (jsx_runtime_1.jsx("span", __assign({ className: "relative mr-" + spaceXSize }, { children: jsx_runtime_1.jsx(Default_1.Icon, { name: iconName, size: iconSize }, void 0) }), void 0)), children, iconName && iconPosition === "right" && (jsx_runtime_1.jsx("span", __assign({ className: "relative ml-" + spaceXSize }, { children: jsx_runtime_1.jsx(Default_1.Icon, { name: iconName, size: iconSize }, void 0) }), void 0))] }), void 0),
            loading && (jsx_runtime_1.jsx("span", __assign({ className: "absolute flex top-1/2 transform -translate-y-1/2" }, { children: jsx_runtime_1.jsx(Default_2.Spinner, { size: loadingSize }, void 0) }), void 0))] }, void 0)); };
    if (tag === "a") {
        return (jsx_runtime_1.jsx("a", __assign({ className: baseClass + " " + sizeClass + " " + roundedClass + " " + borderColorClass + " " + backgroundColorClass + " " + textColorClass + " " + blockClass + " " + shadowClass + " " + className, href: href, style: style, target: target }, props, { children: jsx_runtime_1.jsx(Inner, {}, void 0) }), void 0));
    }
    else {
        return (jsx_runtime_1.jsx("button", __assign({ className: baseClass + " " + sizeClass + " " + roundedClass + " " + borderColorClass + " " + backgroundColorClass + " " + textColorClass + " " + blockClass + " " + shadowClass + " " + className, disabled: disabled || loading, onClick: onClick, style: style, type: type }, props, { children: jsx_runtime_1.jsx(Inner, {}, void 0) }), void 0));
    }
});
//# sourceMappingURL=Presenter.js.map