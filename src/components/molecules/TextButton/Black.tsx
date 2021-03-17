import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButtonBlack: FC<Props> = ({ color = "black", ...props }) => {
  return <Presenter color={color} {...props} />;
};
