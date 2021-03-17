import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconPurple: FC<Props> = ({ color = "purple", ...props }) => {
  return <Presenter color={color} {...props} />;
};
