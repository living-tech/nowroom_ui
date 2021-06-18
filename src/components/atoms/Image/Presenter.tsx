import { default as NextImage, ImageLoaderProps, ImageProps } from "next/image";
import { CSSProperties, VFC } from "react";

export type Props = {
  className?: string;
  style?: CSSProperties;
} & ImageProps;

const imageLoader = ({ src }: ImageLoaderProps) => {
  return `${src}`;
};

export const Presenter: VFC<Props> = ({ className = "", style, ...props }) => {
  return (
    <div className={className} style={style}>
      <NextImage loader={imageLoader} {...props} />
    </div>
  );
};
