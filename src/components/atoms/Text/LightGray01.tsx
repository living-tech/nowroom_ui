import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextLightGray01: VFC<Props> = memo(({ children, color = "lightGray01", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
