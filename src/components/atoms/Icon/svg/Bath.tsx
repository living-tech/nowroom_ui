import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Bath: VFC<SvgProps> = ({ className, size, style }) => {
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
      <path d="M7 27H33" strokeLinecap="round" strokeWidth="1.5" />
      <path
        d="M24 11V11C24 8.79086 25.7909 7 28 7H28.5C30.9853 7 33 9.01472 33 11.5V32C33 32.5523 32.5523 33 32 33H8C7.44772 33 7 32.5523 7 32V24C7 23.4477 7.44772 23 8 23H33"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <rect height="3" rx="1.5" strokeLinecap="round" strokeWidth="1.5" width="6" x="21" y="11" />
    </svg>
  );
};
