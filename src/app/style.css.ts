import { bpStyle } from "@assets/styles/responsive.css";
import { vars } from "@assets/styles/theme.css";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const bodyStyle = style({
  minWidth: "37.5rem",
});

const commonRecipe = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    padding: "4.8rem 2.4rem",

    ...bpStyle("tablet", {
      margin: "0 auto",
      padding: "12rem 4.8rem",
    }),
  },

  variants: {
    row: {
      true: {
        ...bpStyle("pc2", {
          flexDirection: "row",
          gap: "4.8rem",
        }),
      },
      false: {
        ...bpStyle("pc2", {
          gap: "7.2rem",
        }),
      },
    },
    disableRightPadding: {
      true: {
        ...bpStyle("pc2", {
          paddingRight: 0,
        }),
      },
    },
    disableLeftPadding: {
      true: {
        ...bpStyle("pc2", {
          paddingLeft: 0,
        }),
      },
    },
  },
});

const termsMobileContainerStyle = style({
  padding: "10.6rem 2.4rem",
});

const mainImageContainerStyle = style({
  position: "relative",

  ...bpStyle("tablet", {
    height: "96.8rem",
    padding: 0,
  }),
});

const sectionFirstImageContainerStyle = style({
  position: "relative",
  width: "100%",

  ...bpStyle("pc", {
    height: "52rem",
    padding: 0,
  }),
});

const sectionSecondImageContainerStyle = style({
  position: "relative",

  ...bpStyle("pc2", {
    width: "58.33%",
    height: "42rem",
    padding: 0,
  }),
});

const mainContainerStyle = style({
  position: "relative",
  width: "100%",
  height: "auto",
});

const mainImageStyle = style({
  display: "block",
  width: "100%",
  height: "auto",

  ...bpStyle("pc2", {
    objectFit: "cover",
  }),
});

const mainTextStyle = style({
  position: "absolute",
  inset: 0,

  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
});

const sectionStyle = style({
  width: "100%",

  ...bpStyle("pc2", {
    maxWidth: "120rem",
  }),
});

const imageOrder = style({
  ...bpStyle("pc2", {
    order: -1,
  }),
});

const flexStyle = style({
  paddingBottom: "7.2rem",

  ...bpStyle("pc2", {
    width: "58rem !important",
    alignSelf: "flex-end",
    paddingBottom: 0,
  }),
});

const sixSectionImageStyle = style({
  display: "block",
  width: "100%",
  height: "auto",

  ...bpStyle("pc", {
    height: "48rem",
    objectFit: "cover",
  }),
});

const footerContainer = style({
  background: `${vars.colors.gray200}`,
});

const footerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  margin: "0 auto",
  padding: "4.8rem 2.4rem",

  ...bpStyle("tablet", {
    margin: "0 auto",
    padding: "12rem 4.8rem",
  }),
});

export {
  bodyStyle,
  mainImageContainerStyle,
  sectionFirstImageContainerStyle,
  sectionSecondImageContainerStyle,
  mainContainerStyle,
  mainImageStyle,
  mainTextStyle,
  commonRecipe,
  sectionStyle,
  imageOrder,
  flexStyle,
  sixSectionImageStyle,
  footerContainer,
  footerStyle,
  termsMobileContainerStyle,
};
