import { CSSProperties, VFC } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiYen } from "react-icons/bi";
import { FaLine } from "react-icons/fa";
import {
  FiAlertCircle,
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiCopy,
  FiFacebook,
  FiFilter,
  FiGrid,
  FiHeart,
  FiImage,
  FiInfo,
  FiInstagram,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
  FiMinus,
  FiMoreHorizontal,
  FiPhoneCall,
  FiPlus,
  FiSearch,
  FiSliders,
  FiTwitter,
  FiUser,
  FiX,
  FiZap,
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
  | "FiAlertCircle"
  | "FiAlignRight"
  | "FiArrowDown"
  | "FiArrowLeft"
  | "FiArrowRight"
  | "FiCalendar"
  | "FiCheckCircle"
  | "FiCheck"
  | "FiChevronDown"
  | "FiChevronLeft"
  | "FiChevronRight"
  | "FiChevronUp"
  | "FiCopy"
  | "FiEdit2"
  | "FiEdit3"
  | "FiEdit"
  | "FiExternalLink"
  | "FiEyeOff"
  | "FiEye"
  | "FiFacebook"
  | "FiFilter"
  | "FiGrid"
  | "FiHeart"
  | "FiImage"
  | "FiInfo"
  | "FiInstagram"
  | "FiMapPin"
  | "FiMenu"
  | "FiMessageCircle"
  | "FiMinus"
  | "FiMoreHorizontal"
  | "FiPhoneCall"
  | "FiPlus"
  | "FiSearch"
  | "FiSliders"
  | "FiTwitter"
  | "FiUser"
  | "FiX"
  | "FiZap"
  | "FaLine"
  | "IoLogoFacebook"
  | "IoLogoTwitter"
  | "IoLogoInstagram"
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
    case "FiAlertCircle":
      return <FiAlertCircle className={className} size={sizePx} {...props} />;
    case "FiArrowDown":
      return <FiArrowDown className={className} size={sizePx} {...props} />;
    case "FiArrowLeft":
      return <FiArrowLeft className={className} size={sizePx} {...props} />;
    case "FiArrowRight":
      return <FiArrowRight className={className} size={sizePx} {...props} />;
    case "FiCalendar":
      return <FiCalendar className={className} size={sizePx} {...props} />;
    case "FiCheckCircle":
      return <FiCheckCircle className={className} size={sizePx} {...props} />;
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
    case "FiCopy":
      return <FiCopy className={className} size={sizePx} {...props} />;
    case "FiFacebook":
      return <FiFacebook className={className} size={sizePx} {...props} />;
    case "FiFilter":
      return <FiFilter className={className} size={sizePx} {...props} />;
    case "FiGrid":
      return <FiGrid className={className} size={sizePx} {...props} />;
    case "FiHeart":
      return <FiHeart className={className} size={sizePx} {...props} />;
    case "FiImage":
      return <FiImage className={className} size={sizePx} {...props} />;
    case "FiInfo":
      return <FiInfo className={className} size={sizePx} {...props} />;
    case "FiInstagram":
      return <FiInstagram className={className} size={sizePx} {...props} />;
    case "FiMapPin":
      return <FiMapPin className={className} size={sizePx} {...props} />;
    case "FiMenu":
      return <FiMenu className={className} size={sizePx} {...props} />;
    case "FiMessageCircle":
      return <FiMessageCircle className={className} size={sizePx} {...props} />;
    case "FiMinus":
      return <FiMinus className={className} size={sizePx} {...props} />;
    case "FiMoreHorizontal":
      return <FiMoreHorizontal className={className} size={sizePx} {...props} />;
    case "FiPhoneCall":
      return <FiPhoneCall className={className} size={sizePx} {...props} />;
    case "FiPlus":
      return <FiPlus className={className} size={sizePx} {...props} />;
    case "FiSearch":
      return <FiSearch className={className} size={sizePx} {...props} />;
    case "FiSliders":
      return <FiSliders className={className} size={sizePx} {...props} />;
    case "FiTwitter":
      return <FiTwitter className={className} size={sizePx} {...props} />;
    case "FiUser":
      return <FiUser className={className} size={sizePx} {...props} />;
    case "FiX":
      return <FiX className={className} size={sizePx} {...props} />;
    case "FiZap":
      return <FiZap className={className} size={sizePx} {...props} />;
    case "FaLine":
      return <FaLine className={className} size={sizePx} {...props} />;
    case "IoLogoFacebook":
      return <IoLogoFacebook className={className} size={sizePx} {...props} />;
    case "IoLogoTwitter":
      return <IoLogoTwitter className={className} size={sizePx} {...props} />;
    case "IoLogoInstagram":
      return <IoLogoInstagram className={className} size={sizePx} {...props} />;
    case "AiOutlineQuestionCircle":
      return <AiOutlineQuestionCircle className={className} size={sizePx} {...props} />;
    case "HiSortDescending":
      return <HiSortDescending className={className} size={sizePx} {...props} />;

    default:
      return <></>;
  }
};
