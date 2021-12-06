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
import { TextDarkGray02 } from "../atoms";
/*
 * 内訳表示
 */
export var ItemDetail = function (_a) {
    var children = _a.children, className = _a.className, title = _a.title;
    return (_jsxs("div", __assign({ className: "" + (className !== null && className !== void 0 ? className : "") }, { children: [_jsx("div", __assign({ className: "py-1 text-center bg-gray-200" }, { children: _jsx(TextDarkGray02, __assign({ size: "xs" }, { children: title }), void 0) }), void 0), children] }), void 0));
};
//# sourceMappingURL=index.js.map