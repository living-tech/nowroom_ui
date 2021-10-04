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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ClickAwayListener } from "@material-ui/core";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import ja from "date-fns/locale/ja";
import dayjs from "dayjs";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { CSSTransition } from "react-transition-group";
import { Icon } from "../atoms/Icon/Default";
import { TextDarkGray02 } from "../atoms/Text/DarkGray02";
import { TextMediumGray02 } from "../atoms/Text/MediumGray02";
import { TextRed } from "../atoms/Text/Red";
import { IconButtonTransparent } from "../molecules/IconButton/Transparent";
import styles from "./InputDatePicker.module.scss";
registerLocale("ja", ja);
export var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, className = _a.className, error = _a.error, id = _a.id, label = _a.label, _c = _a.monthLabel, monthLabel = _c === void 0 ? "月" : _c, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, _d = _a.size, size = _d === void 0 ? "md" : _d, style = _a.style, value = _a.value, _e = _a.weight, weight = _e === void 0 ? "bold" : _e, _f = _a.yearLabel, yearLabel = _f === void 0 ? "年" : _f;
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
    var _g = useState(false), isShowCalendar = _g[0], setIsShowCalendar = _g[1];
    var handleDateChange = function (date) {
        setIsShowCalendar(false);
        if (!date) {
            return;
        }
        onChange && onChange(dayjs(date));
    };
    return (_jsxs("div", __assign({ className: "relative " + className, style: style }, { children: [_jsxs("div", { children: [label && (_jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (_jsx(TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
                    _jsxs("div", __assign({ className: "relative", onClick: function () { return setIsShowCalendar(true); } }, { children: [_jsx("input", { disabled: true, className: inputBaseClass + " " + inputClass, id: id, name: name, placeholder: placeholder, value: value === null || value === void 0 ? void 0 : value.format("YYYY/M/D") }, void 0),
                            _jsx(Icon, { className: "absolute pointer-events-none", color: "purple", name: "FiCalendar", size: "md", style: {
                                    right: size === "md" ? "1rem" : "0.5rem",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                } }, void 0)] }), void 0),
                    error && (_jsx(TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }, void 0),
            _jsx(CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    enter: styles.CalendarEnter,
                    enterActive: styles.CalendarEnterActive,
                    exit: styles.CalendarExit,
                    exitActive: styles.CalendarExitActive,
                }, in: isShowCalendar, timeout: 400 }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return setIsShowCalendar(false); } }, { children: _jsx("div", __assign({ className: "absolute left-0 z-10 inline-block", style: { top: "106%" } }, { children: _jsx(DatePicker, { inline: true, locale: "ja", onChange: handleDateChange, renderCustomHeader: function (_a) {
                                var date = _a.date, decreaseMonth = _a.decreaseMonth, increaseMonth = _a.increaseMonth, nextMonthButtonDisabled = _a.nextMonthButtonDisabled, prevMonthButtonDisabled = _a.prevMonthButtonDisabled;
                                return (_jsxs("div", __assign({ className: "flex items-center justify-between px-3" }, { children: [_jsx(IconButtonTransparent, { radius: true, disabled: prevMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronLeft", onClick: decreaseMonth }, void 0),
                                        _jsxs(TextDarkGray02, __assign({ className: "leading-none", weight: "bold" }, { children: [getYear(date), yearLabel, getMonth(date) + 1, monthLabel] }), void 0),
                                        _jsx(IconButtonTransparent, { radius: true, disabled: nextMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronRight", onClick: increaseMonth }, void 0)] }), void 0));
                            }, selected: value === null || value === void 0 ? void 0 : value.toDate() }, void 0) }), void 0) }), void 0) }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map