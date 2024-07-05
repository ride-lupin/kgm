import { vars } from "@assets/styles/theme.css";

import { recipe } from "@vanilla-extract/recipes";

export const iconButtonStyle = recipe({
  base: {
    border: "none",
    display: "inline-flex",
  },
  variants: {
    hasBorder: {
      true: {
        padding: "0.3rem",
        border: `1px solid ${vars.colors.gray300}`,
        borderRadius: "0.8rem",
      },
      false: {},
    },
  },
});
