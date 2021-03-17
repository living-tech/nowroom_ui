import { CSSProperties, FC } from "react";

import { black, white } from "../../../constnats/colors";

export type Props = {
  className?: string;
  height?: number;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ className, height = 76, style }) => {
  const width = (height / 92) * 70;

  return (
    <div className={`${className}`} style={style}>
      <svg fill="none" height={height} viewBox="0 0 70 92" width={width} xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <path
            d="M62 33.2C62 51.05 39.9737 58.7347 35 74C30.7368 58.7347 8 51.05 8 33.2C8 18.1779 20.0883 6 35 6C49.9117 6 62 18.1779 62 33.2Z"
            fill={black}
          />
          <circle cx="35" cy="78" fill={black} r="4" />
          <path
            clipRule="evenodd"
            d="M25.7506 29.3998C25.2762 29.7793 25 30.354 25 30.9615V40.0003C25 41.1048 25.8954 42.0003 27 42.0003H43C44.1046 42.0003 45 41.1048 45 40.0003V30.9615C45 30.354 44.7238 29.7793 44.2494 29.3998L36.2494 22.9998C35.519 22.4154 34.481 22.4154 33.7506 22.9998L25.7506 29.3998ZM32.5 36.0002C32.2239 36.0002 32 36.2241 32 36.5002V42.0002H38V36.5002C38 36.2241 37.7761 36.0002 37.5 36.0002H32.5Z"
            fill={white}
            fillRule="evenodd"
          />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="92"
            id="filter0_d"
            width="70"
            x="0"
            y="0"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
