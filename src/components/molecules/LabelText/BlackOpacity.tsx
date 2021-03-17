import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextBlackOpacity: FC<Props> = ({ color = "blackOpacity", ...props }) => {
  return <Presenter color={color} {...props} />;
};
