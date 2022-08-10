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
var react_transition_group_1 = require("react-transition-group");
var Default_1 = require("../atoms/Icon/Default");
var DarkGray02_1 = require("../atoms/Text/DarkGray02");
var MediumGray02_1 = require("../atoms/Text/MediumGray02");
var Red_1 = require("../atoms/Text/Red");
var molecules_1 = require("../molecules");
var Transparent_1 = require("../molecules/IconButton/Transparent");
var InputDatePicker_module_scss_1 = __importDefault(require("./InputDatePicker.module.scss"));
react_datepicker_1.registerLocale("ja", ja_1.default);
var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, 
    // calendarPosition = "absoluteLeft",
    // calendarPositionSlide = 0,
    className = _a.className, error = _a.error, id = _a.id, label = _a.label, _c = _a.monthLabel, monthLabel = _c === void 0 ? "月" : _c, name = _a.name, onChange = _a.onChange, onClear = _a.onClear, placeholder = _a.placeholder, _d = _a.popperModifiers, popperModifiers = _d === void 0 ? {
        preventOverflow: {
            boundariesElement: "viewport",
            enabled: true,
        },
    } : _d, selectableFrom = _a.selectableFrom, selectableTo = _a.selectableTo, _e = _a.size, size = _e === void 0 ? "md" : _e, style = _a.style, value = _a.value, _f = _a.weight, weight = _f === void 0 ? "bold" : _f, _g = _a.yearLabel, yearLabel = _g === void 0 ? "年" : _g;
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
    var _h = react_1.useState(false), isShowCalendar = _h[0], setIsShowCalendar = _h[1];
    var handleDateChange = function (date) {
        setIsShowCalendar(false);
        if (!date) {
            return;
        }
        onChange && onChange(dayjs_1.default(date));
    };
    var isDaySelectable = function (day) {
        if (selectableFrom && day < selectableFrom) {
            return false;
        }
        if (selectableTo && selectableTo < day) {
            return false;
        }
        return true;
    };
    // const calendarPositionStyle = useMemo((): CSSProperties => {
    //   switch (calendarPosition) {
    //     case "absoluteLeft":
    //       return { left: `${String(calendarPositionSlide)}px`, position: "absolute", top: "106%" };
    //     case "absoluteRight":
    //       return { position: "absolute", right: `${String(calendarPositionSlide)}px`, top: "106%" };
    //   }
    // }, [calendarPosition, calendarPositionSlide]);
    return (jsx_runtime_1.jsxs("div", __assign({ className: "relative " + className, style: style }, { children: [jsx_runtime_1.jsxs("div", { children: [label && (jsx_runtime_1.jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (jsx_runtime_1.jsx(MediumGray02_1.TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
                    jsx_runtime_1.jsxs("div", __assign({ className: "relative" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "relative", onClick: function () { return setIsShowCalendar(true); } }, { children: [jsx_runtime_1.jsx("input", { disabled: true, className: inputBaseClass + " " + inputClass, id: id, name: name, placeholder: placeholder, value: (value === null || value === void 0 ? void 0 : value.format("YYYY/M/D")) || "" }, void 0),
                                    jsx_runtime_1.jsx(Default_1.Icon, { className: "absolute pointer-events-none", color: "purple", name: "FiCalendar", size: "md", style: {
                                            right: size === "md" ? "1rem" : "0.5rem",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        } }, void 0)] }), void 0),
                            onClear && value && (jsx_runtime_1.jsx(molecules_1.IconButtonGray, { radius: true, color: "mediumGray01", iconName: "FiX", onClick: onClear, shadow: false, size: "xs", style: {
                                    position: "absolute",
                                    right: size === "md" ? "3rem" : "2.5rem",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }, visualType: "outline" }, void 0))] }), void 0),
                    error && (jsx_runtime_1.jsx(Red_1.TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }, void 0),
            jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    enter: InputDatePicker_module_scss_1.default.CalendarEnter,
                    enterActive: InputDatePicker_module_scss_1.default.CalendarEnterActive,
                    exit: InputDatePicker_module_scss_1.default.CalendarExit,
                    exitActive: InputDatePicker_module_scss_1.default.CalendarExitActive,
                }, in: isShowCalendar, timeout: 400 }, { children: jsx_runtime_1.jsx(core_1.ClickAwayListener, __assign({ onClickAway: function () { return setIsShowCalendar(false); } }, { children: jsx_runtime_1.jsx("div", __assign({ className: "z-10 inline-block" }, { children: jsx_runtime_1.jsx(react_datepicker_1.default, { inline: true, filterDate: function (day) { return isDaySelectable(day); }, locale: "ja", onChange: handleDateChange, popperModifiers: popperModifiers, renderCustomHeader: function (_a) {
                                var date = _a.date, decreaseMonth = _a.decreaseMonth, increaseMonth = _a.increaseMonth, nextMonthButtonDisabled = _a.nextMonthButtonDisabled, prevMonthButtonDisabled = _a.prevMonthButtonDisabled;
                                return (jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center justify-between px-3" }, { children: [jsx_runtime_1.jsx(Transparent_1.IconButtonTransparent, { radius: true, disabled: prevMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronLeft", onClick: decreaseMonth }, void 0),
                                        jsx_runtime_1.jsxs(DarkGray02_1.TextDarkGray02, __assign({ className: "leading-none", weight: "bold" }, { children: [getYear_1.default(date), yearLabel, getMonth_1.default(date) + 1, monthLabel] }), void 0),
                                        jsx_runtime_1.jsx(Transparent_1.IconButtonTransparent, { radius: true, disabled: nextMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronRight", onClick: increaseMonth }, void 0)] }), void 0));
                            }, selected: value === null || value === void 0 ? void 0 : value.toDate() }, void 0) }), void 0) }), void 0) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map