"use client";

import React from "react";

import classNames from "classnames";

import { TypoProps } from "./type";
import { typoRecipe, typoToTag } from "./typo.css";

function Typo({
  as,
  variants = "h1",
  className = "",
  style,
  children,
  ...props
}: TypoProps) {
  const typoStyle = typoRecipe({ variants, ...props });
  const combinedClassName = classNames(typoStyle, className);

  return React.createElement(
    `${as || typoToTag[variants]}`,
    { className: combinedClassName, style },
    children,
  );
}

export default React.memo(Typo);
