import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const InputText: FC<Props> = (props) => {
  return <Presenter {...props} />;
};