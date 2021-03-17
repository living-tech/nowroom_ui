import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextGreen: FC<Props> = ({ color = "green", ...props }) => {
  return <Presenter color={color} {...props} />;
};
