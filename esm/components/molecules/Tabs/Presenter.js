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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gsap, { Expo } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import Measure from "react-measure";
import { v4 as uuidv4 } from "uuid";
import { Tab } from "../../atoms/Tab/Default";
var uuid = uuidv4();
export var Presenter = function (_a) {
    var _b = _a.id, id = _b === void 0 ? uuid : _b, _c = _a.className, className = _c === void 0 ? "" : _c, hiddenTabLabels = _a.hiddenTabLabels, initialContainerWidth = _a.initialContainerWidth, items = _a.items, onClickTab = _a.onClickTab, _d = _a.panelsContainerClassName, panelsContainerClassName = _d === void 0 ? "" : _d, panelsContainerStyle = _a.panelsContainerStyle, style = _a.style, _e = _a.tabContainerClassName, tabContainerClassName = _e === void 0 ? "" : _e, tabContainerStyle = _a.tabContainerStyle, _f = _a.tabsPosition, tabsPosition = _f === void 0 ? "left" : _f, _g = _a.tabSize, tabSize = _g === void 0 ? "md" : _g, _h = _a.tabsContainerClassName, tabsContainerClassName = _h === void 0 ? "" : _h, tabsContainerStyle = _a.tabsContainerStyle, _j = _a.tabsUnderLine, tabsUnderLine = _j === void 0 ? true : _j, _k = _a.tabsWidth, tabsWidth = _k === void 0 ? "full" : _k;
    var panelRef = useRef(null);
    var _l = useState(0), activeIndex = _l[0], setActiveIndex = _l[1];
    var _m = useState(initialContainerWidth !== null && initialContainerWidth !== void 0 ? initialContainerWidth : 0), containerWidth = _m[0], setContainerWidth = _m[1];
    var _o = useState(null), borderStyle = _o[0], setBorderStyle = _o[1];
    var _p = useState(null), hoverTab = _p[0], setHoverTab = _p[1];
    var tabDisplayClass = "";
    switch (tabsWidth) {
        case "full":
            tabDisplayClass = "flex";
            break;
        case "auto":
            tabDisplayClass = "inline-flex";
            break;
    }
    var tabsPositionClass = "";
    switch (tabsPosition) {
        case "center":
            tabsPositionClass = "flex justify-center";
            break;
        case "left":
            break;
    }
    var onTabMouseEnter = function (index) {
        setHoverTab(index);
    };
    var onTabMouseLeave = function () {
        setHoverTab(null);
    };
    var onTabClick = function (index) {
        onClickTab && onClickTab(index);
        setActiveIndex(index);
        if (panelRef === null || panelRef === void 0 ? void 0 : panelRef.current) {
            gsap.to(panelRef.current, {
                duration: 0.2,
                ease: Expo.easeOut,
                scrollTo: { x: containerWidth * index },
            });
        }
    };
    useEffect(function () {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);
    useEffect(function () {
        var targetIndex;
        if (hoverTab !== null) {
            targetIndex = items.findIndex(function (_item, index) { return index === hoverTab; });
        }
        else {
            targetIndex = items.findIndex(function (_item, index) { return index === activeIndex; });
        }
        var containerElement = document.getElementById(id);
        var targetElement = document.getElementById(id + "-" + targetIndex);
        if (!containerElement || !targetElement) {
            setBorderStyle(null);
            return;
        }
        var containerLeft = containerElement.getBoundingClientRect().left;
        var targetLeft = targetElement.getBoundingClientRect().left;
        var containerScrollLeft = containerElement.scrollLeft;
        setBorderStyle({
            left: targetLeft - containerLeft + containerScrollLeft,
            width: targetElement.clientWidth,
        });
    }, [hoverTab, activeIndex, tabSize]);
    return (_jsxs("div", __assign({ className: className, style: style }, { children: [hiddenTabLabels ? (_jsx(_Fragment, {}, void 0)) : (_jsx(Measure, __assign({ bounds: true, onResize: function (contentRect) {
                    var _a;
                    if (initialContainerWidth) {
                        return;
                    }
                    setContainerWidth(((_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.width) || 0);
                } }, { children: function (_a) {
                    var measureRef = _a.measureRef;
                    return (_jsx("div", __assign({ ref: measureRef, className: "relative abc " + tabsPositionClass }, { children: _jsxs("ul", __assign({ className: "relative " + tabDisplayClass + " " + tabsContainerClassName, id: id, style: tabsContainerStyle }, { children: [items.map(function (item, index) {
                                    var _a;
                                    return (_jsx(Tab, { active: activeIndex === index, className: tabContainerClassName, id: id + "-" + index, index: index, label: (_a = item.label) !== null && _a !== void 0 ? _a : "", onClick: onTabClick, onTabMouseEnter: onTabMouseEnter, onTabMouseLeave: onTabMouseLeave, size: tabSize, style: tabContainerStyle, tabUnderLine: tabsUnderLine }, index));
                                }),
                                borderStyle && (_jsx("span", { className: "absolute bottom-0 pointer-events-none bg-purple transition-all duration-500 ease-out", style: {
                                        height: 2,
                                        left: borderStyle.left,
                                        width: borderStyle.width,
                                    } }, void 0))] }), void 0) }), void 0));
                } }), void 0)),
            _jsx("div", __assign({ ref: panelRef, className: "w-full overflow-x-hidden whitespace-nowrap " + panelsContainerClassName, style: panelsContainerStyle }, { children: items.map(function (item, index) { return (_jsx("div", __assign({ className: "inline-block w-full align-top" }, { children: item.renderPanel() }), index)); }) }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map