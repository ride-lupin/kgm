import { vars } from "@assets/styles/theme.css";

import { recipe } from "@vanilla-extract/recipes";

const checkListBoxRecipe = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem 1.6rem",
    gap: "0.4rem",
    borderRadius: "2rem",
    border: "0.2rem solid",
  },
  //   B4DDFF
  variants: {
    isChecked: {
      true: {
        background: "#D4ECFF",
        borderColor: "#B4DDFF",
      },
      false: {
        background: vars.colors.gray100,
        borderColor: vars.colors.gray200,
      },
    },
    disabled: {
      true: { cursor: "not-allowed" },
      false: { cursor: "pointer" },
    },
  },
});

export { checkListBoxRecipe };
