import { Dayjs } from "dayjs";
import { CSSProperties, VFC } from "react";
export declare type Props = {
    activeIndicatesPeriod: "day" | "month";
    className?: string;
    currentDate: Dayjs;
    onNextClick: () => void;
    onPrevClick: () => void;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map
