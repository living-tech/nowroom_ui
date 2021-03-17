import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const InputSelectChips: FC<Props> = ({ children, ...props }) => {
  return <Presenter {...props}>{children}</Presenter>;
};
