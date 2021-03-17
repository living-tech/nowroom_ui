import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const Spinner: FC<Props> = ({ color = "currentColor", ...props }) => {
  return <Presenter color={color} {...props} />;
};
