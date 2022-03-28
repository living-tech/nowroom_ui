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
var Default_1 = require("../Text/Default");
var Red_1 = require("../Text/Red");
var Presenter = function (_a) {
    var _b = _a.checked, defaultChecked = _b === void 0 ? false : _b, className = _a.className, createRef = _a.createRef, error = _a.error, forceChecked = _a.forceChecked, item = _a.item, labelColor = _a.labelColor, labelSize = _a.labelSize, labelStyle = _a.labelStyle, labelWeight = _a.labelWeight, name = _a.name, onChange = _a.onChange, style = _a.style, props = __rest(_a, ["checked", "className", "createRef", "error", "forceChecked", "item", "labelColor", "labelSize", "labelStyle", "labelWeight", "name", "onChange", "style"]);
    var _c = react_1.useState(defaultChecked), checked = _c[0], setChecked = _c[1];
    var handleChange = function (event) {
        if (typeof forceChecked === "undefined") {
            setChecked(!checked);
        }
        onChange && onChange(event);
    };
    react_1.useEffect(function () {
        if (typeof forceChecked !== "undefined") {
            if (forceChecked && !checked) {
                setChecked(true);
            }
            if (!forceChecked && checked) {
                setChecked(false);
            }
        }
    }, [forceChecked]);
    var inputClass = "";
    if (error) {
        inputClass =
            "w-5 h-5 bg-gray-100 border border-red appearance-none cursor-pointer form-tick bg-check checked:bg-purple checked:border-transparent focus:outline-none transition duration-200 ease-out rounded-sm";
    }
    else {
        inputClass =
            "w-5 h-5 bg-gray-100 border border-gray-200 appearance-none cursor-pointer form-tick bg-check checked:bg-purple checked:border-transparent focus:outline-none transition duration-200 ease-out rounded-sm";
    }
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("label", __assign({ className: "inline-flex items-center cursor-pointer " + className, style: style }, props, { children: [jsx_runtime_1.jsx("input", { ref: createRef, checked: checked, className: inputClass, name: name, onChange: handleChange, style: {
                            backgroundImage: checked
                                ? "url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M21.9206%207.07121C21.5301%206.68069%2020.8969%206.68069%2020.5064%207.07121L8.48554%2019.092L2.82854%2013.435C2.43801%2013.0445%201.80485%2013.0445%201.41432%2013.435L0.707216%2014.1421C0.316692%2014.5327%200.316692%2015.1658%200.707216%2015.5564L7.77828%2022.6274C7.78443%2022.6336%207.79065%2022.6396%207.79692%2022.6456C7.83114%2022.6781%207.86709%2022.7077%207.90447%2022.7345C8.29511%2023.0141%208.84181%2022.9784%209.19266%2022.6276L22.6277%209.19253C23.0182%208.80201%2023.0182%208.16884%2022.6277%207.77832L21.9206%207.07121Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E')"
                                : "",
                            backgroundPosition: "center 1px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "12px 12px",
                        }, type: "checkbox", value: item.value }, void 0),
                    item.label && (jsx_runtime_1.jsx(Default_1.Text, __assign({ className: "leading-none ml-3 relative", color: labelColor, size: labelSize, style: __assign({ top: 1 }, labelStyle), weight: labelWeight }, { children: item.label }), void 0))] }), void 0),
            error && (jsx_runtime_1.jsx(Red_1.TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }, void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map