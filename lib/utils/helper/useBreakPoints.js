"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakPoints = exports.xlThreshold = exports.xlTailwind = exports.desktopThreshold = exports.tabletThreshold = exports.middleMobile = void 0;
var react_1 = require("react");
var react_responsive_1 = require("react-responsive");
exports.middleMobile = 500; // sm中サイズ
exports.tabletThreshold = 768; // md
exports.desktopThreshold = 1025; // lg
exports.xlTailwind = 1120; // tailwindでのxl
exports.xlThreshold = 1281; // xl
var useBreakPoints = function () {
    var _a = react_1.useState(false), isClient = _a[0], setIsClient = _a[1];
    var isMiddleMobile = react_responsive_1.useMediaQuery({ maxWidth: exports.middleMobile });
    var isMobile = react_responsive_1.useMediaQuery({
        maxWidth: exports.tabletThreshold - 1,
    });
    var isTablet = react_responsive_1.useMediaQuery({
        maxWidth: exports.desktopThreshold - 1,
        minWidth: exports.tabletThreshold,
    });
    var isXlTailwind = react_responsive_1.useMediaQuery({
        maxWidth: exports.xlTailwind - 1,
    });
    var isDesktop = react_responsive_1.useMediaQuery({
        minWidth: exports.desktopThreshold,
    });
    var isXl = react_responsive_1.useMediaQuery({
        minWidth: exports.xlThreshold,
    });
    react_1.useEffect(function () {
        if (typeof window !== "undefined") {
            setIsClient(true);
        }
    }, []);
    return {
        isDesktop: isClient ? isDesktop : false,
        isMiddleMobile: isClient ? isMiddleMobile : false,
        isMobile: isClient ? isMobile : true,
        isTablet: isClient ? isTablet : false,
        isXl: isClient ? isXl : true,
        isXlTailwind: isClient ? isXlTailwind : false,
    };
};
exports.useBreakPoints = useBreakPoints;
//# sourceMappingURL=useBreakPoints.js.map