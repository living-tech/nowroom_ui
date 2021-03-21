import { CircularProgress } from "@material-ui/core";
import { CSSProperties, VFC } from "react";

import { purple500, white } from "../../../constnats/colors";

export type Props = {
  className?: string;
  color?: "white" | "purple" | "currentColor";
  duration?: number;
  size?: number;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ className, color, duration = 500, size = 32, style }) => {
  let rgbColor;
  switch (color) {
    case "white":
      rgbColor = white;
      break;
    case "purple":
      rgbColor = purple500;
      break;
    case "currentColor":
      rgbColor = "currentColor";
      break;
  }

  return (
    <CircularProgress
      className={className}
      size={size}
      style={{ animationDuration: `${duration}ms`, color: rgbColor, ...style }}
    />
  );
};
