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
var Presenter = function (_a) {
    var children = _a.children, className = _a.className, color = _a.color, _b = _a.size, size = _b === void 0 ? "md" : _b, _c = _a.tag, tag = _c === void 0 ? "p" : _c, _d = _a.weight, weight = _d === void 0 ? "normal" : _d, props = __rest(_a, ["children", "className", "color", "size", "tag", "weight"]);
    var Tag = tag;
    var baseClass = "whitespace-pre-wrap";
    var fontSizeClass = "";
    switch (size) {
        case "xxs":
            fontSizeClass = "text-xxs";
            break;
        case "xs":
            fontSizeClass = "text-xs";
            break;
        case "sm":
            fontSizeClass = "text-sm";
            break;
        case "md":
            fontSizeClass = "text-base";
            break;
        case "lg":
            fontSizeClass = "text-lg";
            break;
        case "xl":
            fontSizeClass = "text-xl";
            break;
        case "xxl":
            fontSizeClass = "text-2xl";
            break;
    }
    var fontWeightClass = "";
    switch (weight) {
        case "bold":
            fontWeightClass = "font-bold";
            break;
        case "normal":
            fontWeightClass = "font-medium";
            break;
    }
    var colorClass = "";
    switch (color) {
        case "black":
            colorClass = "text-black";
            break;
        case "darkGray02":
            colorClass = "text-gray-700";
            break;
        case "darkGray01":
            colorClass = "text-gray-600";
            break;
        case "mediumGray02":
            colorClass = "text-gray-500";
            break;
        case "mediumGray01":
            colorClass = "text-gray-400";
            break;
        case "lightGray02":
            colorClass = "text-gray-300";
            break;
        case "lightGray01":
            colorClass = "text-gray-200";
            break;
        case "white":
            colorClass = "text-white";
            break;
        case "purple":
            colorClass = "text-purple";
            break;
        case "cyan":
            colorClass = "text-cyan";
            break;
        case "pink":
            colorClass = "text-pink";
            break;
        case "yellow":
            colorClass = "text-yellow";
            break;
        case "red":
            colorClass = "text-red";
            break;
        case "blue":
            colorClass = "text-blue";
            break;
        case "facebook":
            colorClass = "text-facebook";
            break;
        case "twitter":
            colorClass = "text-twitter";
            break;
    }
    return (jsx_runtime_1.jsx(Tag, __assign({ className: baseClass + " " + fontSizeClass + " " + fontWeightClass + " " + colorClass + " " + className }, props, { children: children }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map