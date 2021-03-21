import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Button: VFC<Props> = ({ children, ...props }) => {
  return <Presenter {...props}>{children}</Presenter>;
};
