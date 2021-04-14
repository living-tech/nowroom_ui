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
var bi_1 = require("react-icons/bi");
var fi_1 = require("react-icons/fi");
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
        case "FiActivity":
            return jsx_runtime_1.jsx(fi_1.FiActivity, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAirplay":
            return jsx_runtime_1.jsx(fi_1.FiAirplay, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertCircle":
            return jsx_runtime_1.jsx(fi_1.FiAlertCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertOctagon":
            return jsx_runtime_1.jsx(fi_1.FiAlertOctagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertTriangle":
            return jsx_runtime_1.jsx(fi_1.FiAlertTriangle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignCenter":
            return jsx_runtime_1.jsx(fi_1.FiAlignCenter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignJustify":
            return jsx_runtime_1.jsx(fi_1.FiAlignJustify, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignLeft":
            return jsx_runtime_1.jsx(fi_1.FiAlignLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignRight":
            return jsx_runtime_1.jsx(fi_1.FiAlignRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAnchor":
            return jsx_runtime_1.jsx(fi_1.FiAnchor, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAperture":
            return jsx_runtime_1.jsx(fi_1.FiAperture, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArchive":
            return jsx_runtime_1.jsx(fi_1.FiArchive, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDownCircle":
            return jsx_runtime_1.jsx(fi_1.FiArrowDownCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDownLeft":
            return jsx_runtime_1.jsx(fi_1.FiArrowDownLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDownRight":
            return jsx_runtime_1.jsx(fi_1.FiArrowDownRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDown":
            return jsx_runtime_1.jsx(fi_1.FiArrowDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowLeftCircle":
            return jsx_runtime_1.jsx(fi_1.FiArrowLeftCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowLeft":
            return jsx_runtime_1.jsx(fi_1.FiArrowLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowRightCircle":
            return jsx_runtime_1.jsx(fi_1.FiArrowRightCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowRight":
            return jsx_runtime_1.jsx(fi_1.FiArrowRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUpCircle":
            return jsx_runtime_1.jsx(fi_1.FiArrowUpCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUpLeft":
            return jsx_runtime_1.jsx(fi_1.FiArrowUpLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUpRight":
            return jsx_runtime_1.jsx(fi_1.FiArrowUpRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUp":
            return jsx_runtime_1.jsx(fi_1.FiArrowUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAtSign":
            return jsx_runtime_1.jsx(fi_1.FiAtSign, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAward":
            return jsx_runtime_1.jsx(fi_1.FiAward, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBarChart2":
            return jsx_runtime_1.jsx(fi_1.FiBarChart2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBarChart":
            return jsx_runtime_1.jsx(fi_1.FiBarChart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBatteryCharging":
            return jsx_runtime_1.jsx(fi_1.FiBatteryCharging, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBattery":
            return jsx_runtime_1.jsx(fi_1.FiBattery, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBellOff":
            return jsx_runtime_1.jsx(fi_1.FiBellOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBell":
            return jsx_runtime_1.jsx(fi_1.FiBell, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBluetooth":
            return jsx_runtime_1.jsx(fi_1.FiBluetooth, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBold":
            return jsx_runtime_1.jsx(fi_1.FiBold, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBookOpen":
            return jsx_runtime_1.jsx(fi_1.FiBookOpen, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBook":
            return jsx_runtime_1.jsx(fi_1.FiBook, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBookmark":
            return jsx_runtime_1.jsx(fi_1.FiBookmark, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBox":
            return jsx_runtime_1.jsx(fi_1.FiBox, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBriefcase":
            return jsx_runtime_1.jsx(fi_1.FiBriefcase, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCalendar":
            return jsx_runtime_1.jsx(fi_1.FiCalendar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCameraOff":
            return jsx_runtime_1.jsx(fi_1.FiCameraOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCamera":
            return jsx_runtime_1.jsx(fi_1.FiCamera, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCast":
            return jsx_runtime_1.jsx(fi_1.FiCast, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheckCircle":
            return jsx_runtime_1.jsx(fi_1.FiCheckCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheckSquare":
            return jsx_runtime_1.jsx(fi_1.FiCheckSquare, __assign({ className: className, size: sizePx }, props), void 0);
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
        case "FiChevronsDown":
            return jsx_runtime_1.jsx(fi_1.FiChevronsDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronsLeft":
            return jsx_runtime_1.jsx(fi_1.FiChevronsLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronsRight":
            return jsx_runtime_1.jsx(fi_1.FiChevronsRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronsUp":
            return jsx_runtime_1.jsx(fi_1.FiChevronsUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChrome":
            return jsx_runtime_1.jsx(fi_1.FiChrome, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCircle":
            return jsx_runtime_1.jsx(fi_1.FiCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiClipboard":
            return jsx_runtime_1.jsx(fi_1.FiClipboard, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiClock":
            return jsx_runtime_1.jsx(fi_1.FiClock, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudDrizzle":
            return jsx_runtime_1.jsx(fi_1.FiCloudDrizzle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudLightning":
            return jsx_runtime_1.jsx(fi_1.FiCloudLightning, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudOff":
            return jsx_runtime_1.jsx(fi_1.FiCloudOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudRain":
            return jsx_runtime_1.jsx(fi_1.FiCloudRain, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudSnow":
            return jsx_runtime_1.jsx(fi_1.FiCloudSnow, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloud":
            return jsx_runtime_1.jsx(fi_1.FiCloud, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCode":
            return jsx_runtime_1.jsx(fi_1.FiCode, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCodepen":
            return jsx_runtime_1.jsx(fi_1.FiCodepen, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCodesandbox":
            return jsx_runtime_1.jsx(fi_1.FiCodesandbox, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCoffee":
            return jsx_runtime_1.jsx(fi_1.FiCoffee, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiColumns":
            return jsx_runtime_1.jsx(fi_1.FiColumns, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCommand":
            return jsx_runtime_1.jsx(fi_1.FiCommand, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCompass":
            return jsx_runtime_1.jsx(fi_1.FiCompass, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCopy":
            return jsx_runtime_1.jsx(fi_1.FiCopy, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerDownLeft":
            return jsx_runtime_1.jsx(fi_1.FiCornerDownLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerDownRight":
            return jsx_runtime_1.jsx(fi_1.FiCornerDownRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerLeftDown":
            return jsx_runtime_1.jsx(fi_1.FiCornerLeftDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerLeftUp":
            return jsx_runtime_1.jsx(fi_1.FiCornerLeftUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerRightDown":
            return jsx_runtime_1.jsx(fi_1.FiCornerRightDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerRightUp":
            return jsx_runtime_1.jsx(fi_1.FiCornerRightUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerUpLeft":
            return jsx_runtime_1.jsx(fi_1.FiCornerUpLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerUpRight":
            return jsx_runtime_1.jsx(fi_1.FiCornerUpRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCpu":
            return jsx_runtime_1.jsx(fi_1.FiCpu, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCreditCard":
            return jsx_runtime_1.jsx(fi_1.FiCreditCard, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCrop":
            return jsx_runtime_1.jsx(fi_1.FiCrop, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCrosshair":
            return jsx_runtime_1.jsx(fi_1.FiCrosshair, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDatabase":
            return jsx_runtime_1.jsx(fi_1.FiDatabase, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDelete":
            return jsx_runtime_1.jsx(fi_1.FiDelete, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDisc":
            return jsx_runtime_1.jsx(fi_1.FiDisc, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDivideCircle":
            return jsx_runtime_1.jsx(fi_1.FiDivideCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDivideSquare":
            return jsx_runtime_1.jsx(fi_1.FiDivideSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDivide":
            return jsx_runtime_1.jsx(fi_1.FiDivide, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDollarSign":
            return jsx_runtime_1.jsx(fi_1.FiDollarSign, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDownloadCloud":
            return jsx_runtime_1.jsx(fi_1.FiDownloadCloud, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDownload":
            return jsx_runtime_1.jsx(fi_1.FiDownload, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDribbble":
            return jsx_runtime_1.jsx(fi_1.FiDribbble, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDroplet":
            return jsx_runtime_1.jsx(fi_1.FiDroplet, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEdit2":
            return jsx_runtime_1.jsx(fi_1.FiEdit2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEdit3":
            return jsx_runtime_1.jsx(fi_1.FiEdit3, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEdit":
            return jsx_runtime_1.jsx(fi_1.FiEdit, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiExternalLink":
            return jsx_runtime_1.jsx(fi_1.FiExternalLink, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEyeOff":
            return jsx_runtime_1.jsx(fi_1.FiEyeOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEye":
            return jsx_runtime_1.jsx(fi_1.FiEye, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFacebook":
            return jsx_runtime_1.jsx(fi_1.FiFacebook, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFastForward":
            return jsx_runtime_1.jsx(fi_1.FiFastForward, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFeather":
            return jsx_runtime_1.jsx(fi_1.FiFeather, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFigma":
            return jsx_runtime_1.jsx(fi_1.FiFigma, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFileMinus":
            return jsx_runtime_1.jsx(fi_1.FiFileMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilePlus":
            return jsx_runtime_1.jsx(fi_1.FiFilePlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFileText":
            return jsx_runtime_1.jsx(fi_1.FiFileText, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFile":
            return jsx_runtime_1.jsx(fi_1.FiFile, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilm":
            return jsx_runtime_1.jsx(fi_1.FiFilm, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilter":
            return jsx_runtime_1.jsx(fi_1.FiFilter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFlag":
            return jsx_runtime_1.jsx(fi_1.FiFlag, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFolderMinus":
            return jsx_runtime_1.jsx(fi_1.FiFolderMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFolderPlus":
            return jsx_runtime_1.jsx(fi_1.FiFolderPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFolder":
            return jsx_runtime_1.jsx(fi_1.FiFolder, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFramer":
            return jsx_runtime_1.jsx(fi_1.FiFramer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFrown":
            return jsx_runtime_1.jsx(fi_1.FiFrown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGift":
            return jsx_runtime_1.jsx(fi_1.FiGift, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitBranch":
            return jsx_runtime_1.jsx(fi_1.FiGitBranch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitCommit":
            return jsx_runtime_1.jsx(fi_1.FiGitCommit, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitMerge":
            return jsx_runtime_1.jsx(fi_1.FiGitMerge, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitPullRequest":
            return jsx_runtime_1.jsx(fi_1.FiGitPullRequest, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGithub":
            return jsx_runtime_1.jsx(fi_1.FiGithub, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitlab":
            return jsx_runtime_1.jsx(fi_1.FiGitlab, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGlobe":
            return jsx_runtime_1.jsx(fi_1.FiGlobe, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGrid":
            return jsx_runtime_1.jsx(fi_1.FiGrid, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHardDrive":
            return jsx_runtime_1.jsx(fi_1.FiHardDrive, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHash":
            return jsx_runtime_1.jsx(fi_1.FiHash, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHeadphones":
            return jsx_runtime_1.jsx(fi_1.FiHeadphones, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHeart":
            return jsx_runtime_1.jsx(fi_1.FiHeart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHelpCircle":
            return jsx_runtime_1.jsx(fi_1.FiHelpCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHexagon":
            return jsx_runtime_1.jsx(fi_1.FiHexagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHome":
            return jsx_runtime_1.jsx(fi_1.FiHome, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiImage":
            return jsx_runtime_1.jsx(fi_1.FiImage, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInbox":
            return jsx_runtime_1.jsx(fi_1.FiInbox, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInfo":
            return jsx_runtime_1.jsx(fi_1.FiInfo, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInstagram":
            return jsx_runtime_1.jsx(fi_1.FiInstagram, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiItalic":
            return jsx_runtime_1.jsx(fi_1.FiItalic, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiKey":
            return jsx_runtime_1.jsx(fi_1.FiKey, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLayers":
            return jsx_runtime_1.jsx(fi_1.FiLayers, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLayout":
            return jsx_runtime_1.jsx(fi_1.FiLayout, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLifeBuoy":
            return jsx_runtime_1.jsx(fi_1.FiLifeBuoy, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLink2":
            return jsx_runtime_1.jsx(fi_1.FiLink2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLink":
            return jsx_runtime_1.jsx(fi_1.FiLink, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLinkedin":
            return jsx_runtime_1.jsx(fi_1.FiLinkedin, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiList":
            return jsx_runtime_1.jsx(fi_1.FiList, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLoader":
            return jsx_runtime_1.jsx(fi_1.FiLoader, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLock":
            return jsx_runtime_1.jsx(fi_1.FiLock, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLogIn":
            return jsx_runtime_1.jsx(fi_1.FiLogIn, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLogOut":
            return jsx_runtime_1.jsx(fi_1.FiLogOut, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMail":
            return jsx_runtime_1.jsx(fi_1.FiMail, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMapPin":
            return jsx_runtime_1.jsx(fi_1.FiMapPin, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMap":
            return jsx_runtime_1.jsx(fi_1.FiMap, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMaximize2":
            return jsx_runtime_1.jsx(fi_1.FiMaximize2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMaximize":
            return jsx_runtime_1.jsx(fi_1.FiMaximize, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMeh":
            return jsx_runtime_1.jsx(fi_1.FiMeh, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMenu":
            return jsx_runtime_1.jsx(fi_1.FiMenu, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMessageCircle":
            return jsx_runtime_1.jsx(fi_1.FiMessageCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMessageSquare":
            return jsx_runtime_1.jsx(fi_1.FiMessageSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMicOff":
            return jsx_runtime_1.jsx(fi_1.FiMicOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMic":
            return jsx_runtime_1.jsx(fi_1.FiMic, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinimize2":
            return jsx_runtime_1.jsx(fi_1.FiMinimize2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinimize":
            return jsx_runtime_1.jsx(fi_1.FiMinimize, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinusCircle":
            return jsx_runtime_1.jsx(fi_1.FiMinusCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinusSquare":
            return jsx_runtime_1.jsx(fi_1.FiMinusSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinus":
            return jsx_runtime_1.jsx(fi_1.FiMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMonitor":
            return jsx_runtime_1.jsx(fi_1.FiMonitor, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoon":
            return jsx_runtime_1.jsx(fi_1.FiMoon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoreHorizontal":
            return jsx_runtime_1.jsx(fi_1.FiMoreHorizontal, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoreVertical":
            return jsx_runtime_1.jsx(fi_1.FiMoreVertical, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMousePointer":
            return jsx_runtime_1.jsx(fi_1.FiMousePointer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMove":
            return jsx_runtime_1.jsx(fi_1.FiMove, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMusic":
            return jsx_runtime_1.jsx(fi_1.FiMusic, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiNavigation2":
            return jsx_runtime_1.jsx(fi_1.FiNavigation2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiNavigation":
            return jsx_runtime_1.jsx(fi_1.FiNavigation, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiOctagon":
            return jsx_runtime_1.jsx(fi_1.FiOctagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPackage":
            return jsx_runtime_1.jsx(fi_1.FiPackage, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPaperclip":
            return jsx_runtime_1.jsx(fi_1.FiPaperclip, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPauseCircle":
            return jsx_runtime_1.jsx(fi_1.FiPauseCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPause":
            return jsx_runtime_1.jsx(fi_1.FiPause, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPenTool":
            return jsx_runtime_1.jsx(fi_1.FiPenTool, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPercent":
            return jsx_runtime_1.jsx(fi_1.FiPercent, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneCall":
            return jsx_runtime_1.jsx(fi_1.FiPhoneCall, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneForwarded":
            return jsx_runtime_1.jsx(fi_1.FiPhoneForwarded, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneIncoming":
            return jsx_runtime_1.jsx(fi_1.FiPhoneIncoming, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneMissed":
            return jsx_runtime_1.jsx(fi_1.FiPhoneMissed, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneOff":
            return jsx_runtime_1.jsx(fi_1.FiPhoneOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneOutgoing":
            return jsx_runtime_1.jsx(fi_1.FiPhoneOutgoing, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhone":
            return jsx_runtime_1.jsx(fi_1.FiPhone, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPieChart":
            return jsx_runtime_1.jsx(fi_1.FiPieChart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlayCircle":
            return jsx_runtime_1.jsx(fi_1.FiPlayCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlay":
            return jsx_runtime_1.jsx(fi_1.FiPlay, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlusCircle":
            return jsx_runtime_1.jsx(fi_1.FiPlusCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlusSquare":
            return jsx_runtime_1.jsx(fi_1.FiPlusSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlus":
            return jsx_runtime_1.jsx(fi_1.FiPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPocket":
            return jsx_runtime_1.jsx(fi_1.FiPocket, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPower":
            return jsx_runtime_1.jsx(fi_1.FiPower, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPrinter":
            return jsx_runtime_1.jsx(fi_1.FiPrinter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRadio":
            return jsx_runtime_1.jsx(fi_1.FiRadio, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRefreshCcw":
            return jsx_runtime_1.jsx(fi_1.FiRefreshCcw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRefreshCw":
            return jsx_runtime_1.jsx(fi_1.FiRefreshCw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRepeat":
            return jsx_runtime_1.jsx(fi_1.FiRepeat, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRewind":
            return jsx_runtime_1.jsx(fi_1.FiRewind, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRotateCcw":
            return jsx_runtime_1.jsx(fi_1.FiRotateCcw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRotateCw":
            return jsx_runtime_1.jsx(fi_1.FiRotateCw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRss":
            return jsx_runtime_1.jsx(fi_1.FiRss, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSave":
            return jsx_runtime_1.jsx(fi_1.FiSave, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiScissors":
            return jsx_runtime_1.jsx(fi_1.FiScissors, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSearch":
            return jsx_runtime_1.jsx(fi_1.FiSearch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSend":
            return jsx_runtime_1.jsx(fi_1.FiSend, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiServer":
            return jsx_runtime_1.jsx(fi_1.FiServer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSettings":
            return jsx_runtime_1.jsx(fi_1.FiSettings, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShare2":
            return jsx_runtime_1.jsx(fi_1.FiShare2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShare":
            return jsx_runtime_1.jsx(fi_1.FiShare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShieldOff":
            return jsx_runtime_1.jsx(fi_1.FiShieldOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShield":
            return jsx_runtime_1.jsx(fi_1.FiShield, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShoppingBag":
            return jsx_runtime_1.jsx(fi_1.FiShoppingBag, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShoppingCart":
            return jsx_runtime_1.jsx(fi_1.FiShoppingCart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShuffle":
            return jsx_runtime_1.jsx(fi_1.FiShuffle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSidebar":
            return jsx_runtime_1.jsx(fi_1.FiSidebar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSkipBack":
            return jsx_runtime_1.jsx(fi_1.FiSkipBack, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSkipForward":
            return jsx_runtime_1.jsx(fi_1.FiSkipForward, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSlack":
            return jsx_runtime_1.jsx(fi_1.FiSlack, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSlash":
            return jsx_runtime_1.jsx(fi_1.FiSlash, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSliders":
            return jsx_runtime_1.jsx(fi_1.FiSliders, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSmartphone":
            return jsx_runtime_1.jsx(fi_1.FiSmartphone, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSmile":
            return jsx_runtime_1.jsx(fi_1.FiSmile, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSpeaker":
            return jsx_runtime_1.jsx(fi_1.FiSpeaker, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSquare":
            return jsx_runtime_1.jsx(fi_1.FiSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiStar":
            return jsx_runtime_1.jsx(fi_1.FiStar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiStopCircle":
            return jsx_runtime_1.jsx(fi_1.FiStopCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSun":
            return jsx_runtime_1.jsx(fi_1.FiSun, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSunrise":
            return jsx_runtime_1.jsx(fi_1.FiSunrise, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSunset":
            return jsx_runtime_1.jsx(fi_1.FiSunset, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTablet":
            return jsx_runtime_1.jsx(fi_1.FiTablet, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTag":
            return jsx_runtime_1.jsx(fi_1.FiTag, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTarget":
            return jsx_runtime_1.jsx(fi_1.FiTarget, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTerminal":
            return jsx_runtime_1.jsx(fi_1.FiTerminal, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiThermometer":
            return jsx_runtime_1.jsx(fi_1.FiThermometer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiThumbsDown":
            return jsx_runtime_1.jsx(fi_1.FiThumbsDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiThumbsUp":
            return jsx_runtime_1.jsx(fi_1.FiThumbsUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiToggleLeft":
            return jsx_runtime_1.jsx(fi_1.FiToggleLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiToggleRight":
            return jsx_runtime_1.jsx(fi_1.FiToggleRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTool":
            return jsx_runtime_1.jsx(fi_1.FiTool, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrash2":
            return jsx_runtime_1.jsx(fi_1.FiTrash2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrash":
            return jsx_runtime_1.jsx(fi_1.FiTrash, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrello":
            return jsx_runtime_1.jsx(fi_1.FiTrello, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrendingDown":
            return jsx_runtime_1.jsx(fi_1.FiTrendingDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrendingUp":
            return jsx_runtime_1.jsx(fi_1.FiTrendingUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTriangle":
            return jsx_runtime_1.jsx(fi_1.FiTriangle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTruck":
            return jsx_runtime_1.jsx(fi_1.FiTruck, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTv":
            return jsx_runtime_1.jsx(fi_1.FiTv, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTwitch":
            return jsx_runtime_1.jsx(fi_1.FiTwitch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTwitter":
            return jsx_runtime_1.jsx(fi_1.FiTwitter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiType":
            return jsx_runtime_1.jsx(fi_1.FiType, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUmbrella":
            return jsx_runtime_1.jsx(fi_1.FiUmbrella, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUnderline":
            return jsx_runtime_1.jsx(fi_1.FiUnderline, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUnlock":
            return jsx_runtime_1.jsx(fi_1.FiUnlock, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUploadCloud":
            return jsx_runtime_1.jsx(fi_1.FiUploadCloud, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUpload":
            return jsx_runtime_1.jsx(fi_1.FiUpload, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserCheck":
            return jsx_runtime_1.jsx(fi_1.FiUserCheck, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserMinus":
            return jsx_runtime_1.jsx(fi_1.FiUserMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserPlus":
            return jsx_runtime_1.jsx(fi_1.FiUserPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserX":
            return jsx_runtime_1.jsx(fi_1.FiUserX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUser":
            return jsx_runtime_1.jsx(fi_1.FiUser, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUsers":
            return jsx_runtime_1.jsx(fi_1.FiUsers, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVideoOff":
            return jsx_runtime_1.jsx(fi_1.FiVideoOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVideo":
            return jsx_runtime_1.jsx(fi_1.FiVideo, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVoicemail":
            return jsx_runtime_1.jsx(fi_1.FiVoicemail, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolume1":
            return jsx_runtime_1.jsx(fi_1.FiVolume1, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolume2":
            return jsx_runtime_1.jsx(fi_1.FiVolume2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolumeX":
            return jsx_runtime_1.jsx(fi_1.FiVolumeX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolume":
            return jsx_runtime_1.jsx(fi_1.FiVolume, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWatch":
            return jsx_runtime_1.jsx(fi_1.FiWatch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWifiOff":
            return jsx_runtime_1.jsx(fi_1.FiWifiOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWifi":
            return jsx_runtime_1.jsx(fi_1.FiWifi, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWind":
            return jsx_runtime_1.jsx(fi_1.FiWind, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiXCircle":
            return jsx_runtime_1.jsx(fi_1.FiXCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiXOctagon":
            return jsx_runtime_1.jsx(fi_1.FiXOctagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiXSquare":
            return jsx_runtime_1.jsx(fi_1.FiXSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiX":
            return jsx_runtime_1.jsx(fi_1.FiX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiYoutube":
            return jsx_runtime_1.jsx(fi_1.FiYoutube, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZapOff":
            return jsx_runtime_1.jsx(fi_1.FiZapOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZap":
            return jsx_runtime_1.jsx(fi_1.FiZap, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZoomIn":
            return jsx_runtime_1.jsx(fi_1.FiZoomIn, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZoomOut":
            return jsx_runtime_1.jsx(fi_1.FiZoomOut, __assign({ className: className, size: sizePx }, props), void 0);
        default:
            return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0);
    }
};
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map