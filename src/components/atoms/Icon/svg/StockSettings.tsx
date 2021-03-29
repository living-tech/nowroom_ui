import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const StockSettings: VFC<SvgProps> = ({ className, size, style }) => {
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
        d="M29 16V6C29 4.34315 27.6569 3 26 3H16M29 16V26C29 27.6569 27.6569 29 26 29H16M29 16H16M3 16V26C3 27.6569 4.34315 29 6 29H16M3 16V6C3 4.34315 4.34315 3 6 3H16M3 16H16M16 16V29M16 16V3"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="9.5"
        cy="9.5"
        r="3.5"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="22.5"
        cy="22.5"
        r="3.5"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11.9749 20.0252L9.5 22.5M7.02513 24.9749L9.5 22.5M9.5 22.5L7.02513 20.0252L11.9749 24.9749"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M24.9749 7.02517L22.5 9.50004M20.0251 11.9749L22.5 9.50004M22.5 9.50004L20.0251 7.02517L24.9749 11.9749"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
