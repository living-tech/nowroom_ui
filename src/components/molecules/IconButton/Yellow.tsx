import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonYellow: FC<Props> = ({ children, color = "yellow", visualType = "fill", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
