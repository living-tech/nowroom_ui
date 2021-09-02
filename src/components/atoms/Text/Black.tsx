import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextBlack: VFC<Props> = memo(({ children, color = "black", ...props }) => {    
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
