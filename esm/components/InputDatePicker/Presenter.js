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
import { useMemo, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { CSSTransition } from "react-transition-group";
import { Icon } from "../atoms/Icon/Default";
import { TextDarkGray02 } from "../atoms/Text/DarkGray02";
import { TextMediumGray02 } from "../atoms/Text/MediumGray02";
import { TextRed } from "../atoms/Text/Red";
import { IconButtonGray } from "../molecules";
import { IconButtonTransparent } from "../molecules/IconButton/Transparent";
import styles from "./InputDatePicker.module.scss";
registerLocale("ja", ja);
export var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, _c = _a.calendarPosition, calendarPosition = _c === void 0 ? "absoluteLeft" : _c, _d = _a.calendarPositionSlide, calendarPositionSlide = _d === void 0 ? 0 : _d, className = _a.className, error = _a.error, id = _a.id, label = _a.label, _e = _a.monthLabel, monthLabel = _e === void 0 ? "月" : _e, name = _a.name, onChange = _a.onChange, onClear = _a.onClear, placeholder = _a.placeholder, selectableFrom = _a.selectableFrom, selectableTo = _a.selectableTo, _f = _a.size, size = _f === void 0 ? "md" : _f, style = _a.style, value = _a.value, _g = _a.weight, weight = _g === void 0 ? "bold" : _g, _h = _a.yearLabel, yearLabel = _h === void 0 ? "年" : _h;
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
    var _j = useState(false), isShowCalendar = _j[0], setIsShowCalendar = _j[1];
    var handleDateChange = function (date) {
        setIsShowCalendar(false);
        if (!date) {
            return;
        }
        onChange && onChange(dayjs(date));
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
    var calendarPositionStyle = useMemo(function () {
        switch (calendarPosition) {
            case "absoluteLeft":
                return { left: String(calendarPositionSlide) + "px", position: "absolute", top: "106%" };
            case "absoluteRight":
                return { position: "absolute", right: String(calendarPositionSlide) + "px", top: "106%" };
        }
    }, [calendarPosition, calendarPositionSlide]);
    console.log(calendarPositionStyle);
    return (_jsxs("div", __assign({ className: "relative " + className, style: style }, { children: [_jsxs("div", { children: [label && (_jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (_jsx(TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
                    _jsxs("div", __assign({ className: "relative" }, { children: [_jsxs("div", __assign({ className: "relative", onClick: function () { return setIsShowCalendar(true); } }, { children: [_jsx("input", { disabled: true, className: inputBaseClass + " " + inputClass, id: id, name: name, placeholder: placeholder, value: (value === null || value === void 0 ? void 0 : value.format("YYYY/M/D")) || "" }, void 0),
                                    _jsx(Icon, { className: "absolute pointer-events-none", color: "purple", name: "FiCalendar", size: "md", style: {
                                            right: size === "md" ? "1rem" : "0.5rem",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        } }, void 0)] }), void 0),
                            onClear && value && (_jsx(IconButtonGray, { radius: true, color: "mediumGray01", iconName: "FiX", onClick: onClear, shadow: false, size: "xs", style: {
                                    position: "absolute",
                                    right: size === "md" ? "3rem" : "2.5rem",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }, visualType: "outline" }, void 0))] }), void 0),
                    error && (_jsx(TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }, void 0),
            _jsx(CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    enter: styles.CalendarEnter,
                    enterActive: styles.CalendarEnterActive,
                    exit: styles.CalendarExit,
                    exitActive: styles.CalendarExitActive,
                }, in: isShowCalendar, timeout: 400 }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return setIsShowCalendar(false); } }, { children: _jsx("div", __assign({ className: "z-10 inline-block", style: calendarPositionStyle }, { children: _jsx(DatePicker, { inline: true, filterDate: function (day) { return isDaySelectable(day); }, locale: "ja", onChange: handleDateChange, renderCustomHeader: function (_a) {
                                var date = _a.date, decreaseMonth = _a.decreaseMonth, increaseMonth = _a.increaseMonth, nextMonthButtonDisabled = _a.nextMonthButtonDisabled, prevMonthButtonDisabled = _a.prevMonthButtonDisabled;
                                return (_jsxs("div", __assign({ className: "flex items-center justify-between px-3" }, { children: [_jsx(IconButtonTransparent, { radius: true, disabled: prevMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronLeft", onClick: decreaseMonth }, void 0),
                                        _jsxs(TextDarkGray02, __assign({ className: "leading-none", weight: "bold" }, { children: [getYear(date), yearLabel, getMonth(date) + 1, monthLabel] }), void 0),
                                        _jsx(IconButtonTransparent, { radius: true, disabled: nextMonthButtonDisabled, iconColor: "darkGray02", iconName: "FiChevronRight", onClick: increaseMonth }, void 0)] }), void 0));
                            }, selected: value === null || value === void 0 ? void 0 : value.toDate() }, void 0) }), void 0) }), void 0) }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map