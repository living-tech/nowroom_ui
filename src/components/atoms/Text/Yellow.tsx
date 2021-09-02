import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextYellow: VFC<Props> = memo(({ children, color = "yellow", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
