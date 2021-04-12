"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakPoints = exports.desktopThreshold = exports.tabletThreshold = void 0;
var react_1 = require("react");
var react_responsive_1 = require("react-responsive");
exports.tabletThreshold = 768; // md
exports.desktopThreshold = 1025; // lg
var useBreakPoints = function () {
    var _a = react_1.useState(false), isClient = _a[0], setIsClient = _a[1];
    var isMobile = react_responsive_1.useMediaQuery({
        maxWidth: exports.tabletThreshold - 1,
    });
    var isTablet = react_responsive_1.useMediaQuery({
        maxWidth: exports.desktopThreshold - 1,
        minWidth: exports.tabletThreshold,
    });
    var isDesktop = react_responsive_1.useMediaQuery({
        minWidth: exports.desktopThreshold,
    });
    react_1.useEffect(function () {
        if (typeof window !== "undefined") {
            setIsClient(true);
        }
    }, []);
    return {
        isDesktop: isClient ? isDesktop : true,
        isMobile: isClient ? isMobile : false,
        isTablet: isClient ? isTablet : false,
    };
};
exports.useBreakPoints = useBreakPoints;
//# sourceMappingURL=useBreakPoints.js.map