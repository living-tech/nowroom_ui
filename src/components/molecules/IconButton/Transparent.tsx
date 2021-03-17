import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonTransparent: FC<Props> = ({
  children,
  color = "transparent",
  shadow = false,
  visualType = "fill",
  ...props
}) => {
  return (
    <Presenter color={color} shadow={shadow} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
