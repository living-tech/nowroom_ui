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
exports.Presenter = react_1.forwardRef(function (_a, ref) {
    var active = _a.active, id = _a.id, index = _a.index, label = _a.label, onClick = _a.onClick, onTabMouseEnter = _a.onTabMouseEnter, onTabMouseLeave = _a.onTabMouseLeave, style = _a.style, props = __rest(_a, ["active", "id", "index", "label", "onClick", "onTabMouseEnter", "onTabMouseLeave", "style"]);
    var textColorClass = "";
    if (active) {
        textColorClass = "text-purple";
    }
    return (jsx_runtime_1.jsx("li", __assign({ ref: ref, className: "relative inline-block w-full pt-4 pl-2 pr-2 text-center list-none border-b border-gray-200 cursor-pointer hover:bg-purple-100 pb-3.5 transition duration-200 ease-out", id: id, onClick: function () { return onClick && onClick(index); }, onMouseEnter: function () { return onTabMouseEnter(index); }, onMouseLeave: onTabMouseLeave, style: style }, props, { children: jsx_runtime_1.jsx(Default_1.Text, __assign({ className: "transition duration-200 ease-out " + textColorClass, size: "xs", weight: "bold" }, { children: label }), void 0) }), void 0));
});
//# sourceMappingURL=Presenter.js.map