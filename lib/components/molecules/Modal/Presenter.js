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
var react_i18next_1 = require("react-i18next");
var react_transition_group_1 = require("react-transition-group");
var White_1 = require("../../atoms/Text/White");
var White_2 = require("../IconButton/White");
var White_3 = require("../LabelText/White");
var Modal_module_scss_1 = __importDefault(require("./Modal.module.scss"));
var Presenter = function (_a) {
    var children = _a.children, isVisible = _a.isVisible, _b = _a.maxWidth, maxWidth = _b === void 0 ? 400 : _b, onRequestClose = _a.onRequestClose, props = __rest(_a, ["children", "isVisible", "maxWidth", "onRequestClose"]);
    var t = react_i18next_1.useTranslation().t;
    var _c = react_1.useState(false), visible = _c[0], setVisible = _c[1];
    react_1.useEffect(function () {
        setVisible(isVisible);
    }, [isVisible]);
    react_1.useEffect(function () {
        if (visible) {
            window.addEventListener("keydown", handleKeydown);
        }
        else {
            window.removeEventListener("keydown", handleKeydown);
        }
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
                }, in: visible, timeout: 400 }, { children: jsx_runtime_1.jsx("div", __assign({ className: "bg-overlay fixed top-0 left-0 z-10 w-full h-full p-4 cursor-pointer", onClick: function () {
                        setVisible(false);
                        onRequestClose && onRequestClose();
                    } }, props, { children: jsx_runtime_1.jsxs("div", __assign({ className: "flex items-center" }, { children: [jsx_runtime_1.jsx(White_3.LabelTextWhite, { children: "ESC" }, void 0),
                            jsx_runtime_1.jsx(White_1.TextWhite, __assign({ className: "ml-1", size: "sm", weight: "bold" }, { children: t("を押して閉じる") }), void 0)] }), void 0) }), void 0) }), void 0),
            jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, __assign({ unmountOnExit: true, classNames: {
                    appear: Modal_module_scss_1.default.ModalInnerAppear,
                    enter: Modal_module_scss_1.default.ModalInnerEnter,
                    enterActive: Modal_module_scss_1.default.ModalInnerEnterActive,
                    enterDone: Modal_module_scss_1.default.ModalInnerEnterDone,
                    exit: Modal_module_scss_1.default.ModalInnerExit,
                    exitActive: Modal_module_scss_1.default.ModalInnerExitActive,
                }, in: visible, timeout: { enter: 400, exit: 400 } }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "fixed top-1/2 left-1/2 z-20 w-full p-8 bg-white rounded-lg cursor-auto shadow-xl", style: { maxWidth: maxWidth } }, { children: [jsx_runtime_1.jsx("div", { children: children }, void 0),
                        jsx_runtime_1.jsx(White_2.IconButtonWhite, { className: "-right-5 -top-5 absolute", iconName: "FiX", onClick: function () {
                                setVisible(false);
                                onRequestClose && onRequestClose();
                            }, radius: true }, void 0)] }), void 0) }), void 0)] }, void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map