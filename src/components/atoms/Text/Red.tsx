import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextRed: VFC<Props> = memo(({ children, color = "red", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
