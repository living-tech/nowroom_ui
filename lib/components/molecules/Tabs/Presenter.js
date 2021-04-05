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
var Default_1 = require("../../atoms/Tab/Default");
var Presenter = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, items = _a.items, _c = _a.panelsContainerClassName, panelsContainerClassName = _c === void 0 ? "" : _c, panelsContainerStyle = _a.panelsContainerStyle, style = _a.style, _d = _a.tabContainerClassName, tabContainerClassName = _d === void 0 ? "" : _d, tabContainerStyle = _a.tabContainerStyle, tabSize = _a.tabSize, _e = _a.tabsContainerClassName, tabsContainerClassName = _e === void 0 ? "" : _e, tabsContainerStyle = _a.tabsContainerStyle, _f = _a.tabsUnderLine, tabsUnderLine = _f === void 0 ? true : _f, _g = _a.tabsWidth, tabsWidth = _g === void 0 ? "full" : _g;
    var panelRef = react_1.useRef(null);
    var _h = react_1.useState(0), activeIndex = _h[0], setActiveIndex = _h[1];
    var _j = react_1.useState(0), containerWidth = _j[0], setContainerWidth = _j[1];
    var _k = react_1.useState(null), borderStyle = _k[0], setBorderStyle = _k[1];
    var _l = react_1.useState(null), hoverTab = _l[0], setHoverTab = _l[1];
    var tabDisplayClass = "";
    switch (tabsWidth) {
        case "full":
            tabDisplayClass = "flex";
            break;
        case "auto":
            tabDisplayClass = "inline-flex";
            break;
    }
    var onTabMouseEnter = function (index) {
        setHoverTab(index);
    };
    var onTabMouseLeave = function () {
        setHoverTab(null);
    };
    var onTabClick = function (index) {
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
        var containerElement = document.getElementById("tabs");
        var targetElement = document.getElementById("tab-" + targetIndex);
        if (!containerElement || !targetElement) {
            setBorderStyle(null);
            return;
        }
        var containerLeft = containerElement.getBoundingClientRect().left;
        var targetLeft = targetElement.getBoundingClientRect().left;
        setBorderStyle({
            left: targetLeft - containerLeft,
            width: targetElement.clientWidth,
        });
    }, [hoverTab, activeIndex]);
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, { children: [jsx_runtime_1.jsx(react_measure_1.default, __assign({ bounds: true, onResize: function (contentRect) {
                    var _a;
                    setContainerWidth(((_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.width) || 0);
                } }, { children: function (_a) {
                    var measureRef = _a.measureRef;
                    return (jsx_runtime_1.jsxs("div", __assign({ ref: measureRef, className: "relative" }, { children: [jsx_runtime_1.jsx("ul", __assign({ className: tabDisplayClass + " " + tabsContainerClassName, id: "tabs", style: tabsContainerStyle }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx(Default_1.Tab, { active: activeIndex === index, className: tabContainerClassName, id: "tab-" + index, index: index, label: item.label, onClick: onTabClick, onTabMouseEnter: onTabMouseEnter, onTabMouseLeave: onTabMouseLeave, size: tabSize, style: tabContainerStyle, tabUnderLine: tabsUnderLine }, index)); }) }), void 0),
                            borderStyle && (jsx_runtime_1.jsx("span", { className: "absolute bottom-0 pointer-events-none bg-purple transition-all duration-500 ease-out", style: {
                                    height: 2,
                                    left: borderStyle.left,
                                    width: borderStyle.width,
                                } }, void 0))] }), void 0));
                } }), void 0),
            jsx_runtime_1.jsx("div", __assign({ ref: panelRef, className: "w-full overflow-x-hidden whitespace-nowrap " + panelsContainerClassName, style: panelsContainerStyle }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx("div", __assign({ className: "inline-block w-full align-top" }, { children: item.renderPanel() }), index)); }) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map