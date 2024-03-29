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
import { Icon } from "../Icon/Default";
import { TextMediumGray02 } from "../Text/MediumGray02";
import { TextRed } from "../Text/Red";
export var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, autocomplete = _a.autocomplete, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.color, color = _d === void 0 ? "gray" : _d, createRef = _a.createRef, defaultValue = _a.defaultValue, _e = _a.disabled, disabled = _e === void 0 ? false : _e, error = _a.error, iconName = _a.iconName, id = _a.id, _f = _a.inputClassName, inputClassName = _f === void 0 ? "" : _f, inputMode = _a.inputMode, inputStyle = _a.inputStyle, label = _a.label, list = _a.list, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyPress = _a.onKeyPress, placeholder = _a.placeholder, _g = _a.readOnly, readOnly = _g === void 0 ? false : _g, renderDescription = _a.renderDescription, require = _a.require, _h = _a.requireLabel, requireLabel = _h === void 0 ? "必須" : _h, _j = _a.size, size = _j === void 0 ? "md" : _j, style = _a.style, _k = _a.type, type = _k === void 0 ? "text" : _k, unit = _a.unit, _l = _a.unitPosition, unitPosition = _l === void 0 ? "right" : _l, value = _a.value, _m = _a.weight, weight = _m === void 0 ? "bold" : _m, props = __rest(_a, ["any", "anyLabel", "autocomplete", "className", "color", "createRef", "defaultValue", "disabled", "error", "iconName", "id", "inputClassName", "inputMode", "inputStyle", "label", "list", "name", "onBlur", "onChange", "onFocus", "onKeyPress", "placeholder", "readOnly", "renderDescription", "require", "requireLabel", "size", "style", "type", "unit", "unitPosition", "value", "weight"]);
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
            if (unit && iconName) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-3 pl-9 pb-3 pr-" + (unit.length * 4 + 3)
                        : " pt-3 pr-9 pb-3 pl-" + (unit.length * 4 + 3);
            }
            else if (unit) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-3 pl-3 pb-3 pr-" + (unit.length * 4 + 3)
                        : " pt-3 pr-3 pb-3 pl-" + (unit.length * 4 + 3);
            }
            else if (iconName) {
                inputClass += " pt-3 pl-9 pb-3 pr-3";
            }
            else {
                inputClass += " p-3";
            }
            break;
        case "xs":
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
        case "xxs":
            if (unit && iconName) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-1 pl-6 pb-1 pr-" + (unit.length * 4 + 1)
                        : " pt-1 pr-6 pb-1 pl-" + (unit.length * 4 + 1);
            }
            else if (unit) {
                inputClass +=
                    unitPosition === "right"
                        ? " pt-1 pl-1 pb-1 pr-" + (unit.length * 4 + 1)
                        : " pt-1 pr-1 pb-1 pl-" + (unit.length * 4 + 1);
            }
            else if (iconName) {
                inputClass += " pt-1 pl-6 pb-1 pr-1";
            }
            else {
                inputClass += " px-1 py-1.5";
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
        case "xxs":
            iconPosition = "0.25rem";
            break;
        default:
            iconPosition = "1rem";
    }
    return (_jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (_jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (_jsx(TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0)),
                    require && (_jsx(TextRed, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: requireLabel }), void 0))] }), void 0)),
            renderDescription && _jsx("div", __assign({ className: "mb-3" }, { children: renderDescription() }), void 0),
            _jsxs("div", __assign({ className: "relative" }, { children: [iconName && (_jsx(Icon, { className: "absolute pointer-events-none", color: color === "white" ? "darkGray02" : "black", name: iconName, size: size === "md" ? "md" : "sm", style: {
                            left: iconPosition,
                            top: "50%",
                            transform: "translateY(-50%)",
                        } }, void 0)),
                    _jsx("input", { ref: createRef, autoComplete: autocomplete, className: inputBaseClass + " " + inputClass + " " + roundedClass + " " + inputBackgroundColorClass + " " + inputClassName + " disabled:opacity-40 disabled:cursor-not-allowed read-only:opacity-40", defaultValue: defaultValue, disabled: disabled, id: id, inputMode: inputMode, list: list, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, onKeyPress: onKeyPress, placeholder: placeholder, readOnly: readOnly, style: inputStyle, type: type, value: value }, void 0),
                    unit && unitPosition === "right" && (_jsx(TextMediumGray02, __assign({ className: "absolute pointer-events-none", size: size === "md" ? "sm" : "xs", style: {
                            right: iconPosition,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }, tag: "span" }, { children: unit }), void 0)),
                    unit && unitPosition === "left" && (_jsx(TextMediumGray02, __assign({ className: "absolute pointer-events-none", size: size === "md" ? "sm" : "xs", style: {
                            left: iconPosition,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }, tag: "span" }, { children: unit }), void 0))] }), void 0),
            error && (_jsx(TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map