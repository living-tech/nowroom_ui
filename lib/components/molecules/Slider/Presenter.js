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
var window_size_1 = require("@react-hook/window-size");
var nuka_carousel_1 = __importDefault(require("nuka-carousel"));
var react_1 = require("react");
var constnats_1 = require("../../../constnats");
var Default_1 = require("../../atoms/Image/Default");
var BlackOpacity_1 = require("../LabelText/BlackOpacity");
var Presenter = function (_a) {
    var autoplay = _a.autoplay, className = _a.className, items = _a.items, style = _a.style;
    var containerRef = react_1.useRef(null);
    var windowWidth = window_size_1.useWindowWidth();
    var _b = react_1.useState(), width = _b[0], setWidth = _b[1];
    var _c = react_1.useState(), height = _c[0], setHeight = _c[1];
    var renderTopRightControls = function (_a) {
        var currentSlide = _a.currentSlide, slideCount = _a.slideCount;
        return (jsx_runtime_1.jsx("div", __assign({ className: "p-4" }, { children: jsx_runtime_1.jsx(BlackOpacity_1.LabelTextBlackOpacity, { children: currentSlide + 1 + "/" + slideCount }, void 0) }), void 0));
    };
    var renderBottomCenterControls = function (_a) {
        var currentSlide = _a.currentSlide, slideCount = _a.slideCount;
        return (jsx_runtime_1.jsx("div", __assign({ className: "relative inline-flex h-1 mb-3 rounded bg-black-opacity", style: {
                width: constnats_1.carouselPaginationWidth,
            } }, { children: jsx_runtime_1.jsx("div", { className: "absolute top-0 h-1 bg-purple-200 rounded-full transition-all duration-200 ease-out", style: {
                    left: (constnats_1.carouselPaginationWidth / slideCount) * currentSlide,
                    width: constnats_1.carouselPaginationWidth / slideCount,
                } }, void 0) }), void 0));
    };
    react_1.useEffect(function () {
        if (containerRef && containerRef.current) {
            var width_1 = containerRef.current.offsetWidth;
            setWidth(width_1);
            setHeight((width_1 / 4) * 3);
        }
    }, [containerRef, windowWidth]);
    return (jsx_runtime_1.jsx("div", __assign({ ref: containerRef, className: "" + className, style: style }, { children: jsx_runtime_1.jsx(nuka_carousel_1.default, __assign({ disableEdgeSwiping: true, wrapAround: true, autoplay: autoplay, height: height ? height + "px" : undefined, renderBottomCenterControls: renderBottomCenterControls, renderCenterLeftControls: null, renderCenterRightControls: null, renderTopRightControls: renderTopRightControls }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx(Default_1.Image, { alt: item.alt, className: "object-contain", height: height !== null && height !== void 0 ? height : 0, loading: "lazy", src: item.path, width: width !== null && width !== void 0 ? width : 0 }, index)); }) }), void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map