import { Backdrop } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CSSProperties, FC } from "react";

import { SpinnerWhite } from "../../atoms/Spinner/White";
import { TextWhite } from "../../atoms/Text/White";

export type Props = {
  className?: string;
  isVisible: boolean;
  style?: CSSProperties;
  title?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      backgroundColor: "rgba(41, 38, 61, 0.8)",
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

export const Presenter: FC<Props> = ({ className, isVisible, style, title }) => {
  const classes = useStyles();

  return (
    <Backdrop className={`flex-col ${classes.backdrop} ${className}}`} open={isVisible} style={style}>
      <SpinnerWhite size={42} />
      {title && (
        <TextWhite className="mt-4 tracking-wide" size={"md"} weight={"bold"}>
          {title}
        </TextWhite>
      )}
    </Backdrop>
  );
};
