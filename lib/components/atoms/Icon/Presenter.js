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
var ai_1 = require("react-icons/ai");
var bi_1 = require("react-icons/bi");
var fa_1 = require("react-icons/fa");
var fi_1 = require("react-icons/fi");
var hi_1 = require("react-icons/hi");
var io_1 = require("react-icons/io");
var AddBuilding_1 = require("./svg/AddBuilding");
var AddRoom_1 = require("./svg/AddRoom");
var AirCon_1 = require("./svg/AirCon");
var AppListing_1 = require("./svg/AppListing");
var AutoLock_1 = require("./svg/AutoLock");
var Bath_1 = require("./svg/Bath");
var Bed_1 = require("./svg/Bed");
var Building_1 = require("./svg/Building");
var Desk_1 = require("./svg/Desk");
var Dryer_1 = require("./svg/Dryer");
var Guitar_1 = require("./svg/Guitar");
var Microwave_1 = require("./svg/Microwave");
var NoSmoking_1 = require("./svg/NoSmoking");
var Pet_1 = require("./svg/Pet");
var Refrigerator_1 = require("./svg/Refrigerator");
var Room_1 = require("./svg/Room");
var StockSettings_1 = require("./svg/StockSettings");
var WashMachine_1 = require("./svg/WashMachine");
var Wifi_1 = require("./svg/Wifi");
var Woman_1 = require("./svg/Woman");
var currentTypes = {
    AddBuilding: "stroke",
    AddRoom: "stroke",
    AirCon: "stroke",
    AppListing: "stroke",
    AutoLock: "stroke",
    Bath: "stroke",
    Bed: "stroke",
    Building: "stroke",
    Desk: "stroke",
    Dryer: "stroke",
    Guitar: "stroke",
    Microwave: "stroke",
    NoSmoking: "stroke",
    Pet: "stroke",
    Refrigerator: "stroke",
    Room: "stroke",
    StockSettings: "stroke",
    WashMachine: "stroke",
    Wifi: "fill",
    Woman: "stroke",
};
var Presenter = function (_a) {
    var propsClassName = _a.className, color = _a.color, currentType = _a.currentType, name = _a.name, _b = _a.size, size = _b === void 0 ? "md" : _b, props = __rest(_a, ["className", "color", "currentType", "name", "size"]);
    var currentClass = "";
    switch (currentType) {
        case "fill":
            currentClass = "fill-current";
            break;
        case "stroke":
            currentClass = "stroke-current";
            break;
        default:
            currentClass = currentTypes[name] === "both" ? "fill-current stroke-current" : currentTypes[name] + "-current";
            break;
    }
    var colorClass = "";
    switch (color) {
        case "black":
            colorClass = "text-black";
            break;
        case "darkGray02":
            colorClass = "text-gray-700";
            break;
        case "darkGray01":
            colorClass = "text-gray-600";
            break;
        case "mediumGray02":
            colorClass = "text-gray-500";
            break;
        case "mediumGray01":
            colorClass = "text-gray-400";
            break;
        case "lightGray02":
            colorClass = "text-gray-300";
            break;
        case "lightGray01":
            colorClass = "text-gray-200";
            break;
        case "white":
            colorClass = "text-white";
            break;
        case "purple":
            colorClass = "text-purple";
            break;
        case "cyan":
            colorClass = "text-cyan";
            break;
        case "pink":
            colorClass = "text-pink";
            break;
        case "yellow":
            colorClass = "text-yellow";
            break;
        case "red":
            colorClass = "text-red";
            break;
        case "facebook":
            colorClass = "text-facebook";
            break;
        case "twitter":
            colorClass = "text-twitter";
            break;
        case "line":
            colorClass = "text-line";
            break;
        default:
            colorClass = "text-current";
    }
    var sizePx = 24;
    switch (size) {
        case "xs":
            sizePx = 10;
            break;
        case "sm":
            sizePx = 16;
            break;
        case "md":
            sizePx = 24;
            break;
        case "lg":
            sizePx = 32;
            break;
        case "xl":
            sizePx = 40;
            break;
        default:
            sizePx = size;
    }
    var className = currentClass + " " + colorClass + " " + propsClassName;
    switch (name) {
        case "AirCon":
            return jsx_runtime_1.jsx(AirCon_1.AirCon, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "AutoLock":
            return jsx_runtime_1.jsx(AutoLock_1.AutoLock, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Bath":
            return jsx_runtime_1.jsx(Bath_1.Bath, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Bed":
            return jsx_runtime_1.jsx(Bed_1.Bed, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Desk":
            return jsx_runtime_1.jsx(Desk_1.Desk, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Dryer":
            return jsx_runtime_1.jsx(Dryer_1.Dryer, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Guitar":
            return jsx_runtime_1.jsx(Guitar_1.Guitar, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Microwave":
            return jsx_runtime_1.jsx(Microwave_1.Microwave, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "NoSmoking":
            return jsx_runtime_1.jsx(NoSmoking_1.NoSmoking, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 1 }, props.style) }, props), void 0);
        case "Pet":
            return jsx_runtime_1.jsx(Pet_1.Pet, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Refrigerator":
            return jsx_runtime_1.jsx(Refrigerator_1.Refrigerator, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "WashMachine":
            return jsx_runtime_1.jsx(WashMachine_1.WashMachine, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Wifi":
            return jsx_runtime_1.jsx(Wifi_1.Wifi, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Woman":
            return jsx_runtime_1.jsx(Woman_1.Woman, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "AddBuilding":
            return jsx_runtime_1.jsx(AddBuilding_1.AddBuilding, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "AddRoom":
            return jsx_runtime_1.jsx(AddRoom_1.AddRoom, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "AppListing":
            return jsx_runtime_1.jsx(AppListing_1.AppListing, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Building":
            return jsx_runtime_1.jsx(Building_1.Building, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Room":
            return jsx_runtime_1.jsx(Room_1.Room, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "StockSettings":
            return (jsx_runtime_1.jsx(StockSettings_1.StockSettings, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0));
        case "BiYen":
            return jsx_runtime_1.jsx(bi_1.BiYen, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertCircle":
            return jsx_runtime_1.jsx(fi_1.FiAlertCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDown":
            return jsx_runtime_1.jsx(fi_1.FiArrowDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowLeft":
            return jsx_runtime_1.jsx(fi_1.FiArrowLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowRight":
            return jsx_runtime_1.jsx(fi_1.FiArrowRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCalendar":
            return jsx_runtime_1.jsx(fi_1.FiCalendar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheckCircle":
            return jsx_runtime_1.jsx(fi_1.FiCheckCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheck":
            return jsx_runtime_1.jsx(fi_1.FiCheck, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronDown":
            return jsx_runtime_1.jsx(fi_1.FiChevronDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronLeft":
            return jsx_runtime_1.jsx(fi_1.FiChevronLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronRight":
            return jsx_runtime_1.jsx(fi_1.FiChevronRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronUp":
            return jsx_runtime_1.jsx(fi_1.FiChevronUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCopy":
            return jsx_runtime_1.jsx(fi_1.FiCopy, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFacebook":
            return jsx_runtime_1.jsx(fi_1.FiFacebook, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilter":
            return jsx_runtime_1.jsx(fi_1.FiFilter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGrid":
            return jsx_runtime_1.jsx(fi_1.FiGrid, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHeart":
            return jsx_runtime_1.jsx(fi_1.FiHeart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiImage":
            return jsx_runtime_1.jsx(fi_1.FiImage, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInfo":
            return jsx_runtime_1.jsx(fi_1.FiInfo, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInstagram":
            return jsx_runtime_1.jsx(fi_1.FiInstagram, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMapPin":
            return jsx_runtime_1.jsx(fi_1.FiMapPin, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMenu":
            return jsx_runtime_1.jsx(fi_1.FiMenu, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMessageCircle":
            return jsx_runtime_1.jsx(fi_1.FiMessageCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinus":
            return jsx_runtime_1.jsx(fi_1.FiMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoreHorizontal":
            return jsx_runtime_1.jsx(fi_1.FiMoreHorizontal, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneCall":
            return jsx_runtime_1.jsx(fi_1.FiPhoneCall, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlus":
            return jsx_runtime_1.jsx(fi_1.FiPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSearch":
            return jsx_runtime_1.jsx(fi_1.FiSearch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSliders":
            return jsx_runtime_1.jsx(fi_1.FiSliders, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTwitter":
            return jsx_runtime_1.jsx(fi_1.FiTwitter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUser":
            return jsx_runtime_1.jsx(fi_1.FiUser, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiX":
            return jsx_runtime_1.jsx(fi_1.FiX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZap":
            return jsx_runtime_1.jsx(fi_1.FiZap, __assign({ className: className, size: sizePx }, props), void 0);
        case "FaLine":
            return jsx_runtime_1.jsx(fa_1.FaLine, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoFacebook":
            return jsx_runtime_1.jsx(io_1.IoLogoFacebook, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoTwitter":
            return jsx_runtime_1.jsx(io_1.IoLogoTwitter, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoInstagram":
            return jsx_runtime_1.jsx(io_1.IoLogoInstagram, __assign({ className: className, size: sizePx }, props), void 0);
        case "AiOutlineQuestionCircle":
            return jsx_runtime_1.jsx(ai_1.AiOutlineQuestionCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "HiSortDescending":
            return jsx_runtime_1.jsx(hi_1.HiSortDescending, __assign({ className: className, size: sizePx }, props), void 0);
        default:
            return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0);
    }
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map