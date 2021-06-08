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
import dayjs from "dayjs";
import { TextBlack } from "../../atoms/Text/Black";
import { IconButton } from "../IconButton/Default";
export var Presenter = function (_a) {
    var activeIndicatesPeriod = _a.activeIndicatesPeriod, className = _a.className, currentDate = _a.currentDate, onNextClick = _a.onNextClick, onPrevClick = _a.onPrevClick, style = _a.style;
    var dayFormat;
    if (activeIndicatesPeriod === "day") {
        dayFormat = "YYYY年M月";
    }
    else {
        dayFormat = "YYYY年";
    }
    return (_jsxs("div", __assign({ className: "inline-flex items-center bg-gray-100 rounded-full px-2 " + className, style: __assign({ height: 36 }, style) }, { children: [_jsx(IconButton, { radius: true, color: "transparent", iconColor: "mediumGray02", iconName: "FiChevronLeft", onClick: onPrevClick, shadow: false, size: "sm" }, void 0),
            _jsx(TextBlack, __assign({ className: "ml-2", size: "sm", weight: "bold" }, { children: dayjs(currentDate).format(dayFormat) }), void 0),
            _jsx(IconButton, { radius: true, className: "ml-2", color: "transparent", iconColor: "mediumGray02", iconName: "FiChevronRight", onClick: onNextClick, shadow: false, size: "sm" }, void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map