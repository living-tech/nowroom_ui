import { ChangeEvent, CSSProperties, VFC } from "react";

import { InputRadio } from "../../atoms/InputRadio/Default";
import { Item } from "../../atoms/InputRadio/Presenter";
import { TextMediumGray02 } from "../../atoms/Text/MediumGray02";
import { TextRed } from "../../atoms/Text/Red";

export type Props = {
  any?: boolean;
  anyLabel?: string;
  className?: string;
  columns?: number;
  createRef?: (input: HTMLInputElement) => void;
  error?: string;
  id?: string;
  items: Array<Item>;
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  require?: boolean;
  requireLabel?: string;
  size?: "sm" | "md";
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  any,
  anyLabel = "任意",
  className,
  columns = 2,
  createRef,
  error,
  id,
  items,
  label,
  name,
  onChange,
  require,
  requireLabel = "必須",
  size = "md",
  style,
  ...props
}) => {
  return (
    <div className={`${className}`} id={id} style={style} {...props}>
      {(label || any || require) && (
        <label className="block mb-3 text-sm font-bold text-gray-700">
          {label && label}
          {any && (
            <TextMediumGray02 className={"ml-3"} size={"sm"} tag="span">
              {anyLabel}
            </TextMediumGray02>
          )}
          {require && (
            <TextRed className={"ml-3"} size={"sm"} tag="span">
              {requireLabel}
            </TextRed>
          )}
        </label>
      )}
      <div className={`grid grid-cols-${columns} gap-6`}>
        {items.map((item) => (
          <InputRadio
            key={`radio-${item.value}`}
            createRef={createRef}
            item={item}
            name={name}
            onChange={onChange}
            size={size}
          />
        ))}
      </div>
      {error && (
        <TextRed className={"mt-2"} size={"sm"}>
          {error}
        </TextRed>
      )}
    </div>
  );
};
