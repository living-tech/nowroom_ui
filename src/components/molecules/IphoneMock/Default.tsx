import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IphoneMock: VFC<Props> = ({ children, ...props }) => {
  return <Presenter {...props}>{children}</Presenter>;
};
