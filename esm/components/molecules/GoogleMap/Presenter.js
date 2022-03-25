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
import { jsx as _jsx } from "react/jsx-runtime";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { MapPin } from "../../atoms/MapPin/Default";
var AnyReactComponent = function (_a) {
    var children = _a.children;
    return _jsx("div", { children: children }, void 0);
};
export var Presenter = function (_a) {
    var apiKey = _a.apiKey, className = _a.className, customizedMapOptions = _a.customizedMapOptions, _b = _a.height, height = _b === void 0 ? 400 : _b, latitude = _a.latitude, longitude = _a.longitude, style = _a.style;
    var createMapOptions = function () {
        return {
            fullscreenControl: false,
            mapTypeControl: false,
            mapTypeControlOptions: {
                position: "TOP_RIGHT",
            },
            panControl: false,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: false,
        };
    };
    var _c = useState(createMapOptions), mapOptionsState = _c[0], setMapOptions = _c[1];
    useEffect(function () {
        customizedMapOptions && setMapOptions(__assign({}, customizedMapOptions));
    }, [customizedMapOptions]);
    return (_jsx("div", __assign({ className: "" + className, style: __assign({ height: height }, style) }, { children: _jsx(GoogleMapReact, __assign({ bootstrapURLKeys: {
                key: apiKey,
            }, defaultCenter: {
                lat: latitude,
                lng: longitude,
            }, defaultZoom: 16, options: mapOptionsState }, { children: _jsx(AnyReactComponent, __assign({ lat: latitude, lng: longitude }, { children: _jsx(MapPin, { style: { marginLeft: -27, marginTop: -76 } }, void 0) }), void 0) }), void 0) }), void 0));
};
//# sourceMappingURL=Presenter.js.map