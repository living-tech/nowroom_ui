import { memo, VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const ButtonWhite: VFC<Props> = memo(({ children, color = "white", visualType = "fill", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
});
