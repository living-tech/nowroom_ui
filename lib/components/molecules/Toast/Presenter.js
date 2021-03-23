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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Default_1 = require("../IconButton/Default");
var Default_2 = require("../MessageAlertBox/Default");
var Presenter = function (_a) {
    var className = _a.className, description = _a.description, isVisible = _a.isVisible, onRequestClose = _a.onRequestClose, _b = _a.position, position = _b === void 0 ? "rightBottom" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, style = _a.style, _d = _a.timeout, timeout = _d === void 0 ? 3000 : _d, title = _a.title, _e = _a.type, type = _e === void 0 ? "success" : _e;
    var _f = react_1.useState(false), visible = _f[0], setVisible = _f[1];
    var baseClass = "inline-flex transition-all ease-out duration-200 fixed";
    var positionClass = "";
    switch (position) {
        case "rightBottom":
            positionClass = "right-9 bottom-9";
            break;
        case "leftBottom":
            positionClass = "left-9 bottom-9";
            break;
    }
    var iconButtonColor;
    switch (type) {
        case "success":
            iconButtonColor = "purple";
            break;
        case "information":
            iconButtonColor = "purple";
            break;
        case "warning":
            iconButtonColor = "yellow";
            break;
        case "danger":
            iconButtonColor = "red";
            break;
    }
    react_1.useEffect(function () {
        setVisible(isVisible);
        if (isVisible) {
            setTimeout(function () {
                setVisible(false);
                onRequestClose && onRequestClose();
            }, timeout);
        }
    }, [isVisible]);
    return (jsx_runtime_1.jsxs("div", __assign({ className: baseClass + " " + positionClass + " " + className, style: __assign({ opacity: visible ? 1 : 0, transform: visible ? "translate(0, 0) scale(1)" : "translate(0, 16px) scale(0.9)", visibility: visible ? "visible" : "hidden" }, style) }, { children: [jsx_runtime_1.jsx(Default_2.MessageAlertBox, { shadow: true, block: false, description: description, size: size, title: title, type: type }, void 0),
            jsx_runtime_1.jsx(Default_1.IconButton, { className: "absolute -right-3 -top-3", color: iconButtonColor, iconName: "FiX", onClick: function () {
                    setVisible(false);
                    onRequestClose && onRequestClose();
                }, radius: true, size: "sm" }, void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map