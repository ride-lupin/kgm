import { vars } from "@assets/styles/theme.css";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const buttonRecipe = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1.6rem",
    borderRadius: "6.4rem",
    background: "#D7D7D7CC",
    position: "fixed",
    bottom: "3.2rem",
    left: "50%",
    transform: "translateX(-50%)",
    backdropFilter: "blur(0.3rem)",
    zIndex: 10,
  },
  variants: {
    isMobile: {
      true: {
        padding: "0.4rem  0.4rem 0.4rem 2.4rem ",
      },
      false: {
        padding: "0.8rem  0.8rem 0.8rem 2.4rem ",
      },
    },
  },
});

const iconStyle = style({
  height: "4rem",
  padding: "0.8rem",
  borderRadius: "50%",
  background: `${vars.colors.blue600}`,
});

export { buttonRecipe, iconStyle };
