import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const middleMobile = 500; // sm中サイズ
export const tabletThreshold = 768; // md
export const desktopThreshold = 1025; // lg
export const xlTailwind = 1120; // tailwindでのxl
export const xlThreshold = 1281; // xl

export const useBreakPoints = () => {
  const [isClient, setIsClient] = useState(false);

  const isMiddleMobile = useMediaQuery({ maxWidth: middleMobile });
  const isMobile = useMediaQuery({
    maxWidth: tabletThreshold - 1,
  });

  const isTablet = useMediaQuery({
    maxWidth: desktopThreshold - 1,
    minWidth: tabletThreshold,
  });

  const isXlTailwind = useMediaQuery({
    maxWidth: xlTailwind - 1,
  });

  const isDesktop = useMediaQuery({
    minWidth: desktopThreshold,
  });

  const isXl = useMediaQuery({
    minWidth: xlThreshold,
  });

  useEffect(() => {
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
