import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextBlue: VFC<Props> = ({ color = "blue", colorDense = 500, ...props }) => {
  return <Presenter color={color} colorDense={colorDense} {...props} />;
};
