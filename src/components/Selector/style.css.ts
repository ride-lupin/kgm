import { style } from "@vanilla-extract/css";

import { bpStyle } from "../../assets/styles/responsive.css";

const selectorContainerStyle = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
  order: 1,
});

const optionItemStyle = style({
  width: "calc(50% - 0.4rem)",

  ...bpStyle("tablet", {
    width: "calc(33.3% - 0.53rem)",
  }),
});

export { selectorContainerStyle, optionItemStyle };
