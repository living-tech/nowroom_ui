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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var react_1 = require("react");
var Default_1 = require("../Text/Default");
exports.Presenter = react_1.forwardRef(function (_a, ref) {
    var id = _a.id, item = _a.item, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, style = _a.style, props = __rest(_a, ["id", "item", "onLinkMouseEnter", "onLinkMouseLeave", "style"]);
    var router = router_1.useRouter();
    var activeClass = "";
    if (router.pathname === item.href) {
        activeClass = "text-purple";
    }
    return (jsx_runtime_1.jsx("li", __assign({ ref: ref, className: "hover:text-purple relative inline-block text-center list-none transition duration-200 ease-out cursor-pointer", id: id, onMouseEnter: function () { return onLinkMouseEnter && onLinkMouseEnter(item.href); }, onMouseLeave: onLinkMouseLeave, style: style }, props, { children: jsx_runtime_1.jsx(link_1.default, __assign({ passHref: true, href: item.href }, { children: jsx_runtime_1.jsx("a", __assign({ className: "inline-block px-4 py-5" }, { children: jsx_runtime_1.jsx(Default_1.Text, __assign({ className: "transition duration-200 ease-out " + activeClass, size: "sm", tag: "span", weight: "bold" }, { children: item.label }), void 0) }), void 0) }), void 0) }), void 0));
});
//# sourceMappingURL=Presenter.js.map