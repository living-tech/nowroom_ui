import { memo, VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Button: VFC<Props> = memo(({ children, ...props }) => {
  return <Presenter {...props}>{children}</Presenter>;
});
