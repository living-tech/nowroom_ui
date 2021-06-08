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
export var Presenter = function (_a) {
    var checked = _a.checked, className = _a.className, createRef = _a.createRef, id = _a.id, label = _a.label, _b = _a.labelColor, labelColor = _b === void 0 ? "black" : _b, _c = _a.labelPosition, labelPosition = _c === void 0 ? "right" : _c, _d = _a.labelSize, labelSize = _d === void 0 ? "md" : _d, _e = _a.labelWeight, labelWeight = _e === void 0 ? "normal" : _e, name = _a.name, onChange = _a.onChange, style = _a.style, props = __rest(_a, ["checked", "className", "createRef", "id", "label", "labelColor", "labelPosition", "labelSize", "labelWeight", "name", "onChange", "style"]);
    return (_jsxs("div", __assign({ className: "inline-flex items-center " + className, style: style }, props, { children: [labelPosition === "left" && label && (_jsx(Text, __assign({ className: "mr-3", color: labelColor, size: labelSize, style: { position: "relative", top: 1 }, tag: "span", weight: labelWeight }, { children: label }), void 0)),
            _jsx("div", __assign({ className: "relative inline-block align-middle select-none w-7 transition duration-200 ease-out" }, { children: _jsxs("label", __assign({ className: "flex items-center block h-6 overflow-hidden cursor-pointer", htmlFor: id }, { children: [_jsx("span", { className: "block w-full h-2 bg-purple-200 rounded-full" }, void 0),
                        _jsx("input", { ref: createRef, checked: checked, className: "absolute block w-4 h-4 bg-white rounded-full outline-none appearance-none cursor-pointer top-2/4 -translate-y-2/4 checked:right-0 right-3 checked:bg-purple radio-button:bg-purple-200 transition-all duration-200 ease-out transform", id: id, name: name, onChange: onChange, style: {
                                boxShadow: "0px 2px 6px rgba(116, 106, 232, 0.26)",
                            }, type: "checkbox" }, void 0)] }), void 0) }), void 0),
            labelPosition === "right" && label && (_jsx(Text, __assign({ className: "ml-3", color: labelColor, size: labelSize, style: { position: "relative", top: 1 }, tag: "span" }, { children: label }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map