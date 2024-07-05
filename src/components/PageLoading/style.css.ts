import { recipe } from "@vanilla-extract/recipes";

const containerRecipe = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    isMobile: {
      true: {
        height: "calc(100vh - 60px)",
      },
      false: {
        height: "calc(100vh - 60px)",
      },
    },
  },
});

export { containerRecipe };
