import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const ButtonPurpleOutline: FC<Props> = ({ children, color = "purple", visualType = "outline", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
