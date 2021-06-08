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
import { Icon } from "../../atoms/Icon/Default";
import { Text } from "../../atoms/Text/Default";
export var Presenter = function (_a) {
    var className = _a.className, color = _a.color, iconName = _a.iconName, label = _a.label, _b = _a.size, size = _b === void 0 ? "md" : _b, style = _a.style, _c = _a.weight, weight = _c === void 0 ? "normal" : _c;
    return (_jsxs("div", __assign({ className: "inline-flex flex-col items-center justify-center " + className, style: style }, { children: [_jsx(Icon, { color: color, name: iconName, size: size === "md" ? "lg" : "md" }, void 0),
            _jsx(Text, __assign({ className: "leading-none", color: color, size: size === "md" ? "xs" : "xxs", style: { marginTop: size === "md" ? 8 : 6 }, weight: weight }, { children: label }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map