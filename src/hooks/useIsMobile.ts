import { useState, useEffect } from "react";

import { breakPoints } from "@type/breakPoints";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPc, setIsPc] = useState(true);

  useEffect(() => {
    const checkDeviceSizes = () => {
      const width = window.innerWidth;
      setIsMobile(width < breakPoints.tablet);
      setIsPc(width > breakPoints.pc);
    };

    if (typeof window !== "undefined") {
      checkDeviceSizes();

      window.addEventListener("resize", checkDeviceSizes);
      return () => {
        window.removeEventListener("resize", checkDeviceSizes);
      };
    }

    return undefined;
  }, []);

  return { isMobile, isPc };
};

export default useIsMobile;
