import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconBlack: FC<Props> = ({ color = "black", ...props }) => {
  return <Presenter color={color} {...props} />;
};
