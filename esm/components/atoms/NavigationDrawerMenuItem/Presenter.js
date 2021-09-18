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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { forwardRef } from "react";
export var Presenter = forwardRef(function (_a, _ref) {
    var className = _a.className, item = _a.item, style = _a.style;
    var baseClass = "transition ease-out duration-200 block w-full text-left text-xs py-3 px-5 appearance-none cursor-pointer focus:outline-none hover:bg-purple-100";
    var colorClass = "text-black";
    if (item.danger) {
        colorClass = "text-red";
    }
    if (item.onClick) {
        return (_jsx("button", __assign({ className: colorClass + " " + baseClass + " " + className, onClick: item.onClick, style: style }, { children: item.label }), void 0));
    }
    else if (item.href) {
        return (_jsx(Link, __assign({ passHref: true, href: item.href, prefetch: false }, { children: _jsx("a", __assign({ className: colorClass + " " + baseClass + " " + className, style: style }, { children: "" + item.label }), void 0) }), void 0));
    }
    else {
        return _jsx(_Fragment, {}, void 0);
    }
});
//# sourceMappingURL=Presenter.js.map