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
exports.MessageAlertBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Presenter_1 = require("./Presenter");
var MessageAlertBox = function (props) {
    return jsx_runtime_1.jsx(Presenter_1.Presenter, __assign({}, props), void 0);
};
exports.MessageAlertBox = MessageAlertBox;
//# sourceMappingURL=Default.js.map