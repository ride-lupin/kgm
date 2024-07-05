import { vars } from "@assets/styles/theme.css";

import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid",
  borderColor: vars.colors.gray300,
  overflow: "hidden",
  borderRadius: "10px",
  width: "100%",
});

const hoverWrapper = style({
  selectors: {
    "&:hover": {
      borderColor: vars.colors.blue600,
    },
  },
});

const innerWrapper = style({
  display: "flex",
  flex: 1,
  alignItems: "center",
});

const inner = style({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flex: 1,
  gap: "0.8rem",
});

const error = style({
  borderColor: vars.colors.red500,
  outline: 1,
  outlineColor: vars.colors.red200,
  boxShadow: "0 0 0 2px rgba(242, 178, 178)",
});

const hidden = style({
  visibility: "hidden",
});

const disabled = style({
  backgroundColor: vars.colors.gray100,
});

const focusBorder = style({
  borderColor: vars.colors.blue600,
  outlineColor: vars.colors.blue400,
  boxShadow: "0 0 0 2px rgba(180, 221, 255)",
});

const inputSmall = style({
  padding: "0.7rem 1.2rem 0.7rem 1.4rem",
});

const inputMedium = style({
  padding: "1.1rem 1.4rem 1.1rem 1.6rem",
});

const prefixPlaceholder48 = style({
  padding: "1.1rem 1rem",
  backgroundColor: vars.colors.gray300,
});

const prefixPlaceholder40 = style({
  padding: "0.7rem 1rem",
  backgroundColor: vars.colors.gray300,
});

const textareaStyle = style({
  width: "100%",
  resize: "vertical",
});

const borderLessClassName = style({
  border: "none !important",
  padding: 0,
  borderRadius: 0,
  outline: "none !important",
  boxShadow: "none",
});

export default {
  wrapper,
  hoverWrapper,
  innerWrapper,
  inner,
  error,
  hidden,
  disabled,
  focusBorder,
  inputSmall,
  inputMedium,
  prefixPlaceholder48,
  prefixPlaceholder40,
  textareaStyle,
  borderLessClassName,
};
