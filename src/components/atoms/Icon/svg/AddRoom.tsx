import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const AddRoom: VFC<SvgProps> = ({ className, size, style }) => {
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
        d="M16 27H7M7 27H5C4.44772 27 4 26.5523 4 26V21V6C4 5.44772 4.44772 5 5 5H20C20.5523 5 21 5.44772 21 6V16.5M7 27V11C7 10.4477 7.44772 10 8 10H17C17.5523 10 18 10.4477 18 11V19"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle cx="25" cy="25" r="6" stroke="#29263D" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        d="M22 25H25M28 25H25M25 25V22V28"
        stroke="#29263D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="11"
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
