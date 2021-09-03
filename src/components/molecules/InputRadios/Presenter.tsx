import { ChangeEvent, CSSProperties, memo, VFC } from "react";

import { InputRadio } from "../../atoms/InputRadio/Default";
import { Item } from "../../atoms/InputRadio/Presenter";
import { TextMediumGray02 } from "../../atoms/Text/MediumGray02";

export type Props = {
  any?: boolean;
  anyLabel?: string;
  className?: string;
  columns?: number;
  createRef?: (input: HTMLInputElement) => void;
  id?: string;
  items: Array<Item>;
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = memo(({
  any,
  anyLabel = "任意",
  className,
  columns = 2,
  createRef,
  id,
  items,
  label,
  name,
  onChange,
  style,
  ...props
}) => {
  return (
    <div className={`${className}`} id={id} style={style} {...props}>
      {label && (
        <label className="block mb-3 text-sm font-bold text-gray-700">
          {label}
          {any && (
            <TextMediumGray02 className={"ml-3"} size={"sm"} tag="span">
              {anyLabel}
            </TextMediumGray02>
          )}
        </label>
      )}
      <div className={`grid grid-cols-${columns} gap-6`}>
        {items.map((item) => (
          <InputRadio key={`radio-${item.value}`} createRef={createRef} item={item} name={name} onChange={onChange} />
        ))}
      </div>
    </div>
  );
});
