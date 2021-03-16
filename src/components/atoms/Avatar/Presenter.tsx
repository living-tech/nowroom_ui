import { CSSProperties, FC } from "react";

export type Props = {
  alt?: string | null;
  className?: string;
  size?: "xs" | "sm" | "md";
  src: string;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ alt, className, size = "md", src, style, ...props }) => {
  let px;
  switch (size) {
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
      src={src}
      style={style}
      width={px}
      {...props}
    />
  );
};
