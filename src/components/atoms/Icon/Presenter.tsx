import { CSSProperties, VFC } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiYen } from "react-icons/bi";
import { FaLine } from "react-icons/fa";
import {
  FiActivity,
  FiAirplay,
  FiAlertCircle,
  FiAlertOctagon,
  FiAlertTriangle,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiAnchor,
  FiAperture,
  FiArchive,
  FiArrowDown,
  FiArrowDownCircle,
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowLeft,
  FiArrowLeftCircle,
  FiArrowRight,
  FiArrowRightCircle,
  FiArrowUp,
  FiArrowUpCircle,
  FiArrowUpLeft,
  FiArrowUpRight,
  FiAtSign,
  FiAward,
  FiBarChart,
  FiBarChart2,
  FiBattery,
  FiBatteryCharging,
  FiBell,
  FiBellOff,
  FiBluetooth,
  FiBold,
  FiBook,
  FiBookmark,
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiCalendar,
  FiCamera,
  FiCameraOff,
  FiCast,
  FiCheck,
  FiCheckCircle,
  FiCheckSquare,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronsUp,
  FiChevronUp,
  FiChrome,
  FiCircle,
  FiClipboard,
  FiClock,
  FiCloud,
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudOff,
  FiCloudRain,
  FiCloudSnow,
  FiCode,
  FiCodepen,
  FiCodesandbox,
  FiCoffee,
  FiColumns,
  FiCommand,
  FiCompass,
  FiCopy,
  FiCornerDownLeft,
  FiCornerDownRight,
  FiCornerLeftDown,
  FiCornerLeftUp,
  FiCornerRightDown,
  FiCornerRightUp,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiCpu,
  FiCreditCard,
  FiCrop,
  FiCrosshair,
  FiDatabase,
  FiDelete,
  FiDisc,
  FiDivide,
  FiDivideCircle,
  FiDivideSquare,
  FiDollarSign,
  FiDownload,
  FiDownloadCloud,
  FiDribbble,
  FiDroplet,
  FiEdit,
  FiEdit2,
  FiEdit3,
  FiExternalLink,
  FiEye,
  FiEyeOff,
  FiFacebook,
  FiFastForward,
  FiFeather,
  FiFigma,
  FiFile,
  FiFileMinus,
  FiFilePlus,
  FiFileText,
  FiFilm,
  FiFilter,
  FiFlag,
  FiFolder,
  FiFolderMinus,
  FiFolderPlus,
  FiFramer,
  FiFrown,
  FiGift,
  FiGitBranch,
  FiGitCommit,
  FiGithub,
  FiGitlab,
  FiGitMerge,
  FiGitPullRequest,
  FiGlobe,
  FiGrid,
  FiHardDrive,
  FiHash,
  FiHeadphones,
  FiHeart,
  FiHelpCircle,
  FiHexagon,
  FiHome,
  FiImage,
  FiInbox,
  FiInfo,
  FiInstagram,
  FiItalic,
  FiKey,
  FiLayers,
  FiLayout,
  FiLifeBuoy,
  FiLink,
  FiLink2,
  FiLinkedin,
  FiList,
  FiLoader,
  FiLock,
  FiLogIn,
  FiLogOut,
  FiMail,
  FiMap,
  FiMapPin,
  FiMaximize,
  FiMaximize2,
  FiMeh,
  FiMenu,
  FiMessageCircle,
  FiMessageSquare,
  FiMic,
  FiMicOff,
  FiMinimize,
  FiMinimize2,
  FiMinus,
  FiMinusCircle,
  FiMinusSquare,
  FiMonitor,
  FiMoon,
  FiMoreHorizontal,
  FiMoreVertical,
  FiMousePointer,
  FiMove,
  FiMusic,
  FiNavigation,
  FiNavigation2,
  FiOctagon,
  FiPackage,
  FiPaperclip,
  FiPause,
  FiPauseCircle,
  FiPenTool,
  FiPercent,
  FiPhone,
  FiPhoneCall,
  FiPhoneForwarded,
  FiPhoneIncoming,
  FiPhoneMissed,
  FiPhoneOff,
  FiPhoneOutgoing,
  FiPieChart,
  FiPlay,
  FiPlayCircle,
  FiPlus,
  FiPlusCircle,
  FiPlusSquare,
  FiPocket,
  FiPower,
  FiPrinter,
  FiRadio,
  FiRefreshCcw,
  FiRefreshCw,
  FiRepeat,
  FiRewind,
  FiRotateCcw,
  FiRotateCw,
  FiRss,
  FiSave,
  FiScissors,
  FiSearch,
  FiSend,
  FiServer,
  FiSettings,
  FiShare,
  FiShare2,
  FiShield,
  FiShieldOff,
  FiShoppingBag,
  FiShoppingCart,
  FiShuffle,
  FiSidebar,
  FiSkipBack,
  FiSkipForward,
  FiSlack,
  FiSlash,
  FiSliders,
  FiSmartphone,
  FiSmile,
  FiSpeaker,
  FiSquare,
  FiStar,
  FiStopCircle,
  FiSun,
  FiSunrise,
  FiSunset,
  FiTablet,
  FiTag,
  FiTarget,
  FiTerminal,
  FiThermometer,
  FiThumbsDown,
  FiThumbsUp,
  FiToggleLeft,
  FiToggleRight,
  FiTool,
  FiTrash,
  FiTrash2,
  FiTrello,
  FiTrendingDown,
  FiTrendingUp,
  FiTriangle,
  FiTruck,
  FiTv,
  FiTwitch,
  FiTwitter,
  FiType,
  FiUmbrella,
  FiUnderline,
  FiUnlock,
  FiUpload,
  FiUploadCloud,
  FiUser,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUsers,
  FiUserX,
  FiVideo,
  FiVideoOff,
  FiVoicemail,
  FiVolume,
  FiVolume1,
  FiVolume2,
  FiVolumeX,
  FiWatch,
  FiWifi,
  FiWifiOff,
  FiWind,
  FiX,
  FiXCircle,
  FiXOctagon,
  FiXSquare,
  FiYoutube,
  FiZap,
  FiZapOff,
  FiZoomIn,
  FiZoomOut,
} from "react-icons/fi";
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

