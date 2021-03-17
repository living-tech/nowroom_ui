import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextYellow: FC<Props> = ({ color = "yellow", ...props }) => {
  return <Presenter color={color} {...props} />;
};
