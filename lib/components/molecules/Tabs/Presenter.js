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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_measure_1 = __importDefault(require("react-measure"));
var utils_1 = require("../../../utils");
var Default_1 = require("../../atoms/Tab/Default");
var Presenter = function (_a) {
    var className = _a.className, items = _a.items, style = _a.style;
    var panelRef = react_1.useRef(null);
    var _b = react_1.useState(0), activeIndex = _b[0], setActiveIndex = _b[1];
    var _c = react_1.useState(0), containerWidth = _c[0], setContainerWidth = _c[1];
    var _d = react_1.useState(null), borderStyle = _d[0], setBorderStyle = _d[1];
    var _e = react_1.useState(null), hoverTab = _e[0], setHoverTab = _e[1];
    var onTabMouseEnter = function (index) {
        setHoverTab(index);
    };
    var onTabMouseLeave = function () {
        setHoverTab(null);
    };
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
    var onTabClick = function (index) {
        setActiveIndex(index);
        if (panelRef === null || panelRef === void 0 ? void 0 : panelRef.current) {
            utils_1.smoothScroll(200, panelRef.current, containerWidth * index, "scrollLeft");
        }
    };
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "relative" }, { children: [jsx_runtime_1.jsx(react_measure_1.default, __assign({ bounds: true, onResize: function (contentRect) {
                            var _a;
                            setContainerWidth(((_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.width) || 0);
                        } }, { children: function (_a) {
                            var measureRef = _a.measureRef;
                            return (jsx_runtime_1.jsx("ul", __assign({ ref: measureRef, className: "flex", id: "tabs" }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx(Default_1.Tab, { active: activeIndex === index, id: "tab-" + index, index: index, label: item.label, onClick: onTabClick, onTabMouseEnter: onTabMouseEnter, onTabMouseLeave: onTabMouseLeave }, index)); }) }), void 0));
                        } }), void 0),
                    borderStyle && (jsx_runtime_1.jsx("span", { className: "bg-purple absolute bottom-0 transition-all duration-500 ease-out pointer-events-none", style: {
                            height: 2,
                            left: borderStyle.left,
                            width: borderStyle.width,
                        } }, void 0))] }), void 0),
            jsx_runtime_1.jsx("div", __assign({ ref: panelRef, className: "whitespace-nowrap w-full overflow-x-hidden" }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx("div", __assign({ className: "inline-block w-full align-top" }, { children: item.renderPanel() }), index)); }) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map