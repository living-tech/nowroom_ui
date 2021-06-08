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
import { Text } from "../Text/Default";
import styles from "./Chip.module.scss";
export var Presenter = function (_a) {
    var className = _a.className, item = _a.item, onClick = _a.onClick, style = _a.style, _b = _a.type, type = _b === void 0 ? "selected" : _b, props = __rest(_a, ["className", "item", "onClick", "style", "type"]);
    var containerBaseClass = "transition-all ease-out duration-200 items-start inline-flex items-center justify-center py-1 pl-3 pr-1 font-medium border rounded-full cursor-pointer";
    var containerClass = "";
    if (type === "selected") {
        containerClass =
            "bg-purple hover:bg-white border-purple hover:text-purple stroke-purple hover:stroke-white text-white";
    }
    else {
        containerClass =
            "bg-white hover:bg-purple border-purple hover:text-white stroke-white hover:stroke-purple text-purple";
    }
    return (_jsxs("div", __assign({ className: containerBaseClass + " " + containerClass + " " + styles.Container + " " + className, onClick: function () { return onClick && onClick(item); }, style: style }, props, { children: [_jsx(Text, __assign({ className: "relative flex-initial text-current transition-all duration-200 ease-out", size: "xs", style: { top: 1 } }, { children: item.label }), void 0),
            type === "selected" ? (_jsx("div", __assign({ className: "transition-all ease-out duration-200 flex rounded-full w-5 h-5 bg-white items-center justify-center ml-2.5 " + styles.circleSelected }, { children: _jsxs("svg", __assign({ className: "transition-all ease-out duration-200", height: "14px", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3", viewBox: "0 0 24 24", width: "14px", xmlns: "http://www.w3.org/2000/svg" }, { children: [_jsx("line", { x1: "18", x2: "6", y1: "6", y2: "18" }, void 0),
                        _jsx("line", { x1: "6", x2: "18", y1: "6", y2: "18" }, void 0)] }), void 0) }), void 0)) : (_jsx("div", __assign({ className: "transition-all ease-out duration-200 flex rounded-full w-5 h-5 bg-purple items-center justify-center ml-2.5 " + styles.circleUnselected }, { children: _jsxs("svg", __assign({ className: "transition-all ease-out duration-200", height: "14px", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3", viewBox: "0 0 24 24", width: "14px", xmlns: "http://www.w3.org/2000/svg" }, { children: [_jsx("line", { x1: "12", x2: "12", y1: "6", y2: "18" }, void 0),
                        _jsx("line", { x1: "6", x2: "18", y1: "12", y2: "12" }, void 0)] }), void 0) }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map