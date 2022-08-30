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
import { Chip } from "../../atoms/Chip/Default";
import { IconMediumGray01 } from "../../atoms/Icon/MediumGray01";
import { TextDarkGray02 } from "../../atoms/Text/DarkGray02";
import { TextPurple } from "../../atoms/Text/Purple";
export var Presenter = function (_a) {
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
    return (_jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (_jsx(TextDarkGray02, __assign({ className: "mb-3", size: "sm", weight: "bold" }, { children: label }), void 0)),
            _jsxs("div", __assign({ className: "flex flex-col w-full p-6 border border-gray-200 rounded-md" }, { children: [_jsxs("div", { children: [unselectedLabel && (_jsx(TextDarkGray02, __assign({ className: "mb-3", size: "xs" }, { children: unselectedLabel }), void 0)),
                            _jsx("div", __assign({ className: "flex-wrap flex-grow p-4 pt-1 bg-gray-100 border rounded-md", style: { minHeight: minHeight } }, { children: items
                                    .filter(function (item) { return !(value === null || value === void 0 ? void 0 : value.find(function (s) { return s.value === item.value; })); })
                                    .map(function (item) { return (_jsx(Chip, { className: "mr-3 last:mr-0 mt-3", color: "purple", iconType: "unselected", item: item, onClick: onAddClick }, item.value)); }) }), void 0)] }, void 0),
                    _jsx("div", __assign({ className: "flex flex-col items-center justify-center py-4" }, { children: _jsx(IconMediumGray01, { name: "FiArrowDown", size: "md" }, void 0) }), void 0),
                    _jsxs("div", { children: [selectedLabel && (_jsx(TextPurple, __assign({ className: "mb-3", size: "xs" }, { children: selectedLabel }), void 0)),
                            _jsx("div", __assign({ className: "flex-wrap flex-grow p-4 pt-1 bg-gray-100 border rounded-md", style: { minHeight: minHeight } }, { children: value === null || value === void 0 ? void 0 : value.map(function (item) { return (_jsx(Chip, { className: "mr-3 last:mr-0 mt-3", color: "white", iconType: "selected", item: item, onClick: onRemoveClick }, item.value)); }) }), void 0)] }, void 0)] }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map