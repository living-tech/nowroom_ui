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
import { TextDarkGray01 } from "../Text/DarkGray01";
export var Presenter = function (_a) {
    var className = _a.className, style = _a.style, title = _a.title;
    return (_jsx("th", __assign({ className: "px-4 py-3 text-left border-b border-gray-200 " + className, style: style }, { children: title && _jsx(TextDarkGray01, __assign({ size: "xs" }, { children: title }), void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map