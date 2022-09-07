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
exports.createRoomPriceUnit = exports.ItemDetailRowRoomType = exports.ItemDetailRow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var atoms_1 = require("../atoms");
/*
 * 内訳表示に使用する行
 */
var ItemDetailRow = function (_a) {
    var className = _a.className, left = _a.left, right = _a.right;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "flex justify-between mt-1 " + (className !== null && className !== void 0 ? className : "") }, { children: [jsx_runtime_1.jsx(atoms_1.TextDarkGray02, __assign({ size: "xs" }, { children: left }), void 0),
            jsx_runtime_1.jsx(atoms_1.TextDarkGray02, __assign({ size: "xs" }, { children: right }), void 0)] }), void 0));
};
exports.ItemDetailRow = ItemDetailRow;
var ItemDetailRowRoomType = function (_a) {
    var className = _a.className, title = _a.title, _b = _a.unitPattern, unitPattern = _b === void 0 ? "currency" : _b, value = _a.value;
    // 0以下は赤にする。
    if (value <= 0) {
        return (jsx_runtime_1.jsx(exports.ItemDetailRow, { className: className !== null && className !== void 0 ? className : "", left: title, right: jsx_runtime_1.jsx(atoms_1.TextRed, __assign({ size: "xs" }, { children: "" + exports.createRoomPriceUnit(value, unitPattern) }), void 0) }, void 0));
    }
    return (jsx_runtime_1.jsx(exports.ItemDetailRow, { className: className !== null && className !== void 0 ? className : "", left: title, right: "" + exports.createRoomPriceUnit(value, unitPattern) }, void 0));
};
exports.ItemDetailRowRoomType = ItemDetailRowRoomType;
var createRoomPriceUnit = function (value, unitPattern) {
    if (value === undefined || value === null || value === 0) {
        return "\u00A50";
    }
    switch (unitPattern) {
        case "monthAndCurrency":
            return value <= 100 ? value + "\u30F6\u6708" : "\u00A5" + value.toLocaleString("ja-JP");
        case "monthAndPercentAndCurrency":
            if (value >= 1 && value <= 99) {
                return value + "\u30F6\u6708";
            }
            if (value >= 101 && value <= 200) {
                return value - 100 + "%";
            }
            return "\u00A5" + value.toLocaleString("ja-JP");
        case "percentAndCurrency":
            if (value >= 1002) {
                return "\u00A5" + value.toLocaleString("ja-JP");
            }
            return value + "%";
        default:
            return "\u00A5" + value.toLocaleString("ja-JP");
    }
};
exports.createRoomPriceUnit = createRoomPriceUnit;
//# sourceMappingURL=index.js.map