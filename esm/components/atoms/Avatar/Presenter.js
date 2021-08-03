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
export var Presenter = function (_a) {
    var alt = _a.alt, className = _a.className, _b = _a.size, size = _b === void 0 ? "md" : _b, src = _a.src, style = _a.style, props = __rest(_a, ["alt", "className", "size", "src", "style"]);
    var px;
    switch (size) {
        case "lg":
            px = 64;
            break;
        case "md":
            px = 44;
            break;
        case "sm":
            px = 36;
            break;
        case "xs":
            px = 24;
            break;
    }
    return (_jsx("img", __assign({ alt: alt || "", className: "rounded-full " + className, height: px, loading: "lazy", src: src
            ? src
            : "https://firebasestorage.googleapis.com/v0/b/now-project-259302.appspot.com/o/public%2Fcommon%2Fdefault%2Fprofile.jpg?alt=media&token=d74b62db-ec52-4a33-a303-26b6c34c35ff", style: style, width: px }, props), void 0));
};
//# sourceMappingURL=Presenter.js.map