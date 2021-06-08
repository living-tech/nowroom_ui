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
import { TextBlack } from "../../atoms/Text/Black";
export var Presenter = function (_a) {
    var className = _a.className, content = _a.content, style = _a.style, title = _a.title;
    return (_jsxs("div", __assign({ className: "flex items-center justify-between px-2 " + className, style: style }, { children: [_jsx("div", __assign({ className: "py-1" }, { children: _jsx(TextBlack, __assign({ size: "sm" }, { children: title }), void 0) }), void 0),
            _jsx("div", __assign({ className: "py-1 ml-4" }, { children: _jsx(TextBlack, __assign({ size: "sm", weight: "bold" }, { children: content }), void 0) }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map