// https://react-icons.github.io/react-icons/

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | number;
export type NowRoomIconName =
  | "AirCon"
  | "AutoLock"
  | "Bath"
  | "Bed"
  | "Desk"
  | "Dryer"
  | "Guitar"
  | "Microwave"
  | "NoSmoking"
  | "Pet"
  | "Refrigerator"
  | "WashMachine"
  | "Wifi"
  | "Woman"
  | "AddBuilding"
  | "AddRoom"
  | "AppListing"
  | "Building"
  | "Room"
  | "StockSettings";

export type FiIconName =
  | "BiYen"
  | "FiActivity"
  | "FiAirplay"
  | "FiAlertCircle"
  | "FiAlertOctagon"
  | "FiAlertTriangle"
  | "FiAlignCenter"
  | "FiAlignJustify"
  | "FiAlignLeft"
  | "FiAlignRight"
  | "FiAnchor"
  | "FiAperture"
  | "FiArchive"
  | "FiArrowDownCircle"
  | "FiArrowDownLeft"
  | "FiArrowDownRight"
  | "FiArrowDown"
  | "FiArrowLeftCircle"
  | "FiArrowLeft"
  | "FiArrowRightCircle"
  | "FiArrowRight"
  | "FiArrowUpCircle"
  | "FiArrowUpLeft"
  | "FiArrowUpRight"
  | "FiArrowUp"
  | "FiAtSign"
  | "FiAward"
  | "FiBarChart2"
  | "FiBarChart"
  | "FiBatteryCharging"
  | "FiBattery"
  | "FiBellOff"
  | "FiBell"
  | "FiBluetooth"
  | "FiBold"
  | "FiBookOpen"
  | "FiBook"
  | "FiBookmark"
  | "FiBox"
  | "FiBriefcase"
  | "FiCalendar"
  | "FiCameraOff"
  | "FiCamera"
  | "FiCast"
  | "FiCheckCircle"
  | "FiCheckSquare"
  | "FiCheck"
  | "FiChevronDown"
  | "FiChevronLeft"
  | "FiChevronRight"
  | "FiChevronUp"
  | "FiChevronsDown"
  | "FiChevronsLeft"
  | "FiChevronsRight"
  | "FiChevronsUp"
  | "FiChrome"
  | "FiCircle"
  | "FiClipboard"
  | "FiClock"
  | "FiCloudDrizzle"
  | "FiCloudLightning"
  | "FiCloudOff"
  | "FiCloudRain"
  | "FiCloudSnow"
  | "FiCloud"
  | "FiCode"
  | "FiCodepen"
  | "FiCodesandbox"
  | "FiCoffee"
  | "FiColumns"
  | "FiCommand"
  | "FiCompass"
  | "FiCopy"
  | "FiCornerDownLeft"
  | "FiCornerDownRight"
  | "FiCornerLeftDown"
  | "FiCornerLeftUp"
  | "FiCornerRightDown"
  | "FiCornerRightUp"
  | "FiCornerUpLeft"
  | "FiCornerUpRight"
  | "FiCpu"
  | "FiCreditCard"
  | "FiCrop"
  | "FiCrosshair"
  | "FiDatabase"
  | "FiDelete"
  | "FiDisc"
  | "FiDivideCircle"
  | "FiDivideSquare"
  | "FiDivide"
  | "FiDollarSign"
  | "FiDownloadCloud"
  | "FiDownload"
  | "FiDribbble"
  | "FiDroplet"
  | "FiEdit2"
  | "FiEdit3"
  | "FiEdit"
  | "FiExternalLink"
  | "FiEyeOff"
  | "FiEye"
  | "FiFacebook"
  | "FiFastForward"
  | "FiFeather"
  | "FiFigma"
  | "FiFileMinus"
  | "FiFilePlus"
  | "FiFileText"
  | "FiFile"
  | "FiFilm"
  | "FiFilter"
  | "FiFlag"
  | "FiFolderMinus"
  | "FiFolderPlus"
  | "FiFolder"
  | "FiFramer"
  | "FiFrown"
  | "FiGift"
  | "FiGitBranch"
  | "FiGitCommit"
  | "FiGitMerge"
  | "FiGitPullRequest"
  | "FiGithub"
  | "FiGitlab"
  | "FiGlobe"
  | "FiGrid"
  | "FiHardDrive"
  | "FiHash"
  | "FiHeadphones"
  | "FiHeart"
  | "FiHelpCircle"
  | "FiHexagon"
  | "FiHome"
  | "FiImage"
  | "FiInbox"
  | "FiInfo"
  | "FiInstagram"
  | "FiItalic"
  | "FiKey"
  | "FiLayers"
  | "FiLayout"
  | "FiLifeBuoy"
  | "FiLink2"
  | "FiLink"
  | "FiLinkedin"
  | "FiList"
  | "FiLoader"
  | "FiLock"
  | "FiLogIn"
  | "FiLogOut"
  | "FiMail"
  | "FiMapPin"
  | "FiMap"
  | "FiMaximize2"
  | "FiMaximize"
  | "FiMeh"
  | "FiMenu"
  | "FiMessageCircle"
  | "FiMessageSquare"
  | "FiMicOff"
  | "FiMic"
  | "FiMinimize2"
  | "FiMinimize"
  | "FiMinusCircle"
  | "FiMinusSquare"
  | "FiMinus"
  | "FiMonitor"
  | "FiMoon"
  | "FiMoreHorizontal"
  | "FiMoreVertical"
  | "FiMousePointer"
  | "FiMove"
  | "FiMusic"
  | "FiNavigation2"
  | "FiNavigation"
  | "FiOctagon"
  | "FiPackage"
  | "FiPaperclip"
  | "FiPauseCircle"
  | "FiPause"
  | "FiPenTool"
  | "FiPercent"
  | "FiPhoneCall"
  | "FiPhoneForwarded"
  | "FiPhoneIncoming"
  | "FiPhoneMissed"
  | "FiPhoneOff"
  | "FiPhoneOutgoing"
  | "FiPhone"
  | "FiPieChart"
  | "FiPlayCircle"
  | "FiPlay"
  | "FiPlusCircle"
  | "FiPlusSquare"
  | "FiPlus"
  | "FiPocket"
  | "FiPower"
  | "FiPrinter"
  | "FiRadio"
  | "FiRefreshCcw"
  | "FiRefreshCw"
  | "FiRepeat"
  | "FiRewind"
  | "FiRotateCcw"
  | "FiRotateCw"
  | "FiRss"
  | "FiSave"
  | "FiScissors"
  | "FiSearch"
  | "FiSend"
  | "FiServer"
  | "FiSettings"
  | "FiShare2"
  | "FiShare"
  | "FiShieldOff"
  | "FiShield"
  | "FiShoppingBag"
  | "FiShoppingCart"
  | "FiShuffle"
  | "FiSidebar"
  | "FiSkipBack"
  | "FiSkipForward"
  | "FiSlack"
  | "FiSlash"
  | "FiSliders"
  | "FiSmartphone"
  | "FiSmile"
  | "FiSpeaker"
  | "FiSquare"
  | "FiStar"
  | "FiStopCircle"
  | "FiSun"
  | "FiSunrise"
  | "FiSunset"
  | "FiTablet"
  | "FiTag"
  | "FiTarget"
  | "FiTerminal"
  | "FiThermometer"
  | "FiThumbsDown"
  | "FiThumbsUp"
  | "FiToggleLeft"
  | "FiToggleRight"
  | "FiTool"
  | "FiTrash2"
  | "FiTrash"
  | "FiTrello"
  | "FiTrendingDown"
  | "FiTrendingUp"
  | "FiTriangle"
  | "FiTruck"
  | "FiTv"
  | "FiTwitch"
  | "FiTwitter"
  | "FiType"
  | "FiUmbrella"
  | "FiUnderline"
  | "FiUnlock"
  | "FiUploadCloud"
  | "FiUpload"
  | "FiUserCheck"
  | "FiUserMinus"
  | "FiUserPlus"
  | "FiUserX"
  | "FiUser"
  | "FiUsers"
  | "FiVideoOff"
  | "FiVideo"
  | "FiVoicemail"
  | "FiVolume1"
  | "FiVolume2"
  | "FiVolumeX"
  | "FiVolume"
  | "FiWatch"
  | "FiWifiOff"
  | "FiWifi"
  | "FiWind"
  | "FiXCircle"
  | "FiXOctagon"
  | "FiXSquare"
  | "FiX"
  | "FiYoutube"
  | "FiZapOff"
  | "FiZap"
  | "FiZoomIn"
  | "FiZoomOut"
  | "FaLine"
  | "IoLogoFacebook"
  | "IoLogoTwitter"
  | "AiOutlineQuestionCircle"
  | "HiSortDescending";

