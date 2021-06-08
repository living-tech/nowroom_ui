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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Presenter } from "./Presenter";
export var ButtonWhite = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "white" : _b, _c = _a.visualType, visualType = _c === void 0 ? "fill" : _c, props = __rest(_a, ["children", "color", "visualType"]);
    return (_jsx(Presenter, __assign({ color: color, visualType: visualType }, props, { children: children }), void 0));
};
//# sourceMappingURL=White.js.map