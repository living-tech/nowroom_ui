import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextBlue: FC<Props> = ({ color = "blue", ...props }) => {
  return <Presenter color={color} {...props} />;
};
