import { ChangeEvent, CSSProperties, VFC } from "react";

import { IconPurple } from "../Icon/Purple";
import { TextMediumGray02 } from "../Text/MediumGray02";

export type Item = {
  label: string;
  value: string | number;
};

export type Props = {
  any?: boolean;
  anyLabel?: string;
  block?: boolean;
  className?: string;
  createRef?: (input: HTMLSelectElement) => void;
  disabledPlaceholder?: boolean;
  id?: string;
  items: Array<Item>;
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  size?: "sm" | "md";
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  any,
  anyLabel = "任意",
  block,
  className,
  createRef,
  disabledPlaceholder = false,
  id,
  items,
  label,
  name,
  onChange,
  placeholder = "選択してください",
  size = "md",
  style,
  ...props
}) => {
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
        <select
          ref={createRef}
          className={`w-full block border font-bold border-gray-200 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${sizeClass} ${widthClass}`}
          id={id}
          name={name}
          onChange={onChange}
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
