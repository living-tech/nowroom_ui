import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextPurple: FC<Props> = ({ color = "blue", ...props }) => {
  return <Presenter color={color} {...props} />;
};
