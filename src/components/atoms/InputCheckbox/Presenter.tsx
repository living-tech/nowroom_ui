import { ChangeEvent, CSSProperties, ReactNode, useState, VFC } from "react";

import { Text } from "../Text/Default";
import { Color, Size, Weight } from "../Text/Presenter";
import { TextRed } from "../Text/Red";

export type Item = {
  label: string | ReactNode;
  value: string;
};

export type Props = {
  checked?: boolean;
  className?: string;
  createRef?: (input: HTMLInputElement) => void;
  error?: string;
  item: Item;
  labelColor?: Color;
  labelSize?: Size;
  labelStyle?: CSSProperties;
  labelWeight?: Weight;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  checked: defaultChecked = false,
  className,
  createRef,
  error,
  item,
  labelColor,
  labelSize,
  labelStyle,
  labelWeight,
  name,
  onChange,
  style,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange && onChange(event);
  };

  let inputClass = "";
  if (error) {
    inputClass =
      "w-5 h-5 bg-gray-100 border border-red appearance-none cursor-pointer form-tick bg-check checked:bg-purple checked:border-transparent focus:outline-none transition duration-200 ease-out rounded-sm";
  } else {
    inputClass =
      "w-5 h-5 bg-gray-100 border border-gray-200 appearance-none cursor-pointer form-tick bg-check checked:bg-purple checked:border-transparent focus:outline-none transition duration-200 ease-out rounded-sm";
  }

  return (
    <>
      <label className={`inline-flex items-center cursor-pointer ${className}`} style={style} {...props}>
        <input
          ref={createRef}
          checked={checked}
          className={inputClass}
          name={name}
          onChange={handleChange}
          style={{
            backgroundImage: checked
              ? "url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M21.9206%207.07121C21.5301%206.68069%2020.8969%206.68069%2020.5064%207.07121L8.48554%2019.092L2.82854%2013.435C2.43801%2013.0445%201.80485%2013.0445%201.41432%2013.435L0.707216%2014.1421C0.316692%2014.5327%200.316692%2015.1658%200.707216%2015.5564L7.77828%2022.6274C7.78443%2022.6336%207.79065%2022.6396%207.79692%2022.6456C7.83114%2022.6781%207.86709%2022.7077%207.90447%2022.7345C8.29511%2023.0141%208.84181%2022.9784%209.19266%2022.6276L22.6277%209.19253C23.0182%208.80201%2023.0182%208.16884%2022.6277%207.77832L21.9206%207.07121Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E')"
              : "",
            backgroundPosition: "center 1px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "12px 12px",
          }}
          type="checkbox"
          value={item.value}
        />
        {item.label && (
          <Text
            className={"leading-none ml-3 relative"}
            color={labelColor}
            size={labelSize}
            style={{ top: 1, ...labelStyle }}
            weight={labelWeight}
          >
            {item.label}
          </Text>
        )}
      </label>
      {error && (
        <TextRed className={"mt-2"} size={"sm"}>
          {error}
        </TextRed>
      )}
    </>
  );
};
