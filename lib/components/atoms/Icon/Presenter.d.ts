import { CSSProperties, VFC } from "react";
export declare type Size = "xs" | "sm" | "md" | "lg" | "xl" | number;
export declare type NowRoomIconName = "AirCon" | "Bed" | "Desk" | "Dryer" | "Guitar" | "Microwave" | "NoSmoking" | "Pet" | "Refrigerator" | "WashMachine" | "Wifi" | "Woman" | "AppListing" | "Building" | "Room";
export declare type FiIconName = "BiYen" | "FiAlertCircle" | "FiAlignRight" | "FiArrowDown" | "FiArrowLeft" | "FiArrowRight" | "FiCalendar" | "FiCheckCircle" | "FiCheck" | "FiChevronDown" | "FiChevronLeft" | "FiChevronRight" | "FiChevronUp" | "FiCopy" | "FiEdit2" | "FiEdit3" | "FiEdit" | "FiExternalLink" | "FiEyeOff" | "FiEye" | "FiFacebook" | "FiFilter" | "FiGrid" | "FiHeart" | "FiImage" | "FiInfo" | "FiInstagram" | "FiMapPin" | "FiMenu" | "FiMessageCircle" | "FiMinus" | "FiMoreHorizontal" | "FiPhoneCall" | "FiPlus" | "FiSearch" | "FiSliders" | "FiTwitter" | "FiUser" | "FiX" | "FiZap" | "FaLine" | "IoLogoFacebook" | "IoLogoTwitter" | "IoLogoInstagram" | "AiOutlineQuestionCircle" | "HiSortDescending";
export declare type IconName = NowRoomIconName | FiIconName;
export declare type Color = "black" | "darkGray02" | "darkGray01" | "mediumGray02" | "mediumGray01" | "lightGray02" | "lightGray01" | "white" | "purple" | "pink" | "red" | "cyan" | "yellow" | "facebook" | "twitter" | "line";
export declare type CurrentType = "fill" | "stroke";
export declare type Props = {
    className?: string;
    color?: Color;
    currentType?: CurrentType;
    name: IconName;
    size?: Size;
    style?: CSSProperties;
};
export declare type SvgProps = {
    className?: string;
    size: number;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map