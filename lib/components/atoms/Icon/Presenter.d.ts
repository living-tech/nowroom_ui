import { CSSProperties, VFC } from "react";
export declare type Size = "xs" | "sm" | "md" | "lg" | "xl";
export declare type NowRoomIconName = "AirCon" | "AutoLock" | "Bath" | "Bed" | "Desk" | "Dryer" | "Guitar" | "Microwave" | "NoSmoking" | "Pet" | "Refrigerator" | "WashMachine" | "Wifi" | "Woman";
export declare type FiIconName = "FiActivity" | "FiAirplay" | "FiAlertCircle" | "FiAlertOctagon" | "FiAlertTriangle" | "FiAlignCenter" | "FiAlignJustify" | "FiAlignLeft" | "FiAlignRight" | "FiAnchor" | "FiAperture" | "FiArchive" | "FiArrowDownCircle" | "FiArrowDownLeft" | "FiArrowDownRight" | "FiArrowDown" | "FiArrowLeftCircle" | "FiArrowLeft" | "FiArrowRightCircle" | "FiArrowRight" | "FiArrowUpCircle" | "FiArrowUpLeft" | "FiArrowUpRight" | "FiArrowUp" | "FiAtSign" | "FiAward" | "FiBarChart2" | "FiBarChart" | "FiBatteryCharging" | "FiBattery" | "FiBellOff" | "FiBell" | "FiBluetooth" | "FiBold" | "FiBookOpen" | "FiBook" | "FiBookmark" | "FiBox" | "FiBriefcase" | "FiCalendar" | "FiCameraOff" | "FiCamera" | "FiCast" | "FiCheckCircle" | "FiCheckSquare" | "FiCheck" | "FiChevronDown" | "FiChevronLeft" | "FiChevronRight" | "FiChevronUp" | "FiChevronsDown" | "FiChevronsLeft" | "FiChevronsRight" | "FiChevronsUp" | "FiChrome" | "FiCircle" | "FiClipboard" | "FiClock" | "FiCloudDrizzle" | "FiCloudLightning" | "FiCloudOff" | "FiCloudRain" | "FiCloudSnow" | "FiCloud" | "FiCode" | "FiCodepen" | "FiCodesandbox" | "FiCoffee" | "FiColumns" | "FiCommand" | "FiCompass" | "FiCopy" | "FiCornerDownLeft" | "FiCornerDownRight" | "FiCornerLeftDown" | "FiCornerLeftUp" | "FiCornerRightDown" | "FiCornerRightUp" | "FiCornerUpLeft" | "FiCornerUpRight" | "FiCpu" | "FiCreditCard" | "FiCrop" | "FiCrosshair" | "FiDatabase" | "FiDelete" | "FiDisc" | "FiDivideCircle" | "FiDivideSquare" | "FiDivide" | "FiDollarSign" | "FiDownloadCloud" | "FiDownload" | "FiDribbble" | "FiDroplet" | "FiEdit2" | "FiEdit3" | "FiEdit" | "FiExternalLink" | "FiEyeOff" | "FiEye" | "FiFacebook" | "FiFastForward" | "FiFeather" | "FiFigma" | "FiFileMinus" | "FiFilePlus" | "FiFileText" | "FiFile" | "FiFilm" | "FiFilter" | "FiFlag" | "FiFolderMinus" | "FiFolderPlus" | "FiFolder" | "FiFramer" | "FiFrown" | "FiGift" | "FiGitBranch" | "FiGitCommit" | "FiGitMerge" | "FiGitPullRequest" | "FiGithub" | "FiGitlab" | "FiGlobe" | "FiGrid" | "FiHardDrive" | "FiHash" | "FiHeadphones" | "FiHeart" | "FiHelpCircle" | "FiHexagon" | "FiHome" | "FiImage" | "FiInbox" | "FiInfo" | "FiInstagram" | "FiItalic" | "FiKey" | "FiLayers" | "FiLayout" | "FiLifeBuoy" | "FiLink2" | "FiLink" | "FiLinkedin" | "FiList" | "FiLoader" | "FiLock" | "FiLogIn" | "FiLogOut" | "FiMail" | "FiMapPin" | "FiMap" | "FiMaximize2" | "FiMaximize" | "FiMeh" | "FiMenu" | "FiMessageCircle" | "FiMessageSquare" | "FiMicOff" | "FiMic" | "FiMinimize2" | "FiMinimize" | "FiMinusCircle" | "FiMinusSquare" | "FiMinus" | "FiMonitor" | "FiMoon" | "FiMoreHorizontal" | "FiMoreVertical" | "FiMousePointer" | "FiMove" | "FiMusic" | "FiNavigation2" | "FiNavigation" | "FiOctagon" | "FiPackage" | "FiPaperclip" | "FiPauseCircle" | "FiPause" | "FiPenTool" | "FiPercent" | "FiPhoneCall" | "FiPhoneForwarded" | "FiPhoneIncoming" | "FiPhoneMissed" | "FiPhoneOff" | "FiPhoneOutgoing" | "FiPhone" | "FiPieChart" | "FiPlayCircle" | "FiPlay" | "FiPlusCircle" | "FiPlusSquare" | "FiPlus" | "FiPocket" | "FiPower" | "FiPrinter" | "FiRadio" | "FiRefreshCcw" | "FiRefreshCw" | "FiRepeat" | "FiRewind" | "FiRotateCcw" | "FiRotateCw" | "FiRss" | "FiSave" | "FiScissors" | "FiSearch" | "FiSend" | "FiServer" | "FiSettings" | "FiShare2" | "FiShare" | "FiShieldOff" | "FiShield" | "FiShoppingBag" | "FiShoppingCart" | "FiShuffle" | "FiSidebar" | "FiSkipBack" | "FiSkipForward" | "FiSlack" | "FiSlash" | "FiSliders" | "FiSmartphone" | "FiSmile" | "FiSpeaker" | "FiSquare" | "FiStar" | "FiStopCircle" | "FiSun" | "FiSunrise" | "FiSunset" | "FiTablet" | "FiTag" | "FiTarget" | "FiTerminal" | "FiThermometer" | "FiThumbsDown" | "FiThumbsUp" | "FiToggleLeft" | "FiToggleRight" | "FiTool" | "FiTrash2" | "FiTrash" | "FiTrello" | "FiTrendingDown" | "FiTrendingUp" | "FiTriangle" | "FiTruck" | "FiTv" | "FiTwitch" | "FiTwitter" | "FiType" | "FiUmbrella" | "FiUnderline" | "FiUnlock" | "FiUploadCloud" | "FiUpload" | "FiUserCheck" | "FiUserMinus" | "FiUserPlus" | "FiUserX" | "FiUser" | "FiUsers" | "FiVideoOff" | "FiVideo" | "FiVoicemail" | "FiVolume1" | "FiVolume2" | "FiVolumeX" | "FiVolume" | "FiWatch" | "FiWifiOff" | "FiWifi" | "FiWind" | "FiXCircle" | "FiXOctagon" | "FiXSquare" | "FiX" | "FiYoutube" | "FiZapOff" | "FiZap" | "FiZoomIn" | "FiZoomOut";
export declare type IconName = NowRoomIconName | FiIconName;
export declare type Color = "black" | "darkGray02" | "darkGray01" | "mediumGray02" | "mediumGray01" | "lightGray02" | "lightGray01" | "white" | "purple" | "pink" | "red" | "cyan" | "yellow";
export declare type Props = {
    className?: string;
    color?: Color;
    currentType?: "fill" | "stroke";
    name: IconName;
    size?: Size;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map