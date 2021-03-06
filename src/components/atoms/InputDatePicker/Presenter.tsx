import { ClickAwayListener } from "@material-ui/core";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import ja from "date-fns/locale/ja";
import dayjs, { Dayjs } from "dayjs";
import { CSSProperties, useState, VFC } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { CSSTransition } from "react-transition-group";

import { IconButtonTransparent } from "../../molecules/IconButton/Transparent";
import { Icon } from "../Icon/Default";
import { Size } from "../InputText/Presenter";
import { TextDarkGray02 } from "../Text/DarkGray02";
import { TextMediumGray02 } from "../Text/MediumGray02";
import { Weight } from "../Text/Presenter";
import { TextRed } from "../Text/Red";
import styles from "./InputDatePicker.module.scss";

registerLocale("ja", ja);

export type Props = {
  any?: boolean;
  anyLabel?: string;
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  monthLabel?: string;
  name?: string;
  onChange?: (date: Dayjs) => void;
  placeholder?: string;
  size?: Size;
  style?: CSSProperties;
  value?: Dayjs;
  weight?: Weight;
  yearLabel?: string;
};

export const Presenter: VFC<Props> = ({
  any,
  anyLabel = "任意",
  className,
  error,
  id,
  label,
  monthLabel = "月",
  name,
  onChange,
  placeholder,
  size = "md",
  style,
  value,
  weight = "bold",
  yearLabel = "年",
}) => {
  const inputBaseClass = "inline-block bg-gray-100 border w-full rounded-md cursor-pointer";

  let inputClass = "";

  if (error) {
    inputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
  } else {
    inputClass = "border-gray-200 focus:ring-purple-500 focus:border-purple-500";
  }

  switch (size) {
    case "md":
      inputClass += " p-4 pr-12";
      break;
    case "sm":
      inputClass += " text-sm";
      inputClass += " p-3 pr-7";
      break;
  }

  switch (weight) {
    case "bold":
      inputClass += " font-bold";
      break;
    case "normal":
      inputClass += " font-medium";
      break;
  }

  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setIsShowCalendar(false);

    if (!date) {
      return;
    }

    onChange && onChange(dayjs(date));
  };

  return (
    <div className={`relative ${className}`} style={style}>
      <div>
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
        <div className={"relative"} onClick={() => setIsShowCalendar(true)}>
          <input
            disabled
            className={`${inputBaseClass} ${inputClass}`}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value?.format("YYYY/M/D")}
          />
          <Icon
            className={"absolute pointer-events-none"}
            color={"purple"}
            name={"FiCalendar"}
            size={"md"}
            style={{
              right: size === "md" ? "1rem" : "0.5rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        {error && (
          <TextRed className={"mt-2"} size={"sm"}>
            {error}
          </TextRed>
        )}
      </div>
      <CSSTransition
        unmountOnExit
        classNames={{
          enter: styles.CalendarEnter,
          enterActive: styles.CalendarEnterActive,
          exit: styles.CalendarExit,
          exitActive: styles.CalendarExitActive,
        }}
        in={isShowCalendar}
        timeout={400}
      >
        <ClickAwayListener onClickAway={() => setIsShowCalendar(false)}>
          <div className="absolute left-0 z-10 inline-block" style={{ top: "106%" }}>
            <DatePicker
              inline
              locale="ja"
              onChange={handleDateChange}
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                nextMonthButtonDisabled,
                prevMonthButtonDisabled,
              }) => {
                return (
                  <div className="flex items-center justify-between px-3">
                    <IconButtonTransparent
                      radius
                      disabled={prevMonthButtonDisabled}
                      iconColor="darkGray02"
                      iconName={"FiChevronLeft"}
                      onClick={decreaseMonth}
                    />
                    <TextDarkGray02 className="leading-none" weight={"bold"}>
                      {getYear(date)}
                      {yearLabel}
                      {getMonth(date) + 1}
                      {monthLabel}
                    </TextDarkGray02>
                    <IconButtonTransparent
                      radius
                      disabled={nextMonthButtonDisabled}
                      iconColor="darkGray02"
                      iconName={"FiChevronRight"}
                      onClick={increaseMonth}
                    />
                  </div>
                );
              }}
              selected={value?.toDate()}
            />
          </div>
        </ClickAwayListener>
      </CSSTransition>
    </div>
  );
};
