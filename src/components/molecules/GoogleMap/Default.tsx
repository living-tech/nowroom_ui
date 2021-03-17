import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const GoogleMap: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
