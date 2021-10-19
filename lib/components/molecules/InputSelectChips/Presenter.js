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
var Default_1 = require("../../atoms/Chip/Default");
var MediumGray01_1 = require("../../atoms/Icon/MediumGray01");
var DarkGray02_1 = require("../../atoms/Text/DarkGray02");
var Purple_1 = require("../../atoms/Text/Purple");
var Presenter = function (_a) {
    // const [selectedItems, setSelectedItems] = useState<Array<Item>>(value || []);
    var className = _a.className, items = _a.items, label = _a.label, minHeight = _a.minHeight, onChange = _a.onChange, selectedLabel = _a.selectedLabel, style = _a.style, unselectedLabel = _a.unselectedLabel, value = _a.value, props = __rest(_a, ["className", "items", "label", "minHeight", "onChange", "selectedLabel", "style", "unselectedLabel", "value"]);
    var onAddClick = function (item) {
        var newItems = (value || []).concat();
        newItems.push(item);
        // setSelectedItems(newItems);
        onChange && onChange(newItems);
    };
    var onRemoveClick = function (item) {
        var newItems = (value || []).filter(function (i) { return i.value !== item.value; });
        // setSelectedItems(newItems);
        onChange && onChange(newItems);
    };
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (jsx_runtime_1.jsx(DarkGray02_1.TextDarkGray02, __assign({ className: "mb-3", size: "sm", weight: "bold" }, { children: label }), void 0)),
            jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-col w-full p-6 border border-gray-200 rounded-md" }, { children: [jsx_runtime_1.jsxs("div", { children: [unselectedLabel && (jsx_runtime_1.jsx(DarkGray02_1.TextDarkGray02, __assign({ className: "mb-3", size: "xs" }, { children: unselectedLabel }), void 0)),
                            jsx_runtime_1.jsx("div", __assign({ className: "flex-wrap flex-grow p-4 pt-1 bg-gray-100 border rounded-md", style: { minHeight: minHeight } }, { children: items
                                    .filter(function (item) { return !(value === null || value === void 0 ? void 0 : value.find(function (s) { return s.value === item.value; })); })
                                    .map(function (item) { return (jsx_runtime_1.jsx(Default_1.Chip, { className: "mr-3 last:mr-0 mt-3", item: item, onClick: onAddClick, type: "unselected" }, item.value)); }) }), void 0)] }, void 0),
                    jsx_runtime_1.jsx("div", __assign({ className: "flex flex-col items-center justify-center py-4" }, { children: jsx_runtime_1.jsx(MediumGray01_1.IconMediumGray01, { name: "FiArrowDown", size: "md" }, void 0) }), void 0),
                    jsx_runtime_1.jsxs("div", { children: [selectedLabel && (jsx_runtime_1.jsx(Purple_1.TextPurple, __assign({ className: "mb-3", size: "xs" }, { children: selectedLabel }), void 0)),
                            jsx_runtime_1.jsx("div", __assign({ className: "flex-wrap flex-grow p-4 pt-1 bg-gray-100 border rounded-md", style: { minHeight: minHeight } }, { children: value === null || value === void 0 ? void 0 : value.map(function (item) { return (jsx_runtime_1.jsx(Default_1.Chip, { className: "mr-3 last:mr-0 mt-3", item: item, onClick: onRemoveClick, type: "selected" }, item.value)); }) }), void 0)] }, void 0)] }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map