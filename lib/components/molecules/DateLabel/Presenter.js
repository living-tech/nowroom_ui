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
var ja_1 = require("dayjs/locale/ja");
var DarkGray01_1 = require("../../atoms/Text/DarkGray01");
var Presenter = function (_a) {
    var className = _a.className, date = _a.date, style = _a.style;
    return (jsx_runtime_1.jsx("span", __assign({ className: "bg-gray-200 px-3 py-2 rounded-full inline-flex items-center " + className, style: style }, { children: jsx_runtime_1.jsx(DarkGray01_1.TextDarkGray01, __assign({ className: "leading-none", size: "xs", tag: "span", weight: "bold" }, { children: date.format("M/D") + "(" + (ja_1.weekdaysShort ? ja_1.weekdaysShort[date.day()] : "") + ")" }), void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map