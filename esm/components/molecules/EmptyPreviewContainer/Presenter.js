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
import { TextLightGray02 } from "../../atoms/Text/LightGray02";
export var Presenter = function (_a) {
    var className = _a.className, label = _a.label, style = _a.style;
    return (_jsx("div", __assign({ className: "border border-gray-200 px-4 py-6 rounded " + className, style: style }, { children: _jsx(TextLightGray02, __assign({ className: "text-center", size: "xs", weight: "bold" }, { children: label }), void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map