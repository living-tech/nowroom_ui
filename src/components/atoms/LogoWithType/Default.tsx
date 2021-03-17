import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const LogoWithType: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
