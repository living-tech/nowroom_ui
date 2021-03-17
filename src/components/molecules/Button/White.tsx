import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const ButtonWhite: FC<Props> = ({ children, color = "white", visualType = "fill", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
