import { VFC } from "react";
import ReactPaginate from "react-paginate";

import { useBreakPoints } from "../../../utils";
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
  const { isMobile } = useBreakPoints();

  return (
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
      pageRangeDisplayed={3}
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
