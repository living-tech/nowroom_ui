import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const AirCon: VFC<SvgProps> = ({ className, size, style }) => {
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
      <path
        d="M32.6613 19.4402H7.61787C6.85265 19.4402 6.22656 18.8102 6.22656 18.0402V9.64023C6.22656 8.87023 6.85265 8.24023 7.61787 8.24023H32.6613C33.4266 8.24023 34.0526 8.87023 34.0526 9.64023V18.0402C34.0526 18.8102 33.4266 19.4402 32.6613 19.4402Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path d="M9.78809 15.5063H30.4907" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      <path d="M20.1396 23.6401V32.0401" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      <path
        d="M25.7471 23.6401V24.2701C25.7471 27.1261 26.7071 29.8841 28.4045 31.9001L28.4323 31.9421"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path
        d="M14.5329 23.6401V24.2701C14.5329 27.1261 13.5729 29.8841 11.8755 31.9001L11.8477 31.9421"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
