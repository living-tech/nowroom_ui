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
import { FiActivity, FiAirplay, FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiAlignCenter, FiAlignJustify, FiAlignLeft, FiAlignRight, FiAnchor, FiAperture, FiArchive, FiArrowDown, FiArrowDownCircle, FiArrowDownLeft, FiArrowDownRight, FiArrowLeft, FiArrowLeftCircle, FiArrowRight, FiArrowRightCircle, FiArrowUp, FiArrowUpCircle, FiArrowUpLeft, FiArrowUpRight, FiAtSign, FiAward, FiBarChart, FiBarChart2, FiBattery, FiBatteryCharging, FiBell, FiBellOff, FiBluetooth, FiBold, FiBook, FiBookmark, FiBookOpen, FiBox, FiBriefcase, FiCalendar, FiCamera, FiCameraOff, FiCast, FiCheck, FiCheckCircle, FiCheckSquare, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronsDown, FiChevronsLeft, FiChevronsRight, FiChevronsUp, FiChevronUp, FiChrome, FiCircle, FiClipboard, FiClock, FiCloud, FiCloudDrizzle, FiCloudLightning, FiCloudOff, FiCloudRain, FiCloudSnow, FiCode, FiCodepen, FiCodesandbox, FiCoffee, FiColumns, FiCommand, FiCompass, FiCopy, FiCornerDownLeft, FiCornerDownRight, FiCornerLeftDown, FiCornerLeftUp, FiCornerRightDown, FiCornerRightUp, FiCornerUpLeft, FiCornerUpRight, FiCpu, FiCreditCard, FiCrop, FiCrosshair, FiDatabase, FiDelete, FiDisc, FiDivide, FiDivideCircle, FiDivideSquare, FiDollarSign, FiDownload, FiDownloadCloud, FiDribbble, FiDroplet, FiEdit, FiEdit2, FiEdit3, FiExternalLink, FiEye, FiEyeOff, FiFacebook, FiFastForward, FiFeather, FiFigma, FiFile, FiFileMinus, FiFilePlus, FiFileText, FiFilm, FiFilter, FiFlag, FiFolder, FiFolderMinus, FiFolderPlus, FiFramer, FiFrown, 
// FiGift,
// FiGitBranch,
// FiGitCommit,
// FiGithub,
// FiGitlab,
// FiGitMerge,
// FiGitPullRequest,
// FiGlobe,
FiGrid, FiHardDrive, FiHash, FiHeadphones, FiHeart, FiHelpCircle, FiHexagon, FiHome, FiImage, FiInbox, FiInfo, FiInstagram, FiItalic, FiKey, 
// FiLayers,
// FiLayout,
// FiLifeBuoy,
// FiLink,
// FiLink2,
// FiLinkedin,
// FiList,
// FiLoader,
// FiLock,
// FiLogIn,
// FiLogOut,
FiMail, FiMap, FiMapPin, FiMaximize, FiMaximize2, FiMeh, FiMenu, FiMessageCircle, FiMessageSquare, FiMic, FiMicOff, FiMinimize, FiMinimize2, FiMinus, FiMinusCircle, FiMinusSquare, FiMonitor, FiMoon, FiMoreHorizontal, FiMoreVertical, FiMousePointer, FiMove, FiMusic, FiNavigation, FiNavigation2, FiOctagon, 
// FiPackage,
// FiPaperclip,
// FiPause,
// FiPauseCircle,
// FiPenTool,
// FiPercent,
// FiPhone,
FiPhoneCall, 
// FiPhoneForwarded,
// FiPhoneIncoming,
// FiPhoneMissed,
// FiPhoneOff,
// FiPhoneOutgoing,
// FiPieChart,
// FiPlay,
// FiPlayCircle,
FiPlus, 
// FiPlusCircle,
// FiPlusSquare,
// FiPocket,
// FiPower,
// FiPrinter,
FiRadio, FiRefreshCcw, FiRefreshCw, FiRepeat, FiRewind, FiRotateCcw, FiRotateCw, FiRss, 
// FiSave,
// FiScissors,
FiSearch, 
// FiSend,
// FiServer,
// FiSettings,
// FiShare,
// FiShare2,
// FiShield,
// FiShieldOff,
// FiShoppingBag,
// FiShoppingCart,
// FiShuffle,
// FiSidebar,
// FiSkipBack,
// FiSkipForward,
// FiSlack,
// FiSlash,
// FiSliders,
// FiSmartphone,
// FiSmile,
// FiSpeaker,
// FiSquare,
// FiStar,
// FiStopCircle,
// FiSun,
// FiSunrise,
// FiSunset,
// FiTablet,
// FiTag,
// FiTarget,
// FiTerminal,
// FiThermometer,
// FiThumbsDown,
// FiThumbsUp,
// FiToggleLeft,
// FiToggleRight,
// FiTool,
// FiTrash,
// FiTrash2,
// FiTrello,
// FiTrendingDown,
// FiTrendingUp,
// FiTriangle,
// FiTruck,
// FiTv,
// FiTwitch,
// FiTwitter,
// FiType,
// FiUmbrella,
// FiUnderline,
// FiUnlock,
// FiUpload,
// FiUploadCloud,
FiUser, 
// FiUserCheck,
// FiUserMinus,
// FiUserPlus,
// FiUsers,
// FiUserX,
FiVideo, FiVideoOff, FiVoicemail, 
// FiVolume,
// FiVolume1,
// FiVolume2,
// FiVolumeX,
FiWatch, 
// FiWifi,
// FiWifiOff,
FiWind, FiX, FiXCircle, 
// FiXOctagon,
// FiXSquare,
// FiYoutube,
FiZap,
// FiZapOff,
// FiZoomIn,
// FiZoomOut,
 } from "react-icons/fi";
