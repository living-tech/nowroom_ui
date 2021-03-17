import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextPink: FC<Props> = ({ color = "pink", ...props }) => {
  return <Presenter color={color} {...props} />;
};
