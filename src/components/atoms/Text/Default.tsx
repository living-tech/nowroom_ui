import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const Text: VFC<Props> = memo(({ children, color, ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