export type IconName = NowRoomIconName | FiIconName;
export type Color =
  | "black"
  | "darkGray02"
  | "darkGray01"
  | "mediumGray02"
  | "mediumGray01"
  | "lightGray02"
  | "lightGray01"
  | "white"
  | "purple"
  | "pink"
  | "red"
  | "cyan"
  | "yellow"
  | "facebook"
  | "twitter"
  | "line";
export type CurrentType = "fill" | "stroke";

export type Props = {
  className?: string;
  color?: Color;
  currentType?: CurrentType;
  name: IconName;
  size?: Size;
  style?: CSSProperties;
};

export type SvgProps = {
  className?: string;
  size: number;
  style?: CSSProperties;
};

const currentTypes: { [key in IconName | string]: "stroke" | "fill" | "both" } = {
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

export const Presenter: VFC<Props> = ({
  className: propsClassName,
  color,
  currentType,
  name,
  size = "md",
  ...props
}) => {
  let currentClass = "";
  switch (currentType) {
    case "fill":
      currentClass = "fill-current";
      break;
    case "stroke":
      currentClass = "stroke-current";
      break;
    default:
      currentClass = currentTypes[name] === "both" ? `fill-current stroke-current` : `${currentTypes[name]}-current`;
      break;
  }

  let colorClass = "";
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

  let sizePx = 24;
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

  const className = `${currentClass} ${colorClass} ${propsClassName}`;

  switch (name) {
    case "AirCon":
      return <AirCon className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "AutoLock":
      return <AutoLock className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Bath":
      return <Bath className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Bed":
      return <Bed className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Desk":
      return <Desk className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Dryer":
      return <Dryer className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Guitar":
      return <Guitar className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Microwave":
      return <Microwave className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "NoSmoking":
      return <NoSmoking className={className} size={sizePx} style={{ strokeWidth: 1, ...props.style }} {...props} />;
    case "Pet":
      return <Pet className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Refrigerator":
      return <Refrigerator className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "WashMachine":
      return <WashMachine className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Wifi":
      return <Wifi className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Woman":
      return <Woman className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "AddBuilding":
      return <AddBuilding className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "AddRoom":
      return <AddRoom className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "AppListing":
      return <AppListing className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Building":
      return <Building className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "Room":
      return <Room className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />;
    case "StockSettings":
      return (
        <StockSettings className={className} size={sizePx} style={{ strokeWidth: 2, ...props.style }} {...props} />
      );

    case "BiYen":
      return <BiYen className={className} size={sizePx} {...props} />;
    case "FiActivity":
      return <FiActivity className={className} size={sizePx} {...props} />;
    case "FiAirplay":
      return <FiAirplay className={className} size={sizePx} {...props} />;
    case "FiAlertCircle":
      return <FiAlertCircle className={className} size={sizePx} {...props} />;
    case "FiAlertOctagon":
      return <FiAlertOctagon className={className} size={sizePx} {...props} />;
    case "FiAlertTriangle":
      return <FiAlertTriangle className={className} size={sizePx} {...props} />;
    case "FiAlignCenter":
      return <FiAlignCenter className={className} size={sizePx} {...props} />;
    case "FiAlignJustify":
      return <FiAlignJustify className={className} size={sizePx} {...props} />;
    case "FiAlignLeft":
      return <FiAlignLeft className={className} size={sizePx} {...props} />;
    case "FiAlignRight":
      return <FiAlignRight className={className} size={sizePx} {...props} />;
    case "FiAnchor":
      return <FiAnchor className={className} size={sizePx} {...props} />;
    case "FiAperture":
      return <FiAperture className={className} size={sizePx} {...props} />;
    case "FiArchive":
      return <FiArchive className={className} size={sizePx} {...props} />;
    case "FiArrowDownCircle":
      return <FiArrowDownCircle className={className} size={sizePx} {...props} />;
    case "FiArrowDownLeft":
      return <FiArrowDownLeft className={className} size={sizePx} {...props} />;
    case "FiArrowDownRight":
      return <FiArrowDownRight className={className} size={sizePx} {...props} />;
    case "FiArrowDown":
      return <FiArrowDown className={className} size={sizePx} {...props} />;
    case "FiArrowLeftCircle":
      return <FiArrowLeftCircle className={className} size={sizePx} {...props} />;
    case "FiArrowLeft":
      return <FiArrowLeft className={className} size={sizePx} {...props} />;
    case "FiArrowRightCircle":
      return <FiArrowRightCircle className={className} size={sizePx} {...props} />;
    case "FiArrowRight":
      return <FiArrowRight className={className} size={sizePx} {...props} />;
    case "FiArrowUpCircle":
      return <FiArrowUpCircle className={className} size={sizePx} {...props} />;
    case "FiArrowUpLeft":
      return <FiArrowUpLeft className={className} size={sizePx} {...props} />;
    case "FiArrowUpRight":
      return <FiArrowUpRight className={className} size={sizePx} {...props} />;
    case "FiArrowUp":
      return <FiArrowUp className={className} size={sizePx} {...props} />;
    case "FiAtSign":
      return <FiAtSign className={className} size={sizePx} {...props} />;
    case "FiAward":
      return <FiAward className={className} size={sizePx} {...props} />;
    case "FiBarChart2":
      return <FiBarChart2 className={className} size={sizePx} {...props} />;
    case "FiBarChart":
      return <FiBarChart className={className} size={sizePx} {...props} />;
    case "FiBatteryCharging":
      return <FiBatteryCharging className={className} size={sizePx} {...props} />;
    case "FiBattery":
      return <FiBattery className={className} size={sizePx} {...props} />;
    case "FiBellOff":
      return <FiBellOff className={className} size={sizePx} {...props} />;
    case "FiBell":
      return <FiBell className={className} size={sizePx} {...props} />;
    case "FiBluetooth":
      return <FiBluetooth className={className} size={sizePx} {...props} />;
    case "FiBold":
      return <FiBold className={className} size={sizePx} {...props} />;
    case "FiBookOpen":
      return <FiBookOpen className={className} size={sizePx} {...props} />;
    case "FiBook":
      return <FiBook className={className} size={sizePx} {...props} />;
    case "FiBookmark":
      return <FiBookmark className={className} size={sizePx} {...props} />;
    case "FiBox":
      return <FiBox className={className} size={sizePx} {...props} />;
    case "FiBriefcase":
      return <FiBriefcase className={className} size={sizePx} {...props} />;
    case "FiCalendar":
      return <FiCalendar className={className} size={sizePx} {...props} />;
    case "FiCameraOff":
      return <FiCameraOff className={className} size={sizePx} {...props} />;
    case "FiCamera":
      return <FiCamera className={className} size={sizePx} {...props} />;
    case "FiCast":
      return <FiCast className={className} size={sizePx} {...props} />;
    case "FiCheckCircle":
      return <FiCheckCircle className={className} size={sizePx} {...props} />;
    case "FiCheckSquare":
      return <FiCheckSquare className={className} size={sizePx} {...props} />;
    case "FiCheck":
      return <FiCheck className={className} size={sizePx} {...props} />;
    case "FiChevronDown":
      return <FiChevronDown className={className} size={sizePx} {...props} />;
    case "FiChevronLeft":
      return <FiChevronLeft className={className} size={sizePx} {...props} />;
    case "FiChevronRight":
      return <FiChevronRight className={className} size={sizePx} {...props} />;
    case "FiChevronUp":
      return <FiChevronUp className={className} size={sizePx} {...props} />;
    case "FiChevronsDown":
      return <FiChevronsDown className={className} size={sizePx} {...props} />;
    case "FiChevronsLeft":
      return <FiChevronsLeft className={className} size={sizePx} {...props} />;
    case "FiChevronsRight":
      return <FiChevronsRight className={className} size={sizePx} {...props} />;
    case "FiChevronsUp":
      return <FiChevronsUp className={className} size={sizePx} {...props} />;
    case "FiChrome":
      return <FiChrome className={className} size={sizePx} {...props} />;
    case "FiCircle":
      return <FiCircle className={className} size={sizePx} {...props} />;
    case "FiClipboard":
      return <FiClipboard className={className} size={sizePx} {...props} />;
    case "FiClock":
      return <FiClock className={className} size={sizePx} {...props} />;
    case "FiCloudDrizzle":
      return <FiCloudDrizzle className={className} size={sizePx} {...props} />;
    case "FiCloudLightning":
      return <FiCloudLightning className={className} size={sizePx} {...props} />;
    case "FiCloudOff":
      return <FiCloudOff className={className} size={sizePx} {...props} />;
    case "FiCloudRain":
      return <FiCloudRain className={className} size={sizePx} {...props} />;
    case "FiCloudSnow":
      return <FiCloudSnow className={className} size={sizePx} {...props} />;
    case "FiCloud":
      return <FiCloud className={className} size={sizePx} {...props} />;
    case "FiCode":
      return <FiCode className={className} size={sizePx} {...props} />;
    case "FiCodepen":
      return <FiCodepen className={className} size={sizePx} {...props} />;
    case "FiCodesandbox":
      return <FiCodesandbox className={className} size={sizePx} {...props} />;
    case "FiCoffee":
      return <FiCoffee className={className} size={sizePx} {...props} />;
    case "FiColumns":
      return <FiColumns className={className} size={sizePx} {...props} />;
    case "FiCommand":
      return <FiCommand className={className} size={sizePx} {...props} />;
    case "FiCompass":
      return <FiCompass className={className} size={sizePx} {...props} />;
    case "FiCopy":
      return <FiCopy className={className} size={sizePx} {...props} />;
    case "FiCornerDownLeft":
      return <FiCornerDownLeft className={className} size={sizePx} {...props} />;
    case "FiCornerDownRight":
      return <FiCornerDownRight className={className} size={sizePx} {...props} />;
    case "FiCornerLeftDown":
      return <FiCornerLeftDown className={className} size={sizePx} {...props} />;
    case "FiCornerLeftUp":
      return <FiCornerLeftUp className={className} size={sizePx} {...props} />;
    case "FiCornerRightDown":
      return <FiCornerRightDown className={className} size={sizePx} {...props} />;
    case "FiCornerRightUp":
      return <FiCornerRightUp className={className} size={sizePx} {...props} />;
    case "FiCornerUpLeft":
      return <FiCornerUpLeft className={className} size={sizePx} {...props} />;
    case "FiCornerUpRight":
      return <FiCornerUpRight className={className} size={sizePx} {...props} />;
    case "FiCpu":
      return <FiCpu className={className} size={sizePx} {...props} />;
    case "FiCreditCard":
      return <FiCreditCard className={className} size={sizePx} {...props} />;
    case "FiCrop":
      return <FiCrop className={className} size={sizePx} {...props} />;
    case "FiCrosshair":
      return <FiCrosshair className={className} size={sizePx} {...props} />;
    case "FiDatabase":
      return <FiDatabase className={className} size={sizePx} {...props} />;
    case "FiDelete":
      return <FiDelete className={className} size={sizePx} {...props} />;
    case "FiDisc":
      return <FiDisc className={className} size={sizePx} {...props} />;
    case "FiDivideCircle":
      return <FiDivideCircle className={className} size={sizePx} {...props} />;
    case "FiDivideSquare":
      return <FiDivideSquare className={className} size={sizePx} {...props} />;
    case "FiDivide":
      return <FiDivide className={className} size={sizePx} {...props} />;
    case "FiDollarSign":
      return <FiDollarSign className={className} size={sizePx} {...props} />;
    case "FiDownloadCloud":
      return <FiDownloadCloud className={className} size={sizePx} {...props} />;
    case "FiDownload":
      return <FiDownload className={className} size={sizePx} {...props} />;
    case "FiDribbble":
      return <FiDribbble className={className} size={sizePx} {...props} />;
    case "FiDroplet":
      return <FiDroplet className={className} size={sizePx} {...props} />;
    case "FiEdit2":
      return <FiEdit2 className={className} size={sizePx} {...props} />;
    case "FiEdit3":
      return <FiEdit3 className={className} size={sizePx} {...props} />;
    case "FiEdit":
      return <FiEdit className={className} size={sizePx} {...props} />;
    case "FiExternalLink":
      return <FiExternalLink className={className} size={sizePx} {...props} />;
    case "FiEyeOff":
      return <FiEyeOff className={className} size={sizePx} {...props} />;
    case "FiEye":
      return <FiEye className={className} size={sizePx} {...props} />;
    case "FiFacebook":
      return <FiFacebook className={className} size={sizePx} {...props} />;
    case "FiFastForward":
      return <FiFastForward className={className} size={sizePx} {...props} />;
    case "FiFeather":
      return <FiFeather className={className} size={sizePx} {...props} />;
    case "FiFigma":
      return <FiFigma className={className} size={sizePx} {...props} />;
    case "FiFileMinus":
      return <FiFileMinus className={className} size={sizePx} {...props} />;
    case "FiFilePlus":
      return <FiFilePlus className={className} size={sizePx} {...props} />;
    case "FiFileText":
      return <FiFileText className={className} size={sizePx} {...props} />;
    case "FiFile":
      return <FiFile className={className} size={sizePx} {...props} />;
    case "FiFilm":
      return <FiFilm className={className} size={sizePx} {...props} />;
    case "FiFilter":
      return <FiFilter className={className} size={sizePx} {...props} />;
    case "FiFlag":
      return <FiFlag className={className} size={sizePx} {...props} />;
    case "FiFolderMinus":
      return <FiFolderMinus className={className} size={sizePx} {...props} />;
    case "FiFolderPlus":
      return <FiFolderPlus className={className} size={sizePx} {...props} />;
    case "FiFolder":
      return <FiFolder className={className} size={sizePx} {...props} />;
    case "FiFramer":
      return <FiFramer className={className} size={sizePx} {...props} />;
    case "FiFrown":
      return <FiFrown className={className} size={sizePx} {...props} />;
    case "FiGift":
      return <FiGift className={className} size={sizePx} {...props} />;
    case "FiGitBranch":
      return <FiGitBranch className={className} size={sizePx} {...props} />;
    case "FiGitCommit":
      return <FiGitCommit className={className} size={sizePx} {...props} />;
    case "FiGitMerge":
      return <FiGitMerge className={className} size={sizePx} {...props} />;
    case "FiGitPullRequest":
      return <FiGitPullRequest className={className} size={sizePx} {...props} />;
    case "FiGithub":
      return <FiGithub className={className} size={sizePx} {...props} />;
    case "FiGitlab":
      return <FiGitlab className={className} size={sizePx} {...props} />;
    case "FiGlobe":
      return <FiGlobe className={className} size={sizePx} {...props} />;
    case "FiGrid":
      return <FiGrid className={className} size={sizePx} {...props} />;
    case "FiHardDrive":
      return <FiHardDrive className={className} size={sizePx} {...props} />;
    case "FiHash":
      return <FiHash className={className} size={sizePx} {...props} />;
    case "FiHeadphones":
      return <FiHeadphones className={className} size={sizePx} {...props} />;
    case "FiHeart":
      return <FiHeart className={className} size={sizePx} {...props} />;
    case "FiHelpCircle":
      return <FiHelpCircle className={className} size={sizePx} {...props} />;
    case "FiHexagon":
      return <FiHexagon className={className} size={sizePx} {...props} />;
    case "FiHome":
      return <FiHome className={className} size={sizePx} {...props} />;
    case "FiImage":
      return <FiImage className={className} size={sizePx} {...props} />;
    case "FiInbox":
      return <FiInbox className={className} size={sizePx} {...props} />;
    case "FiInfo":
      return <FiInfo className={className} size={sizePx} {...props} />;
    case "FiInstagram":
      return <FiInstagram className={className} size={sizePx} {...props} />;
    case "FiItalic":
      return <FiItalic className={className} size={sizePx} {...props} />;
    case "FiKey":
      return <FiKey className={className} size={sizePx} {...props} />;
    case "FiLayers":
      return <FiLayers className={className} size={sizePx} {...props} />;
    case "FiLayout":
      return <FiLayout className={className} size={sizePx} {...props} />;
    case "FiLifeBuoy":
      return <FiLifeBuoy className={className} size={sizePx} {...props} />;
    case "FiLink2":
      return <FiLink2 className={className} size={sizePx} {...props} />;
    case "FiLink":
      return <FiLink className={className} size={sizePx} {...props} />;
    case "FiLinkedin":
      return <FiLinkedin className={className} size={sizePx} {...props} />;
    case "FiList":
      return <FiList className={className} size={sizePx} {...props} />;
    case "FiLoader":
      return <FiLoader className={className} size={sizePx} {...props} />;
    case "FiLock":
      return <FiLock className={className} size={sizePx} {...props} />;
    case "FiLogIn":
      return <FiLogIn className={className} size={sizePx} {...props} />;
    case "FiLogOut":
      return <FiLogOut className={className} size={sizePx} {...props} />;
    case "FiMail":
      return <FiMail className={className} size={sizePx} {...props} />;
    case "FiMapPin":
      return <FiMapPin className={className} size={sizePx} {...props} />;
    case "FiMap":
      return <FiMap className={className} size={sizePx} {...props} />;
    case "FiMaximize2":
      return <FiMaximize2 className={className} size={sizePx} {...props} />;
    case "FiMaximize":
      return <FiMaximize className={className} size={sizePx} {...props} />;
    case "FiMeh":
      return <FiMeh className={className} size={sizePx} {...props} />;
    case "FiMenu":
      return <FiMenu className={className} size={sizePx} {...props} />;
    case "FiMessageCircle":
      return <FiMessageCircle className={className} size={sizePx} {...props} />;
    case "FiMessageSquare":
      return <FiMessageSquare className={className} size={sizePx} {...props} />;
    case "FiMicOff":
      return <FiMicOff className={className} size={sizePx} {...props} />;
    case "FiMic":
      return <FiMic className={className} size={sizePx} {...props} />;
    case "FiMinimize2":
      return <FiMinimize2 className={className} size={sizePx} {...props} />;
    case "FiMinimize":
      return <FiMinimize className={className} size={sizePx} {...props} />;
    case "FiMinusCircle":
      return <FiMinusCircle className={className} size={sizePx} {...props} />;
    case "FiMinusSquare":
      return <FiMinusSquare className={className} size={sizePx} {...props} />;
    case "FiMinus":
      return <FiMinus className={className} size={sizePx} {...props} />;
    case "FiMonitor":
      return <FiMonitor className={className} size={sizePx} {...props} />;
    case "FiMoon":
      return <FiMoon className={className} size={sizePx} {...props} />;
    case "FiMoreHorizontal":
      return <FiMoreHorizontal className={className} size={sizePx} {...props} />;
    case "FiMoreVertical":
      return <FiMoreVertical className={className} size={sizePx} {...props} />;
    case "FiMousePointer":
      return <FiMousePointer className={className} size={sizePx} {...props} />;
    case "FiMove":
      return <FiMove className={className} size={sizePx} {...props} />;
    case "FiMusic":
      return <FiMusic className={className} size={sizePx} {...props} />;
    case "FiNavigation2":
      return <FiNavigation2 className={className} size={sizePx} {...props} />;
    case "FiNavigation":
      return <FiNavigation className={className} size={sizePx} {...props} />;
    case "FiOctagon":
      return <FiOctagon className={className} size={sizePx} {...props} />;
    case "FiPackage":
      return <FiPackage className={className} size={sizePx} {...props} />;
    case "FiPaperclip":
      return <FiPaperclip className={className} size={sizePx} {...props} />;
    case "FiPauseCircle":
      return <FiPauseCircle className={className} size={sizePx} {...props} />;
    case "FiPause":
      return <FiPause className={className} size={sizePx} {...props} />;
    case "FiPenTool":
      return <FiPenTool className={className} size={sizePx} {...props} />;
    case "FiPercent":
      return <FiPercent className={className} size={sizePx} {...props} />;
    case "FiPhoneCall":
      return <FiPhoneCall className={className} size={sizePx} {...props} />;
    case "FiPhoneForwarded":
      return <FiPhoneForwarded className={className} size={sizePx} {...props} />;
    case "FiPhoneIncoming":
      return <FiPhoneIncoming className={className} size={sizePx} {...props} />;
    case "FiPhoneMissed":
      return <FiPhoneMissed className={className} size={sizePx} {...props} />;
    case "FiPhoneOff":
      return <FiPhoneOff className={className} size={sizePx} {...props} />;
    case "FiPhoneOutgoing":
      return <FiPhoneOutgoing className={className} size={sizePx} {...props} />;
    case "FiPhone":
      return <FiPhone className={className} size={sizePx} {...props} />;
    case "FiPieChart":
      return <FiPieChart className={className} size={sizePx} {...props} />;
    case "FiPlayCircle":
      return <FiPlayCircle className={className} size={sizePx} {...props} />;
    case "FiPlay":
      return <FiPlay className={className} size={sizePx} {...props} />;
    case "FiPlusCircle":
      return <FiPlusCircle className={className} size={sizePx} {...props} />;
    case "FiPlusSquare":
      return <FiPlusSquare className={className} size={sizePx} {...props} />;
    case "FiPlus":
      return <FiPlus className={className} size={sizePx} {...props} />;
    case "FiPocket":
      return <FiPocket className={className} size={sizePx} {...props} />;
    case "FiPower":
      return <FiPower className={className} size={sizePx} {...props} />;
    case "FiPrinter":
      return <FiPrinter className={className} size={sizePx} {...props} />;
    case "FiRadio":
      return <FiRadio className={className} size={sizePx} {...props} />;
    case "FiRefreshCcw":
      return <FiRefreshCcw className={className} size={sizePx} {...props} />;
    case "FiRefreshCw":
      return <FiRefreshCw className={className} size={sizePx} {...props} />;
    case "FiRepeat":
      return <FiRepeat className={className} size={sizePx} {...props} />;
    case "FiRewind":
      return <FiRewind className={className} size={sizePx} {...props} />;
    case "FiRotateCcw":
      return <FiRotateCcw className={className} size={sizePx} {...props} />;
    case "FiRotateCw":
      return <FiRotateCw className={className} size={sizePx} {...props} />;
    case "FiRss":
      return <FiRss className={className} size={sizePx} {...props} />;
    case "FiSave":
      return <FiSave className={className} size={sizePx} {...props} />;
    case "FiScissors":
      return <FiScissors className={className} size={sizePx} {...props} />;
    case "FiSearch":
      return <FiSearch className={className} size={sizePx} {...props} />;
    case "FiSend":
      return <FiSend className={className} size={sizePx} {...props} />;
    case "FiServer":
      return <FiServer className={className} size={sizePx} {...props} />;
    case "FiSettings":
      return <FiSettings className={className} size={sizePx} {...props} />;
    case "FiShare2":
      return <FiShare2 className={className} size={sizePx} {...props} />;
    case "FiShare":
      return <FiShare className={className} size={sizePx} {...props} />;
    case "FiShieldOff":
      return <FiShieldOff className={className} size={sizePx} {...props} />;
    case "FiShield":
      return <FiShield className={className} size={sizePx} {...props} />;
    case "FiShoppingBag":
      return <FiShoppingBag className={className} size={sizePx} {...props} />;
    case "FiShoppingCart":
      return <FiShoppingCart className={className} size={sizePx} {...props} />;
    case "FiShuffle":
      return <FiShuffle className={className} size={sizePx} {...props} />;
    case "FiSidebar":
      return <FiSidebar className={className} size={sizePx} {...props} />;
    case "FiSkipBack":
      return <FiSkipBack className={className} size={sizePx} {...props} />;
    case "FiSkipForward":
      return <FiSkipForward className={className} size={sizePx} {...props} />;
    case "FiSlack":
      return <FiSlack className={className} size={sizePx} {...props} />;
    case "FiSlash":
      return <FiSlash className={className} size={sizePx} {...props} />;
    case "FiSliders":
      return <FiSliders className={className} size={sizePx} {...props} />;
    case "FiSmartphone":
      return <FiSmartphone className={className} size={sizePx} {...props} />;
    case "FiSmile":
      return <FiSmile className={className} size={sizePx} {...props} />;
    case "FiSpeaker":
      return <FiSpeaker className={className} size={sizePx} {...props} />;
    case "FiSquare":
      return <FiSquare className={className} size={sizePx} {...props} />;
    case "FiStar":
      return <FiStar className={className} size={sizePx} {...props} />;
    case "FiStopCircle":
      return <FiStopCircle className={className} size={sizePx} {...props} />;
    case "FiSun":
      return <FiSun className={className} size={sizePx} {...props} />;
    case "FiSunrise":
      return <FiSunrise className={className} size={sizePx} {...props} />;
    case "FiSunset":
      return <FiSunset className={className} size={sizePx} {...props} />;
    case "FiTablet":
      return <FiTablet className={className} size={sizePx} {...props} />;
    case "FiTag":
      return <FiTag className={className} size={sizePx} {...props} />;
    case "FiTarget":
      return <FiTarget className={className} size={sizePx} {...props} />;
    case "FiTerminal":
      return <FiTerminal className={className} size={sizePx} {...props} />;
    case "FiThermometer":
      return <FiThermometer className={className} size={sizePx} {...props} />;
    case "FiThumbsDown":
      return <FiThumbsDown className={className} size={sizePx} {...props} />;
    case "FiThumbsUp":
      return <FiThumbsUp className={className} size={sizePx} {...props} />;
    case "FiToggleLeft":
      return <FiToggleLeft className={className} size={sizePx} {...props} />;
    case "FiToggleRight":
      return <FiToggleRight className={className} size={sizePx} {...props} />;
    case "FiTool":
      return <FiTool className={className} size={sizePx} {...props} />;
    case "FiTrash2":
      return <FiTrash2 className={className} size={sizePx} {...props} />;
    case "FiTrash":
      return <FiTrash className={className} size={sizePx} {...props} />;
    case "FiTrello":
      return <FiTrello className={className} size={sizePx} {...props} />;
    case "FiTrendingDown":
      return <FiTrendingDown className={className} size={sizePx} {...props} />;
    case "FiTrendingUp":
      return <FiTrendingUp className={className} size={sizePx} {...props} />;
    case "FiTriangle":
      return <FiTriangle className={className} size={sizePx} {...props} />;
    case "FiTruck":
      return <FiTruck className={className} size={sizePx} {...props} />;
    case "FiTv":
      return <FiTv className={className} size={sizePx} {...props} />;
    case "FiTwitch":
      return <FiTwitch className={className} size={sizePx} {...props} />;
    case "FiTwitter":
      return <FiTwitter className={className} size={sizePx} {...props} />;
    case "FiType":
      return <FiType className={className} size={sizePx} {...props} />;
    case "FiUmbrella":
      return <FiUmbrella className={className} size={sizePx} {...props} />;
    case "FiUnderline":
      return <FiUnderline className={className} size={sizePx} {...props} />;
    case "FiUnlock":
      return <FiUnlock className={className} size={sizePx} {...props} />;
    case "FiUploadCloud":
      return <FiUploadCloud className={className} size={sizePx} {...props} />;
    case "FiUpload":
      return <FiUpload className={className} size={sizePx} {...props} />;
    case "FiUserCheck":
      return <FiUserCheck className={className} size={sizePx} {...props} />;
    case "FiUserMinus":
      return <FiUserMinus className={className} size={sizePx} {...props} />;
    case "FiUserPlus":
      return <FiUserPlus className={className} size={sizePx} {...props} />;
    case "FiUserX":
      return <FiUserX className={className} size={sizePx} {...props} />;
    case "FiUser":
      return <FiUser className={className} size={sizePx} {...props} />;
    case "FiUsers":
      return <FiUsers className={className} size={sizePx} {...props} />;
    case "FiVideoOff":
      return <FiVideoOff className={className} size={sizePx} {...props} />;
    case "FiVideo":
      return <FiVideo className={className} size={sizePx} {...props} />;
    case "FiVoicemail":
      return <FiVoicemail className={className} size={sizePx} {...props} />;
    case "FiVolume1":
      return <FiVolume1 className={className} size={sizePx} {...props} />;
    case "FiVolume2":
      return <FiVolume2 className={className} size={sizePx} {...props} />;
    case "FiVolumeX":
      return <FiVolumeX className={className} size={sizePx} {...props} />;
    case "FiVolume":
      return <FiVolume className={className} size={sizePx} {...props} />;
    case "FiWatch":
      return <FiWatch className={className} size={sizePx} {...props} />;
    case "FiWifiOff":
      return <FiWifiOff className={className} size={sizePx} {...props} />;
    case "FiWifi":
      return <FiWifi className={className} size={sizePx} {...props} />;
    case "FiWind":
      return <FiWind className={className} size={sizePx} {...props} />;
    case "FiXCircle":
      return <FiXCircle className={className} size={sizePx} {...props} />;
    case "FiXOctagon":
      return <FiXOctagon className={className} size={sizePx} {...props} />;
    case "FiXSquare":
      return <FiXSquare className={className} size={sizePx} {...props} />;
    case "FiX":
      return <FiX className={className} size={sizePx} {...props} />;
    case "FiYoutube":
      return <FiYoutube className={className} size={sizePx} {...props} />;
    case "FiZapOff":
      return <FiZapOff className={className} size={sizePx} {...props} />;
    case "FiZap":
      return <FiZap className={className} size={sizePx} {...props} />;
    case "FiZoomIn":
      return <FiZoomIn className={className} size={sizePx} {...props} />;
    case "FiZoomOut":
      return <FiZoomOut className={className} size={sizePx} {...props} />;
    case "FaLine":
      return <FaLine className={className} size={sizePx} {...props} />;
    case "IoLogoFacebook":
      return <IoLogoFacebook className={className} size={sizePx} {...props} />;
    case "IoLogoTwitter":
      return <IoLogoTwitter className={className} size={sizePx} {...props} />;
    case "AiOutlineQuestionCircle":
      return <AiOutlineQuestionCircle className={className} size={sizePx} {...props} />;
    case "HiSortDescending":
      return <HiSortDescending className={className} size={sizePx} {...props} />;

    default:
      return <></>;
  }
};
