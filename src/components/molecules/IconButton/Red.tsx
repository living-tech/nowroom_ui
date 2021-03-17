import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonRed: FC<Props> = ({ children, color = "red", visualType = "fill", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
