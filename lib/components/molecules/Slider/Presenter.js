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
var nuka_carousel_1 = __importDefault(require("nuka-carousel"));
var react_1 = require("react");
var layouts_1 = require("../../../constnats/layouts");
var BlackOpacity_1 = require("../LabelText/BlackOpacity");
var Presenter = function (_a) {
    var autoplay = _a.autoplay, className = _a.className, items = _a.items, style = _a.style;
    var containerRef = react_1.useRef(null);
    var _b = react_1.useState(), width = _b[0], setWidth = _b[1];
    var _c = react_1.useState(), height = _c[0], setHeight = _c[1];
    var renderTopRightControls = function (_a) {
        var currentSlide = _a.currentSlide, slideCount = _a.slideCount;
        return (jsx_runtime_1.jsx("div", __assign({ className: "p-4" }, { children: jsx_runtime_1.jsx(BlackOpacity_1.LabelTextBlackOpacity, { children: currentSlide + 1 + "/" + slideCount }, void 0) }), void 0));
    };
    var renderBottomCenterControls = function (_a) {
        var currentSlide = _a.currentSlide, slideCount = _a.slideCount;
        return (jsx_runtime_1.jsx("div", __assign({ className: "bg-black-opacity relative inline-flex h-1 mb-1 rounded", style: {
                width: layouts_1.carouselPaginationWidth,
            } }, { children: jsx_runtime_1.jsx("div", { className: "absolute top-0 h-1 transition-all duration-200 ease-out bg-purple-200 rounded-full", style: {
                    left: (layouts_1.carouselPaginationWidth / slideCount) * currentSlide,
                    width: layouts_1.carouselPaginationWidth / slideCount,
                } }, void 0) }), void 0));
    };
    react_1.useEffect(function () {
        if (containerRef && containerRef.current) {
            var width_1 = containerRef.current.offsetWidth;
            setWidth(width_1);
            setHeight((width_1 / 4) * 3);
        }
    }, [containerRef]);
    return (jsx_runtime_1.jsx("div", __assign({ ref: containerRef, className: "" + className, style: style }, { children: jsx_runtime_1.jsx(nuka_carousel_1.default, __assign({ disableEdgeSwiping: true, wrapAround: true, autoplay: autoplay, height: height ? height + "px" : undefined, renderBottomCenterControls: renderBottomCenterControls, renderCenterLeftControls: null, renderCenterRightControls: null, renderTopRightControls: renderTopRightControls }, { children: items.map(function (item, index) { return (jsx_runtime_1.jsx("img", { alt: item.alt, className: "object-contain", src: item.path, style: { height: height, width: width } }, index)); }) }), void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map