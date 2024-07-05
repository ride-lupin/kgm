"use client";

import React from "react";

import classNames from "classnames";

import BaseButton from "@components/Button/BaseButton";

import { iconButtonStyle } from "./style.css";
import { IconButtonProps } from "./type";

const IconButton = ({
  icon,
  hasBorder,
  className,
  ...rest
}: IconButtonProps) => {
  const iconButtonClassName = iconButtonStyle({ hasBorder });
  return (
    <BaseButton
      className={classNames(iconButtonClassName, className)}
      {...rest}
    >
      {icon}
    </BaseButton>
  );
};

export default IconButton;
