"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backfaceFixed = void 0;
var scrollingElement = function () {
    var browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) {
        return document.scrollingElement;
    }
    if (browser.indexOf("webkit") > 0) {
        // @ts-ignore
        return document.body;
    }
    // @ts-ignore
    return document.documentElement;
};
var backfaceFixed = function (fixed) {
    var scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = fixed ? scrollbarWidth + "px" : "";
    var scrollY = fixed ? scrollingElement().scrollTop : parseInt(document.body.style.top || "0");
    var styles = {
        height: "100vh",
        left: "0",
        overflow: "hidden",
        position: "fixed",
        top: scrollY * -1 + "px",
        width: "100vw",
    };
    Object.keys(styles).forEach(function (key) {
        document.body.style[key] = fixed ? styles[key] : "";
    });
    if (!fixed)
        window.scrollTo(0, scrollY * -1);
};
exports.backfaceFixed = backfaceFixed;
//# sourceMappingURL=backfaceFixed.js.map