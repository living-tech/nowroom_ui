import { CSSProperties, useEffect, useRef, useState, VFC } from "react";
import Measure from "react-measure";

import { smoothScroll } from "../../../utils";
import { Tab } from "../../atoms/Tab/Default";

export type Item = {
  label: string;
  renderPanel: () => JSX.Element;
};

export type Props = {
  className?: string;
  items: Array<Item>;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ className, items, style }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [borderStyle, setBorderStyle] = useState<{ left: number; width: number } | null>(null);
  const [hoverTab, setHoverTab] = useState<number | null>(null);

  const onTabMouseEnter = (index: number) => {
    setHoverTab(index);
  };

  const onTabMouseLeave = () => {
    setHoverTab(null);
  };

  useEffect(() => {
    let targetIndex;
    if (hoverTab !== null) {
      targetIndex = items.findIndex((_item, index) => index === hoverTab);
    } else {
      targetIndex = items.findIndex((_item, index) => index === activeIndex);
    }

    const containerElement = document.getElementById("tabs");
    const targetElement = document.getElementById(`tab-${targetIndex}`);

    if (!containerElement || !targetElement) {
      setBorderStyle(null);
      return;
    }

    const { left: containerLeft } = containerElement.getBoundingClientRect();
    const { left: targetLeft } = targetElement.getBoundingClientRect();

    setBorderStyle({
      left: targetLeft - containerLeft,
      width: targetElement.clientWidth,
    });
  }, [hoverTab, activeIndex]);

  const onTabClick = (index: number) => {
    setActiveIndex(index);
    if (panelRef?.current) {
      smoothScroll(200, panelRef.current, containerWidth * index, "scrollLeft");
    }
  };

  return (
    <div className={className} style={style}>
      <div className="relative">
        <Measure
          bounds
          onResize={(contentRect) => {
            setContainerWidth(contentRect.bounds?.width || 0);
          }}
        >
          {({ measureRef }) => (
            <ul ref={measureRef} className="flex" id="tabs">
              {items.map((item, index) => (
                <Tab
                  key={index}
                  active={activeIndex === index}
                  id={`tab-${index}`}
                  index={index}
                  label={item.label}
                  onClick={onTabClick}
                  onTabMouseEnter={onTabMouseEnter}
                  onTabMouseLeave={onTabMouseLeave}
                />
              ))}
            </ul>
          )}
        </Measure>
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
      </div>
      <div ref={panelRef} className="w-full overflow-x-hidden whitespace-nowrap">
        {items.map((item, index) => (
          <div key={index} className="inline-block w-full align-top">
            {item.renderPanel()}
          </div>
        ))}
      </div>
    </div>
  );
};
