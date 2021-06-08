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
import { jsx as _jsx } from "react/jsx-runtime";
import { weekdaysShort as weekdays } from "dayjs/locale/ja";
import { TextDarkGray01 } from "../../atoms/Text/DarkGray01";
export var Presenter = function (_a) {
    var className = _a.className, date = _a.date, style = _a.style;
    return (_jsx("span", __assign({ className: "bg-gray-200 px-3 py-2 rounded-full inline-flex items-center " + className, style: style }, { children: _jsx(TextDarkGray01, __assign({ className: "leading-none", size: "xs", tag: "span", weight: "bold" }, { children: date.format("M/D") + "(" + (weekdays ? weekdays[date.day()] : "") + ")" }), void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map