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
import { useEffect, useRef, useState } from "react";
import { Text } from "../../atoms/Text/Default";
export var Presenter = function (_a) {
    var activeValue = _a.activeValue, className = _a.className, items = _a.items, label = _a.label, _b = _a.labelColor, labelColor = _b === void 0 ? "black" : _b, _c = _a.labelPosition, labelPosition = _c === void 0 ? "left" : _c, _d = _a.labelSize, labelSize = _d === void 0 ? "md" : _d, onClick = _a.onClick, style = _a.style, tabsId = _a.tabsId;
    var containerRef = useRef(null);
    var _e = useState(null), activeBackgroundStyle = _e[0], setActiveBackgroundStyle = _e[1];
    useEffect(function () {
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
    return (_jsxs("div", __assign({ className: className, style: style }, { children: [labelPosition === "left" && label && (_jsx(Text, __assign({ className: "mr-3", color: labelColor, size: labelSize, style: { position: "relative", top: 1 }, tag: "span" }, { children: label }), void 0)),
            _jsxs("div", __assign({ ref: containerRef, className: "relative inline-flex bg-gray-100 rounded-full space-x-1" }, { children: [items.map(function (item, index) { return (_jsx("div", __assign({ className: "relative px-3 py-2 rounded-full cursor-pointer text-center", id: (tabsId || "switch-tab") + "-" + index, onClick: function () { return onClick && onClick(item.value); }, style: {
                            minWidth: 64,
                            zIndex: 2,
                        } }, { children: _jsx(Text, __assign({ color: item.value === activeValue ? "white" : "darkGray02", size: "sm", weight: "bold" }, { children: item.label }), void 0) }), item.value)); }),
                    activeBackgroundStyle && (_jsx("span", { className: "absolute top-0 rounded-full bg-purple transition-all duration-200 ease-out", style: {
                            boxShadow: "0px 2px 4px rgba(116, 106, 232, 0.16)",
                            height: activeBackgroundStyle.height,
                            left: activeBackgroundStyle.left,
                            width: activeBackgroundStyle.width,
                        } }, void 0))] }), void 0),
            labelPosition === "right" && label && (_jsx(Text, __assign({ className: "ml-3", color: labelColor, size: labelSize, style: { position: "relative", top: 1 }, tag: "span" }, { children: label }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map