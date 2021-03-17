import { ChangeEvent, CSSProperties, FC } from "react";

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
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ checked, className, createRef, item, name, onChange, style, ...props }) => {
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
      <label
        className="flex items-center w-full p-4 transition duration-200 ease-out border border-gray-300 rounded cursor-pointer"
        htmlFor={`${name}-${item.value}`}
      >
        <div className="flex w-full">
          <span className="circle border-grey checked:border-blue-500 inline-block w-5 h-5 transition duration-200 ease-out border rounded-full" />
          <p className="text flex-grow ml-2 text-sm font-bold text-center text-gray-600 transition duration-200 ease-out">
            {item.label}
          </p>
        </div>
      </label>
    </div>
  );
};
