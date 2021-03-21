import { CSSProperties, useEffect, useRef, useState, VFC } from "react";

import { Text } from "../../atoms/Text/Default";
import { Color, Size } from "../../atoms/Text/Presenter";

export type Item = {
  label: string;
  value: string | number;
};

export type Props = {
  activeValue?: string | number;
  className?: string;
  items: Array<Item>;
  label?: string;
  labelColor?: Color;
  labelPosition?: "left" | "right";
  labelSize?: Size;
  // eslint-disable-next-line
  onClick?: (value: any) => void;
  style?: CSSProperties;
  tabsId?: string;
};

export const Presenter: VFC<Props> = ({
  activeValue,
  className,
  items,
  label,
  labelColor = "black",
  labelPosition = "left",
  labelSize = "md",
  onClick,
  style,
  tabsId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeBackgroundStyle, setActiveBackgroundStyle] = useState<{
    height: number;
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    const targetIndex = items.findIndex((item) => item.value === activeValue);
    const targetElement = document.getElementById(`${tabsId || "switch-tab"}-${targetIndex}`);

    if (!containerRef || !containerRef.current || !targetElement) {
      setActiveBackgroundStyle(null);
      return;
    }

    const { left: containerLeft } = containerRef.current.getBoundingClientRect();
    const { left: targetLeft } = targetElement.getBoundingClientRect();

    setActiveBackgroundStyle({
      height: targetElement.clientHeight,
      left: targetLeft - containerLeft - 4,
      width: targetElement.clientWidth,
    });
  }, [activeValue]);

  return (
    <div className={className} style={style}>
      {labelPosition === "left" && label && (
        <Text
          className="mr-3"
          color={labelColor}
          size={labelSize}
          style={{ position: "relative", top: 1 }}
          tag={"span"}
        >
          {label}
        </Text>
      )}
      <div ref={containerRef} className="relative inline-flex space-x-1 bg-gray-100 rounded-full">
        {items.map((item, index) => (
          <div
            key={item.value}
            className={`relative px-3 py-2 rounded-full cursor-pointer text-center`}
            id={`${tabsId || "switch-tab"}-${index}`}
            onClick={() => onClick && onClick(item.value)}
            style={{
              minWidth: 64,
              zIndex: 2,
            }}
          >
            <Text color={item.value === activeValue ? "white" : "darkGray02"} size={"sm"} weight={"bold"}>
              {item.label}
            </Text>
          </div>
        ))}
        {activeBackgroundStyle && (
          <span
            className="bg-purple absolute top-0 transition-all duration-200 ease-out rounded-full"
            style={{
              boxShadow: "0px 2px 4px rgba(116, 106, 232, 0.16)",
              height: activeBackgroundStyle.height,
              left: activeBackgroundStyle.left,
              width: activeBackgroundStyle.width,
            }}
          />
        )}
      </div>
      {labelPosition === "right" && label && (
        <Text
          className="ml-3"
          color={labelColor}
          size={labelSize}
          style={{ position: "relative", top: 1 }}
          tag={"span"}
        >
          {label}
        </Text>
      )}
    </div>
  );
};
