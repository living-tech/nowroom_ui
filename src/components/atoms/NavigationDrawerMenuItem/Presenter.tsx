import Link from "next/link";
import { CSSProperties, forwardRef, ReactNode } from "react";

export type Item = {
  className?: string;
  danger?: boolean;
  href?: string;
  label: ReactNode;
  onClick?: () => void;
};

export type Props = {
  buttonType?: "button" | "submit" | "reset";
  className?: string;
  item: Item;
  style?: CSSProperties;
};

export const Presenter = forwardRef<HTMLDivElement, Props>(
  ({ buttonType = "button", className, item, style }, _ref) => {
    const baseClass =
      "transition ease-out duration-200 block w-full text-left text-xs py-3 px-5 appearance-none cursor-pointer focus:outline-none hover:bg-purple-100";

    let colorClass = "text-black";
    if (item.danger) {
      colorClass = "text-red";
    }

    if (item.onClick) {
      return (
        <button
          className={`${colorClass} ${baseClass} ${className} ${item.className}`}
          onClick={item.onClick}
          style={style}
          type={buttonType}
        >
          {item.label}
        </button>
      );
    } else if (item.href) {
      return (
        <Link passHref href={item.href}>
          <a className={`${colorClass} ${baseClass} ${className} ${item.className}`} style={style}>
            {`${item.label}`}
          </a>
        </Link>
      );
    } else {
      return <></>;
    }
  }
);
