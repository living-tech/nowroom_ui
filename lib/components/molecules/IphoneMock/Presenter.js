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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var constnats_1 = require("../../../constnats");
var Black_1 = require("../../atoms/Text/Black");
var Presenter = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-col rounded-4xl relative overflow-x-hidden border-4 border-black " + className, style: __assign({ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(30, 29, 37, 0.08)", height: constnats_1.iPhoneMockHeight, width: constnats_1.iPhoneMockWidth }, style) }, { children: [jsx_runtime_1.jsx("span", { className: "left-1/2 rounded-b-xl absolute top-0 inline-block transform -translate-x-1/2 bg-black", style: {
                    height: 20,
                    width: 180,
                } }, void 0),
            jsx_runtime_1.jsx("span", { className: "left-1/2 rounded-xl absolute inline-block transform -translate-x-1/2 bg-gray-700", style: {
                    height: 4,
                    top: 8,
                    width: 50,
                } }, void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "pt-1 pb-2 pl-5" }, { children: jsx_runtime_1.jsx(Black_1.TextBlack, __assign({ size: "xs", weight: "bold" }, { children: dayjs_1.default(new Date()).format("H:mm") }), void 0) }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "flex-grow overflow-y-scroll" }, { children: children }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map