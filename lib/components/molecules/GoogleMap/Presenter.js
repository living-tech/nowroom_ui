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
var google_map_react_1 = __importDefault(require("google-map-react"));
var Default_1 = require("../../atoms/MapPin/Default");
var AnyReactComponent = function (_a) {
    var children = _a.children;
    return jsx_runtime_1.jsx("div", { children: children }, void 0);
};
var Presenter = function (_a) {
    var apiKey = _a.apiKey, className = _a.className, _b = _a.height, height = _b === void 0 ? 400 : _b, latitude = _a.latitude, longitude = _a.longitude, style = _a.style;
    var createMapOptions = function (maps) {
        return {
            fullscreenControl: false,
            mapTypeControl: false,
            mapTypeControlOptions: {
                position: maps.ControlPosition.TOP_RIGHT,
            },
            panControl: false,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: false,
        };
    };
    return (jsx_runtime_1.jsx("div", __assign({ className: "" + className, style: __assign({ height: height }, style) }, { children: jsx_runtime_1.jsx(google_map_react_1.default, __assign({ bootstrapURLKeys: {
                key: apiKey,
            }, defaultCenter: {
                lat: latitude,
                lng: longitude,
            }, defaultZoom: 16, options: createMapOptions }, { children: jsx_runtime_1.jsx(AnyReactComponent, __assign({ lat: latitude, lng: longitude }, { children: jsx_runtime_1.jsx(Default_1.MapPin, { style: { marginLeft: -27, marginTop: -76 } }, void 0) }), void 0) }), void 0) }), void 0));
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map