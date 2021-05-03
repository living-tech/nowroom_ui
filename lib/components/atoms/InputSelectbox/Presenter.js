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
var Purple_1 = require("../Icon/Purple");
var MediumGray02_1 = require("../Text/MediumGray02");
var Presenter = function (_a) {
    var _b;
    var any = _a.any, _c = _a.anyLabel, anyLabel = _c === void 0 ? "任意" : _c, block = _a.block, className = _a.className, createRef = _a.createRef, defaultValue = _a.defaultValue, _d = _a.disabledPlaceholder, disabledPlaceholder = _d === void 0 ? false : _d, id = _a.id, items = _a.items, label = _a.label, name = _a.name, onChange = _a.onChange, _e = _a.placeholder, placeholder = _e === void 0 ? "選択してください" : _e, _f = _a.size, size = _f === void 0 ? "md" : _f, style = _a.style, value = _a.value, props = __rest(_a, ["any", "anyLabel", "block", "className", "createRef", "defaultValue", "disabledPlaceholder", "id", "items", "label", "name", "onChange", "placeholder", "size", "style", "value"]);
    var _g = react_1.useState((_b = value !== null && value !== void 0 ? value : defaultValue) !== null && _b !== void 0 ? _b : ""), selectedValue = _g[0], setSelectedValue = _g[1];
    var widthClass = "";
    if (block) {
        widthClass = "w-full";
    }
    var sizeClass = "";
    var iconPositionClass = "";
    switch (size) {
        case "md":
            sizeClass = "p-4 pr-12 text-base";
            iconPositionClass = "right-4";
            break;
        case "sm":
            sizeClass = "p-3 pr-10 text-base";
            iconPositionClass = "right-3";
            break;
        case "xs":
            sizeClass = "p-2 pr-7 text-base";
            iconPositionClass = "right-2";
            break;
    }
    var colorClass = "";
    if (!selectedValue) {
        colorClass = "text-gray-400";
    }
    var handleChange = function (event) {
        onChange && onChange(event);
        setSelectedValue(event.target.value);
    };
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (jsx_runtime_1.jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
            jsx_runtime_1.jsxs("div", __assign({ className: "relative block " + widthClass }, { children: [jsx_runtime_1.jsxs("select", __assign({ ref: createRef, className: "w-full cursor-pointer whitespace-nowrap block border font-bold border-gray-200 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 " + colorClass + " " + sizeClass + " " + widthClass, defaultValue: defaultValue, id: id, name: name, onChange: handleChange, value: value }, { children: [!disabledPlaceholder && jsx_runtime_1.jsx("option", __assign({ value: "" }, { children: placeholder }), void 0),
                            items.map(function (item) {
                                var _a;
                                return (jsx_runtime_1.jsx("option", __assign({ value: item.value }, { children: item.label }), "selectbox-" + ((_a = item.key) !== null && _a !== void 0 ? _a : item.value)));
                            })] }), void 0),
                    jsx_runtime_1.jsx(Purple_1.IconPurple, { className: "top-1/2 absolute transform -translate-y-1/2 pointer-events-none " + iconPositionClass, name: "FiChevronDown", size: "sm" }, void 0)] }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map