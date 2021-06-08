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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Backdrop } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { SpinnerWhite } from "../../atoms/Spinner/White";
import { TextWhite } from "../../atoms/Text/White";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        backdrop: {
            backgroundColor: "rgba(41, 38, 61, 0.8)",
            zIndex: theme.zIndex.drawer + 1,
        },
    });
});
export var Presenter = function (_a) {
    var className = _a.className, isVisible = _a.isVisible, style = _a.style, title = _a.title;
    var classes = useStyles();
    return (_jsxs(Backdrop, __assign({ className: "flex-col " + classes.backdrop + " " + className + "}", open: isVisible, style: style }, { children: [_jsx(SpinnerWhite, { size: 42 }, void 0),
            title && (_jsx(TextWhite, __assign({ className: "mt-4 tracking-wide", size: "md", weight: "bold" }, { children: title }), void 0))] }), void 0));
};
//# sourceMappingURL=Presenter.js.map