import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const Icon: FC<Props> = ({ color, ...props }) => {
  return <Presenter color={color} {...props} />;
};
