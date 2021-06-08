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
    var className = _a.className, style = _a.style;
    return _jsx("hr", { className: "w-full bg-gray-200 " + className, style: __assign({ height: 1 }, style) }, void 0);
};
//# sourceMappingURL=Presenter.js.map