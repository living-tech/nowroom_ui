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
import { Text } from "../../atoms/Text/Default";
import { CircleNum } from "../CircleNum/Default";
export var Presenter = function (_a) {
    var active = _a.active, className = _a.className, id = _a.id, item = _a.item, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, style = _a.style;
    var colorClass = "text-gray-500";
    if (active) {
        colorClass = "text-purple";
    }
    return (_jsxs("div", __assign({ className: "flex items-center px-5 inline-block cursor-pointer " + className, id: id, onClick: function () { return onClick && onClick(item.num); }, onMouseEnter: function () { return onMouseEnter && onMouseEnter(item.num); }, onMouseLeave: onMouseLeave, style: style }, { children: [_jsx(CircleNum, { active: active, num: item.num }, void 0),
            _jsx(Text, __assign({ className: "ml-3 relative " + colorClass, size: "sm", style: { top: 1 }, weight: "bold" }, { children: item.label }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map