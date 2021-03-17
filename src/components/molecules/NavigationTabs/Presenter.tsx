import { useRouter } from "next/router";
import { CSSProperties, forwardRef, useEffect, useState } from "react";

import { NavigationTab } from "../../atoms/NavigationTab/Default";
import { Item } from "../../atoms/NavigationTab/Presenter";

export type Props = {
  className?: string;
  items: Array<Item>;
  style?: CSSProperties;
};

export const Presenter = forwardRef<HTMLElement, Props>(({ className, items, style, ...props }, ref) => {
  const router = useRouter();

  const [borderStyle, setBorderStyle] = useState<{ left: number; width: number } | null>(null);
  const [hoverLink, setHoverLink] = useState<string | null>(null);

  const onLinkMouseEnter = (href: string) => {
    setHoverLink(href);
  };

  const onLinkMouseLeave = () => {
    setHoverLink(null);
  };

  useEffect(() => {
    let targetIndex;
    if (hoverLink) {
      targetIndex = items.findIndex((item) => item.href === hoverLink);
    } else {
      targetIndex = items.findIndex((item) => item.href === router.pathname);
    }

    const containerElement = document.getElementById("navigation-tabs");
    const targetElement = document.getElementById(`navigation-tab-${targetIndex}`);

    if (!containerElement || !targetElement) {
      setBorderStyle(null);
      return;
    }

    const { left: containerLeft } = containerElement.getBoundingClientRect();
    const { left: targetLeft } = targetElement.getBoundingClientRect();

    setBorderStyle({
      left: targetLeft - containerLeft + 16,
      width: targetElement.clientWidth - 32,
    });
  }, [hoverLink, router.pathname]);

  return (
    <nav ref={ref} className={`relative ${className}`} id="navigation-tabs" style={style} {...props}>
      <ul className="flex">
        {items.map((item, index) => (
          <NavigationTab
            key={index}
            id={`navigation-tab-${index}`}
            item={item}
            onLinkMouseEnter={onLinkMouseEnter}
            onLinkMouseLeave={onLinkMouseLeave}
          />
        ))}
      </ul>
      {borderStyle && (
        <span
          className="bg-purple absolute bottom-0 transition-all duration-500 ease-out"
          style={{
            height: 2,
            left: borderStyle.left,
            width: borderStyle.width,
          }}
        />
      )}
    </nav>
  );
});
