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
    var _b = _a.align, align = _b === void 0 ? "middle" : _b, children = _a.children, className = _a.className, _c = _a.isShowBorderBottom, isShowBorderBottom = _c === void 0 ? true : _c, style = _a.style;
    var borderClass = "";
    if (isShowBorderBottom) {
        borderClass = "border-b";
    }
    return (_jsx("td", __assign({ className: "align-" + align + " px-4 py-3 text-left border-gray-200 " + borderClass + " " + className, style: style }, { children: children }), void 0));
};
//# sourceMappingURL=Presenter.js.map