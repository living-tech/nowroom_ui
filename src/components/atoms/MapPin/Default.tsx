import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MapPin: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
