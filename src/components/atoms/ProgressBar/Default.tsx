import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const ProgressBar: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
