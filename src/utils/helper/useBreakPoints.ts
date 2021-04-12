import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const mobileThreshold = 768; // md
export const desktopThreshold = 1024; // lg

export const useBreakPoints = () => {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: mobileThreshold - 1,
  });

  const isTablet = useMediaQuery({
    maxWidth: desktopThreshold - 1,
    minWidth: mobileThreshold,
  });

  const isDesktop = useMediaQuery({
    minWidth: mobileThreshold,
  });

  useEffect(() => {
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
