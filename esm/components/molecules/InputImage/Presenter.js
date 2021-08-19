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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { IconMediumGray02 } from "../../atoms/Icon/MediumGray02";
import { TextMediumGray02 } from "../../atoms/Text/MediumGray02";
import { TextPurple } from "../../atoms/Text/Purple";
import { ButtonPurple } from "../Button/Purple";
import { ButtonWhite } from "../Button/White";
import { IconButtonWhite } from "../IconButton/White";
export var Presenter = function (_a) {
    var any = _a.any, _b = _a.anyLabel, anyLabel = _b === void 0 ? "任意" : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "gray" : _c, className = _a.className, createRef = _a.createRef, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.displayFileChangeButton, displayFileChangeButton = _e === void 0 ? false : _e, _f = _a.dragAndDropFileSelectLabel, dragAndDropFileSelectLabel = _f === void 0 ? "ファイル選択" : _f, _g = _a.dragAndDropLabel, dragAndDropLabel = _g === void 0 ? "ドラッグ＆ドロップまたは" : _g, _h = _a.fileSelectLabel, fileSelectLabel = _h === void 0 ? "ファイル選択" : _h, _j = _a.gallerySelectLabel, gallerySelectLabel = _j === void 0 ? "ギャラリーから選択" : _j, id = _a.id, imageUrls = _a.imageUrls, label = _a.label, name = _a.name, onFileChange = _a.onFileChange, onGalleryClick = _a.onGalleryClick, onHandleDrop = _a.onHandleDrop, onImageDeleteClick = _a.onImageDeleteClick, style = _a.style, props = __rest(_a, ["any", "anyLabel", "backgroundColor", "className", "createRef", "disabled", "displayFileChangeButton", "dragAndDropFileSelectLabel", "dragAndDropLabel", "fileSelectLabel", "gallerySelectLabel", "id", "imageUrls", "label", "name", "onFileChange", "onGalleryClick", "onHandleDrop", "onImageDeleteClick", "style"]);
    var _k = useState(false), isDragging = _k[0], setIsDragging = _k[1];
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
        onHandleDrop && onHandleDrop(event);
    };
    var borderClass = "";
    if (isDragging && !disabled) {
        borderClass = "border border-purple border-dashed";
    }
    else {
        borderClass = "border border-gray-200";
    }
    var backgroundColorClass = "bg-white";
    if (backgroundColor === "gray") {
        backgroundColorClass = "bg-gray-50";
    }
    return (_jsxs("div", __assign({ className: className, style: style }, props, { children: [label && (_jsxs("label", __assign({ className: "block mb-3 text-sm font-bold text-gray-700 cursor-pointer", htmlFor: id }, { children: [label, any && (_jsx(TextMediumGray02, __assign({ className: "ml-3", size: "sm", tag: "span" }, { children: anyLabel }), void 0))] }), void 0)),
            (imageUrls === null || imageUrls === void 0 ? void 0 : imageUrls.length) ? (_jsx("div", __assign({ className: "mb-4 space-x-3" }, { children: imageUrls.map(function (imageUrl, index) { return (_jsxs("div", __assign({ className: "relative inline-block", style: { height: 118, verticalAlign: "bottom", width: 118 } }, { children: [_jsx("img", { alt: String(index), className: "object-cover rounded", loading: "lazy", src: imageUrl, style: { height: 118, width: 118 } }, void 0),
                        _jsx(IconButtonWhite, { iconName: "FiX", onClick: function () { return onImageDeleteClick && onImageDeleteClick(imageUrl, index); }, radius: true, shadow: false, size: "sm", style: {
                                position: "absolute",
                                right: 4,
                                top: 4,
                            } }, void 0)] }), index)); }) }), void 0)) : (_jsx(_Fragment, {}, void 0)),
            _jsx("div", __assign({ onDragLeave: handleDragLeave, onDragOver: handleDragOver, onDrop: handleDrop }, { children: _jsxs("div", __assign({ className: "flex flex-col justify-center px-32 py-8 rounded-md " + borderClass + " " + backgroundColorClass }, { children: [_jsxs("div", __assign({ className: "flex justify-center items-center" }, { children: [_jsx(IconMediumGray02, { name: "FiImage" }, void 0),
                                _jsx(TextMediumGray02, __assign({ className: "ml-3", size: "sm", weight: "bold" }, { children: dragAndDropLabel }), void 0),
                                disabled ? (_jsx(TextMediumGray02, __assign({ className: "px-2", size: "sm", weight: "bold" }, { children: dragAndDropFileSelectLabel }), void 0)) : (_jsx(TextPurple, __assign({ size: "sm", weight: "bold" }, { children: _jsxs("label", __assign({ className: "py-2.5 px-2 cursor-pointer hover:underline", htmlFor: id }, { children: [dragAndDropFileSelectLabel, _jsx("input", { ref: createRef, accept: "image/png,image/jpeg", className: "sr-only", disabled: disabled, id: id, multiple: true, name: name, onChange: onFileChange, type: "file" }, void 0)] }), void 0) }), void 0))] }), void 0),
                        _jsxs("div", __assign({ className: "flex justify-center space-x-3" }, { children: [onGalleryClick && (_jsx(ButtonWhite, __assign({ className: "mt-4", onClick: onGalleryClick, size: "sm" }, { children: gallerySelectLabel }), void 0)),
                                displayFileChangeButton && (_jsx(ButtonPurple, __assign({ className: "pt-4", disabled: disabled, padding: false, size: "sm" }, { children: _jsxs("label", __assign({ className: "py-2.5 px-8 cursor-pointer", htmlFor: id }, { children: [fileSelectLabel, _jsx("input", { ref: createRef, accept: "image/png,image/jpeg", className: "sr-only", disabled: disabled, id: id, multiple: true, name: name, onChange: onFileChange, type: "file" }, void 0)] }), void 0) }), void 0))] }), void 0)] }), void 0) }), void 0)] }), void 0));
};
//# sourceMappingURL=Presenter.js.map