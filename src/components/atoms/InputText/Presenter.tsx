import { ChangeEvent, CSSProperties, VFC } from "react";

import { Icon } from "../Icon/Default";
import { IconName } from "../Icon/Presenter";
import { TextMediumGray02 } from "../Text/MediumGray02";
import { Weight } from "../Text/Presenter";
import { TextRed } from "../Text/Red";

export type Size = "xs" | "sm" | "md";

export type Props = {
  any?: boolean;
  anyLabel?: string;
  autocomplete?: "on" | "off" | "current-password" | "new-password";
  className?: string;
  color?: "gray" | "white";
  createRef?: (input: HTMLInputElement) => void;
  defaultValue?: string;
  error?: string;
  iconName?: IconName;
  id?: string;
  inputClassName?: string;
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  renderDescription?: () => JSX.Element;
  size?: Size;
  style?: CSSProperties;
  type?: string;
  unit?: string;
  unitPosition?: "left" | "right";
  value?: string;
  weight?: Weight;
};

export const Presenter: VFC<Props> = ({
  any,
  anyLabel = "任意",
  autocomplete,
  className = "",
  color = "gray",
  createRef,
  defaultValue,
  error,
  iconName,
  id,
  inputClassName = "",
  label,
  name,
  onChange,
  onKeyPress,
  placeholder,
  renderDescription,
  size = "md",
  style,
  type = "text",
  unit,
  unitPosition = "right",
  value,
  weight = "bold",
  ...props
}) => {
  const inputBaseClass = "border block w-full placeholder-gray-400";

  let inputClass = "";
  if (error) {
    inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
  } else {
    inputClass =
      color === "gray"
        ? "border-gray-200 focus:ring-purple-500 focus:border-purple-500"
        : "border-transparent focus:ring-purple-500 focus:border-purple-500";
  }

  let inputBackgroundColorClass = "";
  let roundedClass = "";
  switch (color) {
    case "gray":
      inputBackgroundColorClass = "bg-gray-100";
      roundedClass = "rounded-md";
      break;
    case "white":
      inputBackgroundColorClass = "bg-white";
      break;
  }

  switch (size) {
    case "md":
      if (unit && iconName) {
        inputClass +=
          unitPosition === "right"
            ? ` pt-4 pl-12 pb-4 pr-${unit.length * 4 + 4}`
            : ` pt-4 pr-12 pb-4 pl-${unit.length * 4 + 4}`;
      } else if (unit) {
        inputClass +=
          unitPosition === "right"
            ? ` pt-4 pl-4 pb-4 pr-${unit.length * 4 + 4}`
            : ` pt-4 pr-4 pb-4 pl-${unit.length * 4 + 4}`;
      } else if (iconName) {
        inputClass += ` pt-4 pl-12 pb-4 pr-4`;
      } else {
        inputClass += " p-4";
      }
      break;
    case "sm":
      inputClass += " text-sm";
      if (unit && iconName) {
        inputClass +=
          unitPosition === "right"
            ? ` pt-3 pl-12 pb-3 pr-${unit.length * 4 + 3}`
            : ` pt-3 pr-12 pb-3 pl-${unit.length * 4 + 3}`;
      } else if (unit) {
        inputClass +=
          unitPosition === "right"
            ? ` pt-3 pl-3 pb-3 pr-${unit.length * 4 + 3}`
            : ` pt-3 pr-3 pb-3 pl-${unit.length * 4 + 3}`;
      } else if (iconName) {
        inputClass += ` pt-3 pl-12 pb-3 pr-3`;
      } else {
        inputClass += " p-3";
      }
      break;
    case "xs":
      inputClass += " text-xs";
      if (unit && iconName) {
        inputClass +=
          unitPosition === "right"
            ? ` pt-2 pl-7 pb-2 pr-${unit.length * 4 + 2}`
            : ` pt-2 pr-7 pb-2 pl-${unit.length * 4 + 2}`;
      } else if (unit) {
        inputClass +=
          unitPosition === "right"
            ? ` pt-2 pl-2 pb-2 pr-${unit.length * 4 + 2}`
            : ` pt-2 pr-2 pb-2 pl-${unit.length * 4 + 2}`;
      } else if (iconName) {
        inputClass += ` pt-2 pl-7 pb-2 pr-2`;
      } else {
        inputClass += " px-2 py-2.5";
      }
      break;
  }

  switch (weight) {
    case "bold":
      inputClass += " font-bold";
      break;
    case "normal":
      inputClass += " font-medium";
      break;
  }

  let iconPosition;
  switch (size) {
    case "md":
      iconPosition = "1rem";
      break;
    case "sm":
      iconPosition = "0.75rem";
      break;
    case "xs":
      iconPosition = "0.5rem";
      break;
    default:
      iconPosition = "1rem";
  }

  return (
    <div className={className} style={style} {...props}>
      {label && (
        <label className="block mb-3 text-sm font-bold text-gray-700 cursor-pointer" htmlFor={id}>
          {label}
          {any && (
            <TextMediumGray02 className={"ml-3"} size={"sm"} tag="span">
              {anyLabel}
            </TextMediumGray02>
          )}
        </label>
      )}
      {renderDescription && <div className="mb-3">{renderDescription()}</div>}
      <div className={"relative"}>
        {iconName && (
          <Icon
            className={"absolute pointer-events-none"}
            color={color === "white" ? "darkGray02" : "black"}
            name={iconName}
            size={size}
            style={{
              left: iconPosition,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
        <input
          ref={createRef}
          autoComplete={autocomplete}
          className={`${inputBaseClass} ${inputClass} ${roundedClass} ${inputBackgroundColorClass} ${inputClassName}`}
          defaultValue={defaultValue}
          id={id}
          name={name}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {unit && unitPosition === "right" && (
          <TextMediumGray02
            className={"absolute pointer-events-none"}
            size={size === "md" ? "sm" : "xs"}
            style={{
              right: iconPosition,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            tag="span"
          >
            {unit}
          </TextMediumGray02>
        )}
        {unit && unitPosition === "left" && (
          <TextMediumGray02
            className={"absolute pointer-events-none"}
            size={size === "md" ? "sm" : "xs"}
            style={{
              left: iconPosition,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            tag="span"
          >
            {unit}
          </TextMediumGray02>
        )}
      </div>
      {error && (
        <TextRed className={"mt-2"} size={"sm"}>
          {error}
        </TextRed>
      )}
    </div>
  );
};
