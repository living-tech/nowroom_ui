import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Desk: VFC<SvgProps> = ({ className, size, style }) => {
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
      <line strokeLinecap="round" strokeWidth="1.5" x1="3.75" x2="36.25" y1="11.25" y2="11.25" />
      <line strokeLinecap="round" strokeWidth="1.5" x1="5.75" x2="33.25" y1="15.0498" y2="15.0498" />
      <line strokeLinecap="round" strokeWidth="1.5" x1="24.75" x2="33.25" y1="20.4932" y2="20.4932" />
      <line strokeLinecap="round" strokeWidth="1.5" x1="28.25" x2="29.75" y1="17.4121" y2="17.4121" />
      <line strokeLinecap="round" strokeWidth="1.5" x1="28.25" x2="29.75" y1="23.5742" y2="23.5742" />
      <path d="M23.75 15.8516V26.6353H34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M5.75 12L5.75 31L9 15.3378" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M33.9999 12L33.9999 31L33.1475 26.8919" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
};
