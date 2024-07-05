import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const spinnerRecipe = recipe({
  base: {
    border: "1px solid white",
    borderTop: "1px solid transparent",
    borderRadius: "50%",
    animation: `${spin} 1s linear infinite`,
  },
  variants: {
    size: {
      56: {
        width: "1.9rem",
        height: "1.9rem",
      },
      48: {
        width: "1.4rem",
        height: "1.4rem",
      },
      40: {
        width: "1.4rem",
        height: "1.4rem",
      },
      32: {
        width: "1.0rem",
        height: "1.0rem",
      },
      28: {
        width: "1.0rem",
        height: "1.0rem",
      },
    },
  },
});
