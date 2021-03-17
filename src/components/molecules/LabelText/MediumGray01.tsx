import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextMediumGray01: FC<Props> = ({ color = "mediumGray01", ...props }) => {
  return <Presenter color={color} {...props} />;
};
