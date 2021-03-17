"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var react_1 = require("react");
var Default_1 = require("../../atoms/NavigationTab/Default");
exports.Presenter = react_1.forwardRef(function (_a, ref) {
    var className = _a.className, items = _a.items, style = _a.style, props = __rest(_a, ["className", "items", "style"]);
    var router = router_1.useRouter();
    var _b = react_1.useState(null), borderStyle = _b[0], setBorderStyle = _b[1];
    var _c = react_1.useState(null), hoverLink = _c[0], setHoverLink = _c[1];
    var onLinkMouseEnter = function (href) {
        setHoverLink(href);
    };
    var onLinkMouseLeave = function () {
        setHoverLink(null);
    };
    react_1.useEffect(function () {
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
    return (jsx_runtime_1.jsxs("nav", __assign({ ref: ref, className: "relative " + className, id: "navigation-tabs", style: style }, props, { children: [jsx_runtime_1.jsx("ul", __assign({ className: "flex" }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx(Default_1.NavigationTab, { id: "navigation-tab-" + index, item: item, onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave }, index)); }) }), void 0),
            borderStyle && (jsx_runtime_1.jsx("span", { className: "bg-purple absolute bottom-0 transition-all duration-500 ease-out", style: {
                    height: 2,
                    left: borderStyle.left,
                    width: borderStyle.width,
                } }, void 0))] }), void 0));
});
//# sourceMappingURL=Presenter.js.map