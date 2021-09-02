import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextCyan: VFC<Props> = memo(({ children, color = "cyan", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
