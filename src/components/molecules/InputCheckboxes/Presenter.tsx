import { ChangeEvent, CSSProperties, FC } from "react";
import { useTranslation } from "react-i18next";

import { InputCheckbox } from "../../atoms/InputCheckbox/Default";
import { Item } from "../../atoms/InputCheckbox/Presenter";
import { TextMediumGray02 } from "../../atoms/Text/MediumGray02";

export type Props = {
  any?: boolean;
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

export const Presenter: FC<Props> = ({
  any,
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
  const { t } = useTranslation();

  return (
    <div className={`${className}`} id={id} style={style} {...props}>
      {label && (
        <label className="block mb-3 text-sm font-bold text-gray-700">
          {label}
          {any && (
            <TextMediumGray02 className={"ml-3"} size={"sm"} tag="span">
              {t("任意")}
            </TextMediumGray02>
          )}
        </label>
      )}
      <div className={`grid grid-cols-${columns} gap-4`}>
        {items.map((item) => (
          <InputCheckbox
            key={`checkbox-${item.value}`}
            createRef={createRef}
            item={item}
            name={name}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};
