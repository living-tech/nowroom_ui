import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButtonLightGray01: FC<Props> = ({ color = "lightGray01", ...props }) => {
  return <Presenter color={color} {...props} />;
};
