import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const AddBuilding: VFC<SvgProps> = ({ className, size, style }) => {
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
        d="M21 16.5V6C21 5.44772 20.5523 5 20 5H5C4.44772 5 4 5.44772 4 6V27C4 27.5523 4.44772 28 5 28H16"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M7 9H18" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M7 13H18" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M7 17H18" stroke="#29263D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <circle cx="25" cy="25" r="6" stroke="#29263D" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        d="M22 25H25M28 25H25M25 25V22V28"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9 22C9 21.4477 9.44772 21 10 21H15C15.5523 21 16 21.4477 16 22V28H9V22Z"
        stroke="#29263D"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
