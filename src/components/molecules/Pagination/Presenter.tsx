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
};

export const Presenter: VFC<Props> = ({
  className = "",
  initialPage,
  nextTextLabel = "次のページ",
  onPageChange,
  pageCount,
  previousTextLabel = "前のページ",
}) => {
  const { isMobile } = useBreakPoints();

  return (
    <ReactPaginate
      activeClassName={"active"}
      breakClassName={"break-me"}
      breakLabel={<Icon name={"FiMoreHorizontal"} size={20} />}
      containerClassName={`pagination ${className}`}
      initialPage={initialPage}
      marginPagesDisplayed={isMobile ? 1 : 2}
      nextLabel={
        <span className={`flex items-center`}>
          {!isMobile && (
            <Text className="mr-1" size={"sm"} weight={"bold"}>
              {nextTextLabel}
            </Text>
          )}
          <span className={`relative`} style={{ top: 1 }}>
            <Icon name={"FiChevronRight"} size={14} />
          </span>
        </span>
      }
      onPageChange={({ selected }) => onPageChange && onPageChange(selected)}
      pageCount={pageCount}
      pageRangeDisplayed={isMobile ? 1 : 2}
      previousLabel={
        <span className={`flex items-center`}>
          <span className={`relative`} style={{ top: 1 }}>
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
