import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LogoWithType: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
