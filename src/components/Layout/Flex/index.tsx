"use client";

import { PropsWithChildren } from "react";

import { FlexProps } from "./type";

const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    display = "flex",
    style,
    flex,
    gap,
    children,
    vertical = false,
    justify,
    align,
    wrap,
    rowGap,
    columnGap,
    full,
    as: Component = "div",
    ...othersProps
  } = props;

  const mergedStyle: React.CSSProperties = {
    display,
    flexDirection: vertical ? "column" : "row",
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    flex,
    rowGap,
    columnGap,
    gap,
    width: full ? "100%" : "auto",
    ...style,
  };

  return (
    <Component style={mergedStyle} {...othersProps}>
      {children}
    </Component>
  );
};

export default Flex;
