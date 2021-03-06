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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Icon } from "../Icon/Default";
import { IconPurple } from "../Icon/Purple";
import { TextMediumGray02 } from "../Text/MediumGray02";
import { TextRed } from "../Text/Red";
export var Presenter = function (_a) {
    var _b;
    var any = _a.any, _c = _a.anyLabel, anyLabel = _c === void 0 ? "任意" : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? "gray" : _d, block = _a.block, className = _a.className, createRef = _a.createRef, defaultValue = _a.defaultValue, _e = _a.disabledPlaceholder, disabledPlaceholder = _e === void 0 ? false : _e, _f = _a.disabledRightArrow, disabledRightArrow = _f === void 0 ? false : _f, error = _a.error, iconColor = _a.iconColor, iconName = _a.iconName, id = _a.id, items = _a.items, label = _a.label, name = _a.name, onChange = _a.onChange, _g = _a.placeholder, placeholder = _g === void 0 ? "選択してください" : _g, _h = _a.size, size = _h === void 0 ? "md" : _h, style = _a.style, value = _a.value, props = __rest(_a, ["any", "anyLabel", "backgroundColor", "block", "className", "createRef", "defaultValue", "disabledPlaceholder", "disabledRightArrow", "error", "iconColor", "iconName", "id", "items", "label", "name", "onChange", "placeholder", "size", "style", "value"]);
    var _j = useState((_b = value !== null && value !== void 0 ? value : defaultValue) !== null && _b !== void 0 ? _b : ""), selectedValue = _j[0], setSelectedValue = _j[1];
    var widthClass = "";
    if (block) {
        widthClass = "w-full";
    }
    var paddingLeftClass = "";
    var paddingRightClass = "";
    var paddingYClass = "";
    var arrowIconPositionClass = "";
    var iconPositionClass = "";
    switch (size) {
        case "md":
            paddingLeftClass = iconName ? "pl-12" : "pl-4";
            paddingRightClass = !disabledRightArrow ? "pr-12" : "pr-4";
            paddingYClass = "py-4";
            arrowIconPositionClass = "right-4";
            iconPositionClass = "left-4";
            break;
        case "sm":
            paddingLeftClass = iconName ? "pl-10" : "pl-3";
            paddingRightClass = !disabledRightArrow ? "pr-10" : "pr-3";
            paddingYClass = "py-3";
            arrowIconPositionClass = "right-3";
            iconPositionClass = "left-3";
            break;
        case "xs":
            paddingLeftClass = iconName ? "pl-7" : "pl-2";
            paddingRightClass = !disabledRightArrow ? "pr-7" : "pr-2";
            paddingYClass = "py-2";
            arrowIconPositionClass = "right-2";
            iconPositionClass = "left-2";
            break;
        case "xxs":
            paddingLeftClass = iconName ? "pl-6" : "pl-1";
            paddingRightClass = !disabledRightArrow ? "pr-6" : "pr-1";
            paddingYClass = "py-1.5";
            arrowIconPositionClass = "right-1";
            iconPositionClass = "left-1";
            break;
    }
    var colorClass = "";
    if (!selectedValue) {
        colorClass = "text-gray-400";
    }
    var backgroundColorClass = "bg-gray-100";
    if (backgroundColor === "white") {
        backgroundColorClass = "bg-white";
    }
    var handleChange = function (event) {
        onChange && onChange(event);
        setSelectedValue(event.target.value);
    };
    var inputClass = "";
    if (error) {
        inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
    }
    return (_jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (_jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (_jsx(TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
            _jsxs("div", __assign({ className: "relative block " + widthClass }, { children: [iconName && (_jsx(Icon, { className: "top-1/2 absolute transform -translate-y-1/2 pointer-events-none " + iconPositionClass, color: iconColor, name: iconName, size: "sm" }, void 0)),
                    _jsxs("select", __assign({ ref: createRef, className: "text-base w-full cursor-pointer whitespace-nowrap block border font-bold border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 " + backgroundColorClass + " " + colorClass + " " + paddingLeftClass + " " + paddingRightClass + " " + paddingYClass + " " + widthClass + " " + inputClass, defaultValue: defaultValue, id: id, name: name, onChange: handleChange, value: value }, { children: [!disabledPlaceholder && _jsx("option", __assign({ value: "" }, { children: placeholder }), void 0),
                            items.map(function (item) {
                                var _a;
                                return (_jsx("option", __assign({ value: item.value }, { children: item.label }), "selectbox-" + ((_a = item.key) !== null && _a !== void 0 ? _a : item.value)));
                            })] }), void 0),
                    !disabledRightArrow && (_jsx(IconPurple, { className: "top-1/2 absolute transform -translate-y-1/2 pointer-events-none " + arrowIconPositionClass, name: "FiChevronDown", size: "sm" }, void 0))] }), void 0),
            error && (_jsx(TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map