import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const tabletThreshold = 768; // md
export const desktopThreshold = 1025; // lg
export const xlThreshold = 1281; // xl

export const useBreakPoints = () => {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: tabletThreshold - 1,
  });

  const isTablet = useMediaQuery({
    maxWidth: desktopThreshold - 1,
    minWidth: tabletThreshold,
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
    isMobile: isClient ? isMobile : true,
    isTablet: isClient ? isTablet : false,
    isXl: isClient ? isXl : false,
  };
};