import { HiSortDescending } from "react-icons/hi";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
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
        // case "FiGift":
        //   return <FiGift className={className} size={sizePx} {...props} />;
        // case "FiGitBranch":
        //   return <FiGitBranch className={className} size={sizePx} {...props} />;
        // case "FiGitCommit":
        //   return <FiGitCommit className={className} size={sizePx} {...props} />;
        // case "FiGitMerge":
        //   return <FiGitMerge className={className} size={sizePx} {...props} />;
        // case "FiGitPullRequest":
        //   return <FiGitPullRequest className={className} size={sizePx} {...props} />;
        // case "FiGithub":
        //   return <FiGithub className={className} size={sizePx} {...props} />;
        // case "FiGitlab":
        //   return <FiGitlab className={className} size={sizePx} {...props} />;
        // case "FiGlobe":
        //   return <FiGlobe className={className} size={sizePx} {...props} />;
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
        // case "FiLayers":
        //   return <FiLayers className={className} size={sizePx} {...props} />;
        // case "FiLayout":
        //   return <FiLayout className={className} size={sizePx} {...props} />;
        // case "FiLifeBuoy":
        //   return <FiLifeBuoy className={className} size={sizePx} {...props} />;
        // case "FiLink2":
        //   return <FiLink2 className={className} size={sizePx} {...props} />;
        // case "FiLink":
        //   return <FiLink className={className} size={sizePx} {...props} />;
        // case "FiLinkedin":
        //   return <FiLinkedin className={className} size={sizePx} {...props} />;
        // case "FiList":
        //   return <FiList className={className} size={sizePx} {...props} />;
        // case "FiLoader":
        //   return <FiLoader className={className} size={sizePx} {...props} />;
        // case "FiLock":
        //   return <FiLock className={className} size={sizePx} {...props} />;
        // case "FiLogIn":
        //   return <FiLogIn className={className} size={sizePx} {...props} />;
        // case "FiLogOut":
        //   return <FiLogOut className={className} size={sizePx} {...props} />;
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
        // case "FiPackage":
        //   return <FiPackage className={className} size={sizePx} {...props} />;
        // case "FiPaperclip":
        //   return <FiPaperclip className={className} size={sizePx} {...props} />;
        // case "FiPauseCircle":
        //   return <FiPauseCircle className={className} size={sizePx} {...props} />;
        // case "FiPause":
        //   return <FiPause className={className} size={sizePx} {...props} />;
        // case "FiPenTool":
        //   return <FiPenTool className={className} size={sizePx} {...props} />;
        // case "FiPercent":
        //   return <FiPercent className={className} size={sizePx} {...props} />;
        case "FiPhoneCall":
            return _jsx(FiPhoneCall, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiPhoneForwarded":
        //   return <FiPhoneForwarded className={className} size={sizePx} {...props} />;
        // case "FiPhoneIncoming":
        //   return <FiPhoneIncoming className={className} size={sizePx} {...props} />;
        // case "FiPhoneMissed":
        //   return <FiPhoneMissed className={className} size={sizePx} {...props} />;
        // case "FiPhoneOff":
        //   return <FiPhoneOff className={className} size={sizePx} {...props} />;
        // case "FiPhoneOutgoing":
        //   return <FiPhoneOutgoing className={className} size={sizePx} {...props} />;
        // case "FiPhone":
        //   return <FiPhone className={className} size={sizePx} {...props} />;
        // case "FiPieChart":
        //   return <FiPieChart className={className} size={sizePx} {...props} />;
        // case "FiPlayCircle":
        //   return <FiPlayCircle className={className} size={sizePx} {...props} />;
        // case "FiPlay":
        //   return <FiPlay className={className} size={sizePx} {...props} />;
        // case "FiPlusCircle":
        //   return <FiPlusCircle className={className} size={sizePx} {...props} />;
        // case "FiPlusSquare":
        //   return <FiPlusSquare className={className} size={sizePx} {...props} />;
        case "FiPlus":
            return _jsx(FiPlus, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiPocket":
        //   return <FiPocket className={className} size={sizePx} {...props} />;
        // case "FiPower":
        //   return <FiPower className={className} size={sizePx} {...props} />;
        // case "FiPrinter":
        //   return <FiPrinter className={className} size={sizePx} {...props} />;
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
        // case "FiSave":
        //   return <FiSave className={className} size={sizePx} {...props} />;
        // case "FiScissors":
        //   return <FiScissors className={className} size={sizePx} {...props} />;
        case "FiSearch":
            return _jsx(FiSearch, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiSend":
        //   return <FiSend className={className} size={sizePx} {...props} />;
        // case "FiServer":
        //   return <FiServer className={className} size={sizePx} {...props} />;
        // case "FiSettings":
        //   return <FiSettings className={className} size={sizePx} {...props} />;
        // case "FiShare2":
        //   return <FiShare2 className={className} size={sizePx} {...props} />;
        // case "FiShare":
        //   return <FiShare className={className} size={sizePx} {...props} />;
        // case "FiShieldOff":
        //   return <FiShieldOff className={className} size={sizePx} {...props} />;
        // case "FiShield":
        //   return <FiShield className={className} size={sizePx} {...props} />;
        // case "FiShoppingBag":
        //   return <FiShoppingBag className={className} size={sizePx} {...props} />;
        // case "FiShoppingCart":
        //   return <FiShoppingCart className={className} size={sizePx} {...props} />;
        // case "FiShuffle":
        //   return <FiShuffle className={className} size={sizePx} {...props} />;
        // case "FiSidebar":
        //   return <FiSidebar className={className} size={sizePx} {...props} />;
        // case "FiSkipBack":
        //   return <FiSkipBack className={className} size={sizePx} {...props} />;
        // case "FiSkipForward":
        //   return <FiSkipForward className={className} size={sizePx} {...props} />;
        // case "FiSlack":
        //   return <FiSlack className={className} size={sizePx} {...props} />;
        // case "FiSlash":
        //   return <FiSlash className={className} size={sizePx} {...props} />;
        // case "FiSliders":
        //   return <FiSliders className={className} size={sizePx} {...props} />;
        // case "FiSmartphone":
        //   return <FiSmartphone className={className} size={sizePx} {...props} />;
        // case "FiSmile":
        //   return <FiSmile className={className} size={sizePx} {...props} />;
        // case "FiSpeaker":
        //   return <FiSpeaker className={className} size={sizePx} {...props} />;
        // case "FiSquare":
        //   return <FiSquare className={className} size={sizePx} {...props} />;
        // case "FiStar":
        //   return <FiStar className={className} size={sizePx} {...props} />;
        // case "FiStopCircle":
        //   return <FiStopCircle className={className} size={sizePx} {...props} />;
        // case "FiSun":
        //   return <FiSun className={className} size={sizePx} {...props} />;
        // case "FiSunrise":
        //   return <FiSunrise className={className} size={sizePx} {...props} />;
        // case "FiSunset":
        //   return <FiSunset className={className} size={sizePx} {...props} />;
        // case "FiTablet":
        //   return <FiTablet className={className} size={sizePx} {...props} />;
        // case "FiTag":
        //   return <FiTag className={className} size={sizePx} {...props} />;
        // case "FiTarget":
        //   return <FiTarget className={className} size={sizePx} {...props} />;
        // case "FiTerminal":
        //   return <FiTerminal className={className} size={sizePx} {...props} />;
        // case "FiThermometer":
        //   return <FiThermometer className={className} size={sizePx} {...props} />;
        // case "FiThumbsDown":
        //   return <FiThumbsDown className={className} size={sizePx} {...props} />;
        // case "FiThumbsUp":
        //   return <FiThumbsUp className={className} size={sizePx} {...props} />;
        // case "FiToggleLeft":
        //   return <FiToggleLeft className={className} size={sizePx} {...props} />;
        // case "FiToggleRight":
        //   return <FiToggleRight className={className} size={sizePx} {...props} />;
        // case "FiTool":
        //   return <FiTool className={className} size={sizePx} {...props} />;
        // case "FiTrash2":
        //   return <FiTrash2 className={className} size={sizePx} {...props} />;
        // case "FiTrash":
        //   return <FiTrash className={className} size={sizePx} {...props} />;
        // case "FiTrello":
        //   return <FiTrello className={className} size={sizePx} {...props} />;
        // case "FiTrendingDown":
        //   return <FiTrendingDown className={className} size={sizePx} {...props} />;
        // case "FiTrendingUp":
        //   return <FiTrendingUp className={className} size={sizePx} {...props} />;
        // case "FiTriangle":
        //   return <FiTriangle className={className} size={sizePx} {...props} />;
        // case "FiTruck":
        //   return <FiTruck className={className} size={sizePx} {...props} />;
        // case "FiTv":
        //   return <FiTv className={className} size={sizePx} {...props} />;
        // case "FiTwitch":
        //   return <FiTwitch className={className} size={sizePx} {...props} />;
        // case "FiTwitter":
        //   return <FiTwitter className={className} size={sizePx} {...props} />;
        // case "FiType":
        //   return <FiType className={className} size={sizePx} {...props} />;
        // case "FiUmbrella":
        //   return <FiUmbrella className={className} size={sizePx} {...props} />;
        // case "FiUnderline":
        //   return <FiUnderline className={className} size={sizePx} {...props} />;
        // case "FiUnlock":
        //   return <FiUnlock className={className} size={sizePx} {...props} />;
        // case "FiUploadCloud":
        //   return <FiUploadCloud className={className} size={sizePx} {...props} />;
        // case "FiUpload":
        //   return <FiUpload className={className} size={sizePx} {...props} />;
        // case "FiUserCheck":
        //   return <FiUserCheck className={className} size={sizePx} {...props} />;
        // case "FiUserMinus":
        //   return <FiUserMinus className={className} size={sizePx} {...props} />;
        // case "FiUserPlus":
        //   return <FiUserPlus className={className} size={sizePx} {...props} />;
        // case "FiUserX":
        //   return <FiUserX className={className} size={sizePx} {...props} />;
        case "FiUser":
            return _jsx(FiUser, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiUsers":
        //   return <FiUsers className={className} size={sizePx} {...props} />;
        case "FiVideoOff":
            return _jsx(FiVideoOff, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVideo":
            return _jsx(FiVideo, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiVoicemail":
            return _jsx(FiVoicemail, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiVolume1":
        //   return <FiVolume1 className={className} size={sizePx} {...props} />;
        // case "FiVolume2":
        //   return <FiVolume2 className={className} size={sizePx} {...props} />;
        // case "FiVolumeX":
        //   return <FiVolumeX className={className} size={sizePx} {...props} />;
        // case "FiVolume":
        //   return <FiVolume className={className} size={sizePx} {...props} />;
        case "FiWatch":
            return _jsx(FiWatch, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiWifiOff":
        //   return <FiWifiOff className={className} size={sizePx} {...props} />;
        // case "FiWifi":
        //   return <FiWifi className={className} size={sizePx} {...props} />;
        case "FiWind":
            return _jsx(FiWind, __assign({ className: className, size: sizePx }, props), void 0);
        case "FiXCircle":
            return _jsx(FiXCircle, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiXOctagon":
        //   return <FiXOctagon className={className} size={sizePx} {...props} />;
        // case "FiXSquare":
        //   return <FiXSquare className={className} size={sizePx} {...props} />;
        case "FiX":
            return _jsx(FiX, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiYoutube":
        //   return <FiYoutube className={className} size={sizePx} {...props} />;
        // case "FiZapOff":
        //   return <FiZapOff className={className} size={sizePx} {...props} />;
        case "FiZap":
            return _jsx(FiZap, __assign({ className: className, size: sizePx }, props), void 0);
        // case "FiZoomIn":
        //   return <FiZoomIn className={className} size={sizePx} {...props} />;
        // case "FiZoomOut":
        //   return <FiZoomOut className={className} size={sizePx} {...props} />;
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