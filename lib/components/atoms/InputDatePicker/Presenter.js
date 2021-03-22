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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var core_1 = require("@material-ui/core");
var getMonth_1 = __importDefault(require("date-fns/getMonth"));
var getYear_1 = __importDefault(require("date-fns/getYear"));
var ja_1 = __importDefault(require("date-fns/locale/ja"));
var dayjs_1 = __importDefault(require("dayjs"));
var react_1 = require("react");
var react_datepicker_1 = __importStar(require("react-datepicker"));
var react_i18next_1 = require("react-i18next");
var react_transition_group_1 = require("react-transition-group");
var Transparent_1 = require("../../molecules/IconButton/Transparent");
var Default_1 = require("../Icon/Default");
var DarkGray02_1 = require("../Text/DarkGray02");
var MediumGray02_1 = require("../Text/MediumGray02");
var Red_1 = require("../Text/Red");
var InputDatePicker_module_css_1 = __importDefault(require("./InputDatePicker.module.css"));
react_datepicker_1.registerLocale("ja", ja_1.default);
var Presenter = function (_a) {
    var any = _a.any, className = _a.className, error = _a.error, id = _a.id, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, _b = _a.size, size = _b === void 0 ? "md" : _b, style = _a.style, value = _a.value, _c = _a.weight, weight = _c === void 0 ? "bold" : _c;
    var t = react_i18next_1.useTranslation().t;
    var inputBaseClass = "inline-block bg-gray-100 border w-full rounded-md cursor-pointer";
    var inputClass = "";
    if (error) {
        inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
    }
    else {
        inputClass = "border-gray-200 focus:ring-purple-500 focus:border-purple-500";
    }
    switch (size) {
        case "md":
            inputClass += " p-4 pr-12";
            break;
        case "sm":
            inputClass += " text-sm";
            inputClass += " p-3 pr-7";
            break;
    }
    switch (weight) {
        case "bold":
            inputClass += " font-bold";
            break;
        case "normal":
            inputClass += " font-medium";
            break;
    }
    var _d = react_1.useState(false), isShowCalendar = _d[0], setIsShowCalendar = _d[1];
    var handleDateChange = function (date) {
        setIsShowCalendar(false);
        if (!date) {
            return;
        }
        onChange && onChange(dayjs_1.default(date));
    };
    return (jsx_runtime_1.jsxs("div", __assign({ className: "relative " + className, style: style }, { children: [jsx_runtime_1.jsxs("div", { children: [label && (jsx_runtime_1.jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: t("任意") }), void 0))] }), void 0)),
                    jsx_runtime_1.jsxs("div", __assign({ className: "relative", onClick: function () { return setIsShowCalendar(true); } }, { children: [jsx_runtime_1.jsx("input", { disabled: true, className: inputBaseClass + " " + inputClass, id: id, name: name, placeholder: placeholder, value: value === null || value === void 0 ? void 0 : value.format("YYYY/M/D") }, void 0),
                            jsx_runtime_1.jsx(Default_1.Icon, { className: "absolute pointer-events-none", color: "purple", name: "FiCalendar", size: "md", style: {
                                    right: size === "md" ? "1rem" : "0.5rem",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                } }, void 0)] }), void 0),
                    error && (jsx_runtime_1.jsx(Red_1.TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }, void 0),
            jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    enter: InputDatePicker_module_css_1.default.CalendarEnter,
                    enterActive: InputDatePicker_module_css_1.default.CalendarEnterActive,
                    exit: InputDatePicker_module_css_1.default.CalendarExit,
                    exitActive: InputDatePicker_module_css_1.default.CalendarExitActive,
                }, in: isShowCalendar, timeout: 400 }, { children: jsx_runtime_1.jsx(core_1.ClickAwayListener, __assign({ onClickAway: function () { return setIsShowCalendar(false); } }, { children: jsx_runtime_1.jsx("div", __assign({ className: "absolute left-0 z-10 inline-block", style: { top: "106%" } }, { children: jsx_runtime_1.jsx(react_datepicker_1.default, { inline: true, locale: "ja", onChange: handleDateChange, renderCustomHeader: function (_a) {
                                var date = _a.date, decreaseMonth = _a.decreaseMonth, increaseMonth = _a.increaseMonth, nextMonthButtonDisabled = _a.nextMonthButtonDisabled, prevMonthButtonDisabled = _a.prevMonthButtonDisabled;
                                return (jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center justify-between px-3" }, { children: [jsx_runtime_1.jsx(Transparent_1.IconButtonTransparent, { radius: true, disabled: prevMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronLeft", onClick: decreaseMonth }, void 0),
                                        jsx_runtime_1.jsxs(DarkGray02_1.TextDarkGray02, __assign({ className: "leading-none", weight: "bold" }, { children: [getYear_1.default(date), t("年"), getMonth_1.default(date) + 1, t("月")] }), void 0),
                                        jsx_runtime_1.jsx(Transparent_1.IconButtonTransparent, { radius: true, disabled: nextMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronRight", onClick: increaseMonth }, void 0)] }), void 0));
                            }, selected: value === null || value === void 0 ? void 0 : value.toDate() }, void 0) }), void 0) }), void 0) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map