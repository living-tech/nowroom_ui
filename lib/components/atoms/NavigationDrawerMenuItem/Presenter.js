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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var react_1 = require("react");
exports.Presenter = react_1.forwardRef(function (_a, _ref) {
    var className = _a.className, item = _a.item, style = _a.style;
    var baseClass = "transition ease-out duration-200 block w-full text-left text-xs py-3 px-5 appearance-none cursor-pointer focus:outline-none hover:bg-purple-100";
    var colorClass = "text-black";
    if (item.danger) {
        colorClass = "text-red";
    }
    if (item.onClick) {
        return (jsx_runtime_1.jsx("button", __assign({ className: colorClass + " " + baseClass + " " + className, onClick: item.onClick, style: style }, { children: item.label }), void 0));
    }
    else if (item.href) {
        return (jsx_runtime_1.jsx(link_1.default, __assign({ passHref: true, href: item.href, prefetch: false }, { children: jsx_runtime_1.jsx("a", __assign({ className: colorClass + " " + baseClass + " " + className, style: style }, { children: "" + item.label }), void 0) }), void 0));
    }
    else {
        return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0);
    }
});
//# sourceMappingURL=Presenter.js.map