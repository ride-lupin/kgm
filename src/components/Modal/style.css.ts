import { vars } from "@assets/styles/theme.css";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const modalHeaderClassName = style({
  padding: "2rem 2.4rem",
  borderBottom: "1px solid",
  borderColor: vars.colors.gray200,
  justifyContent: "space-between",
  alignItems: "center",
});

const modalContentClassName = style({
  padding: "2.4rem",
  borderBottom: `1px solid ${vars.colors.gray200}`,
  overflowY: "scroll",
  maxHeight: "60vh",
  minHeight: "27rem",
});

const modalFooterRecipe = recipe({
  base: {
    padding: "2rem 2.4rem",
  },
  variants: {
    leftFooterContent: {
      true: {
        justifyContent: "space-between",
      },
      false: {
        justifyContent: "flex-end",
      },
    },
  },
});

export { modalHeaderClassName, modalContentClassName, modalFooterRecipe };
