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
import { TextDarkGray01 } from "../../atoms/Text/DarkGray01";
export var Presenter = function (_a) {
    var className = _a.className, content = _a.content, _b = _a.justify, justify = _b === void 0 ? "left" : _b, _c = _a.leftWidth, leftWidth = _c === void 0 ? 64 : _c, style = _a.style, title = _a.title;
    var containerClass = "";
    switch (justify) {
        case "left":
            break;
        case "space-between":
            containerClass = "justify-between";
            break;
    }
    var rightColumnClass = "";
    switch (justify) {
        case "left":
            rightColumnClass = "flex-grow";
            break;
        case "space-between":
            break;
    }
    return (_jsxs("div", __assign({ className: "flex items-center px-4 border-b border-gray-200 " + containerClass + " " + className, style: style }, { children: [_jsx("div", __assign({ className: "py-3", style: { width: justify === "left" ? leftWidth : undefined } }, { children: _jsx(TextDarkGray01, __assign({ size: "xs" }, { children: title }), void 0) }), void 0),
            _jsx("div", __assign({ className: "py-3 ml-4 " + rightColumnClass }, { children: content() }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map