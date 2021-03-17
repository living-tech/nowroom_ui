import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IphoneMock: FC<Props> = ({ children, ...props }) => {
  return <Presenter {...props}>{children}</Presenter>;
};
