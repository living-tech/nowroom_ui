import gsap, { Expo } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { CSSProperties, useEffect, useRef, useState, VFC } from "react";
import Measure from "react-measure";
import { v4 as uuidv4 } from "uuid";

import { Tab } from "../../atoms/Tab/Default";
import { Size } from "../../atoms/Tab/Presenter";

export type Item = {
  label: string;
  renderPanel: () => JSX.Element;
};

export type Props = {
  className?: string;
  id?: string;
  initialContainerWidth?: number;
  items: Array<Item>;
  panelsContainerClassName?: string;
  panelsContainerStyle?: CSSProperties;
  style?: CSSProperties;
  tabContainerClassName?: string;
  tabContainerStyle?: CSSProperties;
  tabSize?: Size;
  tabsContainerClassName?: string;
  tabsContainerStyle?: CSSProperties;
  tabsPosition?: "left" | "center";
  tabsUnderLine?: boolean;
  tabsWidth?: "full" | "auto";
};

const uuid = uuidv4();

export const Presenter: VFC<Props> = ({
  id = uuid,
  className = "",
  initialContainerWidth,
  items,
  panelsContainerClassName = "",
  panelsContainerStyle,
  style,
  tabContainerClassName = "",
  tabContainerStyle,
  tabsPosition = "left",
  tabSize = "md",
  tabsContainerClassName = "",
  tabsContainerStyle,
  tabsUnderLine = true,
  tabsWidth = "full",
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(initialContainerWidth ?? 0);
  const [borderStyle, setBorderStyle] = useState<{ left: number; width: number } | null>(null);
  const [hoverTab, setHoverTab] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  let tabDisplayClass = "";
  switch (tabsWidth) {
    case "full":
      tabDisplayClass = "flex";
      break;
    case "auto":
      tabDisplayClass = "inline-flex";
      break;
  }

  let tabsPositionClass = "";
  switch (tabsPosition) {
    case "center":
      tabsPositionClass = "flex justify-center";
      break;
    case "left":
      break;
  }

  const onTabMouseEnter = (index: number) => {
    setHoverTab(index);
  };

  const onTabMouseLeave = () => {
    setHoverTab(null);
  };

  const onTabClick = (index: number) => {
    const newIsClicked = true;
    setIsClicked(newIsClicked);
    setActiveIndex(index);
    if (panelRef?.current) {
      gsap.to(panelRef.current, {
        duration: 0.2,
        ease: Expo.easeOut,
        scrollTo: { x: containerWidth * index },
      });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  useEffect(() => {
    let targetIndex;
    if (hoverTab !== null) {
      targetIndex = items.findIndex((_item, index) => index === hoverTab);
    } else {
      targetIndex = items.findIndex((_item, index) => index === activeIndex);
    }

    const containerElement = document.getElementById(id);
    const targetElement = document.getElementById(`${id}-${targetIndex}`);

    if (!containerElement || !targetElement) {
      setBorderStyle(null);
      return;
    }

    const { left: containerLeft } = containerElement.getBoundingClientRect();
    const { left: targetLeft } = targetElement.getBoundingClientRect();
    const containerScrollLeft = containerElement.scrollLeft;

    setBorderStyle({
      left: targetLeft - containerLeft + containerScrollLeft,
      width: targetElement.clientWidth,
    });
  }, [hoverTab, activeIndex, tabSize]);

  return (
    <div className={className} style={style}>
      <Measure
        bounds
        onResize={(contentRect) => {
          if (initialContainerWidth) {
            return;
          }
          setContainerWidth(contentRect.bounds?.width || 0);
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} className={`relative ${tabsPositionClass}`}>
            <ul className={`relative ${tabDisplayClass} ${tabsContainerClassName}`} id={id} style={tabsContainerStyle}>
              {items.map((item, index) => (
                <Tab
                  key={index}
                  active={activeIndex === index}
                  className={tabContainerClassName}
                  id={`${id}-${index}`}
                  index={index}
                  label={item.label}
                  onClick={onTabClick}
                  onTabMouseEnter={onTabMouseEnter}
                  onTabMouseLeave={onTabMouseLeave}
                  size={tabSize}
                  style={tabContainerStyle}
                  tabUnderLine={tabsUnderLine}
                />
              ))}
              {borderStyle && (
                <span
                  className="absolute bottom-0 pointer-events-none bg-purple transition-all duration-500 ease-out"
                  style={{
                    height: 2,
                    left: borderStyle.left,
                    width: borderStyle.width,
                  }}
                />
              )}
            </ul>
          </div>
        )}
      </Measure>
      <div
        ref={panelRef}
        className={`w-full overflow-x-hidden whitespace-nowrap ${panelsContainerClassName}`}
        style={panelsContainerStyle}
      >
        {isClicked ? (
          items.map((item, index) => (
            <div key={index} className="inline-block w-full align-top">
              {item.renderPanel()}
            </div>
          ))
        ) : (
          <div className="inline-block w-full align-top">{items[activeIndex].renderPanel()}</div>
        )}
      </div>
    </div>
  );
};
