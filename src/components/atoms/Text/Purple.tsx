import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextPurple: VFC<Props> = memo(({ children, color = "purple", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
