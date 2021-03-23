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
var Default_1 = require("../../atoms/Text/Default");
exports.Presenter = react_1.forwardRef(function (_a, ref) {
    var className = _a.className, items = _a.items, onClick = _a.onClick, style = _a.style, props = __rest(_a, ["className", "items", "onClick", "style"]);
    return (jsx_runtime_1.jsx("div", __assign({ ref: ref, className: "inline-flex flex-col py-1 bg-white rounded shadow " + className, style: style }, props, { children: items.map(function (item) { return (jsx_runtime_1.jsx("div", __assign({ className: "inline-block px-5 py-3 border-gray-100 rounded-t cursor-pointer hover:bg-purple-100 last:border-transparent transition-colors duration-200 ease-out", onClick: function () { return onClick && onClick(item); } }, { children: jsx_runtime_1.jsx(Default_1.Text, __assign({ color: item.color || "black", size: "xs", tag: "span" }, { children: item.label }), void 0) }), item.value)); }) }), void 0));
});
//# sourceMappingURL=Presenter.js.map