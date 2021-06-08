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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from "next/router";
import { forwardRef, useEffect, useState } from "react";
import { NavigationTab } from "../../atoms/NavigationTab/Default";
export var Presenter = forwardRef(function (_a, ref) {
    var className = _a.className, items = _a.items, style = _a.style, props = __rest(_a, ["className", "items", "style"]);
    var router = useRouter();
    var _b = useState(null), borderStyle = _b[0], setBorderStyle = _b[1];
    var _c = useState(null), hoverLink = _c[0], setHoverLink = _c[1];
    var onLinkMouseEnter = function (href) {
        setHoverLink(href);
    };
    var onLinkMouseLeave = function () {
        setHoverLink(null);
    };
    useEffect(function () {
        var targetIndex;
        if (hoverLink) {
            targetIndex = items.findIndex(function (item) { return item.href === hoverLink; });
        }
        else {
            targetIndex = items.findIndex(function (item) { return item.href === router.pathname; });
        }
        var containerElement = document.getElementById("navigation-tabs");
        var targetElement = document.getElementById("navigation-tab-" + targetIndex);
        if (!containerElement || !targetElement) {
            setBorderStyle(null);
            return;
        }
        var containerLeft = containerElement.getBoundingClientRect().left;
        var targetLeft = targetElement.getBoundingClientRect().left;
        setBorderStyle({
            left: targetLeft - containerLeft + 16,
            width: targetElement.clientWidth - 32,
        });
    }, [hoverLink, router.pathname]);
    return (_jsxs("nav", __assign({ ref: ref, className: "relative " + className, id: "navigation-tabs", style: style }, props, { children: [_jsx("ul", __assign({ className: "flex" }, { children: items.map(function (item, index) { return (_jsx(NavigationTab, { id: "navigation-tab-" + index, item: item, onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave }, index)); }) }), void 0),
            borderStyle && (_jsx("span", { className: "absolute bottom-0 bg-purple transition-all duration-500 ease-out", style: {
                    height: 2,
                    left: borderStyle.left,
                    width: borderStyle.width,
                } }, void 0))] }), void 0));
});
//# sourceMappingURL=Presenter.js.map