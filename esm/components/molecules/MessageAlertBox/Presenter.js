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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../../atoms/Icon/Default";
import { MessageBox } from "../../atoms/MessageBox/Default";
import { Text } from "../../atoms/Text/Default";
export var Presenter = function (_a) {
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
    return (_jsxs(MessageBox, __assign({ className: baseClass + " " + containerClass + " " + shadowClass + " " + className, color: messageBoxColor, size: messageBoxSize, style: style }, { children: [_jsx(Icon, { color: iconColor, name: iconName, size: iconSize }, void 0),
            _jsxs("div", __assign({ className: "flex-grow " + marginTextContainerClassName }, { children: [_jsx(Text, __assign({ color: textColor, size: titleTextSize, weight: "bold" }, { children: title }), void 0),
                    description && (_jsx(Text, __assign({ className: marginDescriptionClassName, color: textColor, size: descriptionTextSize }, { children: description }), void 0))] }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map