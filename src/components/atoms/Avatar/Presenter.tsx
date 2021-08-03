import { CSSProperties, VFC } from "react";

export type Props = {
  alt?: string | null;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  src?: string | null;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ alt, className, size = "md", src, style, ...props }) => {
  let px;
  switch (size) {
    case "lg":
      px = 64;
      break;
    case "md":
      px = 44;
      break;
    case "sm":
      px = 36;
      break;
    case "xs":
      px = 24;
      break;
  }

  return (
    <img
      alt={alt || ""}
      className={`rounded-full ${className}`}
      height={px}
      loading="lazy"
      src={
        src
          ? src
          : "https://firebasestorage.googleapis.com/v0/b/now-project-259302.appspot.com/o/public%2Fcommon%2Fdefault%2Fprofile.jpg?alt=media&token=d74b62db-ec52-4a33-a303-26b6c34c35ff"
      }
      style={style}
      width={px}
      {...props}
    />
  );
};
