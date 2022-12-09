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
export var Presenter = function (_a) {
    var checked = _a.checked, className = _a.className, createRef = _a.createRef, isNewLine = _a.isNewLine, item = _a.item, name = _a.name, onChange = _a.onChange, _b = _a.size, size = _b === void 0 ? "md" : _b, style = _a.style, props = __rest(_a, ["checked", "className", "createRef", "isNewLine", "item", "name", "onChange", "size", "style"]);
    return (_jsxs("div", __assign({ className: className, style: style }, props, { children: [_jsx("input", { ref: createRef, checked: checked, className: "hidden", id: name + "-" + item.value, name: name, onChange: onChange, type: "radio", value: item.value }, void 0),
            size === "md" ? (_jsx("label", __assign({ className: "flex items-center w-full p-4 overflow-hidden bg-white border border-gray-300 rounded cursor-pointer transition duration-200 ease-out", htmlFor: name + "-" + item.value }, { children: _jsxs("div", __assign({ className: "flex w-full " + (isNewLine ? "items-center" : "") }, { children: [_jsx("span", { className: "inline-block w-5 h-5 border rounded-full circle border-grey checked:border-blue-500 transition duration-200 ease-out" }, void 0),
                        _jsx("p", __assign({ className: "flex-grow ml-2 text-sm font-bold text-center text-gray-600 text transition duration-200 ease-out " + (isNewLine ? "whitespace-pre-wrap" : "") }, { children: item.label }), void 0)] }), void 0) }), void 0)) : (_jsx("label", __assign({ className: "flex items-center w-full cursor-pointer transition duration-200 ease-out", htmlFor: name + "-" + item.value }, { children: _jsxs("div", __assign({ className: "flex w-full " + (isNewLine ? "items-center" : "") }, { children: [_jsx("span", { className: "inline-block w-5 h-5 border rounded-full circle border-grey checked:border-blue-500 transition duration-200 ease-out" }, void 0),
                        _jsx("p", __assign({ className: "flex ml-2 text-sm text-black text transition duration-200 ease-out " + (isNewLine ? "whitespace-pre-wrap" : "") }, { children: item.label }), void 0)] }), void 0) }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map