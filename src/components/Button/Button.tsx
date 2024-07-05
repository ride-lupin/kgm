"use client";

import React from "react";

import classNames from "classnames";

import BaseButton from "./BaseButton";
import { buttonRecipe } from "./button.css";
import Spinner from "./Spinner";
import { ButtonProps } from "./type";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variants = "solid",
      color = "primary",
      size = 56,
      disabled,
      loading,
      onClick,
      prefixIcon,
      suffixIcon,
      fullWidth,
      className = "",
      children,
      ...rest
    },
    ref,
  ) => {
    const btnClassName = buttonRecipe({
      variants,
      color,
      size,
      fullWidth,
    });

    const combinedClassName = classNames(btnClassName, className);

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      if (loading || disabled) return;
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <BaseButton
        ref={ref}
        className={combinedClassName}
        onClick={handleClick}
        disabled={disabled}
        {...rest}
      >
        {prefixIcon && prefixIcon}
        {loading && <Spinner size={size} />}
        <span>{children || "button"}</span>
        {suffixIcon && suffixIcon}
      </BaseButton>
    );
  },
);

export default React.memo(Button);
