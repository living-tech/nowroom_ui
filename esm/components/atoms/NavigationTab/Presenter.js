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
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { Text } from "../Text/Default";
export var Presenter = forwardRef(function (_a, ref) {
    var id = _a.id, item = _a.item, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, style = _a.style, props = __rest(_a, ["id", "item", "onLinkMouseEnter", "onLinkMouseLeave", "style"]);
    var router = useRouter();
    var activeClass = "";
    if (router.pathname === item.href) {
        activeClass = "text-purple";
    }
    return (_jsx("li", __assign({ ref: ref, className: "relative inline-block text-center list-none cursor-pointer hover:text-purple transition duration-200 ease-out", id: id, onMouseEnter: function () { return onLinkMouseEnter && onLinkMouseEnter(item.href); }, onMouseLeave: onLinkMouseLeave, style: style }, props, { children: _jsx(Link, __assign({ passHref: true, href: item.href, prefetch: false }, { children: _jsx("a", __assign({ className: "inline-block px-4 py-5" }, { children: _jsx(Text, __assign({ className: "transition duration-200 ease-out " + activeClass, size: "sm", tag: "span", weight: "bold" }, { children: item.label }), void 0) }), void 0) }), void 0) }), void 0));
});
//# sourceMappingURL=Presenter.js.map