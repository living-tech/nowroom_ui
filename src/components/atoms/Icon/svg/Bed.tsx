import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Bed: VFC<SvgProps> = ({ className, size, style }) => {
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
          d="M8.98145 18.6082V10.9416C8.98145 9.88302 9.87688 9.0249 10.9814 9.0249H17.9814C19.086 9.0249 19.9814 9.88302 19.9814 10.9416"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M20.0186 10.9416C20.0186 9.88302 20.914 9.0249 22.0186 9.0249H29.0186C30.1231 9.0249 31.0186 9.88302 31.0186 10.9416V18.6082"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M32.6309 19.0347H7.32011C6.76783 19.0347 6.32011 19.4637 6.32011 19.993V24.7847H33.6309V19.993C33.6309 19.4637 33.1831 19.0347 32.6309 19.0347Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M34.6309 24.7847H5.32011V27.6597H34.6309V24.7847Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path d="M9.48145 28.478V29.2447" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M30.5186 28.478V29.2447" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <line strokeLinecap="round" strokeWidth="1.5" x1="13.25" x2="26.75" y1="14.9165" y2="14.9165" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect fill="white" height="23" transform="translate(4 8)" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};
