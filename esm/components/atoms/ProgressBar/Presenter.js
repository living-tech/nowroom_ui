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
    var className = _a.className, progress = _a.progress, style = _a.style;
    return (_jsx("div", __assign({ className: "w-full relative h-1 bg-gray-200 " + className, style: style }, { children: _jsx("div", { className: "absolute top-0 left-0 h-1 rounded-r bg-purple transition-all duration-500 ease-linear", style: {
                width: progress + "%",
            } }, void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map