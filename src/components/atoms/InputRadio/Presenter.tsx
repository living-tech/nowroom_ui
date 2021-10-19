import { ChangeEvent, CSSProperties, VFC } from "react";

export type Item = {
  label: string;
  value: string | number;
};

export type Props = {
  checked?: boolean;
  className?: string;
  createRef?: (input: HTMLInputElement) => void;
  item: Item;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md";
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  checked,
  className,
  createRef,
  item,
  name,
  onChange,
  size = "md",
  style,
  ...props
}) => {
  return (
    <div className={className} style={style} {...props}>
      <input
        ref={createRef}
        checked={checked}
        className="hidden"
        id={`${name}-${item.value}`}
        name={name}
        onChange={onChange}
        type="radio"
        value={item.value}
      />
      {size === "md" ? (
        <label
          className="flex items-center w-full p-4 border border-gray-300 rounded cursor-pointer transition duration-200 ease-out"
          htmlFor={`${name}-${item.value}`}
        >
          <div className="flex w-full">
            <span className="inline-block w-5 h-5 border rounded-full circle border-grey checked:border-blue-500 transition duration-200 ease-out" />
            <p className="flex-grow ml-2 text-sm font-bold text-center text-gray-600 text transition duration-200 ease-out">
              {item.label}
            </p>
          </div>
        </label>
      ) : (
        <label
          className="flex items-center w-full cursor-pointer transition duration-200 ease-out"
          htmlFor={`${name}-${item.value}`}
        >
          <div className="flex w-full">
            <span className="inline-block w-5 h-5 border rounded-full circle border-grey checked:border-blue-500 transition duration-200 ease-out" />
            <p className="flex ml-2 text-sm text-black text transition duration-200 ease-out">{item.label}</p>
          </div>
        </label>
      )}
    </div>
  );
};
