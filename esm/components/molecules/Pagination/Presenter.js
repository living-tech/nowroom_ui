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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ReactPaginate from "react-paginate";
import { Icon } from "../../atoms/Icon/Default";
import { Text } from "../../atoms/Text/Default";
export var Presenter = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, initialPage = _a.initialPage, _c = _a.nextTextLabel, nextTextLabel = _c === void 0 ? "次のページ" : _c, onPageChange = _a.onPageChange, pageCount = _a.pageCount, _d = _a.previousTextLabel, previousTextLabel = _d === void 0 ? "前のページ" : _d;
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "md:hidden" }, { children: _jsx(ReactPaginate, { activeClassName: "active", breakClassName: "break-me", breakLabel: _jsx(Icon, { name: "FiMoreHorizontal", size: 20 }, void 0), containerClassName: "pagination " + className, disableInitialCallback: true, initialPage: initialPage - 1, marginPagesDisplayed: 1, nextClassName: nextTextLabel === "" ? "hidden" : undefined, nextLabel: _jsxs("span", __assign({ className: "flex items-center" }, { children: [_jsx(Text, __assign({ className: "hidden mr-1 md:block", size: "sm", weight: "bold" }, { children: nextTextLabel }), void 0),
                            _jsx("span", { children: _jsx(Icon, { name: "FiChevronRight", size: 14 }, void 0) }, void 0)] }), void 0), onPageChange: function (_a) {
                        var selected = _a.selected;
                        return onPageChange && onPageChange(selected + 1);
                    }, pageCount: pageCount, pageRangeDisplayed: 1, previousClassName: previousTextLabel === "" ? "hidden" : undefined, previousLabel: _jsxs("span", __assign({ className: "flex items-center" }, { children: [_jsx("span", { children: _jsx(Icon, { name: "FiChevronLeft", size: 14 }, void 0) }, void 0),
                            _jsx(Text, __assign({ className: "hidden ml-1 md:block", size: "sm", weight: "bold" }, { children: previousTextLabel }), void 0)] }), void 0) }, void 0) }), void 0),
            _jsx("div", __assign({ className: "hidden md:block" }, { children: _jsx(ReactPaginate, { activeClassName: "active", breakClassName: "break-me", breakLabel: _jsx(Icon, { name: "FiMoreHorizontal", size: 20 }, void 0), containerClassName: "pagination " + className, disableInitialCallback: true, initialPage: initialPage - 1, marginPagesDisplayed: 2, nextClassName: nextTextLabel === "" ? "hidden" : undefined, nextLabel: _jsxs("span", __assign({ className: "flex items-center" }, { children: [_jsx(Text, __assign({ className: "hidden mr-1 md:block", size: "sm", weight: "bold" }, { children: nextTextLabel }), void 0),
                            _jsx("span", { children: _jsx(Icon, { name: "FiChevronRight", size: 14 }, void 0) }, void 0)] }), void 0), onPageChange: function (_a) {
                        var selected = _a.selected;
                        return onPageChange && onPageChange(selected + 1);
                    }, pageCount: pageCount, pageRangeDisplayed: 2, previousClassName: previousTextLabel === "" ? "hidden" : undefined, previousLabel: _jsxs("span", __assign({ className: "flex items-center" }, { children: [_jsx("span", { children: _jsx(Icon, { name: "FiChevronLeft", size: 14 }, void 0) }, void 0),
                            _jsx(Text, __assign({ className: "hidden ml-1 md:block", size: "sm", weight: "bold" }, { children: previousTextLabel }), void 0)] }), void 0) }, void 0) }), void 0)] }, void 0));
};
//# sourceMappingURL=Presenter.js.map