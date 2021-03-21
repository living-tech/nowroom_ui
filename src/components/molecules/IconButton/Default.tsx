import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButton: VFC<Props> = ({ visualType = "fill", ...props }) => {
  return <Presenter visualType={visualType} {...props} />;
};
