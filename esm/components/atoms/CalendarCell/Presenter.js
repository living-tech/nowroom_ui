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
export var Presenter = function (_a) {
    var activeIndicatesPeriod = _a.activeIndicatesPeriod, className = _a.className, disabled = _a.disabled, onClick = _a.onClick, style = _a.style;
    var baseClass = "transition-colors duration-200 ease-out hover:bg-purple-100 cursor-pointer";
    var backgroundColorClass = "bg-white";
    if (disabled) {
        backgroundColorClass = "bg-gray-300";
    }
    return (_jsx("div", { className: baseClass + " " + backgroundColorClass + " " + className, onClick: onClick, style: __assign({ height: 59, width: activeIndicatesPeriod === "day" ? 36 : 44 }, style) }, void 0));
};
//# sourceMappingURL=Presenter.js.map