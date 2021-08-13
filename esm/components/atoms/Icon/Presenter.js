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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiYen } from "react-icons/bi";
import { FaLine } from "react-icons/fa";
import { FiAlertCircle, FiArrowDown, FiArrowLeft, FiArrowRight, FiCalendar, FiCheck, FiCheckCircle, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp, FiCopy, FiFacebook, FiFilter, FiGrid, FiHeart, FiImage, FiInfo, FiInstagram, FiMapPin, FiMenu, FiMessageCircle, FiMinus, FiMoreHorizontal, FiPhoneCall, FiPlus, FiSearch, FiSliders, FiTwitter, FiUser, FiX, FiZap, } from "react-icons/fi";
import { HiSortDescending } from "react-icons/hi";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { AirCon } from "./svg/AirCon";
import { AppListing } from "./svg/AppListing";
import { Bed } from "./svg/Bed";
import { Building } from "./svg/Building";
import { Desk } from "./svg/Desk";
import { Dryer } from "./svg/Dryer";
import { Guitar } from "./svg/Guitar";
import { Microwave } from "./svg/Microwave";
import { NoSmoking } from "./svg/NoSmoking";
import { Pet } from "./svg/Pet";
import { Refrigerator } from "./svg/Refrigerator";
import { Room } from "./svg/Room";
import { WashMachine } from "./svg/WashMachine";
import { Wifi } from "./svg/Wifi";
import { Woman } from "./svg/Woman";
var currentTypes = {
    AirCon: "stroke",
    AppListing: "stroke",
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
    WashMachine: "stroke",
    Wifi: "fill",
    Woman: "stroke",
};
export var Presenter = function (_a) {
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
            return _jsx(AirCon, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Bed":
            return _jsx(Bed, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Desk":
            return _jsx(Desk, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Dryer":
            return _jsx(Dryer, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Guitar":
            return _jsx(Guitar, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Microwave":
            return _jsx(Microwave, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "NoSmoking":
            return _jsx(NoSmoking, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 1 }, props.style) }, props), void 0);
        case "Pet":
            return _jsx(Pet, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Refrigerator":
            return _jsx(Refrigerator, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "WashMachine":
            return _jsx(WashMachine, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Wifi":
            return _jsx(Wifi, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Woman":
            return _jsx(Woman, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "AppListing":
            return _jsx(AppListing, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Building":
            return _jsx(Building, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Room":
            return _jsx(Room, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "BiYen":
            return _jsx(BiYen, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertCircle":
            return _jsx(FiAlertCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDown":
            return _jsx(FiArrowDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowLeft":
            return _jsx(FiArrowLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowRight":
            return _jsx(FiArrowRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCalendar":
            return _jsx(FiCalendar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheckCircle":
            return _jsx(FiCheckCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheck":
            return _jsx(FiCheck, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronDown":
            return _jsx(FiChevronDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronLeft":
            return _jsx(FiChevronLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronRight":
            return _jsx(FiChevronRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronUp":
            return _jsx(FiChevronUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCopy":
            return _jsx(FiCopy, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFacebook":
            return _jsx(FiFacebook, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilter":
            return _jsx(FiFilter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGrid":
            return _jsx(FiGrid, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHeart":
            return _jsx(FiHeart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiImage":
            return _jsx(FiImage, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInfo":
            return _jsx(FiInfo, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInstagram":
            return _jsx(FiInstagram, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMapPin":
            return _jsx(FiMapPin, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMenu":
            return _jsx(FiMenu, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMessageCircle":
            return _jsx(FiMessageCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinus":
            return _jsx(FiMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoreHorizontal":
            return _jsx(FiMoreHorizontal, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneCall":
            return _jsx(FiPhoneCall, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlus":
            return _jsx(FiPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSearch":
            return _jsx(FiSearch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSliders":
            return _jsx(FiSliders, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTwitter":
            return _jsx(FiTwitter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUser":
            return _jsx(FiUser, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiX":
            return _jsx(FiX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZap":
            return _jsx(FiZap, __assign({ className: className, size: sizePx }, props), void 0);
        case "FaLine":
            return _jsx(FaLine, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoFacebook":
            return _jsx(IoLogoFacebook, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoTwitter":
            return _jsx(IoLogoTwitter, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoInstagram":
            return _jsx(IoLogoInstagram, __assign({ className: className, size: sizePx }, props), void 0);
        case "AiOutlineQuestionCircle":
            return _jsx(AiOutlineQuestionCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "HiSortDescending":
            return _jsx(HiSortDescending, __assign({ className: className, size: sizePx }, props), void 0);
        default:
            return _jsx(_Fragment, {}, void 0);
    }
};
//# sourceMappingURL=Presenter.js.map