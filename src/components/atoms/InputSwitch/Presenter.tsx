import { ChangeEvent, CSSProperties, FC } from "react";

import { Text } from "../Text/Default";
import { Color, Size, Weight } from "../Text/Presenter";

export type Props = {
  checked?: boolean;
  className?: string;
  createRef?: (input: HTMLInputElement) => void;
  id?: string;
  label?: string;
  labelColor?: Color;
  labelPosition?: "left" | "right";
  labelSize?: Size;
  labelWeight?: Weight;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({
  checked,
  className,
  createRef,
  id,
  label,
  labelColor = "black",
  labelPosition = "right",
  labelSize = "md",
  labelWeight = "normal",
  name,
  onChange,
  style,
  ...props
}) => {
  return (
    <div className={`inline-flex items-center ${className}`} style={style} {...props}>
      {labelPosition === "left" && label && (
        <Text
          className="mr-3"
          color={labelColor}
          size={labelSize}
          style={{ position: "relative", top: 1 }}
          tag={"span"}
          weight={labelWeight}
        >
          {label}
        </Text>
      )}
      <div className="w-7 relative inline-block align-middle transition duration-200 ease-out select-none">
        <label className="flex items-center block h-6 overflow-hidden cursor-pointer" htmlFor={id}>
          <span className="block w-full h-2 bg-purple-200 rounded-full" />
          <input
            ref={createRef}
            checked={checked}
            className="top-2/4 -translate-y-2/4 checked:right-0 right-3 checked:bg-purple radio-button:bg-purple-200 absolute block w-4 h-4 transition-all duration-200 ease-out transform bg-white rounded-full outline-none appearance-none cursor-pointer"
            id={id}
            name={name}
            onChange={onChange}
            style={{
              boxShadow: "0px 2px 6px rgba(116, 106, 232, 0.26)",
            }}
            type="checkbox"
          />
        </label>
      </div>
      {labelPosition === "right" && label && (
        <Text
          className="ml-3"
          color={labelColor}
          size={labelSize}
          style={{ position: "relative", top: 1 }}
          tag={"span"}
        >
          {label}
        </Text>
      )}
    </div>
  );
};
