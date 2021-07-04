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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../../atoms/Icon/Default";
import { Spinner } from "../../atoms/Spinner/Default";
export var Presenter = function (_a) {
    var _b = _a.border, border = _b === void 0 ? true : _b, className = _a.className, _c = _a.color, color = _c === void 0 ? "transparent" : _c, currentType = _a.currentType, disabled = _a.disabled, href = _a.href, iconColor = _a.iconColor, iconName = _a.iconName, loading = _a.loading, _d = _a.radius, radius = _d === void 0 ? false : _d, _e = _a.shadow, shadow = _e === void 0 ? true : _e, _f = _a.size, size = _f === void 0 ? "md" : _f, style = _a.style, _g = _a.tag, tag = _g === void 0 ? "button" : _g, target = _a.target, _h = _a.visualType, visualType = _h === void 0 ? "fill" : _h, props = __rest(_a, ["border", "className", "color", "currentType", "disabled", "href", "iconColor", "iconName", "loading", "radius", "shadow", "size", "style", "tag", "target", "visualType"]);
    var baseClass = "relative rounded font-bold transition duration-200 ease-out inline-flex disabled:cursor-not-allowed justify-center items-center focus:outline-none";
    var sizeClass = "";
    var iconSize;
    var loadingSize;
    switch (size) {
        case "sm":
            sizeClass = "p-1";
            iconSize = "sm";
            loadingSize = 14;
            break;
        case "md":
            sizeClass = "p-2";
            iconSize = "md";
            loadingSize = 20;
            break;
        case "lg":
            sizeClass = "p-2";
            iconSize = "lg";
            loadingSize = 26;
            break;
    }
    var loadingIconColorClass = "";
    if (loading) {
        loadingIconColorClass = "opacity-0";
    }
    var borderRadiusClass = "";
    if (radius) {
        borderRadiusClass = "rounded-full";
    }
    var borderColorClass = "";
    if (border) {
        switch (visualType) {
            case "fill":
                switch (color) {
                    case "purple":
                        borderColorClass = "border border-purple disabled:border-gray-500";
                        break;
                    case "yellow":
                        borderColorClass = "border border-yellow disabled:border-gray-500";
                        break;
                    case "red":
                        borderColorClass = "border border-red disabled:border-gray-500";
                        break;
                    case "facebook":
                        borderColorClass = "border border-facebook disabled:border-gray-500";
                        break;
                    case "twitter":
                        borderColorClass = "border border-twitter disabled:border-gray-500";
                        break;
                    case "line":
                        borderColorClass = "border border-line disabled:border-gray-500";
                        break;
                    case "white":
                        borderColorClass = "border border-gray-200 hover:border-purple";
                        break;
                    case "gray":
                        borderColorClass = "border border-gray-200 disabled:border-gray-200";
                        break;
                    case "transparent":
                        borderColorClass = "border border-transparent";
                        break;
                }
                break;
            case "outline":
                switch (color) {
                    case "purple":
                        borderColorClass = "border border-purple";
                        break;
                    case "yellow":
                        borderColorClass = "border border-yellow";
                        break;
                    case "red":
                        borderColorClass = "border border-red";
                        break;
                    case "facebook":
                        borderColorClass = "border border-facebook";
                        break;
                    case "twitter":
                        borderColorClass = "border border-twitter";
                        break;
                    case "line":
                        borderColorClass = "border border-line";
                        break;
                    case "white":
                        borderColorClass = "border border-gray-200 hover:border-purple";
                        break;
                    case "gray":
                        borderColorClass = "border border-gray-200";
                        break;
                    case "transparent":
                        borderColorClass = "border border-transparent";
                        break;
                }
                break;
        }
    }
    var backgroundColorClass = "";
    switch (visualType) {
        case "fill":
            switch (color) {
                case "purple":
                    backgroundColorClass = "bg-purple hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "yellow":
                    backgroundColorClass = "bg-yellow hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "red":
                    backgroundColorClass = "bg-red hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "facebook":
                    backgroundColorClass = "bg-facebook hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "twitter":
                    backgroundColorClass = "bg-twitter hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "line":
                    backgroundColorClass = "bg-line hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "white":
                    backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
                    break;
                case "gray":
                    backgroundColorClass = "bg-white hover:bg-white";
                    break;
                case "transparent":
                    backgroundColorClass = "bg-transparent hover:bg-gray-200";
                    break;
            }
            break;
        case "outline":
            switch (color) {
                case "purple":
                    backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
                    break;
                case "yellow":
                    backgroundColorClass = "bg-white hover:bg-yellow disabled:bg-white disabled:hover:bg-white";
                    break;
                case "red":
                    backgroundColorClass = "bg-white hover:bg-red disabled:bg-white disabled:hover:bg-white";
                    break;
                case "facebook":
                    backgroundColorClass = "bg-white hover:bg-facebook disabled:hover:bg-white";
                    break;
                case "twitter":
                    backgroundColorClass = "bg-white hover:bg-twitter disabled:hover:bg-white";
                    break;
                case "line":
                    backgroundColorClass = "bg-white hover:bg-line disabled:hover:bg-white";
                    break;
                case "white":
                    backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
                    break;
                case "gray":
                    backgroundColorClass = "bg-gray-500 hover:bg-gray-400 disabled:bg-gray-500 disabled:hover:bg-gray-500";
                    break;
                case "transparent":
                    backgroundColorClass = "bg-transparent hover:bg-gray-200";
                    break;
            }
            break;
    }
    var iconColorClass = "";
    var loadingColor;
    switch (visualType) {
        case "fill":
            switch (color) {
                case "purple":
                    iconColorClass = "text-white hover:text-purple disabled:text-white disabled:hover:text-white";
                    loadingColor = "white";
                    break;
                case "yellow":
                    iconColorClass = "text-white hover:text-yellow disabled:text-white disabled:hover:text-white";
                    loadingColor = "white";
                    break;
                case "red":
                    iconColorClass = "text-white hover:text-red disabled:text-white disabled:hover:text-white";
                    loadingColor = "white";
                    break;
                case "facebook":
                    iconColorClass = "text-white hover:text-facebook disabled:text-white disabled:hover:text-white";
                    loadingColor = "white";
                    break;
                case "twitter":
                    iconColorClass = "text-white hover:text-twitter disabled:text-white disabled:hover:text-white";
                    loadingColor = "white";
                    break;
                case "line":
                    iconColorClass = "text-white hover:text-line disabled:text-white disabled:hover:text-white";
                    loadingColor = "white";
                    break;
                case "white":
                    iconColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
                    loadingColor = "black";
                    break;
                case "gray":
                    iconColorClass = "text-gray-500 hover:text-gray-400 disabled:text-gray-500 disabled:hover:text-gray-500";
                    loadingColor = "black";
                    break;
                case "transparent":
                    iconColorClass = "text-black";
                    loadingColor = "black";
                    break;
            }
            break;
        case "outline":
            switch (color) {
                case "purple":
                    iconColorClass = "text-purple hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    loadingColor = "purple";
                    break;
                case "yellow":
                    iconColorClass = "text-yellow hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    loadingColor = "yellow";
                    break;
                case "red":
                    iconColorClass = "text-red hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    loadingColor = "red";
                    break;
                case "facebook":
                    iconColorClass = "text-facebook hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    loadingColor = "purple";
                    break;
                case "twitter":
                    iconColorClass = "text-twitter hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    loadingColor = "purple";
                    break;
                case "line":
                    iconColorClass = "text-line hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
                    loadingColor = "purple";
                    break;
                case "white":
                    iconColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
                    loadingColor = "black";
                    break;
                case "gray":
                    iconColorClass = "text-white";
                    loadingColor = "black";
                    break;
                case "transparent":
                    iconColorClass = "text-black";
                    loadingColor = "black";
                    break;
            }
            break;
    }
    var shadowClass = "";
    if (shadow) {
        shadowClass = "shadow";
    }
    var Inner = function () { return (_jsxs(_Fragment, { children: [_jsx(Icon, { className: "" + loadingIconColorClass, color: iconColor, currentType: currentType, name: iconName, size: iconSize }, void 0),
            loading && (_jsx("span", __assign({ className: "absolute flex top-1/2 transform -translate-y-1/2" }, { children: _jsx(Spinner, { color: loadingColor, size: loadingSize }, void 0) }), void 0))] }, void 0)); };
    if (tag === "a") {
        return (_jsx("a", __assign({ className: baseClass + " " + sizeClass + " " + borderRadiusClass + " " + borderColorClass + " " + backgroundColorClass + " " + iconColorClass + " " + shadowClass + " " + className, href: href, style: style, target: target }, props, { children: _jsx(Inner, {}, void 0) }), void 0));
    }
    else {
        return (_jsx("button", __assign({ className: baseClass + " " + sizeClass + " " + borderRadiusClass + " " + borderColorClass + " " + backgroundColorClass + " " + iconColorClass + " " + shadowClass + " " + className, disabled: disabled || loading, style: style, type: "button" }, props, { children: _jsx(Inner, {}, void 0) }), void 0));
    }
};
//# sourceMappingURL=Presenter.js.map