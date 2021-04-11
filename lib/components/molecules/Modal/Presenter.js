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
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var utils_1 = require("../../../utils");
var Purple_1 = require("../../atoms/Spinner/Purple");
var White_1 = require("../../atoms/Text/White");
var White_2 = require("../IconButton/White");
var White_3 = require("../LabelText/White");
var Modal_module_scss_1 = __importDefault(require("./Modal.module.scss"));
var Presenter = function (_a) {
    var children = _a.children, _b = _a.escLabel, escLabel = _b === void 0 ? "を押して閉じる" : _b, isVisible = _a.isVisible, loading = _a.loading, _c = _a.maxWidth, maxWidth = _c === void 0 ? 400 : _c, onRequestClose = _a.onRequestClose, renderFixedBottom = _a.renderFixedBottom, props = __rest(_a, ["children", "escLabel", "isVisible", "loading", "maxWidth", "onRequestClose", "renderFixedBottom"]);
    var _d = react_1.useState(false), visible = _d[0], setVisible = _d[1];
    var _e = react_1.useState(0), fixedBottomHeight = _e[0], setFixedBottomHeight = _e[1];
    var fixedBottomRef = react_1.useRef(null);
    react_1.useEffect(function () {
        setVisible(isVisible);
    }, [isVisible]);
    react_1.useEffect(function () {
        if (visible) {
            window.addEventListener("keydown", handleKeydown);
            utils_1.backfaceFixed(true);
        }
        else {
            window.removeEventListener("keydown", handleKeydown);
            utils_1.backfaceFixed(false);
        }
        if (!(fixedBottomRef === null || fixedBottomRef === void 0 ? void 0 : fixedBottomRef.current)) {
            return;
        }
        setFixedBottomHeight(fixedBottomRef.current.clientHeight);
    }, [visible]);
    var handleKeydown = react_1.useCallback(function (event) {
        if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
            event.preventDefault();
            setVisible(false);
            onRequestClose && onRequestClose();
            return false;
        }
        return true;
    }, []);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    enter: Modal_module_scss_1.default.ModalEnter,
                    enterActive: Modal_module_scss_1.default.ModalEnterActive,
                    exit: Modal_module_scss_1.default.ModalExit,
                    exitActive: Modal_module_scss_1.default.ModalExitActive,
                }, in: visible, timeout: 400 }, { children: jsx_runtime_1.jsx("div", __assign({ className: "fixed top-0 left-0 z-40 w-full h-full p-4 cursor-pointer bg-overlay", onClick: function () {
                        setVisible(false);
                        onRequestClose && onRequestClose();
                    } }, props, { children: jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center" }, { children: [jsx_runtime_1.jsx(White_3.LabelTextWhite, { children: "ESC" }, void 0),
                            jsx_runtime_1.jsx(White_1.TextWhite, __assign({ className: "ml-1", size: "sm", weight: "bold" }, { children: escLabel }), void 0)] }), void 0) }), void 0) }), void 0),
            jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    appear: Modal_module_scss_1.default.ModalInnerAppear,
                    enter: Modal_module_scss_1.default.ModalInnerEnter,
                    enterActive: Modal_module_scss_1.default.ModalInnerEnterActive,
                    enterDone: Modal_module_scss_1.default.ModalInnerEnterDone,
                    exit: Modal_module_scss_1.default.ModalInnerExit,
                    exitActive: Modal_module_scss_1.default.ModalInnerExitActive,
                }, in: visible, timeout: { enter: 400, exit: 400 } }, { children: jsx_runtime_1.jsx("div", __assign({ className: "fixed z-50 w-full top-1/2 left-1/2", style: { maxHeight: "calc(100vh - 128px)", maxWidth: maxWidth } }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "p-8 bg-white rounded-lg cursor-auto shadow-xl overflow-y-auto", style: { maxHeight: "calc(100vh - 128px)", maxWidth: maxWidth, paddingBottom: fixedBottomHeight + 32 } }, { children: [loading ? (jsx_runtime_1.jsx("span", __assign({ className: "absolute flex top-1/2 transform -translate-y-1/2" }, { children: jsx_runtime_1.jsx(Purple_1.SpinnerPurple, {}, void 0) }), void 0)) : (jsx_runtime_1.jsx("div", { children: children }, void 0)),
                            renderFixedBottom && (jsx_runtime_1.jsx("div", __assign({ ref: fixedBottomRef, className: "absolute bottom-0 left-0 w-full px-8 py-4 bg-gray-100 border-t border-gray-200 rounded-b-lg" }, { children: renderFixedBottom() }), void 0)),
                            jsx_runtime_1.jsx(White_2.IconButtonWhite, { className: "absolute -right-5 -top-5", iconName: "FiX", onClick: function () {
                                    setVisible(false);
                                    onRequestClose && onRequestClose();
                                }, radius: true }, void 0)] }), void 0) }), void 0) }), void 0)] }, void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map