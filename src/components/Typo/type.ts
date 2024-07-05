import { PropsWithChildren } from "react";

import { TypoVariants } from "./typo.css";

type TypoProps = PropsWithChildren<
  {
    as?: React.ElementType;
    className?: string;
    style?: React.CSSProperties;
  } & TypoVariants
>;

export type { TypoProps, TypoVariants };
