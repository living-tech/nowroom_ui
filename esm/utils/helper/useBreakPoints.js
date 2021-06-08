import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
export var tabletThreshold = 768; // md
export var desktopThreshold = 1025; // lg
export var xlThreshold = 1281; // xl
export var useBreakPoints = function () {
    var _a = useState(false), isClient = _a[0], setIsClient = _a[1];
    var isMobile = useMediaQuery({
        maxWidth: tabletThreshold - 1,
    });
    var isTablet = useMediaQuery({
        maxWidth: desktopThreshold - 1,
        minWidth: tabletThreshold,
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
        isMobile: isClient ? isMobile : true,
        isTablet: isClient ? isTablet : false,
        isXl: isClient ? isXl : false,
    };
};
//# sourceMappingURL=useBreakPoints.js.map