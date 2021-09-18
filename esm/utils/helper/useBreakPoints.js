import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
export var middleMobile = 500; // sm中サイズ
export var tabletThreshold = 768; // md
export var desktopThreshold = 1025; // lg
export var xlTailwind = 1120; // tailwindでのxl
export var xlThreshold = 1281; // xl
export var useBreakPoints = function () {
    var _a = useState(false), isClient = _a[0], setIsClient = _a[1];
    var isMiddleMobile = useMediaQuery({ maxWidth: middleMobile });
    var isMobile = useMediaQuery({
        maxWidth: tabletThreshold - 1,
    });
    var isTablet = useMediaQuery({
        maxWidth: desktopThreshold - 1,
        minWidth: tabletThreshold,
    });
    var isXlTailwind = useMediaQuery({
        maxWidth: xlTailwind - 1,
    });
    var isDesktop = useMediaQuery({
        minWidth: desktopThreshold,
    });
    var isXl = useMediaQuery({
        minWidth: xlThreshold,
    });
    useEffect(function () {
        if (typeof window !== "undefined") {
            setIsClient(true);
        }
    }, []);
    return {
        isDesktop: isClient ? isDesktop : false,
        isMiddleMobile: isClient ? isMiddleMobile : false,
        isMobile: isClient ? isMobile : true,
        isTablet: isClient ? isTablet : false,
        isXl: isClient ? isXl : false,
        isXlTailwind: isClient ? isXlTailwind : false,
    };
};
//# sourceMappingURL=useBreakPoints.js.map