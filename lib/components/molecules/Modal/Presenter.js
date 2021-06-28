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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var window_size_1 = require("@react-hook/window-size");
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var utils_1 = require("../../../utils");
var Purple_1 = require("../../atoms/Spinner/Purple");
var White_1 = require("../../atoms/Text/White");
var White_2 = require("../IconButton/White");
var White_3 = require("../LabelText/White");
var Modal_module_scss_1 = __importDefault(require("./Modal.module.scss"));
var Presenter = function (_a) {
    var children = _a.children, _b = _a.closeButtonPosition, closeButtonPosition = _b === void 0 ? "top" : _b, _c = _a.escLabel, escLabel = _c === void 0 ? "を押して閉じる" : _c, isVisible = _a.isVisible, loading = _a.loading, _d = _a.maxWidth, maxWidth = _d === void 0 ? 400 : _d, onRequestClose = _a.onRequestClose, _e = _a.paddingHorizontal, paddingHorizontal = _e === void 0 ? true : _e, renderFixedBottom = _a.renderFixedBottom, props = __rest(_a, ["children", "closeButtonPosition", "escLabel", "isVisible", "loading", "maxWidth", "onRequestClose", "paddingHorizontal", "renderFixedBottom"]);
    var _f = utils_1.useBreakPoints(), isDesktop = _f.isDesktop, isMobile = _f.isMobile;
    var windowWidth = window_size_1.useWindowWidth();
    var _g = react_1.useState(false), visible = _g[0], setVisible = _g[1];
    var _h = react_1.useState(0), fixedBottomHeight = _h[0], setFixedBottomHeight = _h[1];
    var fixedBottomRef = react_1.useRef(null);
    var paddingHorizontalClass = "";
    if (paddingHorizontal) {
        paddingHorizontalClass = "px-4 md:px-8";
    }
    var modalSizeClass = "w-full rounded";
    if (windowWidth <= maxWidth) {
        modalSizeClass = "w-full h-full md:h-auto";
    }
    var handleKeydown = react_1.useCallback(function (event) {
        if (!isDesktop) {
            return true;
        }
        if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
            event.preventDefault();
            setVisible(false);
            onRequestClose && onRequestClose();
            return false;
        }
        return true;
    }, []);
    react_1.useEffect(function () {
        setVisible(isVisible);
    }, [isVisible]);
    react_1.useEffect(function () {
        if (visible) {
            window.addEventListener("keydown", handleKeydown);
            // backfaceFixed(true);
        }
        else {
            window.removeEventListener("keydown", handleKeydown);
            // backfaceFixed(false);
        }
        if (!(fixedBottomRef === null || fixedBottomRef === void 0 ? void 0 : fixedBottomRef.current)) {
            return;
        }
        setFixedBottomHeight(fixedBottomRef.current.clientHeight);
    }, [visible]);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    enter: Modal_module_scss_1.default.ModalEnter,
                    enterActive: Modal_module_scss_1.default.ModalEnterActive,
                    exit: Modal_module_scss_1.default.ModalExit,
                    exitActive: Modal_module_scss_1.default.ModalExitActive,
                }, in: visible, timeout: 400 }, { children: jsx_runtime_1.jsx("div", __assign({ className: "fixed top-0 left-0 z-40 w-full h-full p-4 cursor-pointer bg-overlay", onClick: function () {
                        setVisible(false);
                        onRequestClose && onRequestClose();
                    } }, props, { children: !isMobile && (jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center" }, { children: [jsx_runtime_1.jsx(White_3.LabelTextWhite, { children: "ESC" }, void 0),
                            jsx_runtime_1.jsx(White_1.TextWhite, __assign({ className: "ml-1", size: "sm", weight: "bold" }, { children: escLabel }), void 0)] }), void 0)) }), void 0) }), void 0),
            jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    appear: Modal_module_scss_1.default.ModalInnerAppear,
                    enter: Modal_module_scss_1.default.ModalInnerEnter,
                    enterActive: Modal_module_scss_1.default.ModalInnerEnterActive,
                    enterDone: Modal_module_scss_1.default.ModalInnerEnterDone,
                    exit: Modal_module_scss_1.default.ModalInnerExit,
                    exitActive: Modal_module_scss_1.default.ModalInnerExitActive,
                }, in: visible, timeout: { enter: 400, exit: 400 } }, { children: jsx_runtime_1.jsx("div", __assign({ className: "fixed z-50 top-1/2 left-1/2 " + modalSizeClass, style: { maxHeight: isMobile && windowWidth <= maxWidth ? undefined : "calc(100vh - 128px)", maxWidth: maxWidth } }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "transition-all ease-out duration-200 py-10 md:py-8 bg-white md:rounded-lg cursor-auto shadow-xl overflow-y-auto " + modalSizeClass + " " + paddingHorizontalClass, style: {
                            maxHeight: isMobile && windowWidth <= maxWidth ? undefined : "calc(100vh - 128px)",
                            maxWidth: maxWidth,
                            paddingBottom: fixedBottomHeight + (isMobile ? 40 : 32) + (closeButtonPosition === "bottom" ? 62 : 0),
                        } }, { children: [loading ? (jsx_runtime_1.jsx("span", __assign({ className: "absolute flex top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" }, { children: jsx_runtime_1.jsx(Purple_1.SpinnerPurple, {}, void 0) }), void 0)) : (jsx_runtime_1.jsx("div", { children: children }, void 0)),
                            renderFixedBottom && !loading && (jsx_runtime_1.jsx("div", __assign({ ref: fixedBottomRef, className: "absolute bottom-0 left-0 w-full px-4 py-3 bg-gray-100 border-t border-gray-200 md:px-8 md:py-4 md:rounded-b-lg" }, { children: renderFixedBottom() }), void 0)),
                            jsx_runtime_1.jsx(White_2.IconButtonWhite, { className: "right-4 md:-right-5 md:-top-5", iconName: "FiX", onClick: function () {
                                    setVisible(false);
                                    onRequestClose && onRequestClose();
                                }, radius: true, shadow: false, style: isMobile
                                    ? {
                                        bottom: closeButtonPosition === "bottom" ? fixedBottomHeight + 16 : undefined,
                                        position: "absolute",
                                        top: closeButtonPosition === "top" ? 16 : undefined,
                                    }
                                    : { position: "absolute" } }, void 0)] }), void 0) }), void 0) }), void 0)] }, void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map