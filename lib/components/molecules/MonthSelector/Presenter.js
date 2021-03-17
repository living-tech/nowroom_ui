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
var Black_1 = require("../../atoms/Text/Black");
var Default_1 = require("../IconButton/Default");
var Presenter = function (_a) {
    var activeIndicatesPeriod = _a.activeIndicatesPeriod, className = _a.className, currentDate = _a.currentDate, onNextClick = _a.onNextClick, onPrevClick = _a.onPrevClick, style = _a.style;
    var dayFormat;
    if (activeIndicatesPeriod === "day") {
        dayFormat = "YYYY年M月";
    }
    else {
        dayFormat = "YYYY年";
    }
    return (jsx_runtime_1.jsxs("div", __assign({ className: "inline-flex items-center bg-gray-100 rounded-full px-2 " + className, style: __assign({ height: 36 }, style) }, { children: [jsx_runtime_1.jsx(Default_1.IconButton, { radius: true, color: "transparent", iconColor: "mediumGray02", iconName: "FiChevronLeft", onClick: onPrevClick, shadow: false, size: "sm" }, void 0),
            jsx_runtime_1.jsx(Black_1.TextBlack, __assign({ className: "ml-2", size: "sm", weight: "bold" }, { children: dayjs_1.default(currentDate).format(dayFormat) }), void 0),
            jsx_runtime_1.jsx(Default_1.IconButton, { radius: true, className: "ml-2", color: "transparent", iconColor: "mediumGray02", iconName: "FiChevronRight", onClick: onNextClick, shadow: false, size: "sm" }, void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map