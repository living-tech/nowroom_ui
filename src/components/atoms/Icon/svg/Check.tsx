import { VFC } from "react";

import { SvgProps } from "../Presenter";

export const Check: VFC<SvgProps> = ({ className, size, style }) => {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 12 10"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5646 0.853339C11.3198 0.606179 10.9228 0.606179 10.678 0.853339L4.29265 7.29907L1.32171 4.30003C1.07687 4.05287 0.679901 4.05287 0.435058 4.30003L0.183633 4.55383C-0.0612107 4.80099 -0.0612111 5.20172 0.183632 5.44888L3.8493 9.14923C4.07507 9.37714 4.43018 9.39489 4.6761 9.2025C4.68615 9.19464 4.69602 9.18643 4.70569 9.17788C4.71607 9.16869 4.72623 9.15909 4.73613 9.1491L11.816 2.00219C12.0609 1.75503 12.0609 1.3543 11.816 1.10714L11.5646 0.853339Z"
        fill="white"
      />
    </svg>
  );
};
