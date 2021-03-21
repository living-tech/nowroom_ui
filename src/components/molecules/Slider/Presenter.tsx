import Carousel, { CarouselSlideRenderControlProps } from "nuka-carousel";
import { CSSProperties, useEffect, useRef, useState, VFC } from "react";

import { carouselPaginationWidth } from "../../../constnats";
import { LabelTextBlackOpacity } from "../LabelText/BlackOpacity";

export type Item = {
  alt: string;
  path: string;
};

export type Props = {
  autoplay?: boolean;
  className?: string;
  items: Array<Item>;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ autoplay, className, items, style }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();

  const renderTopRightControls = ({ currentSlide, slideCount }: CarouselSlideRenderControlProps) => {
    return (
      <div className="p-4">
        <LabelTextBlackOpacity>{`${currentSlide + 1}/${slideCount}`}</LabelTextBlackOpacity>
      </div>
    );
  };

  const renderBottomCenterControls = ({ currentSlide, slideCount }: CarouselSlideRenderControlProps) => {
    return (
      <div
        className="bg-black-opacity relative inline-flex h-1 mb-1 rounded"
        style={{
          width: carouselPaginationWidth,
        }}
      >
        <div
          className="absolute top-0 h-1 transition-all duration-200 ease-out bg-purple-200 rounded-full"
          style={{
            left: (carouselPaginationWidth / slideCount) * currentSlide,
            width: carouselPaginationWidth / slideCount,
          }}
        />
      </div>
    );
  };

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setWidth(width);
      setHeight((width / 4) * 3);
    }
  }, [containerRef]);

  return (
    <div ref={containerRef} className={`${className}`} style={style}>
      <Carousel
        disableEdgeSwiping
        wrapAround
        autoplay={autoplay}
        height={height ? `${height}px` : undefined}
        renderBottomCenterControls={renderBottomCenterControls}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderTopRightControls={renderTopRightControls}
      >
        {items.map((item, index) => (
          <img key={index} alt={item.alt} className="object-contain" src={item.path} style={{ height, width }} />
        ))}
      </Carousel>
    </div>
  );
};
