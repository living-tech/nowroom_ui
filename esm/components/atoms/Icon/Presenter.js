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
import { FiActivity, FiAirplay, FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiAlignCenter, FiAlignJustify, FiAlignLeft, FiAlignRight, FiAnchor, FiAperture, FiArchive, FiArrowDown, FiArrowDownCircle, FiArrowDownLeft, FiArrowDownRight, FiArrowLeft, FiArrowLeftCircle, FiArrowRight, FiArrowRightCircle, FiArrowUp, FiArrowUpCircle, FiArrowUpLeft, FiArrowUpRight, FiAtSign, FiAward, FiBarChart, FiBarChart2, FiBattery, FiBatteryCharging, FiBell, FiBellOff, FiBluetooth, FiBold, FiBook, FiBookmark, FiBookOpen, FiBox, FiBriefcase, FiCalendar, FiCamera, FiCameraOff, FiCast, FiCheck, FiCheckCircle, FiCheckSquare, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronsDown, FiChevronsLeft, FiChevronsRight, FiChevronsUp, FiChevronUp, FiChrome, FiCircle, FiClipboard, FiClock, FiCloud, FiCloudDrizzle, FiCloudLightning, FiCloudOff, FiCloudRain, FiCloudSnow, FiCode, FiCodepen, FiCodesandbox, FiCoffee, FiColumns, FiCommand, FiCompass, FiCopy, FiCornerDownLeft, FiCornerDownRight, FiCornerLeftDown, FiCornerLeftUp, FiCornerRightDown, FiCornerRightUp, FiCornerUpLeft, FiCornerUpRight, FiCpu, FiCreditCard, FiCrop, FiCrosshair, FiDatabase, FiDelete, FiDisc, FiDivide, FiDivideCircle, FiDivideSquare, FiDollarSign, FiDownload, FiDownloadCloud, FiDribbble, FiDroplet, FiEdit, FiEdit2, FiEdit3, FiExternalLink, FiEye, FiEyeOff, FiFacebook, FiFastForward, FiFeather, FiFigma, FiFile, FiFileMinus, FiFilePlus, FiFileText, FiFilm, FiFilter, FiFlag, FiFolder, FiFolderMinus, FiFolderPlus, FiFramer, FiFrown, FiGift, FiGitBranch, FiGitCommit, FiGithub, FiGitlab, FiGitMerge, FiGitPullRequest, FiGlobe, FiGrid, FiHardDrive, FiHash, FiHeadphones, FiHeart, FiHelpCircle, FiHexagon, FiHome, FiImage, FiInbox, FiInfo, FiInstagram, FiItalic, FiKey, FiLayers, FiLayout, FiLifeBuoy, FiLink, FiLink2, FiLinkedin, FiList, FiLoader, FiLock, FiLogIn, FiLogOut, FiMail, FiMap, FiMapPin, FiMaximize, FiMaximize2, FiMeh, FiMenu, FiMessageCircle, FiMessageSquare, FiMic, FiMicOff, FiMinimize, FiMinimize2, FiMinus, FiMinusCircle, FiMinusSquare, FiMonitor, FiMoon, FiMoreHorizontal, FiMoreVertical, FiMousePointer, FiMove, FiMusic, FiNavigation, FiNavigation2, FiOctagon, FiPackage, FiPaperclip, FiPause, FiPauseCircle, FiPenTool, FiPercent, FiPhone, FiPhoneCall, FiPhoneForwarded, FiPhoneIncoming, FiPhoneMissed, FiPhoneOff, FiPhoneOutgoing, FiPieChart, FiPlay, FiPlayCircle, FiPlus, FiPlusCircle, FiPlusSquare, FiPocket, FiPower, FiPrinter, FiRadio, FiRefreshCcw, FiRefreshCw, FiRepeat, FiRewind, FiRotateCcw, FiRotateCw, FiRss, FiSave, FiScissors, FiSearch, FiSend, FiServer, FiSettings, FiShare, FiShare2, FiShield, FiShieldOff, FiShoppingBag, FiShoppingCart, FiShuffle, FiSidebar, FiSkipBack, FiSkipForward, FiSlack, FiSlash, FiSliders, FiSmartphone, FiSmile, FiSpeaker, FiSquare, FiStar, FiStopCircle, FiSun, FiSunrise, FiSunset, FiTablet, FiTag, FiTarget, FiTerminal, FiThermometer, FiThumbsDown, FiThumbsUp, FiToggleLeft, FiToggleRight, FiTool, FiTrash, FiTrash2, FiTrello, FiTrendingDown, FiTrendingUp, FiTriangle, FiTruck, FiTv, FiTwitch, FiTwitter, FiType, FiUmbrella, FiUnderline, FiUnlock, FiUpload, FiUploadCloud, FiUser, FiUserCheck, FiUserMinus, FiUserPlus, FiUsers, FiUserX, FiVideo, FiVideoOff, FiVoicemail, FiVolume, FiVolume1, FiVolume2, FiVolumeX, FiWatch, FiWifi, FiWifiOff, FiWind, FiX, FiXCircle, FiXOctagon, FiXSquare, FiYoutube, FiZap, FiZapOff, FiZoomIn, FiZoomOut, } from "react-icons/fi";
import { HiSortDescending } from "react-icons/hi";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { AddBuilding } from "./svg/AddBuilding";
import { AddRoom } from "./svg/AddRoom";
import { AirCon } from "./svg/AirCon";
import { AppListing } from "./svg/AppListing";
import { AutoLock } from "./svg/AutoLock";
import { Bath } from "./svg/Bath";
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
import { StockSettings } from "./svg/StockSettings";
import { WashMachine } from "./svg/WashMachine";
import { Wifi } from "./svg/Wifi";
import { Woman } from "./svg/Woman";
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
        case "AutoLock":
            return _jsx(AutoLock, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Bath":
            return _jsx(Bath, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
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
        case "AddBuilding":
            return _jsx(AddBuilding, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "AddRoom":
            return _jsx(AddRoom, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "AppListing":
            return _jsx(AppListing, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Building":
            return _jsx(Building, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "Room":
            return _jsx(Room, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0);
        case "StockSettings":
            return (_jsx(StockSettings, __assign({ className: className, size: sizePx, style: __assign({ strokeWidth: 2 }, props.style) }, props), void 0));
        case "BiYen":
            return _jsx(BiYen, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiActivity":
            return _jsx(FiActivity, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAirplay":
            return _jsx(FiAirplay, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertCircle":
            return _jsx(FiAlertCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertOctagon":
            return _jsx(FiAlertOctagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlertTriangle":
            return _jsx(FiAlertTriangle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignCenter":
            return _jsx(FiAlignCenter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignJustify":
            return _jsx(FiAlignJustify, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignLeft":
            return _jsx(FiAlignLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAlignRight":
            return _jsx(FiAlignRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAnchor":
            return _jsx(FiAnchor, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAperture":
            return _jsx(FiAperture, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArchive":
            return _jsx(FiArchive, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDownCircle":
            return _jsx(FiArrowDownCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDownLeft":
            return _jsx(FiArrowDownLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDownRight":
            return _jsx(FiArrowDownRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowDown":
            return _jsx(FiArrowDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowLeftCircle":
            return _jsx(FiArrowLeftCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowLeft":
            return _jsx(FiArrowLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowRightCircle":
            return _jsx(FiArrowRightCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowRight":
            return _jsx(FiArrowRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUpCircle":
            return _jsx(FiArrowUpCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUpLeft":
            return _jsx(FiArrowUpLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUpRight":
            return _jsx(FiArrowUpRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiArrowUp":
            return _jsx(FiArrowUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAtSign":
            return _jsx(FiAtSign, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiAward":
            return _jsx(FiAward, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBarChart2":
            return _jsx(FiBarChart2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBarChart":
            return _jsx(FiBarChart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBatteryCharging":
            return _jsx(FiBatteryCharging, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBattery":
            return _jsx(FiBattery, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBellOff":
            return _jsx(FiBellOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBell":
            return _jsx(FiBell, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBluetooth":
            return _jsx(FiBluetooth, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBold":
            return _jsx(FiBold, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBookOpen":
            return _jsx(FiBookOpen, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBook":
            return _jsx(FiBook, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBookmark":
            return _jsx(FiBookmark, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBox":
            return _jsx(FiBox, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiBriefcase":
            return _jsx(FiBriefcase, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCalendar":
            return _jsx(FiCalendar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCameraOff":
            return _jsx(FiCameraOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCamera":
            return _jsx(FiCamera, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCast":
            return _jsx(FiCast, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheckCircle":
            return _jsx(FiCheckCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCheckSquare":
            return _jsx(FiCheckSquare, __assign({ className: className, size: sizePx }, props), void 0);
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
        case "FiChevronsDown":
            return _jsx(FiChevronsDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronsLeft":
            return _jsx(FiChevronsLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronsRight":
            return _jsx(FiChevronsRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChevronsUp":
            return _jsx(FiChevronsUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiChrome":
            return _jsx(FiChrome, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCircle":
            return _jsx(FiCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiClipboard":
            return _jsx(FiClipboard, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiClock":
            return _jsx(FiClock, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudDrizzle":
            return _jsx(FiCloudDrizzle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudLightning":
            return _jsx(FiCloudLightning, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudOff":
            return _jsx(FiCloudOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudRain":
            return _jsx(FiCloudRain, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloudSnow":
            return _jsx(FiCloudSnow, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCloud":
            return _jsx(FiCloud, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCode":
            return _jsx(FiCode, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCodepen":
            return _jsx(FiCodepen, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCodesandbox":
            return _jsx(FiCodesandbox, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCoffee":
            return _jsx(FiCoffee, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiColumns":
            return _jsx(FiColumns, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCommand":
            return _jsx(FiCommand, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCompass":
            return _jsx(FiCompass, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCopy":
            return _jsx(FiCopy, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerDownLeft":
            return _jsx(FiCornerDownLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerDownRight":
            return _jsx(FiCornerDownRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerLeftDown":
            return _jsx(FiCornerLeftDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerLeftUp":
            return _jsx(FiCornerLeftUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerRightDown":
            return _jsx(FiCornerRightDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerRightUp":
            return _jsx(FiCornerRightUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerUpLeft":
            return _jsx(FiCornerUpLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCornerUpRight":
            return _jsx(FiCornerUpRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCpu":
            return _jsx(FiCpu, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCreditCard":
            return _jsx(FiCreditCard, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCrop":
            return _jsx(FiCrop, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiCrosshair":
            return _jsx(FiCrosshair, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDatabase":
            return _jsx(FiDatabase, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDelete":
            return _jsx(FiDelete, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDisc":
            return _jsx(FiDisc, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDivideCircle":
            return _jsx(FiDivideCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDivideSquare":
            return _jsx(FiDivideSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDivide":
            return _jsx(FiDivide, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDollarSign":
            return _jsx(FiDollarSign, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDownloadCloud":
            return _jsx(FiDownloadCloud, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDownload":
            return _jsx(FiDownload, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDribbble":
            return _jsx(FiDribbble, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiDroplet":
            return _jsx(FiDroplet, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEdit2":
            return _jsx(FiEdit2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEdit3":
            return _jsx(FiEdit3, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEdit":
            return _jsx(FiEdit, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiExternalLink":
            return _jsx(FiExternalLink, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEyeOff":
            return _jsx(FiEyeOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiEye":
            return _jsx(FiEye, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFacebook":
            return _jsx(FiFacebook, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFastForward":
            return _jsx(FiFastForward, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFeather":
            return _jsx(FiFeather, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFigma":
            return _jsx(FiFigma, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFileMinus":
            return _jsx(FiFileMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilePlus":
            return _jsx(FiFilePlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFileText":
            return _jsx(FiFileText, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFile":
            return _jsx(FiFile, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilm":
            return _jsx(FiFilm, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFilter":
            return _jsx(FiFilter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFlag":
            return _jsx(FiFlag, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFolderMinus":
            return _jsx(FiFolderMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFolderPlus":
            return _jsx(FiFolderPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFolder":
            return _jsx(FiFolder, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFramer":
            return _jsx(FiFramer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiFrown":
            return _jsx(FiFrown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGift":
            return _jsx(FiGift, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitBranch":
            return _jsx(FiGitBranch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitCommit":
            return _jsx(FiGitCommit, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitMerge":
            return _jsx(FiGitMerge, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitPullRequest":
            return _jsx(FiGitPullRequest, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGithub":
            return _jsx(FiGithub, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGitlab":
            return _jsx(FiGitlab, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGlobe":
            return _jsx(FiGlobe, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiGrid":
            return _jsx(FiGrid, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHardDrive":
            return _jsx(FiHardDrive, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHash":
            return _jsx(FiHash, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHeadphones":
            return _jsx(FiHeadphones, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHeart":
            return _jsx(FiHeart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHelpCircle":
            return _jsx(FiHelpCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHexagon":
            return _jsx(FiHexagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiHome":
            return _jsx(FiHome, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiImage":
            return _jsx(FiImage, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInbox":
            return _jsx(FiInbox, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInfo":
            return _jsx(FiInfo, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiInstagram":
            return _jsx(FiInstagram, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiItalic":
            return _jsx(FiItalic, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiKey":
            return _jsx(FiKey, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLayers":
            return _jsx(FiLayers, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLayout":
            return _jsx(FiLayout, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLifeBuoy":
            return _jsx(FiLifeBuoy, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLink2":
            return _jsx(FiLink2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLink":
            return _jsx(FiLink, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLinkedin":
            return _jsx(FiLinkedin, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiList":
            return _jsx(FiList, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLoader":
            return _jsx(FiLoader, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLock":
            return _jsx(FiLock, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLogIn":
            return _jsx(FiLogIn, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiLogOut":
            return _jsx(FiLogOut, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMail":
            return _jsx(FiMail, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMapPin":
            return _jsx(FiMapPin, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMap":
            return _jsx(FiMap, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMaximize2":
            return _jsx(FiMaximize2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMaximize":
            return _jsx(FiMaximize, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMeh":
            return _jsx(FiMeh, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMenu":
            return _jsx(FiMenu, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMessageCircle":
            return _jsx(FiMessageCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMessageSquare":
            return _jsx(FiMessageSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMicOff":
            return _jsx(FiMicOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMic":
            return _jsx(FiMic, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinimize2":
            return _jsx(FiMinimize2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinimize":
            return _jsx(FiMinimize, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinusCircle":
            return _jsx(FiMinusCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinusSquare":
            return _jsx(FiMinusSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMinus":
            return _jsx(FiMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMonitor":
            return _jsx(FiMonitor, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoon":
            return _jsx(FiMoon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoreHorizontal":
            return _jsx(FiMoreHorizontal, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMoreVertical":
            return _jsx(FiMoreVertical, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMousePointer":
            return _jsx(FiMousePointer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMove":
            return _jsx(FiMove, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiMusic":
            return _jsx(FiMusic, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiNavigation2":
            return _jsx(FiNavigation2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiNavigation":
            return _jsx(FiNavigation, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiOctagon":
            return _jsx(FiOctagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPackage":
            return _jsx(FiPackage, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPaperclip":
            return _jsx(FiPaperclip, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPauseCircle":
            return _jsx(FiPauseCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPause":
            return _jsx(FiPause, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPenTool":
            return _jsx(FiPenTool, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPercent":
            return _jsx(FiPercent, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneCall":
            return _jsx(FiPhoneCall, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneForwarded":
            return _jsx(FiPhoneForwarded, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneIncoming":
            return _jsx(FiPhoneIncoming, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneMissed":
            return _jsx(FiPhoneMissed, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneOff":
            return _jsx(FiPhoneOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhoneOutgoing":
            return _jsx(FiPhoneOutgoing, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPhone":
            return _jsx(FiPhone, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPieChart":
            return _jsx(FiPieChart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlayCircle":
            return _jsx(FiPlayCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlay":
            return _jsx(FiPlay, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlusCircle":
            return _jsx(FiPlusCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlusSquare":
            return _jsx(FiPlusSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPlus":
            return _jsx(FiPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPocket":
            return _jsx(FiPocket, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPower":
            return _jsx(FiPower, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiPrinter":
            return _jsx(FiPrinter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRadio":
            return _jsx(FiRadio, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRefreshCcw":
            return _jsx(FiRefreshCcw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRefreshCw":
            return _jsx(FiRefreshCw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRepeat":
            return _jsx(FiRepeat, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRewind":
            return _jsx(FiRewind, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRotateCcw":
            return _jsx(FiRotateCcw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRotateCw":
            return _jsx(FiRotateCw, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiRss":
            return _jsx(FiRss, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSave":
            return _jsx(FiSave, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiScissors":
            return _jsx(FiScissors, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSearch":
            return _jsx(FiSearch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSend":
            return _jsx(FiSend, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiServer":
            return _jsx(FiServer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSettings":
            return _jsx(FiSettings, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShare2":
            return _jsx(FiShare2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShare":
            return _jsx(FiShare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShieldOff":
            return _jsx(FiShieldOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShield":
            return _jsx(FiShield, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShoppingBag":
            return _jsx(FiShoppingBag, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShoppingCart":
            return _jsx(FiShoppingCart, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiShuffle":
            return _jsx(FiShuffle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSidebar":
            return _jsx(FiSidebar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSkipBack":
            return _jsx(FiSkipBack, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSkipForward":
            return _jsx(FiSkipForward, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSlack":
            return _jsx(FiSlack, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSlash":
            return _jsx(FiSlash, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSliders":
            return _jsx(FiSliders, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSmartphone":
            return _jsx(FiSmartphone, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSmile":
            return _jsx(FiSmile, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSpeaker":
            return _jsx(FiSpeaker, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSquare":
            return _jsx(FiSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiStar":
            return _jsx(FiStar, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiStopCircle":
            return _jsx(FiStopCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSun":
            return _jsx(FiSun, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSunrise":
            return _jsx(FiSunrise, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiSunset":
            return _jsx(FiSunset, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTablet":
            return _jsx(FiTablet, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTag":
            return _jsx(FiTag, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTarget":
            return _jsx(FiTarget, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTerminal":
            return _jsx(FiTerminal, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiThermometer":
            return _jsx(FiThermometer, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiThumbsDown":
            return _jsx(FiThumbsDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiThumbsUp":
            return _jsx(FiThumbsUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiToggleLeft":
            return _jsx(FiToggleLeft, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiToggleRight":
            return _jsx(FiToggleRight, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTool":
            return _jsx(FiTool, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrash2":
            return _jsx(FiTrash2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrash":
            return _jsx(FiTrash, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrello":
            return _jsx(FiTrello, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrendingDown":
            return _jsx(FiTrendingDown, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTrendingUp":
            return _jsx(FiTrendingUp, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTriangle":
            return _jsx(FiTriangle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTruck":
            return _jsx(FiTruck, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTv":
            return _jsx(FiTv, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTwitch":
            return _jsx(FiTwitch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiTwitter":
            return _jsx(FiTwitter, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiType":
            return _jsx(FiType, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUmbrella":
            return _jsx(FiUmbrella, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUnderline":
            return _jsx(FiUnderline, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUnlock":
            return _jsx(FiUnlock, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUploadCloud":
            return _jsx(FiUploadCloud, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUpload":
            return _jsx(FiUpload, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserCheck":
            return _jsx(FiUserCheck, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserMinus":
            return _jsx(FiUserMinus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserPlus":
            return _jsx(FiUserPlus, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUserX":
            return _jsx(FiUserX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUser":
            return _jsx(FiUser, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiUsers":
            return _jsx(FiUsers, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVideoOff":
            return _jsx(FiVideoOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVideo":
            return _jsx(FiVideo, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVoicemail":
            return _jsx(FiVoicemail, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolume1":
            return _jsx(FiVolume1, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolume2":
            return _jsx(FiVolume2, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolumeX":
            return _jsx(FiVolumeX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVolume":
            return _jsx(FiVolume, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWatch":
            return _jsx(FiWatch, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWifiOff":
            return _jsx(FiWifiOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWifi":
            return _jsx(FiWifi, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiWind":
            return _jsx(FiWind, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiXCircle":
            return _jsx(FiXCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiXOctagon":
            return _jsx(FiXOctagon, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiXSquare":
            return _jsx(FiXSquare, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiX":
            return _jsx(FiX, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiYoutube":
            return _jsx(FiYoutube, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZapOff":
            return _jsx(FiZapOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZap":
            return _jsx(FiZap, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZoomIn":
            return _jsx(FiZoomIn, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiZoomOut":
            return _jsx(FiZoomOut, __assign({ className: className, size: sizePx }, props), void 0);
        case "FaLine":
            return _jsx(FaLine, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoFacebook":
            return _jsx(IoLogoFacebook, __assign({ className: className, size: sizePx }, props), void 0);
        case "IoLogoTwitter":
            return _jsx(IoLogoTwitter, __assign({ className: className, size: sizePx }, props), void 0);
        case "AiOutlineQuestionCircle":
            return _jsx(AiOutlineQuestionCircle, __assign({ className: className, size: sizePx }, props), void 0);
        case "HiSortDescending":
            return _jsx(HiSortDescending, __assign({ className: className, size: sizePx }, props), void 0);
        default:
            return _jsx(_Fragment, {}, void 0);
    }
};
//# sourceMappingURL=Presenter.js.map