import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const WashMachine: VFC<SvgProps> = ({ className, size, style }) => {
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
          d="M9 6.96533H30.6C31.7046 6.96533 32.6 7.82989 32.6 8.89637V30.667C32.6 31.7335 31.7046 32.598 30.6 32.598H9C7.89543 32.598 7 31.7335 7 30.667V8.89637C7 7.82989 7.89543 6.96533 9 6.96533Z"
          strokeWidth="1.5"
        />
        <path d="M7.19727 12.9536H31.7973" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path
          d="M19.8 29.7069C23.5226 29.7069 26.5404 26.7932 26.5404 23.1989C26.5404 19.6047 23.5226 16.6909 19.8 16.6909C16.0774 16.6909 13.0596 19.6047 13.0596 23.1989C13.0596 26.7932 16.0774 29.7069 19.8 29.7069Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M19.7998 26.5799C21.7336 26.5799 23.3013 25.0663 23.3013 23.1992"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path d="M29.21 10.2119H29.5173" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M23.21 10.2119H26.5173" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect fill="white" height="28" transform="translate(6 6)" width="28" />
        </clipPath>
      </defs>
    </svg>
  );
};
