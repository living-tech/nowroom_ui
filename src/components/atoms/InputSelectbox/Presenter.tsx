import { ChangeEvent, CSSProperties, useState, VFC } from "react";

import { IconPurple } from "../Icon/Purple";
import { TextMediumGray02 } from "../Text/MediumGray02";

export type Item = {
  label: string;
  value: string | number;
};

export type Size = "xs" | "sm" | "md";

export type Props = {
  any?: boolean;
  anyLabel?: string;
  block?: boolean;
  className?: string;
  createRef?: (input: HTMLSelectElement) => void;
  defaultValue?: string | number;
  disabledPlaceholder?: boolean;
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
  block,
  className,
  createRef,
  defaultValue,
  disabledPlaceholder = false,
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
  const [selectedValue, setSelectedValue] = useState<string | number>(value ?? defaultValue ?? "");

  let widthClass = "";
  if (block) {
    widthClass = "w-full";
  }

  let sizeClass = "";
  let iconPositionClass = "";
  switch (size) {
    case "md":
      sizeClass = "p-4 pr-12 text-base";
      iconPositionClass = "right-4";
      break;
    case "sm":
      sizeClass = "p-3 pr-10 text-sm";
      iconPositionClass = "right-3";
      break;
    case "xs":
      sizeClass = "p-2 pr-7 text-xs";
      iconPositionClass = "right-2";
      break;
  }

  let colorClass = "";
  if (!selectedValue) {
    colorClass = "text-gray-400";
  }

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(event);
    setSelectedValue(event.target.value);
  };

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
        <select
          ref={createRef}
          className={`w-full cursor-pointer block border font-bold border-gray-200 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${colorClass} ${sizeClass} ${widthClass}`}
          defaultValue={defaultValue}
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
        >
          {!disabledPlaceholder && <option value="">{placeholder}</option>}
          {items.map((item) => (
            <option key={`selectbox-${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <IconPurple
          className={`top-1/2 absolute transform -translate-y-1/2 pointer-events-none ${iconPositionClass}`}
          name={"FiChevronDown"}
          size={"sm"}
        />
      </div>
    </div>
  );
};
