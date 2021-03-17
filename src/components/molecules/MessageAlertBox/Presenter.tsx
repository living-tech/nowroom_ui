import { CSSProperties, FC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { Color as IconColor, IconName, Size as IconSize } from "../../atoms/Icon/Presenter";
import { MessageBox } from "../../atoms/MessageBox/Default";
import { Color as MessageBoxColor, Size as MessageBoxSize } from "../../atoms/MessageBox/Presenter";
import { Text } from "../../atoms/Text/Default";
import { Color as TextColor, Size as TextSize } from "../../atoms/Text/Presenter";

export type Props = {
  block?: boolean;
  className?: string;
  description?: string;
  shadow?: boolean;
  size?: "md" | "sm";
  style?: CSSProperties;
  title: string;
  type?: "success" | "information" | "warning" | "danger";
};

export const Presenter: FC<Props> = ({
  block = true,
  className,
  description,
  shadow = false,
  size = "md",
  style,
  title,
  type,
}) => {
  const baseClass = "items-center";

  let containerClass;
  if (block) {
    containerClass = "flex";
  } else {
    containerClass = "inline-flex";
  }

  let shadowClass;
  if (shadow) {
    shadowClass = "shadow-md";
  }

  let messageBoxColor: MessageBoxColor;
  let textColor: TextColor;
  let iconColor: IconColor;
  let iconName: IconName;
  switch (type) {
    case "success":
      messageBoxColor = "purple";
      textColor = "purple";
      iconColor = "purple";
      iconName = "FiCheckCircle";
      break;
    case "information":
      messageBoxColor = "purple";
      textColor = "purple";
      iconColor = "purple";
      iconName = "FiInfo";
      break;
    case "warning":
      messageBoxColor = "yellow";
      textColor = "yellow";
      iconColor = "yellow";
      iconName = "FiAlertCircle";
      break;
    case "danger":
      messageBoxColor = "red";
      textColor = "red";
      iconColor = "red";
      iconName = "FiZap";
      break;
    default:
      messageBoxColor = "purple";
      textColor = "purple";
      iconColor = "purple";
      iconName = "FiInfo";
  }

  let messageBoxSize: MessageBoxSize;
  let iconSize: IconSize;
  let titleTextSize: TextSize;
  let descriptionTextSize: TextSize;
  let marginTextContainerClassName = "";
  let marginDescriptionClassName = "";
  switch (size) {
    case "md":
      messageBoxSize = "md";
      iconSize = "md";
      titleTextSize = "sm";
      descriptionTextSize = "xs";
      marginTextContainerClassName = "ml-4";
      marginDescriptionClassName = "mt-1";
      break;
    case "sm":
      messageBoxSize = "sm";
      iconSize = "sm";
      titleTextSize = "xs";
      descriptionTextSize = "xxs";
      marginTextContainerClassName = "ml-2";
      marginDescriptionClassName = "mt-0.5";
      break;
  }

  return (
    <MessageBox
      className={`${baseClass} ${containerClass} ${shadowClass} ${className}`}
      color={messageBoxColor}
      size={messageBoxSize}
      style={style}
    >
      <Icon color={iconColor} name={iconName} size={iconSize} />
      <div className={`flex-grow ${marginTextContainerClassName}`}>
        <Text color={textColor} size={titleTextSize} weight={"bold"}>
          {title}
        </Text>
        {description && (
          <Text className={marginDescriptionClassName} color={textColor} size={descriptionTextSize}>
            {description}
          </Text>
        )}
      </div>
    </MessageBox>
  );
};
