import { CSSProperties, useEffect, useState, VFC } from "react";

import { IconButton } from "../IconButton/Default";
import { Color as IconButtonColor } from "../IconButton/Presenter";
import { MessageAlertBox } from "../MessageAlertBox/Default";

export type Type = "success" | "information" | "warning" | "danger";

export type Props = {
  className?: string;
  description?: string;
  isVisible: boolean;
  onRequestClose?: () => void;
  position?: "rightBottom" | "leftBottom";
  size?: "md" | "sm";
  style?: CSSProperties;
  timeout?: number;
  title: string;
  type?: Type;
};

export const Presenter: VFC<Props> = ({
  className,
  description,
  isVisible,
  onRequestClose,
  position = "rightBottom",
  size = "md",
  style,
  timeout = 3000,
  title,
  type = "success",
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const baseClass = "inline-flex transition-all ease-out duration-200 fixed";

  let positionClass = "";
  switch (position) {
    case "rightBottom":
      positionClass = "right-9 bottom-9";
      break;
    case "leftBottom":
      positionClass = "left-9 bottom-9";
      break;
  }

  let iconButtonColor: IconButtonColor;
  switch (type) {
    case "success":
      iconButtonColor = "purple";
      break;
    case "information":
      iconButtonColor = "purple";
      break;
    case "warning":
      iconButtonColor = "yellow";
      break;
    case "danger":
      iconButtonColor = "red";
      break;
  }

  useEffect(() => {
    setVisible(isVisible);
    if (isVisible) {
      setTimeout(() => {
        setVisible(false);
        onRequestClose && onRequestClose();
      }, timeout);
    }
  }, [isVisible]);

  return (
    <div
      className={`${baseClass} ${positionClass} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0) scale(1)" : "translate(0, 16px) scale(0.9)",
        visibility: visible ? "visible" : "hidden",
        ...style,
      }}
    >
      <MessageAlertBox shadow block={false} description={description} size={size} title={title} type={type} />
      <IconButton
        className="-right-3 -top-3"
        color={iconButtonColor}
        iconName={"FiX"}
        onClick={() => {
          setVisible(false);
          onRequestClose && onRequestClose();
        }}
        radius={true}
        size={"sm"}
        style={{ position: "absolute" }}
      />
    </div>
  );
};
