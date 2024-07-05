import { vars } from "@assets/styles/theme.css";

import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const baseButtonStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "6px",
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export const buttonRecipe = recipe({
  base: baseButtonStyle,
  variants: {
    variants: {
      solid: {
        border: "none",
      },
      lightSolid: {
        border: "none",
      },
      border: {
        background: "transparent", // TODO 배경색 논의 필요
        border: "1px solid",
      },
    },
    color: {
      primary: {},
      gray: {},
      red: {},
      yellow: {},
      green: {},
    },
    size: {
      56: {
        ...vars.typoType.button2,
        padding: "16px 24px",
        borderRadius: "14px",
      },
      48: {
        ...vars.typoType.button3,
        padding: "14px 20px",
        borderRadius: "12px",
      },
      40: {
        ...vars.typoType.button3,
        padding: "10px 16px",
        borderRadius: "10px",
      },
      32: {
        ...vars.typoType.button4,
        padding: "8px 12px",
        borderRadius: "8px",
        rowGap: "4px",
      },
      28: {
        ...vars.typoType.button5,
        padding: "6px 10px",
        borderRadius: "7px",
        rowGap: "4px",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variants: "solid",
        color: "primary",
      },
      style: {
        color: vars.colors.white,
        background: vars.colors.blue600,
        selectors: {
          "&:hover": { background: vars.colors.blue800 },
          "&:disabled": { background: vars.colors.blue300 },
        },
      },
    },
    {
      variants: {
        variants: "solid",
        color: "gray",
      },
      style: {
        color: vars.colors.white,
        background: vars.colors.gray600,
        selectors: {
          "&:hover": { background: vars.colors.gray800 },
          "&:disabled": {
            background: vars.colors.gray200,
            color: vars.colors.gray300,
          },
        },
      },
    },
    {
      variants: {
        variants: "solid",
        color: "red",
      },
      style: {
        color: vars.colors.white,
        background: vars.colors.red600,
        selectors: {
          "&:hover": { background: vars.colors.red900 },
          "&:disabled": { background: vars.colors.red100 },
        },
      },
    },
    {
      variants: {
        variants: "solid",
        color: "yellow",
      },
      style: {
        color: vars.colors.white,
        background: vars.colors.yellow600,
        selectors: {
          "&:hover": { background: vars.colors.yellow800 },
          "&:disabled": {
            background: vars.colors.gray50,
            color: vars.colors.gray300,
          },
        },
      },
    },
    {
      variants: {
        variants: "solid",
        color: "green",
      },
      style: {
        color: vars.colors.white,
        background: vars.colors.green600,
        selectors: {
          "&:hover": { background: vars.colors.green800 },
          "&:disabled": { background: vars.colors.gray50 },
        },
      },
    },
    // lightSolid
    {
      variants: {
        variants: "lightSolid",
        color: "primary",
      },
      style: {
        color: vars.colors.blue600,
        background: vars.colors.blue200,
        selectors: {
          "&:hover": {
            background: vars.colors.blue300,
            color: vars.colors.blue800,
          },
          "&:disabled": {
            background: vars.colors.blue100,
            color: vars.colors.blue400,
          },
        },
      },
    },
    {
      variants: {
        variants: "lightSolid",
        color: "gray",
      },
      style: {
        color: vars.colors.gray900,
        background: vars.colors.gray200,
        selectors: {
          "&:hover": { background: vars.colors.gray300 },
          "&:disabled": {
            background: vars.colors.gray50,
            color: vars.colors.gray300,
          },
        },
      },
    },
    {
      variants: {
        variants: "lightSolid",
        color: "red",
      },
      style: {
        color: vars.colors.red600,
        background: vars.colors.red50,
        selectors: {
          "&:hover": {
            background: vars.colors.red100,
            color: vars.colors.red900,
          },
          "&:disabled": {
            background: vars.colors.red50,
            color: vars.colors.red100,
          },
        },
      },
    },
    {
      variants: {
        variants: "lightSolid",
        color: "yellow",
      },
      style: {
        color: vars.colors.yellow800,
        background: vars.colors.yellow50,
        selectors: {
          "&:hover": {
            background: vars.colors.yellow100,
            color: vars.colors.yellow900,
          },
          "&:disabled": {
            background: vars.colors.gray50,
            color: vars.colors.gray300,
          },
        },
      },
    },
    {
      variants: {
        variants: "lightSolid",
        color: "green",
      },
      style: {
        color: vars.colors.green800,
        background: vars.colors.green50,
        selectors: {
          "&:hover": {
            background: vars.colors.green100,
            color: vars.colors.green900,
          },
          "&:disabled": {
            background: vars.colors.gray50,
            color: vars.colors.gray300,
          },
        },
      },
    },
    // border
    {
      variants: {
        variants: "border",
        color: "primary",
      },
      style: {
        color: vars.colors.blue600,
        borderColor: vars.colors.blue600,
        selectors: {
          "&:hover": {
            color: vars.colors.blue800,
            borderColor: vars.colors.blue800,
          },
          "&:disabled": {
            color: vars.colors.blue300,
            borderColor: vars.colors.blue400,
          },
        },
      },
    },
    {
      variants: {
        variants: "border",
        color: "gray",
      },
      style: {
        color: vars.colors.gray800,
        borderColor: vars.colors.gray300,
        selectors: {
          "&:hover": {
            borderColor: vars.colors.gray500,
          },
          "&:disabled": {
            color: vars.colors.gray300,
            borderColor: vars.colors.gray300,
          },
        },
      },
    },
    {
      variants: {
        variants: "border",
        color: "red",
      },
      style: {
        color: vars.colors.red600,
        borderColor: vars.colors.red600,
        selectors: {
          "&:hover": {
            color: vars.colors.red900,
            borderColor: vars.colors.red900,
          },
          "&:disabled": {
            color: vars.colors.red100,
            borderColor: vars.colors.red100,
          },
        },
      },
    },
    {
      variants: {
        variants: "border",
        color: "yellow",
      },
      style: {
        color: vars.colors.yellow800,
        borderColor: vars.colors.yellow800,
        selectors: {
          "&:hover": {
            color: vars.colors.yellow900,
            borderColor: vars.colors.yellow900,
          },
          "&:disabled": {
            color: vars.colors.gray300,
            borderColor: vars.colors.gray300,
          },
        },
      },
    },
    {
      variants: {
        variants: "border",
        color: "green",
      },
      style: {
        color: vars.colors.green600,
        borderColor: vars.colors.green600,
        selectors: {
          "&:hover": {
            color: vars.colors.green800,
            borderColor: vars.colors.green800,
          },
          "&:disabled": {
            color: vars.colors.gray300,
            borderColor: vars.colors.gray300,
          },
        },
      },
    },
    {
      variants: { variants: "border", size: 56 },
      style: { padding: "15px 23px" },
    },
    {
      variants: { variants: "border", size: 48 },
      style: { padding: "13px 19px" },
    },
    {
      variants: { variants: "border", size: 40 },
      style: { padding: "9px 15px" },
    },
    {
      variants: { variants: "border", size: 32 },
      style: { padding: "7px 11px" },
    },
    {
      variants: { variants: "border", size: 28 },
      style: { padding: "5px 9px" },
    },
  ],
  defaultVariants: {
    variants: "solid",
    color: "primary",
    size: 56,
    fullWidth: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
