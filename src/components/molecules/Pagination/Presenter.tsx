import { VFC } from "react";
import ReactPaginate from "react-paginate";

import { useBreakPoints } from "../../../utils";
import { Icon } from "../../atoms/Icon/Default";
import { Text } from "../../atoms/Text/Default";

export type Props = {
  className?: string;
  forcePage?: number;
  hrefs?: Array<string>;
  initialPage: number;
  marginPagesDisplayed?: number;
  nextTextLabel?: string;
  onPageChange?: (selected: number) => void;
  pageCount: number;
  pageRangeDisplayed?: number;
  previousTextLabel?: string;
  withoutArrow?: boolean;
};

export const Presenter: VFC<Props> = ({
  className = "",
  forcePage,
  hrefs,
  initialPage,
  marginPagesDisplayed,
  nextTextLabel = "次のページ",
  onPageChange,
  pageCount,
  pageRangeDisplayed,
  previousTextLabel = "前のページ",
  withoutArrow = false,
}) => {
  const { isMobile } = useBreakPoints();
  const displayedNum = isMobile ? 1 : 2;

  // @ts-ignore TS6133
  const hrefBuilder = (pageIndex: number, pageCount: number, selectedPage: number) => {
    if (!hrefs || hrefs.length < pageIndex) {
      return "";
    }
    return pageIndex === selectedPage ? "" : hrefs[pageIndex - 1];
  };

  return (
    <ReactPaginate
      activeClassName={"active"}
      breakClassName={"break-me"}
      breakLabel={<Icon name={"FiMoreHorizontal"} size={20} />}
      containerClassName={`pagination ${className}`}
      disableInitialCallback={true}
      forcePage={typeof forcePage === "number" ? forcePage - 1 : undefined}
      hrefBuilder={hrefs ? ((hrefBuilder as unknown) as (pageIndex: number) => void) : undefined}
      initialPage={initialPage - 1}
      marginPagesDisplayed={marginPagesDisplayed ? marginPagesDisplayed : displayedNum}
      nextClassName={withoutArrow ? "hidden" : undefined}
      nextLabel={
        <span className={`flex items-center`}>
          {!isMobile && (
            <Text className="mr-1" size={"sm"} weight={"bold"}>
              {nextTextLabel}
            </Text>
          )}
          <span>
            <Icon name={"FiChevronRight"} size={14} />
          </span>
        </span>
      }
      onPageChange={({ selected }) => onPageChange && onPageChange(selected + 1)}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed ? pageRangeDisplayed : displayedNum}
      previousClassName={withoutArrow ? "hidden" : undefined}
      previousLabel={
        <span className={`flex items-center`}>
          <span>
            <Icon name={"FiChevronLeft"} size={14} />
          </span>
          {!isMobile && (
            <Text className="ml-1" size={"sm"} weight={"bold"}>
              {previousTextLabel}
            </Text>
          )}
        </span>
      }
    />
  );
};
