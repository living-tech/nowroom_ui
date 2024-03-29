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
import { cva } from "class-variance-authority";
import { InputRadio } from "../../atoms/InputRadio/Default";
import { TextMediumGray02 } from "../../atoms/Text/MediumGray02";
import { TextRed } from "../../atoms/Text/Red";
var variants = cva(["grid"], {
    // compoundVariants: [{ grid_cols: 3, gap_size: 6, className: "p-8" }], // gird_cols:3, gap_size:6 のときclassNameに p-8 を追加できる
    defaultVariants: {
        gap_size: 6,
        grid_cols: 2,
    },
    variants: {
        gap_size: {
            2: ["gap-2"],
            4: ["gap-4"],
            6: ["gap-6"],
        },
        grid_cols: {
            1: ["grid-cols-1"],
            2: ["grid-cols-1", "md:grid-cols-2"],
            3: ["grid-cols-1", "md:grid-cols-3"],
            4: ["grid-cols-1", "md:grid-cols-4"],
            5: ["grid-cols-1", "md:grid-cols-5"],
            6: ["grid-cols-1", "md:grid-cols-6"],
        },
    },
});
export var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, className = _a.className, createRef = _a.createRef, _c = _a.cvaVariants, cvaVariants = _c === void 0 ? {} : _c, error = _a.error, id = _a.id, items = _a.items, label = _a.label, name = _a.name, onChange = _a.onChange, require = _a.require, _d = _a.requireLabel, requireLabel = _d === void 0 ? "必須" : _d, _e = _a.size, size = _e === void 0 ? "md" : _e, style = _a.style, props = __rest(_a, ["any", "anyLabel", "className", "createRef", "cvaVariants", "error", "id", "items", "label", "name", "onChange", "require", "requireLabel", "size", "style"]);
    return (_jsxs("div", __assign({ className: "" + className, id: id, style: style }, props, { children: [(label || any || require) && (_jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700" }, { children: [label && label, any && (_jsx(TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0)),
                    require && (_jsx(TextRed, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: requireLabel }), void 0))] }), void 0)),
            _jsx("div", __assign({ className: variants({ gap_size: cvaVariants.gap_size, grid_cols: cvaVariants.grid_cols }) }, { children: items.map(function (item) { return (_jsx(InputRadio, { createRef: createRef, item: item, name: name, onChange: onChange, size: size }, "radio-" + item.value)); }) }), void 0),
            error && (_jsx(TextRed, __assign({ className: "mt-2", size: "sm" }, { children: error }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map