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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var gsap_1 = __importStar(require("gsap"));
var ScrollToPlugin_1 = __importDefault(require("gsap/dist/ScrollToPlugin"));
var react_1 = require("react");
var react_measure_1 = __importDefault(require("react-measure"));
var uuid_1 = require("uuid");
var Default_1 = require("../../atoms/Tab/Default");
var uuid = uuid_1.v4();
var Presenter = function (_a) {
    var _b = _a.id, id = _b === void 0 ? uuid : _b, _c = _a.className, className = _c === void 0 ? "" : _c, initialContainerWidth = _a.initialContainerWidth, items = _a.items, onClickTab = _a.onClickTab, _d = _a.panelsContainerClassName, panelsContainerClassName = _d === void 0 ? "" : _d, panelsContainerStyle = _a.panelsContainerStyle, style = _a.style, _e = _a.tabContainerClassName, tabContainerClassName = _e === void 0 ? "" : _e, tabContainerStyle = _a.tabContainerStyle, _f = _a.tabsPosition, tabsPosition = _f === void 0 ? "left" : _f, _g = _a.tabSize, tabSize = _g === void 0 ? "md" : _g, _h = _a.tabsContainerClassName, tabsContainerClassName = _h === void 0 ? "" : _h, tabsContainerStyle = _a.tabsContainerStyle, _j = _a.tabsUnderLine, tabsUnderLine = _j === void 0 ? true : _j, _k = _a.tabsWidth, tabsWidth = _k === void 0 ? "full" : _k;
    var panelRef = react_1.useRef(null);
    var _l = react_1.useState(0), activeIndex = _l[0], setActiveIndex = _l[1];
    var _m = react_1.useState(initialContainerWidth !== null && initialContainerWidth !== void 0 ? initialContainerWidth : 0), containerWidth = _m[0], setContainerWidth = _m[1];
    var _o = react_1.useState(null), borderStyle = _o[0], setBorderStyle = _o[1];
    var _p = react_1.useState(null), hoverTab = _p[0], setHoverTab = _p[1];
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
            gsap_1.default.to(panelRef.current, {
                duration: 0.2,
                ease: gsap_1.Expo.easeOut,
                scrollTo: { x: containerWidth * index },
            });
        }
    };
    react_1.useEffect(function () {
        gsap_1.default.registerPlugin(ScrollToPlugin_1.default);
    }, []);
    react_1.useEffect(function () {
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
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, { children: [jsx_runtime_1.jsx(react_measure_1.default, __assign({ bounds: true, onResize: function (contentRect) {
                    var _a;
                    if (initialContainerWidth) {
                        return;
                    }
                    setContainerWidth(((_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.width) || 0);
                } }, { children: function (_a) {
                    var measureRef = _a.measureRef;
                    return 1 < items.length && items[0].label ? (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0)) : (jsx_runtime_1.jsx("div", __assign({ ref: measureRef, className: "relative " + tabsPositionClass }, { children: jsx_runtime_1.jsxs("ul", __assign({ className: "relative " + tabDisplayClass + " " + tabsContainerClassName, id: id, style: tabsContainerStyle }, { children: [items.map(function (item, index) { return (jsx_runtime_1.jsx(Default_1.Tab, { active: activeIndex === index, className: tabContainerClassName, id: id + "-" + index, index: index, label: item.label, onClick: onTabClick, onTabMouseEnter: onTabMouseEnter, onTabMouseLeave: onTabMouseLeave, size: tabSize, style: tabContainerStyle, tabUnderLine: tabsUnderLine }, index)); }),
                                borderStyle && (jsx_runtime_1.jsx("span", { className: "absolute bottom-0 pointer-events-none bg-purple transition-all duration-500 ease-out", style: {
                                        height: 2,
                                        left: borderStyle.left,
                                        width: borderStyle.width,
                                    } }, void 0))] }), void 0) }), void 0));
                } }), void 0),
            jsx_runtime_1.jsx("div", __assign({ ref: panelRef, className: "w-full overflow-x-hidden whitespace-nowrap " + panelsContainerClassName, style: panelsContainerStyle }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx("div", __assign({ className: "inline-block w-full align-top" }, { children: item.renderPanel() }), index)); }) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map