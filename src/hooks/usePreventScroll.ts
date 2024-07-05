import { useEffect } from "react";

import { allowScroll, preventScroll } from "@helper/scroll";

const usePreventScroll = ({ isOpen }: { isOpen: boolean }) => {
  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
    document.documentElement.style.scrollBehavior = "smooth";

    return undefined;
  }, [isOpen]);
};

export default usePreventScroll;
