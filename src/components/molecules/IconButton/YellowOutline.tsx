import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonYellowOutline: FC<Props> = ({
  children,
  color = "yellow",
  visualType = "outline",
  ...props
}) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
