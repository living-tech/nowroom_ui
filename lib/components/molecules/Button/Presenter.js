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
var Default_1 = require("../../atoms/Icon/Default");
var Default_2 = require("../../atoms/Spinner/Default");
var Presenter = function (_a) {
    var _b = _a.block, block = _b === void 0 ? false : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.color, color = _d === void 0 ? "purple" : _d, disabled = _a.disabled, href = _a.href, iconName = _a.iconName, _e = _a.iconPosition, iconPosition = _e === void 0 ? "left" : _e, loading = _a.loading, onClick = _a.onClick, _f = _a.padding, padding = _f === void 0 ? true : _f, _g = _a.shadow, shadow = _g === void 0 ? true : _g, _h = _a.size, size = _h === void 0 ? "md" : _h, style = _a.style, _j = _a.tag, tag = _j === void 0 ? "button" : _j, target = _a.target, _k = _a.type, type = _k === void 0 ? "button" : _k, _l = _a.visualType, visualType = _l === void 0 ? "fill" : _l, props = __rest(_a, ["block", "children", "className", "color", "disabled", "href", "iconName", "iconPosition", "loading", "onClick", "padding", "shadow", "size", "style", "tag", "target", "type", "visualType"]);
    var baseClass = "relative cursor-pointer rounded font-bold focus:outline-none transition duration-200 ease-out inline-flex disabled:cursor-not-allowed justify-center items-center";
    var sizeClass = "";
    var iconSize;
    var loadingSize;
    var spaceXSize;
    var paddingTop;
    switch (size) {
        case "xs":
            sizeClass = padding ? "pb-2 px-2 text-xs" : "text-xs";
            spaceXSize = 1;
            paddingTop = 7;
            iconSize = 14;
            loadingSize = 18;
            break;
        case "sm":
            sizeClass = padding ? "pb-2 px-6 text-sm" : "text-sm";
            spaceXSize = 2;
            paddingTop = 7;
            iconSize = "sm";
            loadingSize = 18;
            break;
        case "md":
            sizeClass = padding ? "pb-2.5 px-6 text-sm" : "text-sm";
            spaceXSize = 2;
            paddingTop = 9;
            iconSize = "sm";
            loadingSize = 20;
            break;
        case "lg":
            sizeClass = padding ? "pb-3 px-8 text-base" : "text-base";
            spaceXSize = 2;
            paddingTop = 11;
            iconSize = "sm";
            loadingSize = 24;
            break;
        case "xl":
            sizeClass = padding ? "pb-4 px-10 text-base" : "text-base";
            spaceXSize = 2;
            paddingTop = 15;
            iconSize = "md";
            loadingSize = 24;
            break;
    }
    var loadingTextClass = "";
    if (loading) {
        loadingTextClass = "opacity-0";
    }
    var borderColorClass = "";
    switch (visualType) {
        case "fill":
            switch (color) {
                case "purple":
                    borderColorClass = "border border-purple disabled:border-gray-500";
                    break;
                case "white":
                    borderColorClass = "border border-gray-200";
                    break;
            }
            break;
        case "outline":
            switch (color) {
                case "purple":
                    borderColorClass = "border border-purple disabled:border-gray-200";
                    break;
                case "white":
                    borderColorClass = "border border-gray-200";
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
    var Inner = function () { return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("span", __assign({ className: "flex items-center " + loadingTextClass }, { children: [iconName && iconPosition === "left" && (jsx_runtime_1.jsx("span", __assign({ className: "relative mr-" + spaceXSize, style: { top: 1 } }, { children: jsx_runtime_1.jsx(Default_1.Icon, { name: iconName, size: iconSize }, void 0) }), void 0)), children, iconName && iconPosition === "right" && (jsx_runtime_1.jsx("span", __assign({ className: "relative ml-" + spaceXSize, style: { top: 1 } }, { children: jsx_runtime_1.jsx(Default_1.Icon, { name: iconName, size: iconSize }, void 0) }), void 0))] }), void 0),
            loading && (jsx_runtime_1.jsx("span", __assign({ className: "absolute flex top-1/2 transform -translate-y-1/2" }, { children: jsx_runtime_1.jsx(Default_2.Spinner, { size: loadingSize }, void 0) }), void 0))] }, void 0)); };
    if (tag === "a") {
        return (jsx_runtime_1.jsx("a", __assign({ className: baseClass + " " + sizeClass + " " + borderColorClass + " " + backgroundColorClass + " " + textColorClass + " " + blockClass + " " + shadowClass + " " + className, href: href, style: __assign({ paddingTop: paddingTop }, style), target: target }, props, { children: jsx_runtime_1.jsx(Inner, {}, void 0) }), void 0));
    }
    else {
        return (jsx_runtime_1.jsx("button", __assign({ className: baseClass + " " + sizeClass + " " + borderColorClass + " " + backgroundColorClass + " " + textColorClass + " " + blockClass + " " + shadowClass + " " + className, disabled: disabled || loading, onClick: onClick, style: __assign({ paddingTop: paddingTop }, style), type: type }, props, { children: jsx_runtime_1.jsx(Inner, {}, void 0) }), void 0));
    }
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map