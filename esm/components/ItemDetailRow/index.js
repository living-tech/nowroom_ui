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
import { TextDarkGray02, TextRed } from "../atoms";
/*
 * 内訳表示に使用する行
 */
export var ItemDetailRow = function (_a) {
    var className = _a.className, left = _a.left, right = _a.right;
    return (_jsxs("div", __assign({ className: "flex justify-between mt-1 " + (className !== null && className !== void 0 ? className : "") }, { children: [_jsx(TextDarkGray02, __assign({ size: "xs" }, { children: left }), void 0),
            _jsx(TextDarkGray02, __assign({ size: "xs" }, { children: right }), void 0)] }), void 0));
};
export var ItemDetailRowRoomType = function (_a) {
    var className = _a.className, title = _a.title, value = _a.value;
    // 0以下は赤にする。
    if (value <= 0) {
        return (_jsx(ItemDetailRow, { className: className !== null && className !== void 0 ? className : "", left: title, right: _jsxs(TextRed, __assign({ size: "xs" }, { children: ["" + createRoomPriceUnit(value), " "] }), void 0) }, void 0));
    }
    return _jsx(ItemDetailRow, { className: className !== null && className !== void 0 ? className : "", left: title, right: "" + createRoomPriceUnit(value) }, void 0);
};
export var isMonthUnit = function (value) {
    if (value <= 100) {
        return true;
    }
    return false;
};
export var createRoomPriceUnit = function (value) {
    if (value === undefined || value === null || value === 0) {
        var num = 0;
        return "\u00A5" + num.toLocaleString("ja-JP");
    }
    return isMonthUnit(value) ? value + "\u30F6\u6708" : "\u00A5" + value.toLocaleString("ja-JP");
};
//# sourceMappingURL=index.js.map