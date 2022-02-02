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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_paginate_1 = __importDefault(require("react-paginate"));
var utils_1 = require("../../../utils");
var Default_1 = require("../../atoms/Icon/Default");
var Default_2 = require("../../atoms/Text/Default");
var Presenter = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, initialPage = _a.initialPage, marginPagesDisplayed = _a.marginPagesDisplayed, _c = _a.nextTextLabel, nextTextLabel = _c === void 0 ? "次のページ" : _c, onPageChange = _a.onPageChange, pageCount = _a.pageCount, pageRangeDisplayed = _a.pageRangeDisplayed, _d = _a.previousTextLabel, previousTextLabel = _d === void 0 ? "前のページ" : _d, _e = _a.withoutArrow, withoutArrow = _e === void 0 ? false : _e;
    var isMobile = utils_1.useBreakPoints().isMobile;
    var displayedNum = isMobile ? 1 : 2;
    return (jsx_runtime_1.jsx(react_paginate_1.default, { activeClassName: "active", breakClassName: "break-me", breakLabel: jsx_runtime_1.jsx(Default_1.Icon, { name: "FiMoreHorizontal", size: 20 }, void 0), containerClassName: "pagination " + className, disableInitialCallback: true, initialPage: initialPage - 1, marginPagesDisplayed: marginPagesDisplayed ? marginPagesDisplayed : displayedNum, nextClassName: withoutArrow ? "hidden" : undefined, nextLabel: jsx_runtime_1.jsxs("span", __assign({ className: "flex items-center" }, { children: [!isMobile && (jsx_runtime_1.jsx(Default_2.Text, __assign({ className: "mr-1", size: "sm", weight: "bold" }, { children: nextTextLabel }), void 0)),
                jsx_runtime_1.jsx("span", { children: jsx_runtime_1.jsx(Default_1.Icon, { name: "FiChevronRight", size: 14 }, void 0) }, void 0)] }), void 0), onPageChange: function (_a) {
            var selected = _a.selected;
            return onPageChange && onPageChange(selected + 1);
        }, pageCount: pageCount, pageRangeDisplayed: pageRangeDisplayed ? pageRangeDisplayed : displayedNum, previousClassName: withoutArrow ? "hidden" : undefined, previousLabel: jsx_runtime_1.jsxs("span", __assign({ className: "flex items-center" }, { children: [jsx_runtime_1.jsx("span", { children: jsx_runtime_1.jsx(Default_1.Icon, { name: "FiChevronLeft", size: 14 }, void 0) }, void 0),
                !isMobile && (jsx_runtime_1.jsx(Default_2.Text, __assign({ className: "ml-1", size: "sm", weight: "bold" }, { children: previousTextLabel }), void 0))] }), void 0) }, void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map