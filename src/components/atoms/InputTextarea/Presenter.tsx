import { ChangeEvent, CSSProperties, FC } from "react";
import { useTranslation } from "react-i18next";

import { TextMediumGray02 } from "../Text/MediumGray02";
import { Weight } from "../Text/Presenter";
import { TextRed } from "../Text/Red";

export type Props = {
  any?: boolean;
  className?: string;
  createRef?: (input: HTMLTextAreaElement) => void;
  error?: string;
  id?: string;
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  renderDescription?: () => JSX.Element;
  resize?: boolean;
  rows?: number;
  style?: CSSProperties;
  weight?: Weight;
};

export const Presenter: FC<Props> = ({
  any,
  className,
  createRef,
  error,
  id,
  label,
  name,
  onChange,
  placeholder,
  renderDescription,
  resize = false,
  rows,
  style,
  weight = "bold",
  ...props
}) => {
  const { t } = useTranslation();

  const inputBaseClass = "bg-gray-100 border block w-full rounded-md p-4";

  let inputClass = "";
  if (error) {
    inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
  } else {
    inputClass = "border-gray-200 focus:ring-purple-500 focus:border-purple-500";
  }

  let inputResizeClass = "";
  if (resize) {
    inputResizeClass = "resize";
  } else {
    inputResizeClass = "resize-none";
  }

  switch (weight) {
    case "bold":
      inputClass += " font-bold";
      break;
    case "normal":
      inputClass += " font-medium";
      break;
  }

  return (
    <div className={className} style={style} {...props}>
      {label && (
        <label className="block mb-3 text-sm font-bold text-gray-700 cursor-pointer" htmlFor={id}>
          {label}
          {any && (
            <TextMediumGray02 className={"ml-3"} size={"sm"} tag="span">
              {t("任意")}
            </TextMediumGray02>
          )}
        </label>
      )}
      {renderDescription && <div className="mb-3">{renderDescription()}</div>}
      <div className={"relative"}>
        <textarea
          ref={createRef}
          className={`${inputBaseClass} ${inputClass} ${inputResizeClass}`}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
        />
      </div>
      {error && (
        <TextRed className={"mt-2"} size={"sm"}>
          {error}
        </TextRed>
      )}
    </div>
  );
};
