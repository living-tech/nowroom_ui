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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Default_1 = require("../../atoms/Text/Default");
var Presenter = function (_a) {
    var activeValue = _a.activeValue, className = _a.className, items = _a.items, label = _a.label, _b = _a.labelColor, labelColor = _b === void 0 ? "black" : _b, _c = _a.labelPosition, labelPosition = _c === void 0 ? "left" : _c, _d = _a.labelSize, labelSize = _d === void 0 ? "md" : _d, onClick = _a.onClick, style = _a.style, tabsId = _a.tabsId;
    var containerRef = react_1.useRef(null);
    var _e = react_1.useState(null), activeBackgroundStyle = _e[0], setActiveBackgroundStyle = _e[1];
    react_1.useEffect(function () {
        var targetIndex = items.findIndex(function (item) { return item.value === activeValue; });
        var targetElement = document.getElementById((tabsId || "switch-tab") + "-" + targetIndex);
        if (!containerRef || !containerRef.current || !targetElement) {
            setActiveBackgroundStyle(null);
            return;
        }
        var containerLeft = containerRef.current.getBoundingClientRect().left;
        var targetLeft = targetElement.getBoundingClientRect().left;
        setActiveBackgroundStyle({
            height: targetElement.clientHeight,
            left: targetLeft - containerLeft - 4,
            width: targetElement.clientWidth,
        });
    }, [activeValue]);
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, { children: [labelPosition === "left" && label && (jsx_runtime_1.jsx(Default_1.Text, __assign({ className: "mr-3", color: labelColor, size: labelSize, style: { position: "relative", top: 1 }, tag: "span" }, { children: label }), void 0)),
            jsx_runtime_1.jsxs("div", __assign({ ref: containerRef, className: "relative inline-flex space-x-1 bg-gray-100 rounded-full" }, { children: [items.map(function (item, index) { return (jsx_runtime_1.jsx("div", __assign({ className: "relative px-3 py-2 rounded-full cursor-pointer text-center", id: (tabsId || "switch-tab") + "-" + index, onClick: function () { return onClick && onClick(item.value); }, style: {
                            minWidth: 64,
                            zIndex: 2,
                        } }, { children: jsx_runtime_1.jsx(Default_1.Text, __assign({ color: item.value === activeValue ? "white" : "darkGray02", size: "sm", weight: "bold" }, { children: item.label }), void 0) }), item.value)); }),
                    activeBackgroundStyle && (jsx_runtime_1.jsx("span", { className: "bg-purple absolute top-0 transition-all duration-200 ease-out rounded-full", style: {
                            boxShadow: "0px 2px 4px rgba(116, 106, 232, 0.16)",
                            height: activeBackgroundStyle.height,
                            left: activeBackgroundStyle.left,
                            width: activeBackgroundStyle.width,
                        } }, void 0))] }), void 0),
            labelPosition === "right" && label && (jsx_runtime_1.jsx(Default_1.Text, __assign({ className: "ml-3", color: labelColor, size: labelSize, style: { position: "relative", top: 1 }, tag: "span" }, { children: label }), void 0))] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map