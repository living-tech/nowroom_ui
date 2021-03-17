import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextWhite: FC<Props> = ({ color = "white", ...props }) => {
  return <Presenter color={color} {...props} />;
};
