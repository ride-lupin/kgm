import { vars, weight, ThemeColors } from "@assets/styles/theme.css";

import { StyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { isThemeColor } from "@helper/styles";

type ColorVariants = {
  [K in ThemeColors]?: StyleRule;
};

type FontWeight = keyof typeof weight.fontWeight;
type FontWeightVariants = Partial<Record<FontWeight, StyleRule>>;

const colorVariants: ColorVariants = Object.keys(vars.colors).reduce(
  (acc, colorName) => {
    if (isThemeColor(colorName)) {
      const themeColor = colorName;
      return {
        ...acc,
        [themeColor]: {
          color: vars.colors[themeColor],
        },
      };
    }
    return acc;
  },
  {},
);

const fontWeightVariants: FontWeightVariants = (
  Object.entries(weight.fontWeight) as Array<[FontWeight, string]>
).reduce((acc, cur) => {
  const [key, value] = cur;

  acc[key] = {
    fontWeight: value,
  };

  return acc;
}, {} as FontWeightVariants);

type TypoTypes = keyof typeof vars.typoType;

export const typoToTag: Record<TypoTypes, "h1" | "p" | "span"> = {
  big: "h1",
  d1: "h1",
  d2: "h1",
  d3: "h1",
  d4: "h1",
  d5: "h1",
  d6: "h1",
  h1: "p",
  h2: "p",
  h3: "p",
  h4: "p",
  h5: "p",
  h6: "p",
  h7: "p",
  h8: "p",
  h9: "p",
  h10: "p",
  h11: "p",
  b1: "p",
  b2: "p",
  b3: "p",
  b4: "p",
  b5: "p",
  b6: "p",
  b7: "p",
  b8: "p",
  b9: "p",
  b10: "p",
  b11: "p",
  button1: "span",
  button2: "span",
  button3: "span",
  button4: "span",
  button5: "span",
  l1: "span",
  l2: "span",
  l3: "span",
  l4: "span",
  p: "p",
  p3: "p",
};

export const typoRecipe = recipe({
  base: {
    whiteSpace: "pre-wrap",
  },
  variants: {
    variants: vars.typoType,
    color: colorVariants,
    fontWeight: fontWeightVariants,
    textAlign: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    p: {
      4: {
        padding: vars.space[4],
      },
      8: {
        padding: vars.space[8],
      },
      16: {
        padding: vars.space[16],
      },
      24: {
        padding: vars.space[24],
      },
      32: {
        padding: vars.space[32],
      },
    },
    pb: {
      4: {
        paddingBottom: vars.space[4],
      },
      6: {
        paddingBottom: vars.space[6],
      },
      8: {
        paddingBottom: vars.space[8],
      },
      12: {
        paddingBottom: vars.space[12],
      },
      16: {
        paddingBottom: vars.space[16],
      },
      24: {
        paddingBottom: vars.space[24],
      },
      32: {
        paddingBottom: vars.space[32],
      },
      72: {
        paddingBottom: vars.space[72],
      },
    },
  },
  defaultVariants: {
    variants: "h1",
    color: "gray900",
    textAlign: "left",
  },
});

export type TypoVariants = RecipeVariants<typeof typoRecipe>;
