import { CSSProperties, FC, useState } from "react";

import { Chip } from "../../atoms/Chip/Default";
import { IconMediumGray01 } from "../../atoms/Icon/MediumGray01";
import { TextDarkGray02 } from "../../atoms/Text/DarkGray02";
import { TextPurple } from "../../atoms/Text/Purple";

export type Item = {
  label: string;
  value: string;
};

export type Props = {
  className?: string;
  items: Array<Item>;
  label?: string;
  minHeight?: number;
  onChange?: (selectedItems: Array<Item>) => void;
  selectedLabel?: string;
  style?: CSSProperties;
  unselectedLabel?: string;
  value?: Array<Item>;
};

export const Presenter: FC<Props> = ({
  className,
  items,
  label,
  minHeight,
  onChange,
  selectedLabel,
  style,
  unselectedLabel,
  value,
  ...props
}) => {
  const [selectedItems, setSelectedItems] = useState<Array<Item>>(value || []);

  const onAddClick = (item: Item) => {
    const newItems = selectedItems.concat();
    newItems.push(item);
    setSelectedItems(newItems);
    onChange && onChange(newItems);
  };

  const onRemoveClick = (item: Item) => {
    const newItems = selectedItems.filter((i) => i.value !== item.value);
    setSelectedItems(newItems);
    onChange && onChange(newItems);
  };

  return (
    <div className={className} style={style} {...props}>
      {label && (
        <TextDarkGray02 className="mb-3" size={"sm"} weight={"bold"}>
          {label}
        </TextDarkGray02>
      )}
      <div className="flex flex-col w-full p-6 border border-gray-200 rounded-md">
        <div>
          {unselectedLabel && (
            <TextDarkGray02 className="mb-3" size={"xs"}>
              {unselectedLabel}
            </TextDarkGray02>
          )}
          <div className="flex-wrap flex-grow p-4 pt-1 bg-gray-100 border rounded-md" style={{ minHeight }}>
            {items
              .filter((item) => !selectedItems.find((s) => s.value === item.value))
              .map((item) => (
                <Chip
                  key={item.value}
                  className={"mr-3 last:mr-0 mt-3"}
                  item={item}
                  onClick={onAddClick}
                  type={"unselected"}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <IconMediumGray01 name={"FiArrowDown"} size={"md"} />
        </div>
        <div>
          {selectedLabel && (
            <TextPurple className="mb-3" size={"xs"}>
              {selectedLabel}
            </TextPurple>
          )}
          <div className="flex-wrap flex-grow p-4 pt-1 bg-gray-100 border rounded-md" style={{ minHeight }}>
            {selectedItems.map((item) => (
              <Chip
                key={item.value}
                className={"mr-3 last:mr-0 mt-3"}
                item={item}
                onClick={onRemoveClick}
                type={"selected"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
