import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, forwardRef } from "react";

import { Text } from "../Text/Default";

export type Item = {
  href: string;
  label: string;
};

export type Props = {
  id?: string;
  item: Item;
  onLinkMouseEnter?: (href: string) => void;
  onLinkMouseLeave?: () => void;
  style?: CSSProperties;
};

export const Presenter = forwardRef<HTMLLIElement, Props>(
  ({ id, item, onLinkMouseEnter, onLinkMouseLeave, style, ...props }, ref) => {
    const router = useRouter();

    let activeClass = "";
    if (router.pathname === item.href) {
      activeClass = "text-purple";
    }

    return (
      <li
        ref={ref}
        className="hover:text-purple relative inline-block text-center list-none transition duration-200 ease-out cursor-pointer"
        id={id}
        onMouseEnter={() => onLinkMouseEnter && onLinkMouseEnter(item.href)}
        onMouseLeave={onLinkMouseLeave}
        style={style}
        {...props}
      >
        <Link passHref href={item.href}>
          <a className="inline-block px-4 py-5">
            <Text
              className={`transition duration-200 ease-out ${activeClass}`}
              size={"sm"}
              tag={"span"}
              weight={"bold"}
            >
              {item.label}
            </Text>
          </a>
        </Link>
      </li>
    );
  }
);
