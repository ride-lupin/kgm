import { CSSProperties, HTMLAttributes, ElementType } from "react";

type FlexProps = {
  display?: "flex" | "inline-flex";
  className?: string;
  vertical?: boolean;
  justify?: CSSProperties["justifyContent"];
  wrap?: CSSProperties["flexWrap"];
  align?: CSSProperties["alignItems"];
  flex?: CSSProperties["flex"];
  gap?: CSSProperties["gap"];
  rowGap?: CSSProperties["rowGap"];
  columnGap?: CSSProperties["columnGap"];
  full?: boolean;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export type { FlexProps };
