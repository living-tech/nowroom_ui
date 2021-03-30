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
var Default_1 = require("../../atoms/InputRadio/Default");
var MediumGray02_1 = require("../../atoms/Text/MediumGray02");
var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, className = _a.className, _c = _a.columns, columns = _c === void 0 ? 2 : _c, createRef = _a.createRef, id = _a.id, items = _a.items, label = _a.label, name = _a.name, onChange = _a.onChange, style = _a.style, props = __rest(_a, ["any", "anyLabel", "className", "columns", "createRef", "id", "items", "label", "name", "onChange", "style"]);
    return (jsx_runtime_1.jsxs("div", __assign({ className: "" + className, id: id, style: style }, props, { children: [label && (jsx_runtime_1.jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700" }, { children: [label, any && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
            jsx_runtime_1.jsx("div", __assign({ className: "grid grid-cols-" + columns + " gap-6" }, { children: items.map(function (item) { return (jsx_runtime_1.jsx(Default_1.InputRadio, { createRef: createRef, item: item, name: name, onChange: onChange }, "radio-" + item.value)); }) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map