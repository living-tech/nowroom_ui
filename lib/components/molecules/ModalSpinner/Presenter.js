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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var White_1 = require("../../atoms/Spinner/White");
var White_2 = require("../../atoms/Text/White");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        backdrop: {
            backgroundColor: "rgba(41, 38, 61, 0.8)",
            zIndex: theme.zIndex.drawer + 1,
        },
    });
});
var Presenter = function (_a) {
    var className = _a.className, isVisible = _a.isVisible, style = _a.style, title = _a.title;
    var classes = useStyles();
    return (jsx_runtime_1.jsxs(core_1.Backdrop, __assign({ className: "flex-col " + classes.backdrop + " " + className + "}", open: isVisible, style: style }, { children: [jsx_runtime_1.jsx(White_1.SpinnerWhite, { size: 42 }, void 0),
            title && (jsx_runtime_1.jsx(White_2.TextWhite, __assign({ className: "mt-4 tracking-wide", size: "md", weight: "bold" }, { children: title }), void 0))] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map