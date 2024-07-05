import { StyleRule } from "@vanilla-extract/css";

import type { BreakPoints } from "@type/breakPoints";
import { breakPoints } from "@type/breakPoints";

export const bpStyle = (bp: BreakPoints, rule: StyleRule) => {
  const breakpoint = breakPoints[bp];

  return {
    "@media": {
      [`screen and (min-width: ${breakpoint}px)`]: rule,
    },
  };
};
