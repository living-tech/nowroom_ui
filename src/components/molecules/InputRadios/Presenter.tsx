import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { ChangeEvent, CSSProperties, VFC } from "react";

import { InputRadio } from "../../atoms/InputRadio/Default";
import { Item } from "../../atoms/InputRadio/Presenter";
import { TextMediumGray02 } from "../../atoms/Text/MediumGray02";
import { TextRed } from "../../atoms/Text/Red";

const variants = cva(["grid"], {
  // compoundVariants: [{ grid_cols: 3, gap_size: 6, className: "p-8" }], // gird_cols:3, gap_size:6 のときclassNameに p-8 を追加できる
  defaultVariants: {
    gap_size: 6,
    grid_cols: 2,
  },
  variants: {
    gap_size: {
      2: ["gap-2"],
      4: ["gap-4"],
      6: ["gap-6"],
    },
    grid_cols: {
      1: ["grid-cols-1"],
      2: ["grid-cols-1", "md:grid-cols-2"],
      3: ["grid-cols-1", "md:grid-cols-3"],
      4: ["grid-cols-1", "md:grid-cols-4"],
      5: ["grid-cols-1", "md:grid-cols-5"],
      6: ["grid-cols-1", "md:grid-cols-6"],
    },
  },
});

export type Props = {
  any?: boolean;
  anyLabel?: string;
  className?: string;
  createRef?: (input: HTMLInputElement) => void;
  cvaVariants?: VariantProps<typeof variants>;
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
  createRef,
  cvaVariants,
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
      <div className={variants({ gap_size: cvaVariants?.gap_size, grid_cols: cvaVariants?.grid_cols })}>
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
