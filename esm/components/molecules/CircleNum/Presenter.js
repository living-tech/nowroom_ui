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
import { TextWhite } from "../../atoms/Text/White";
export var Presenter = function (_a) {
    var active = _a.active, _b = _a.activeColor, activeColor = _b === void 0 ? "purple" : _b, className = _a.className, num = _a.num, style = _a.style;
    var colorClass = "bg-gray-300";
    if (active) {
        colorClass = "bg-" + activeColor;
    }
    return (_jsx("div", __assign({ className: "transition-colors duration-200 ease-out flex items-center justify-center inline-block w-6 h-6 rounded-full " + colorClass + " " + className, style: style }, { children: _jsx(TextWhite, __assign({ className: "leading-none", size: "xs", weight: "bold" }, { children: String(num) }), void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map