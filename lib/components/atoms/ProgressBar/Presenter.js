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
var Presenter = function (_a) {
    var className = _a.className, progress = _a.progress, style = _a.style;
    return (jsx_runtime_1.jsx("div", __assign({ className: "w-full relative h-1 bg-gray-200 " + className, style: style }, { children: jsx_runtime_1.jsx("div", { className: "bg-purple absolute top-0 left-0 h-1 transition-all duration-500 ease-linear rounded-r", style: {
                width: progress + "%",
            } }, void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map