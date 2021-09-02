import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextBlack: VFC<Props> = memo(({ children, color = "black", ...props }) => {    
  console.log('TextBlack');
  
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
