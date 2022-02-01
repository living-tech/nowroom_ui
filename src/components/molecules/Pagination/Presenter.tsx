import { VFC } from "react";
import ReactPaginate from "react-paginate";

import { Icon } from "../../atoms/Icon/Default";
import { Text } from "../../atoms/Text/Default";

export type Props = {
  className?: string;
  initialPage: number;
  nextTextLabel?: string;
  onPageChange?: (selected: number) => void;
  pageCount: number;
  previousTextLabel?: string;
  withoutArrow?: boolean;
};

export const Presenter: VFC<Props> = ({
  className = "",
  initialPage,
  nextTextLabel = "次のページ",
  onPageChange,
  pageCount,
  previousTextLabel = "前のページ",
  withoutArrow = false,
}) => {
  return (
    <>
      <div className={`md:hidden`}>
        <ReactPaginate
          activeClassName={"active"}
          breakClassName={"break-me"}
          breakLabel={<Icon name={"FiMoreHorizontal"} size={20} />}
          containerClassName={`pagination ${className}`}
          disableInitialCallback={true}
          initialPage={initialPage - 1}
          marginPagesDisplayed={1}
          nextClassName={withoutArrow ? "hidden" : undefined}
          nextLabel={
            <span className={`flex items-center`}>
              <Text className="hidden mr-1 md:block" size={"sm"} weight={"bold"}>
                {nextTextLabel}
              </Text>
              <span>
                <Icon name={"FiChevronRight"} size={14} />
              </span>
            </span>
          }
          onPageChange={({ selected }) => onPageChange && onPageChange(selected + 1)}
          pageCount={pageCount}
          pageRangeDisplayed={1}
          previousClassName={withoutArrow ? "hidden" : undefined}
          previousLabel={
            <span className={`flex items-center`}>
              <span>
                <Icon name={"FiChevronLeft"} size={14} />
              </span>
              <Text className="hidden ml-1 md:block" size={"sm"} weight={"bold"}>
                {previousTextLabel}
              </Text>
            </span>
          }
        />
      </div>
      <div className={`hidden md:block`}>
        <ReactPaginate
          activeClassName={"active"}
          breakClassName={"break-me"}
          breakLabel={<Icon name={"FiMoreHorizontal"} size={20} />}
          containerClassName={`pagination ${className}`}
          disableInitialCallback={true}
          initialPage={initialPage - 1}
          marginPagesDisplayed={2}
          nextClassName={withoutArrow ? "hidden" : undefined}
          nextLabel={
            <span className={`flex items-center`}>
              <Text className="hidden mr-1 md:block" size={"sm"} weight={"bold"}>
                {nextTextLabel}
              </Text>
              <span>
                <Icon name={"FiChevronRight"} size={14} />
              </span>
            </span>
          }
          onPageChange={({ selected }) => onPageChange && onPageChange(selected + 1)}
          pageCount={pageCount}
          pageRangeDisplayed={2}
          previousClassName={withoutArrow ? "hidden" : undefined}
          previousLabel={
            <span className={`flex items-center`}>
              <span>
                <Icon name={"FiChevronLeft"} size={14} />
              </span>
              <Text className="hidden ml-1 md:block" size={"sm"} weight={"bold"}>
                {previousTextLabel}
              </Text>
            </span>
          }
        />
      </div>
    </>
  );
};
