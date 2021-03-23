import { CSSProperties, VFC } from "react";

export type Props = {
  className?: string;
  progress: number; //  <= 100
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ className, progress, style }) => {
  return (
    <div className={`w-full relative h-1 bg-gray-200 ${className}`} style={style}>
      <div
        className="absolute top-0 left-0 h-1 rounded-r bg-purple transition-all duration-500 ease-linear"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};
