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
var Default_1 = require("../Icon/Default");
var MediumGray02_1 = require("../Text/MediumGray02");
var Red_1 = require("../Text/Red");
var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, autocomplete = _a.autocomplete, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.color, color = _d === void 0 ? "gray" : _d, createRef = _a.createRef, defaultValue = _a.defaultValue, error = _a.error, iconName = _a.iconName, id = _a.id, _e = _a.inputClassName, inputClassName = _e === void 0 ? "" : _e, label = _a.label, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyPress = _a.onKeyPress, placeholder = _a.placeholder, renderDescription = _a.renderDescription, _f = _a.size, size = _f === void 0 ? "md" : _f, style = _a.style, _g = _a.type, type = _g === void 0 ? "text" : _g, unit = _a.unit, _h = _a.unitPosition, unitPosition = _h === void 0 ? "right" : _h, value = _a.value, _j = _a.weight, weight = _j === void 0 ? "bold" : _j, props = __rest(_a, ["any", "anyLabel", "autocomplete", "className", "color", "createRef", "defaultValue", "error", "iconName", "id", "inputClassName", "label", "name", "onBlur", "onChange", "onFocus", "onKeyPress", "placeholder", "renderDescription", "size", "style", "type", "unit", "unitPosition", "value", "weight"]);
    var inputBaseClass = "border block w-full placeholder-gray-400";
    var inputClass = "";
    if (error) {
        inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
    }
    else {
        inputClass =
            color === "gray"
                ? "border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                : "border-transparent focus:ring-purple-500 focus:border-purple-500";
    }
    var inputBackgroundColorClass = "";
    var roundedClass = "";
    switch (color) {
        case "gray":
            inputBackgroundColorClass = "bg-gray-100";
            roundedClass = "rounded-md";
            break;
        case "white":
            inputBackgroundColorClass = "bg-white";
            break;
    }
    switch (size) {
        case "md":
            if (unit && iconName) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-4 pl-12 pb-4 pr-" + (unit.length * 4 + 4)
                        : " pt-4 pr-12 pb-4 pl-" + (unit.length * 4 + 4);
            }
            else if (unit) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-4 pl-4 pb-4 pr-" + (unit.length * 4 + 4)
                        : " pt-4 pr-4 pb-4 pl-" + (unit.length * 4 + 4);
            }
            else if (iconName) {
                inputClass += " pt-4 pl-12 pb-4 pr-4";
            }
            else {
                inputClass += " p-4";
            }
            break;
        case "sm":
            inputClass += " text-sm";
            if (unit && iconName) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-3 pl-12 pb-3 pr-" + (unit.length * 4 + 3)
                        : " pt-3 pr-12 pb-3 pl-" + (unit.length * 4 + 3);
            }
            else if (unit) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-3 pl-3 pb-3 pr-" + (unit.length * 4 + 3)
                        : " pt-3 pr-3 pb-3 pl-" + (unit.length * 4 + 3);
            }
            else if (iconName) {
                inputClass += " pt-3 pl-12 pb-3 pr-3";
            }
            else {
                inputClass += " p-3";
            }
            break;
        case "xs":
            inputClass += " text-xs";
            if (unit && iconName) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-2 pl-7 pb-2 pr-" + (unit.length * 4 + 2)
                        : " pt-2 pr-7 pb-2 pl-" + (unit.length * 4 + 2);
            }
            else if (unit) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-2 pl-2 pb-2 pr-" + (unit.length * 4 + 2)
                        : " pt-2 pr-2 pb-2 pl-" + (unit.length * 4 + 2);
            }
            else if (iconName) {
                inputClass += " pt-2 pl-7 pb-2 pr-2";
            }
            else {
                inputClass += " px-2 py-2.5";
            }
            break;
    }
    switch (weight) {
        case "bold":
            inputClass += " font-bold";
            break;
        case "normal":
            inputClass += " font-medium";
            break;
    }
    var iconPosition;
    switch (size) {
        case "md":
            iconPosition = "1rem";
            break;
        case "sm":
            iconPosition = "0.75rem";
            break;
        case "xs":
            iconPosition = "0.5rem";
            break;
        default:
            iconPosition = "1rem";
    }
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (jsx_runtime_1.jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
            renderDescription && jsx_runtime_1.jsx("div", __assign({ className: "mb-3" }, { children: renderDescription() }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "relative" }, { children: [iconName && (jsx_runtime_1.jsx(Default_1.Icon, { className: "absolute pointer-events-none", color: color === "white" ? "darkGray02" : "black", name: iconName, size: size, style: {
                            left: iconPosition,
                            top: "50%",
                            transform: "translateY(-50%)",
                        } }, void 0)),
                    jsx_runtime_1.jsx("input", { ref: createRef, autoComplete: autocomplete, className: inputBaseClass + " " + inputClass + " " + roundedClass + " " + inputBackgroundColorClass + " " + inputClassName, defaultValue: defaultValue, id: id, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, onKeyPress: onKeyPress, placeholder: placeholder, type: type, value: value }, void 0),
                    unit && unitPosition === "right" && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "absolute pointer-events-none", size: size === "md" ? "sm" : "xs", style: {
                            right: iconPosition,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }, tag: "span" }, { children: unit }), void 0)),
                    unit && unitPosition === "left" && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "absolute pointer-events-none", size: size === "md" ? "sm" : "xs", style: {
                            left: iconPosition,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }, tag: "span" }, { children: unit }), void 0))] }), void 0),
            error && (jsx_runtime_1.jsx(Red_1.TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map