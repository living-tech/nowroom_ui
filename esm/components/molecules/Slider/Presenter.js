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
import { jsx as _jsx } from "react/jsx-runtime";
import { useWindowWidth } from "@react-hook/window-size";
import Carousel from "nuka-carousel";
import { useEffect, useRef, useState } from "react";
import { carouselPaginationWidth } from "../../../constnats";
import { Image } from "../../atoms/Image/Default";
import { LabelTextBlackOpacity } from "../LabelText/BlackOpacity";
export var Presenter = function (_a) {
    var autoplay = _a.autoplay, className = _a.className, items = _a.items, style = _a.style;
    var containerRef = useRef(null);
    var windowWidth = useWindowWidth();
    var _b = useState(), width = _b[0], setWidth = _b[1];
    var _c = useState(), height = _c[0], setHeight = _c[1];
    var renderTopRightControls = function (_a) {
        var currentSlide = _a.currentSlide, slideCount = _a.slideCount;
        return (_jsx("div", __assign({ className: "p-4" }, { children: _jsx(LabelTextBlackOpacity, { children: currentSlide + 1 + "/" + slideCount }, void 0) }), void 0));
    };
    var renderBottomCenterControls = function (_a) {
        var currentSlide = _a.currentSlide, slideCount = _a.slideCount;
        return (_jsx("div", __assign({ className: "relative inline-flex h-1 mb-3 rounded bg-black-opacity", style: {
                width: carouselPaginationWidth,
            } }, { children: _jsx("div", { className: "absolute top-0 h-1 bg-purple-200 rounded-full transition-all duration-200 ease-out", style: {
                    left: (carouselPaginationWidth / slideCount) * currentSlide,
                    width: carouselPaginationWidth / slideCount,
                } }, void 0) }), void 0));
    };
    useEffect(function () {
        if (containerRef && containerRef.current) {
            var width_1 = containerRef.current.offsetWidth;
            setWidth(width_1);
            setHeight((width_1 / 4) * 3);
        }
    }, [containerRef, windowWidth]);
    return (_jsx("div", __assign({ ref: containerRef, className: "" + className, style: style }, { children: _jsx(Carousel, __assign({ disableEdgeSwiping: true, wrapAround: true, autoplay: autoplay, height: height ? height + "px" : undefined, renderBottomCenterControls: renderBottomCenterControls, renderCenterLeftControls: null, renderCenterRightControls: null, renderTopRightControls: renderTopRightControls }, { children: items.map(function (item, index) { return (_jsx(Image, { alt: item.alt, className: "object-contain", height: height !== null && height !== void 0 ? height : 0, loading: "lazy", src: item.path, width: width !== null && width !== void 0 ? width : 0 }, index)); }) }), void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map