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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var MediumGray02_1 = require("../../atoms/Icon/MediumGray02");
var MediumGray02_2 = require("../../atoms/Text/MediumGray02");
var Purple_1 = require("../Button/Purple");
var White_1 = require("../Button/White");
var White_2 = require("../IconButton/White");
var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, className = _a.className, _c = _a.dragAndDropLabel, dragAndDropLabel = _c === void 0 ? "ドラッグ＆ドロップまたはファイル選択" : _c, _d = _a.fileSelectLabel, fileSelectLabel = _d === void 0 ? "ファイル選択" : _d, _e = _a.gallerySelectLabel, gallerySelectLabel = _e === void 0 ? "ギャラリーから選択" : _e, id = _a.id, imageUrls = _a.imageUrls, label = _a.label, name = _a.name, onFileChange = _a.onFileChange, onGalleryClick = _a.onGalleryClick, onHandleDrop = _a.onHandleDrop, onImageDeleteClick = _a.onImageDeleteClick, style = _a.style, props = __rest(_a, ["any", "anyLabel", "className", "dragAndDropLabel", "fileSelectLabel", "gallerySelectLabel", "id", "imageUrls", "label", "name", "onFileChange", "onGalleryClick", "onHandleDrop", "onImageDeleteClick", "style"]);
    var inputRef = react_1.useRef(null);
    var _f = react_1.useState(false), isDragging = _f[0], setIsDragging = _f[1];
    var handleDragOver = function (event) {
        event.preventDefault();
        setIsDragging(true);
    };
    var handleDragLeave = function (event) {
        event.preventDefault();
        setIsDragging(false);
    };
    var handleDrop = function (event) {
        event.preventDefault();
        setIsDragging(false);
        if (inputRef.current) {
            inputRef.current.files = event.dataTransfer.files;
        }
        onHandleDrop && onHandleDrop(event);
    };
    var borderClass = "";
    if (isDragging) {
        borderClass = "border border-purple border-dashed";
    }
    else {
        borderClass = "border border-gray-200";
    }
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (jsx_runtime_1.jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (jsx_runtime_1.jsx(MediumGray02_2.TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
            (imageUrls === null || imageUrls === void 0 ? void 0 : imageUrls.length) ? (jsx_runtime_1.jsx("div", __assign({ className: "mb-4 space-x-3" }, { children: imageUrls.map(function (imageUrl, index) { return (jsx_runtime_1.jsxs("div", __assign({ className: "relative inline-block", style: { height: 118, verticalAlign: "bottom", width: 118 } }, { children: [jsx_runtime_1.jsx("img", { alt: String(index), className: "object-cover rounded", loading: "lazy", src: imageUrl, style: { height: 118, width: 118 } }, void 0),
                        jsx_runtime_1.jsx(White_2.IconButtonWhite, { iconName: "FiX", onClick: function () { return onImageDeleteClick && onImageDeleteClick(imageUrl, index); }, radius: true, shadow: false, size: "sm", style: {
                                position: "absolute",
                                right: 4,
                                top: 4,
                            } }, void 0)] }), index)); }) }), void 0)) : (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0)),
            jsx_runtime_1.jsx("div", __assign({ onDragLeave: handleDragLeave, onDragOver: handleDragOver, onDrop: handleDrop }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-col justify-center px-32 py-8 rounded-md " + borderClass }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "flex justify-center items-center" }, { children: [jsx_runtime_1.jsx(MediumGray02_1.IconMediumGray02, { name: "FiImage" }, void 0),
                                jsx_runtime_1.jsx(MediumGray02_2.TextMediumGray02, __assign({ className: "ml-3", size: "sm", weight: "bold" }, { children: dragAndDropLabel }), void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "flex justify-center mt-4 space-x-3" }, { children: [onGalleryClick && (jsx_runtime_1.jsx(White_1.ButtonWhite, __assign({ onClick: onGalleryClick, size: "sm" }, { children: gallerySelectLabel }), void 0)),
                                jsx_runtime_1.jsx(Purple_1.ButtonPurple, __assign({ padding: false, size: "sm" }, { children: jsx_runtime_1.jsxs("label", __assign({ className: "py-2.5 px-8 cursor-pointer", htmlFor: id }, { children: [fileSelectLabel, jsx_runtime_1.jsx("input", { ref: inputRef, accept: "image/*", className: "sr-only", id: id, multiple: true, name: name, onChange: onFileChange, type: "file" }, void 0)] }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map