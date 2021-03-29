import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Refrigerator: VFC<SvgProps> = ({ className, size, style }) => {
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
          d="M13 6.96533C12.1716 6.96533 11.5 7.61375 11.5 8.41361V29.655C11.5 30.4548 12.1716 31.1033 13 31.1033H27C27.8284 31.1033 28.5 30.4548 28.5 29.655V8.41361C28.5 7.61375 27.8284 6.96533 27 6.96533H13Z"
          strokeWidth="1.5"
        />
        <path d="M12 16.8862H28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M15 11.9707V12.988" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M15 19.6948V23.6087" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M14.5 31.8003V32.4549" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M25.5 31.8003V32.4549" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect fill="white" height="28" transform="translate(10 6)" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
