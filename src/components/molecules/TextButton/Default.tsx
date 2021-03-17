import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButton: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
