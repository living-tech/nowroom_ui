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
var MediumGray02_1 = require("../Text/MediumGray02");
var Red_1 = require("../Text/Red");
var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, className = _a.className, createRef = _a.createRef, defaultValue = _a.defaultValue, error = _a.error, id = _a.id, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, renderDescription = _a.renderDescription, _c = _a.resize, resize = _c === void 0 ? false : _c, rows = _a.rows, style = _a.style, value = _a.value, _d = _a.weight, weight = _d === void 0 ? "bold" : _d, props = __rest(_a, ["any", "anyLabel", "className", "createRef", "defaultValue", "error", "id", "label", "name", "onChange", "placeholder", "renderDescription", "resize", "rows", "style", "value", "weight"]);
    var inputBaseClass = "bg-gray-100 border block w-full rounded-md p-4 placeholder-gray-400";
    var inputClass = "";
    if (error) {
        inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
    }
    else {
        inputClass = "border-gray-200 focus:ring-purple-500 focus:border-purple-500";
    }
    var inputResizeClass = "";
    if (resize) {
        inputResizeClass = "resize";
    }
    else {
        inputResizeClass = "resize-none";
    }
    switch (weight) {
        case "bold":
            inputClass += " font-bold";
            break;
        case "normal":
            inputClass += " font-medium";
            break;
    }
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (jsx_runtime_1.jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
            renderDescription && jsx_runtime_1.jsx("div", __assign({ className: "mb-3" }, { children: renderDescription() }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "relative" }, { children: jsx_runtime_1.jsx("textarea", { ref: createRef, className: inputBaseClass + " " + inputClass + " " + inputResizeClass, defaultValue: defaultValue, id: id, name: name, onChange: onChange, placeholder: placeholder, rows: rows, value: value }, void 0) }), void 0),
            error && (jsx_runtime_1.jsx(Red_1.TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map