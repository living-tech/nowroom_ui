import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Microwave: VFC<SvgProps> = ({ className, size, style }) => {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 40 40"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M6.06152 7.81689H33.9295C34.4818 7.81689 34.9295 8.26461 34.9295 8.81689V29.183C34.9295 29.7353 34.4818 30.183 33.9295 30.183H6.06152C5.50924 30.183 5.06152 29.7353 5.06152 29.183V8.81689C5.06152 8.26461 5.50924 7.81689 6.06152 7.81689Z"
          strokeWidth="1.5"
        />
        <path d="M25 8L25 30" strokeWidth="1.5" />
        <path d="M8.2168 30.2998V31.6753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M25.6787 23.4951H30.6787" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M31.6924 30.2998V31.6753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M30 19C30.5523 19 31 18.5523 31 18C31 17.4477 30.5523 17 30 17C29.4477 17 29 17.4477 29 18C29 18.5523 29.4477 19 30 19Z" />
        <path d="M30 15C30.5523 15 31 14.5523 31 14C31 13.4477 30.5523 13 30 13C29.4477 13 29 13.4477 29 14C29 14.5523 29.4477 15 30 15Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect fill="white" height="27" transform="translate(4 6)" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};
