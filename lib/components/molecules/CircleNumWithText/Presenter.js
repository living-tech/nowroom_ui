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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Default_1 = require("../../atoms/Text/Default");
var Default_2 = require("../CircleNum/Default");
var Presenter = function (_a) {
    var active = _a.active, className = _a.className, id = _a.id, item = _a.item, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, style = _a.style;
    var colorClass = "text-gray-500";
    if (active) {
        colorClass = "text-purple";
    }
    return (jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center px-5 inline-block cursor-pointer " + className, id: id, onClick: function () { return onClick && onClick(item.num); }, onMouseEnter: function () { return onMouseEnter && onMouseEnter(item.num); }, onMouseLeave: onMouseLeave, style: style }, { children: [jsx_runtime_1.jsx(Default_2.CircleNum, { active: active, num: item.num }, void 0),
            jsx_runtime_1.jsx(Default_1.Text, __assign({ className: "ml-3 relative " + colorClass, size: "sm", style: { top: 1 }, weight: "bold" }, { children: item.label }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map