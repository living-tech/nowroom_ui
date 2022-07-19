import { ChangeEvent, CSSProperties, VFC } from "react";

import { Icon } from "../Icon/Default";
import { Color as IconColor, IconName } from "../Icon/Presenter";
import { IconPurple } from "../Icon/Purple";
import { TextMediumGray02 } from "../Text/MediumGray02";
import { TextRed } from "../Text/Red";

export type Item = {
  key?: string | number;
  label: string;
  value: string | number;
};

export type Size = "xxs" | "xs" | "sm" | "md";

export type Props = {
  any?: boolean;
  anyLabel?: string;
  backgroundColor?: "gray" | "white";
  block?: boolean;
  className?: string;
  createRef?: (input: HTMLSelectElement) => void;
  defaultValue?: string | number;
  disabled?: boolean;
  disabledPlaceholder?: boolean;
  disabledRightArrow?: boolean;
  error?: string;
  iconColor?: IconColor;
  iconName?: IconName;
  id?: string;
  items: Array<Item>;
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  size?: Size;
  style?: CSSProperties;
  value?: string | number;
};

export const Presenter: VFC<Props> = ({
  any,
  anyLabel = "任意",
  backgroundColor = "gray",
  block,
  className,
  createRef,
  defaultValue,
  disabled = false,
  disabledPlaceholder = false,
  disabledRightArrow = false,
  error,
  iconColor,
  iconName,
  id,
  items,
  label,
  name,
  onChange,
  placeholder = "選択してください",
  size = "md",
  style,
  value,
  ...props
}) => {
  let widthClass = "";
  if (block) {
    widthClass = "w-full";
  }

  let paddingLeftClass = "";
  let paddingRightClass = "";
  let paddingYClass = "";
  let arrowIconPositionClass = "";
  let iconPositionClass = "";
  switch (size) {
    case "md":
      paddingLeftClass = iconName ? "pl-12" : "pl-4";
      paddingRightClass = !disabledRightArrow ? "pr-12" : "pr-4";
      paddingYClass = "py-4";
      arrowIconPositionClass = "right-4";
      iconPositionClass = "left-4";
      break;
    case "sm":
      paddingLeftClass = iconName ? "pl-10" : "pl-3";
      paddingRightClass = !disabledRightArrow ? "pr-10" : "pr-3";
      paddingYClass = "py-3";
      arrowIconPositionClass = "right-3";
      iconPositionClass = "left-3";
      break;
    case "xs":
      paddingLeftClass = iconName ? "pl-7" : "pl-2";
      paddingRightClass = !disabledRightArrow ? "pr-7" : "pr-2";
      paddingYClass = "py-2";
      arrowIconPositionClass = "right-2";
      iconPositionClass = "left-2";
      break;
    case "xxs":
      paddingLeftClass = iconName ? "pl-6" : "pl-1";
      paddingRightClass = !disabledRightArrow ? "pr-6" : "pr-1";
      paddingYClass = "py-1.5";
      arrowIconPositionClass = "right-1";
      iconPositionClass = "left-1";
      break;
  }

  let backgroundColorClass = "bg-gray-100";
  if (backgroundColor === "white") {
    backgroundColorClass = "bg-white";
  }

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(event);
  };

  let inputClass = "";
  if (error) {
    inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
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
      <div className={`relative block ${widthClass}`}>
        {iconName && (
          <Icon
            className={`top-1/2 absolute transform -translate-y-1/2 pointer-events-none ${iconPositionClass}`}
            color={iconColor}
            name={iconName}
            size={"sm"}
          />
        )}
        <select
          ref={createRef}
          className={`text-base w-full cursor-pointer whitespace-nowrap block border font-bold border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${backgroundColorClass} ${paddingLeftClass} ${paddingRightClass} ${paddingYClass} ${widthClass} ${inputClass}`}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
        >
          {!disabledPlaceholder && <option value="">{placeholder}</option>}
          {items.map((item) => (
            <option key={`selectbox-${item.key ?? item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {!disabledRightArrow && (
          <IconPurple
            className={`top-1/2 absolute transform -translate-y-1/2 pointer-events-none ${arrowIconPositionClass}`}
            name={"FiChevronDown"}
            size={"sm"}
          />
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
