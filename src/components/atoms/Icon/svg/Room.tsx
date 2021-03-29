import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Room: VFC<SvgProps> = ({ className, size, style }) => {
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
        d="M10 27H26C26.5523 27 27 26.5523 27 26V16.5V6C27 5.44772 26.5523 5 26 5H15.5H6C5.44772 5 5 5.44772 5 6V21V26C5 26.5523 5.44772 27 6 27H10ZM10 27V11C10 10.4477 10.4477 10 11 10H21C21.5523 10 22 10.4477 22 11V27"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="14"
        cy="18"
        fill="#29263D"
        r="1"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
