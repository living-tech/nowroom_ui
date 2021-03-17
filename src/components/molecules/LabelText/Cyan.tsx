import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextCyan: FC<Props> = ({ color = "cyan", ...props }) => {
  return <Presenter color={color} {...props} />;
};
