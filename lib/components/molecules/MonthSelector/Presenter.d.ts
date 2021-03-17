import { Dayjs } from "dayjs";
import { CSSProperties, FC } from "react";
export declare type Props = {
    activeIndicatesPeriod: "day" | "month";
    className?: string;
    currentDate: Dayjs;
    onNextClick: () => void;
    onPrevClick: () => void;
    style?: CSSProperties;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map