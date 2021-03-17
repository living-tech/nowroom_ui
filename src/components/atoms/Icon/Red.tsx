import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconRed: FC<Props> = ({ color = "red", ...props }) => {
  return <Presenter color={color} {...props} />;
};
