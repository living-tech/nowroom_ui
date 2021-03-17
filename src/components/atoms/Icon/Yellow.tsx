import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconYellow: FC<Props> = ({ color = "yellow", ...props }) => {
  return <Presenter color={color} {...props} />;
};
