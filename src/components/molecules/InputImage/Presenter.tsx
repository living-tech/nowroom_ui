import { ChangeEvent, CSSProperties, DragEvent, useState, VFC } from "react";

import { IconMediumGray02 } from "../../atoms/Icon/MediumGray02";
import { TextMediumGray02 } from "../../atoms/Text/MediumGray02";
import { ButtonPurple } from "../Button/Purple";
import { ButtonWhite } from "../Button/White";
import { IconButtonWhite } from "../IconButton/White";

export type Props = {
  any?: boolean;
  anyLabel?: string;
  className?: string;
  createRef?: (input: HTMLInputElement) => void;
  dragAndDropLabel?: string;
  fileSelectLabel?: string;
  gallerySelectLabel?: string;
  id?: string;
  imageUrls?: Array<string>;
  label?: string;
  name?: string;
  onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onGalleryClick?: () => void;
  onHandleDrop?: (event: DragEvent<HTMLDivElement>) => void;
  onImageDeleteClick?: (imageUrl: string, index: number) => void;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  any,
  anyLabel = "任意",
  className,
  createRef,
  dragAndDropLabel = "ドラッグ＆ドロップまたはファイル選択",
  fileSelectLabel = "ファイル選択",
  gallerySelectLabel = "ギャラリーから選択",
  id,
  imageUrls,
  label,
  name,
  onFileChange,
  onGalleryClick,
  onHandleDrop,
  onImageDeleteClick,
  style,
  ...props
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    onHandleDrop && onHandleDrop(event);
  };

  let borderClass = "";
  if (isDragging) {
    borderClass = "border border-purple border-dashed";
  } else {
    borderClass = "border border-gray-200";
  }

  return (
    <div className={className} style={style} {...props}>
      {label && (
        <label className="block mb-3 text-sm font-bold text-gray-700 cursor-pointer" htmlFor={id}>
          {label}
          {any && (
            <TextMediumGray02 className={"ml-3"} size={"sm"} tag="span">
              {anyLabel}
            </TextMediumGray02>
          )}
        </label>
      )}
      {imageUrls?.length ? (
        <div className={"mb-4 space-x-3"}>
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className={"relative inline-block"}
              style={{ height: 118, verticalAlign: "bottom", width: 118 }}
            >
              <img
                alt={String(index)}
                className={"object-cover rounded"}
                loading={"lazy"}
                src={imageUrl}
                style={{ height: 118, width: 118 }}
              />
              <IconButtonWhite
                iconName={"FiX"}
                onClick={() => onImageDeleteClick && onImageDeleteClick(imageUrl, index)}
                radius={true}
                shadow={false}
                size={"sm"}
                style={{
                  position: "absolute",
                  right: 4,
                  top: 4,
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      <div onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className={`flex flex-col justify-center px-32 py-8 rounded-md ${borderClass}`}>
          <div className={"flex justify-center items-center"}>
            <IconMediumGray02 name={"FiImage"} />
            <TextMediumGray02 className={"ml-3"} size={"sm"} weight={"bold"}>
              {dragAndDropLabel}
            </TextMediumGray02>
          </div>

          <div className="flex justify-center mt-4 space-x-3">
            {onGalleryClick && (
              <ButtonWhite onClick={onGalleryClick} size={"sm"}>
                {gallerySelectLabel}
              </ButtonWhite>
            )}
            <ButtonPurple padding={false} size={"sm"}>
              <label className={"py-2.5 px-8 cursor-pointer"} htmlFor={id}>
                {fileSelectLabel}
                <input
                  ref={createRef}
                  accept="image/*"
                  className="sr-only"
                  id={id}
                  multiple={true}
                  name={name}
                  onChange={onFileChange}
                  type="file"
                />
              </label>
            </ButtonPurple>
          </div>
        </div>
      </div>
    </div>
  );
};
