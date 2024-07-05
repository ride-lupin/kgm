import { vars } from "@assets/styles/theme.css";

import { style } from "@vanilla-extract/css";

const baseInputStyle = style({
  ...vars.typoType.b7,
  flexGrow: 1,
  border: "none",
  outline: "none",
  "::placeholder": {
    color: vars.colors.gray400,
  },
  width: "100% !important",
});

export default {
  baseInputStyle,
};
