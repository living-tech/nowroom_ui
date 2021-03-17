import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const ButtonPurple: FC<Props> = ({ children, color = "purple", visualType = "fill", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
