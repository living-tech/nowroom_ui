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
var Default_1 = require("../../atoms/Icon/Default");
var Default_2 = require("../../atoms/MessageBox/Default");
var Default_3 = require("../../atoms/Text/Default");
var Presenter = function (_a) {
    var _b = _a.block, block = _b === void 0 ? true : _b, className = _a.className, description = _a.description, _c = _a.shadow, shadow = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, style = _a.style, title = _a.title, type = _a.type;
    var baseClass = "items-center";
    var containerClass;
    if (block) {
        containerClass = "flex";
    }
    else {
        containerClass = "inline-flex";
    }
    var shadowClass;
    if (shadow) {
        shadowClass = "shadow-md";
    }
    var messageBoxColor;
    var textColor;
    var iconColor;
    var iconName;
    switch (type) {
        case "success":
            messageBoxColor = "purple";
            textColor = "purple";
            iconColor = "purple";
            iconName = "FiCheckCircle";
            break;
        case "information":
            messageBoxColor = "purple";
            textColor = "purple";
            iconColor = "purple";
            iconName = "FiInfo";
            break;
        case "warning":
            messageBoxColor = "yellow";
            textColor = "yellow";
            iconColor = "yellow";
            iconName = "FiAlertCircle";
            break;
        case "danger":
            messageBoxColor = "red";
            textColor = "red";
            iconColor = "red";
            iconName = "FiZap";
            break;
        default:
            messageBoxColor = "purple";
            textColor = "purple";
            iconColor = "purple";
            iconName = "FiInfo";
    }
    var messageBoxSize;
    var iconSize;
    var titleTextSize;
    var descriptionTextSize;
    var marginTextContainerClassName = "";
    var marginDescriptionClassName = "";
    switch (size) {
        case "md":
            messageBoxSize = "md";
            iconSize = "md";
            titleTextSize = "sm";
            descriptionTextSize = "xs";
            marginTextContainerClassName = "ml-4";
            marginDescriptionClassName = "mt-1";
            break;
        case "sm":
            messageBoxSize = "sm";
            iconSize = "sm";
            titleTextSize = "xs";
            descriptionTextSize = "xxs";
            marginTextContainerClassName = "ml-2";
            marginDescriptionClassName = "mt-0.5";
            break;
    }
    return (jsx_runtime_1.jsxs(Default_2.MessageBox, __assign({ className: baseClass + " " + containerClass + " " + shadowClass + " " + className, color: messageBoxColor, size: messageBoxSize, style: style }, { children: [jsx_runtime_1.jsx(Default_1.Icon, { color: iconColor, name: iconName, size: iconSize }, void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "flex-grow " + marginTextContainerClassName }, { children: [jsx_runtime_1.jsx(Default_3.Text, __assign({ color: textColor, size: titleTextSize, weight: "bold" }, { children: title }), void 0),
                    description && (jsx_runtime_1.jsx(Default_3.Text, __assign({ className: marginDescriptionClassName, color: textColor, size: descriptionTextSize }, { children: description }), void 0))] }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map