import { CSSProperties, FC } from "react";

export type Props = {
  className?: string;
  progress: number; //  <= 100
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ className, progress, style }) => {
  return (
    <div className={`w-full relative h-1 bg-gray-200 ${className}`} style={style}>
      <div
        className="bg-purple absolute top-0 left-0 h-1 transition-all duration-500 ease-linear rounded-r"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};
