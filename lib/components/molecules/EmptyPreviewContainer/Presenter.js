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
var LightGray02_1 = require("../../atoms/Text/LightGray02");
var Presenter = function (_a) {
    var className = _a.className, label = _a.label, style = _a.style;
    return (jsx_runtime_1.jsx("div", __assign({ className: "border border-gray-200 px-4 py-6 rounded " + className, style: style }, { children: jsx_runtime_1.jsx(LightGray02_1.TextLightGray02, __assign({ className: "text-center", size: "xs", weight: "bold" }, { children: label }), void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map