import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const AppListing: VFC<SvgProps> = ({ className, size, style }) => {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 25V27C4 28.6569 5.34315 30 7 30H20C21.6569 30 23 28.6569 23 27V25M4 25V5C4 3.34315 5.34315 2 7 2H20C21.6569 2 23 3.34315 23 5V25M4 25H23"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M8 10H19" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M8 14H19" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M26 14L30 14" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M26 9L28 8" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M26 19L28 20" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M8 18H16" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <circle
        cx="14"
        cy="27.5"
        fill="#29263D"
        r="0.5"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
