"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resources = void 0;
var i18next_1 = __importDefault(require("i18next"));
var react_i18next_1 = require("react-i18next");
var ja_json_1 = __importDefault(require("./translation/ja.json"));
exports.resources = {
    ja: {
        translation: ja_json_1.default,
    },
};
i18next_1.default.use(react_i18next_1.initReactI18next).init({
    lng: "ja",
    resources: exports.resources,
});
//# sourceMappingURL=index.js.map