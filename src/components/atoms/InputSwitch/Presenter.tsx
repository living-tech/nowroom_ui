import { ChangeEvent, CSSProperties, VFC } from "react";

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

export const Presenter: VFC<Props> = ({
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
      <div className="relative inline-block align-middle select-none w-7 transition duration-200 ease-out">
        <label className="flex items-center block h-6 overflow-hidden cursor-pointer" htmlFor={id}>
          <span className="block w-full h-2 bg-purple-200 rounded-full" />
          <input
            ref={createRef}
            checked={checked}
            className="absolute block w-4 h-4 bg-white rounded-full outline-none appearance-none cursor-pointer top-2/4 -translate-y-2/4 checked:right-0 right-3 checked:bg-purple radio-button:bg-purple-200 transition-all duration-200 ease-out transform"
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
