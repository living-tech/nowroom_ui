import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonRedOutline: FC<Props> = ({ children, color = "red", visualType = "outline", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
