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
import dayjs from "dayjs";
import { iPhoneMockHeight, iPhoneMockWidth } from "../../../constnats";
import { TextBlack } from "../../atoms/Text/Black";
export var Presenter = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style;
    return (_jsxs("div", __assign({ className: "flex flex-col rounded-4xl relative overflow-x-hidden border-4 border-black " + className, style: __assign({ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(30, 29, 37, 0.08)", height: iPhoneMockHeight, width: iPhoneMockWidth }, style) }, { children: [_jsx("span", { className: "absolute top-0 inline-block bg-black left-1/2 rounded-b-xl transform -translate-x-1/2", style: {
                    height: 20,
                    width: 180,
                } }, void 0),
            _jsx("span", { className: "absolute inline-block bg-gray-700 left-1/2 rounded-xl transform -translate-x-1/2", style: {
                    height: 4,
                    top: 8,
                    width: 50,
                } }, void 0),
            _jsx("div", __assign({ className: "pt-1 pb-2 pl-5" }, { children: _jsx(TextBlack, __assign({ size: "xs", weight: "bold" }, { children: dayjs(new Date()).format("H:mm") }), void 0) }), void 0),
            _jsx("div", __assign({ className: "flex-grow overflow-y-scroll" }, { children: children }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map