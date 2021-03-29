import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Building: VFC<SvgProps> = ({ className, size, style }) => {
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
        d="M24 5H8C7.44772 5 7 5.44772 7 6V27C7 27.5523 7.44772 28 8 28H19.7059H24C24.5523 28 25 27.5523 25 27V6C25 5.44772 24.5523 5 24 5Z"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M10 9H22" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M10 13H22" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M10 17H22" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        d="M12 22C12 21.4477 12.4477 21 13 21H19C19.5523 21 20 21.4477 20 22V28H12V22Z"
        stroke="#29263D"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
